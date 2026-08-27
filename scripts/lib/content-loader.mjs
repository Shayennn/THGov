import { build } from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();

/**
 * The site's content lives in TypeScript modules that use SvelteKit's `$lib`
 * alias and `import.meta.glob`. Neither works in plain Node, so we bundle a
 * tiny entry point with esbuild and import the result. This keeps the content
 * registry as the single source of truth for the app *and* the asset build.
 */
export async function loadContent() {
	const servicesDir = path.join(ROOT, 'src/lib/content/services');
	const guidesDir = path.join(ROOT, 'src/lib/content/guides');

	const list = (dir) =>
		fs.existsSync(dir)
			? fs
					.readdirSync(dir)
					.filter((f) => f.endsWith('.ts') && !f.startsWith('_'))
					.sort()
			: [];

	const services = list(servicesDir);
	const guides = list(guidesDir);

	const entry = [
		...services.map((f, i) => `import { service as s${i} } from ${JSON.stringify(path.join(servicesDir, f))};`),
		...guides.map((f, i) => `import { guide as g${i} } from ${JSON.stringify(path.join(guidesDir, f))};`),
		`export { CATEGORIES } from ${JSON.stringify(path.join(ROOT, 'src/lib/content/categories.ts'))};`,
		`export { AGENCIES } from ${JSON.stringify(path.join(ROOT, 'src/lib/content/agencies.ts'))};`,
		`export { PAGES } from ${JSON.stringify(path.join(ROOT, 'src/lib/content/pages.ts'))};`,
		`export { AUDIT_ROWS, AUDIT_COUNTS, AUDIT_TOTAL, AUDIT_DATE } from ${JSON.stringify(path.join(ROOT, 'src/lib/content/audit.ts'))};`,
		`export const SERVICES = [${services.map((_, i) => `s${i}`).join(', ')}];`,
		`export const GUIDES = [${guides.map((_, i) => `g${i}`).join(', ')}];`
	].join('\n');

	const outDir = path.join(ROOT, '.svelte-kit', 'thgov-build');
	fs.mkdirSync(outDir, { recursive: true });
	const outFile = path.join(outDir, 'content.mjs');

	await build({
		stdin: { contents: entry, resolveDir: ROOT, loader: 'ts' },
		bundle: true,
		format: 'esm',
		platform: 'node',
		target: 'node20',
		outfile: outFile,
		logLevel: 'silent',
		alias: { $lib: path.join(ROOT, 'src/lib') }
	});

	// Cache-bust so repeated builds in one process see fresh content.
	return import(pathToFileURL(outFile).href + `?t=${Date.now()}`);
}
