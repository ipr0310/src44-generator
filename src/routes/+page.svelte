<script lang="ts">
	import { tick } from 'svelte';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import { schema, initialValues } from '../lib/formSchema';

	import FormFields from '../lib/FormFields.svelte';
	import ContentRenderer from '../lib/ContentRenderer.svelte';

	const { form, data, errors, isValid, addField, unsetField, setData, reset } = createForm({
		initialValues,
		extend: validator({ schema }),
		onSubmit: () => undefined
	});

	// Dirty hack for resetting the form
	let canShowForm = true;
	const resetEvent = async () => {
		canShowForm = false;
		reset();
		await tick();
		canShowForm = true;
	};
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
		class="max-w-6xl mx-auto flex flex-row flex-wrap lg:flex-nowrap gap-4 items-start justify-between p-4 mt-10"
	>
		<section class="flex flex-col rounded-xl border-2 p-4 w-full lg:w-6/12">
			<h4 class="text-2xl font-medium leading-tight">Basic SRC44 Generator</h4>

			<h5 class="text-base leading-tight">
				Generate basic SRC44 meta data to paste in account, subscription, tokens, smart contract,
				alias or other asset.
			</h5>

			<div class="divider" />

			{#if canShowForm}
				<FormFields data={$data} errors={$errors} {addField} {unsetField} {setData} />
			{/if}
		</section>

		<section class="sticky top-4 flex flex-col w-full lg:w-6/12 gap-2">
			<div class="rounded-xl border-2 p-4 bg-slate-50">
				<ContentRenderer data={$data} isValid={$isValid} resetForm={resetEvent} />
			</div>

			<footer
				class="flex flex-row justify-center items-center gap-4 rounded-xl border-2 p-4 text-2xl font-bold text-gray-500"
			>
				<a href="https://github.com/signum-network/SIPs/blob/master/SIP/sip-44.md" target="_blank">
					<img src="/powered-by-signum.svg" width="125" alt="Powered by Signum Logo" />
				</a>

				<span> + </span>
				<a href="https://docs.signum.network/signum/signumjs" target="_blank">
					<img src="/signumjs.svg" width="50" alt="SignumJS Logo" />
				</a>

				<span> + </span>
				<a href="https://kit.svelte.dev/" target="_blank">
					<img src="/svelte.svg" width="50" alt="Powered by Signum Logo" />
				</a>

				<span> + </span>
				<a href="https://github.com/ipr0310/src44-generator" target="_blank">
					<img src="/github-mark.svg" width="50" alt="Github Repository" />
				</a>
			</footer>

			<a
				href="https://github.com/ipr0310"
				target="_blank"
				class="w-full inline-block text-center text-neutral-500 font-bold text-leading"
				>Made with ⚡ By ipr0310</a
			>
		</section>
	</main>
</form>
