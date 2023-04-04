<script lang="ts">
	import debounce from 'lodash/debounce';
	import FieldToggler from './FieldToggler.svelte';

	const fieldName = 'sendRule';
	export let setData: any;

	let successText = '';
	let errorText = '';

	const resetField = () => {
		successText = '';
		errorText = '';
		setData(fieldName, '');
	};

	const handleInput = debounce(async (e) => {
		const sendRule = e.target.value.trim();

		try {
			if (!sendRule) return resetField();
			new RegExp(sendRule);
			setData(fieldName, sendRule);
		} catch (error: any) {
			setData(fieldName, '');
			successText = '';
			errorText = error.message;
		}
	}, 300);
</script>

<FieldToggler fieldLabel="Send Rule (Advanced)" onToggleField={resetField}>
	<div class="flex flex-col gap-2">
		<input
			on:input={handleInput}
			placeholder="E.g. /^[0-9a-fA-F]{64}$/"
			type="text"
			maxlength={64}
			class="input input-bordered w-full"
		/>

		{#if successText} <span class="label-text-alt font-bold">{successText}</span>{/if}
		{#if errorText} <span class="label-text-alt text-red-700">{errorText}</span>{/if}
	</div>
</FieldToggler>
