<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import MeshBackdrop from '$lib/components/MeshBackdrop.svelte';

	/**
	 * Rendered to static HTML and copied over `404.html` at build time, so an
	 * unknown URL shows real content immediately instead of a blank SPA shell.
	 * Cloudflare Pages serves one 404 document for the whole site, so this page
	 * carries both languages rather than assuming one.
	 */
</script>

<svelte:head>
	<title>ไม่พบหน้าที่คุณต้องการ · Page not found | ThaiGov.co</title>
	<meta name="description" content="ไม่พบหน้าที่คุณต้องการบน ThaiGov.co — ลองค้นหาบริการภาครัฐที่ต้องการ หรือกลับไปที่หน้าแรก" />
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<section class="wrap">
	<MeshBackdrop />
	<div class="container inner">
		<p class="code" aria-hidden="true">404</p>

		<h1>ไม่พบหน้าที่คุณต้องการ</h1>
		<p class="lede">
			หน้าที่คุณเปิดอาจถูกย้ายหรือไม่มีอยู่แล้ว ลองค้นหาบริการภาครัฐที่ต้องการ หรือกลับไปที่หน้าแรก
		</p>

		<p class="en" lang="en">
			<strong>Page not found.</strong> The page may have moved or never existed. Try searching for the
			service you need, or head back to the home page.
		</p>

		<div class="cluster actions">
			<a class="btn btn-primary" href="/">กลับหน้าแรก · Home</a>
			<a class="btn btn-ghost" href="/search">
				<Icon name="search" size={15} />ค้นหา · Search
			</a>
			<a class="btn btn-ghost" href="/services">บริการทั้งหมด · All services</a>
		</div>
	</div>
</section>

<style>
	.wrap {
		position: relative;
		overflow: hidden;
	}
	.inner {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding-block: clamp(3.5rem, 11vw, 7rem);
	}
	.code {
		font-size: clamp(3.5rem, 10vw, 6rem);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.03em;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	h1 {
		font-size: var(--fs-h1);
		margin: 1rem 0;
	}
	.lede {
		text-align: center;
	}
	.en {
		margin-top: 1rem;
		max-width: 52ch;
		font-size: var(--fs-sm);
		color: var(--text-faint);
		line-height: 1.7;
	}
	.actions {
		justify-content: center;
		margin-top: 2.25rem;
	}
	:global(html.color-mode-contrast) .code {
		background: none;
		color: var(--brand);
	}
</style>
