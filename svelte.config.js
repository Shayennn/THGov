import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: 'fail',
			handleMissingId: 'fail',
			origin: process.env.PUBLIC_SITE_URL || 'https://www.thgov.co'
		},
		alias: {
			$content: 'src/lib/content',
			$components: 'src/lib/components'
		}
	}
};

export default config;
