<script lang="ts">
	export let fieldLabel = '';
	export let onToggleField = () => {};

	let showField = false;

	const toggle = () => {
		showField = !showField;
		onToggleField();
	};
</script>

<div class="flex flex-row justify-between items-center gap-2">
	<h4 class="text-lg font-medium leading-tight">{fieldLabel}</h4>
	<button on:click={toggle} class="btn btn-sm">{showField ? 'Hide Field' : 'Show Field'}</button>
</div>

{#if showField}
	<slot />
{/if}
