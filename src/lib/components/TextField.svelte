<script lang="ts">
	export let label: string;
	export let placeholder: string;
	export let type = 'text';
	export let name: string;
	export let errorText: string;
	export let maxlength: number;
	export let multiLine = false;
</script>

<div class="form-control gap-1">
	<span class="label-text">{label}</span>

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
