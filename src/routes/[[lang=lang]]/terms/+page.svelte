<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import StaticPageView from '$lib/components/StaticPageView.svelte';

	let { data } = $props();
</script>

<Seo
	title={data.title}
	description={data.description}
	path="/{data.page.slug}"
	locale={data.locale}
	jsonld={data.jsonld}
/>

<StaticPageView page={data.page} toc={data.toc} />
