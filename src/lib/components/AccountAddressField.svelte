<script lang="ts">
	import { Address } from '@signumjs/core';
	import debounce from 'lodash/debounce';
	import FieldToggler from './FieldToggler.svelte';

	export let fieldName = '';
	export let setData: any;

	let successText = '';
	let errorText = '';

	const resetField = () => {
		successText = '';
		errorText = '';
		setData(fieldName, '');
	};

	const handleInput = debounce(async (e) => {
		const address = e.target.value.trim();

		try {
			if (!address) return (successText = '');

			const accountAddress = Address.create(address);
			const accountRSAddress = accountAddress.getReedSolomonAddress();
			const accountId = accountAddress.getNumericId();

			setData(fieldName, accountId);

			successText = `${accountRSAddress} (ID: ${accountId}) ✅`;

			errorText = '';
		} catch (error: any) {
			setData(fieldName, '');

			successText = '';

			errorText = error.message;
		}
	}, 500);
</script>

<FieldToggler fieldLabel="Address or account ID (Advanced)" onToggleField={resetField}>
	<div class="flex flex-col gap-2">
		<input
			on:input={handleInput}
			placeholder="E.g. S-6SJC-..., 17332"
			class="input input-bordered w-full"
		/>

		{#if successText} <span class="label-text-alt font-bold">{successText}</span>{/if}
		{#if errorText} <span class="label-text-alt text-red-700">{errorText}</span>{/if}
	</div>
</FieldToggler>
