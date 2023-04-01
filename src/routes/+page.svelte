<script>
	import FormFields from '../lib/FormFields.svelte';
	import ContentRenderer from '../lib/ContentRenderer.svelte';
</script>

<svelte:head>
	<title>Signum SRC44 Generator</title>
	<meta
		name="description"
		content="Generate basic SRC44 meta data to paste in account, Token/Assets, Smart Contract, Alias"
	/>
</svelte:head>

<main
	class="max-w-4xl mx-auto flex flex-row sm:flex-wrap lg:flex-nowrap gap-4 items-center justify-between p-4 mt-10"
>
	<section class="flex flex-col rounded-xl border-2 p-4 sm:w-full lg:w-6/12">
		<h4 class="text-2xl font-medium leading-tight">Basic SRC44 Generator</h4>

		<h5 class="text-base leading-tight">
			Generate basic SRC44 meta data to paste in your account description field
		</h5>

		<div class="divider" />

		<FormFields />
	</section>

	<section class="rounded-xl border-2 p-4 sm:w-full lg:w-6/12 bg-slate-50">
		<ContentRenderer />
	</section>
</main>
