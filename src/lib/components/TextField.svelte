<script lang="ts">
	export let label = '';
	export let placeholder = '';
	export let type = 'text';
	export let name: string;
	export let errorText: string;
	export let maxlength = 524288;
	export let multiLine = false;
</script>

<div class="w-full form-control gap-1">
	{#if label}
		<span class="label-text">{label}</span>
	{/if}

	{#if !multiLine}
		<input
			{name}
			{placeholder}
			{type}
			{maxlength}
			class={`input input-bordered w-full ${errorText && 'input-error'}`}
		/>
	{:else}
		<textarea {name} {placeholder} {maxlength} class="textarea textarea-bordered" />
	{/if}

	{#if errorText} <span class="label-text-alt text-red-700">{errorText}</span>{/if}
</div>
