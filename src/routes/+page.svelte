<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import { schema, initialValues } from '../lib/formSchema';

	import FormFields from '../lib/FormFields.svelte';
	import ContentRenderer from '../lib/ContentRenderer.svelte';

	const { form, data, errors, isValid, addField, unsetField, setData } = createForm({
		initialValues,
		extend: validator({ schema }),
		onSubmit: () => undefined
	});
</script>

<svelte:head>
	<title>Signum SRC44 Generator</title>
	<meta
		name="description"
		content="Generate basic SRC44 meta data to paste in account, Tokens, Smart Contract, Alias or other asset."
	/>
</svelte:head>

<form use:form on:submit|preventDefault>
	<main
		class="max-w-6xl mx-auto flex flex-row sm:flex-wrap lg:flex-nowrap gap-4 items-start justify-between p-4 mt-10"
	>
		<section class="flex flex-col rounded-xl border-2 p-4 sm:w-full lg:w-6/12">
			<h4 class="text-2xl font-medium leading-tight">Basic SRC44 Generator</h4>

			<h5 class="text-base leading-tight">
				Generate basic SRC44 meta data to paste in account, subscription, tokens, smart contract,
				alias or other asset.
			</h5>

			<div class="divider" />

			<FormFields data={$data} errors={$errors} {addField} {unsetField} {setData} />
		</section>

		<section class="rounded-xl border-2 p-4 sm:w-full lg:w-6/12 bg-slate-50">
			<ContentRenderer data={$data} isValid={$isValid} />
		</section>
	</main>
</form>
