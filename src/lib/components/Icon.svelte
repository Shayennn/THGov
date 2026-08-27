<script lang="ts" module>
	/** Line-icon set. Deliberately generic UI glyphs — no agency logos or branding. */
	export const ICONS: Record<string, string> = {
		bolt: 'M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z',
		chart: 'M4 20V10m5 10V4m5 16v-7m5 7V8',
		receipt: 'M5 3v18l2.5-1.6L10 21l2-1.6L14 21l2.5-1.6L19 21V3H5Zm3 5h8M8 12h8m-8 4h5',
		plug: 'M9 3v5m6-5v5M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Zm6 12v2',
		bell: 'M18 8a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6M13.7 20a2 2 0 0 1-3.4 0',
		alert: 'M12 3 2 20h20L12 3Zm0 6v5m0 3h.01',
		shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-2.5 9 2 2 3.5-4',
		briefcase: 'M3 8h18v12H3V8Zm6 0V5h6v3M3 13h18',
		gavel: 'm14 4 6 6-3 3-6-6 3-3ZM8 10l6 6-4 4-6-6 4-4Zm8 8h6v2h-6v-2Z',
		id: 'M3 5h18v14H3V5Zm5 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 17c.6-2 1.9-2.6 3-2.6s2.4.6 3 2.6M14 9h5M14 12.5h5M14 16h3',
		scale: 'M12 3v18M7 21h10M12 6 5 9l-2.5 5a3.5 3.5 0 0 0 7 0L7 9m5-3 7 3 2.5 5a3.5 3.5 0 0 1-7 0L17 9',
		car: 'M5 17a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm11 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM3 17v-4l2-5h14l2 5v4M3 13h18',
		heart: 'M12 20s-7-4.4-7-9.3A4 4 0 0 1 12 8a4 4 0 0 1 7 2.7C19 15.6 12 20 12 20Z',
		cloud: 'M7 18a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.6 1.4A3.5 3.5 0 0 1 17.5 18H7Z',
		passport: 'M5 3h14v18H5V3Zm7 5.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM9 18h6',
		search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5 12 4.5 4.5',
		doc: 'M6 3h8l4 4v14H6V3Zm8 0v4h4M9 12h6M9 16h6',
		lock: 'M6 11h12v9H6v-9Zm3 0V8a3 3 0 0 1 6 0v3',
		clock: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 3.5V12l3 2',
		map: 'm3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Zm6-2v14m6-12v14',
		globe: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-8 8h16M12 4c2 2.5 3 5 3 8s-1 5.5-3 8c-2-2.5-3-5-3-8s1-5.5 3-8Z',
		users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-6.5a3 3 0 0 1 0 6M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5m2-5.5c2.4.5 4 2.2 4 5.5',
		coins: 'M9 10a5 3 0 1 0 0-6 5 3 0 0 0 0 6Zm-5 3.5c0 1.7 2.2 3 5 3s5-1.3 5-3M4 7v10c0 1.7 2.2 3 5 3 1 0 2-.2 2.8-.5M15 12a5 3 0 1 0 0 6 5 3 0 0 0 0-6Zm5 3v3c0 1.7-2.2 3-5 3s-5-1.3-5-3v-3',
		building: 'M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 12.5h.01M12 12.5h.01M16 12.5h.01',
		book: 'M4 4h6a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2H4V4Zm16 0h-6a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2H20V4Z',
		arrow: 'M5 12h14m-6-6 6 6-6 6',
		external: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6',
		check: 'm5 13 4 4L19 7',
		close: 'M6 6 18 18M18 6 6 18',
		menu: 'M4 7h16M4 12h16M4 17h16',
		sun: 'M12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.5 1.5m11.2 11.2 1.5 1.5M19.1 4.9l-1.5 1.5M6.4 17.6l-1.5 1.5',
		moon: 'M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z',
		contrast: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 0v16',
		text: 'M4 6h16M7 12h10M9 18h6',
		filter: 'M4 6h16M7 12h10M10 18h4',
		link: 'M10 13a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7L11.3 6M14 11a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 0 0 5.7 5.7L12.7 18',
		robot: 'M8 10h.01M16 10h.01M12 3v3M6 6h12v12H6V6Zm3 8h6M3 10v4m18-4v4'
	};
</script>

<script lang="ts">
	interface Props {
		name: string;
		size?: number | string;
		stroke?: number;
		class?: string;
		label?: string;
	}
	let { name, size = 20, stroke = 1.6, class: klass = '', label = '' }: Props = $props();
	const d = $derived(ICONS[name] ?? ICONS.doc);
</script>

<svg
	class={klass}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden={label ? undefined : 'true'}
	role={label ? 'img' : undefined}
	aria-label={label || undefined}
	focusable="false"
>
	{#if label}<title>{label}</title>{/if}
	<path d={d} />
</svg>
