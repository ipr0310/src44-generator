<script lang="ts">
	import { DescriptorDataBuilder } from '@signumjs/standards';
	import { JsonView } from '@zerodevx/svelte-json-view';
	import Copy from 'copy-to-clipboard';
	import type { initialValues } from './formSchema';

	export let data: typeof initialValues;
	export let isValid: boolean;
	export let resetForm: () => void;

	$: descriptorData = DescriptorDataBuilder.create(data.name || '');

	// @ts-ignore
	$: if (data.type) descriptorData.setType(data.type);

	$: if (data.description) descriptorData.setDescription(data.description);

	$: if (data.homePage) descriptorData.setHomePage(data.homePage);

	$: if (data.socialNetworks.length) descriptorData.setSocialMediaLinks(data.socialNetworks);

	$: if (data.avatar && data.avatarMimeType)
		descriptorData.setAvatar(data.avatar, data.avatarMimeType);

	$: if (data.background && data.backgroundMimeType)
		descriptorData.setBackground(data.background, data.backgroundMimeType);

	$: if (data.receiverAddress) descriptorData.setAccount(data.receiverAddress);

	$: if (data.sendRule) descriptorData.setSendRule(data.sendRule);

	$: if (data.alias) descriptorData.setAlias(data.alias);

	$: descriptorDataRawData = descriptorData.build().raw;

	$: if (!data.name) delete descriptorDataRawData.nm;

	const copyContent = () => {
		Copy(JSON.stringify(descriptorDataRawData, null, 2));
		alert('JSON data has been copied to your clipboard!');
	};

	const copyMinifiedContent = () => {
		Copy(JSON.stringify(descriptorDataRawData));
		alert('Minified JSON data has been copied to your clipboard!');
	};
</script>

<JsonView json={descriptorDataRawData} />

{#if !isValid}
	<div class="alert alert-error shadow-sm text-white font-bold mt-4">
		<span class="text-center w-full inline-block">
			⚠️ Make sure to fill in the form properly ⚠️</span
		>
	</div>
{/if}

<div
	class="w-full gap-2 btn-group justify-center flex-wrap btn-group-vertical md:btn-group-horizontal mt-4"
>
	<button on:click={copyContent} disabled={!isValid} class="btn btn-outline btn-info"
		>Copy Content</button
	>

	<button on:click={copyMinifiedContent} disabled={!isValid} class="btn btn-outline btn-success">
		Copy Minified Content
	</button>

	<button on:click={resetForm} class="btn btn-outline btn-error gap-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
		Reset Form
	</button>
</div>
