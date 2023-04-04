<script lang="ts">
	import type { initialValues } from '../formSchema';
	import TextField from '../components/TextField.svelte';

	export let data: typeof initialValues;
	export let errors: any;
	export let addField: any;
	export let unsetField: any;
</script>

<div class="flex flex-col gap-2">
	<h4 class="text-lg font-medium leading-tight">Social Networks</h4>
	{#each data.socialNetworks as { }, index}
		<div class="flex flex-row justify-between items-center gap-2">
			<TextField
				name="socialNetworks.{index}"
				type="url"
				maxlength={92}
				errorText={errors.socialNetworks && errors.socialNetworks[index]
					? errors.socialNetworks[index]
					: ''}
				placeholder="Enter your preferred social media platform URL"
			/>

			<button on:click={unsetField(`socialNetworks.${index}`)} class="btn btn-sm btn-error h-12">
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
			</button>
		</div>
	{/each}

	{#if data.socialNetworks.length < 3}
		<button on:click={addField('socialNetworks', '')} class="btn btn-primary btn-sm">Add</button>
	{/if}
</div>
