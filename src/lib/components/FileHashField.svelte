<script lang="ts">
	import { cid } from 'is-ipfs';
	import debounce from 'lodash/debounce';

	export let fieldLabel = '';
	export let fieldName = '';
	export let fieldValue = '';
	export let fieldMimeTypeName = '';
	export let setData: any;

	const supportedMimeTypes = [
		'image/jpeg',
		'image/png',
		'image/webp',
		'image/gif',
		'image/svg+xml'
	];

	let isSearchingFile = false;
	let isImageValid = false;
	let showField = false;
	let errorText = '';

	const toggle = () => {
		isSearchingFile = false;
		isImageValid = false;
		showField = !showField;
		errorText = '';

		setData(fieldName, '');
		setData(fieldMimeTypeName, '');
	};

	const handleInput = debounce(async (e) => {
		const fileHash = e.target.value.trim();

		try {
			if (!fileHash) return;
			isSearchingFile = true;

			if (!cid(fileHash)) throw new Error('Invalid');

			// Make request for getting the MIME type
			const mimeType = await fetch(`https://ipfs.io/ipfs/${fileHash}`).then((response) => {
				if (response.ok) return response.headers.get('content-type') || '';
			});

			if (!mimeType) throw new Error('Invalid or image not found');

			// Verify for allowed file types
			if (!supportedMimeTypes.includes(mimeType)) {
				throw new Error('You entered an invalid file type, only pictures allowed');
			}

			isImageValid = true;
			errorText = '';
			setData(fieldMimeTypeName, mimeType);
		} catch (error: any) {
			isImageValid = false;
			errorText = error.message;
			setData(fieldMimeTypeName, '');
		} finally {
			setData(fieldName, fileHash);
			isSearchingFile = false;
		}
	}, 500);
</script>

<div class="flex flex-row justify-between items-center gap-2">
	<h4 class="text-lg font-medium leading-tight">{fieldLabel}</h4>
	<button on:click={toggle} class="btn btn-sm">{showField ? 'Hide Field' : 'Show Field'}</button>
</div>

{#if showField}
	<div class="flex flex-row justify-between items-center gap-2">
		<div class="flex flex-col w-full">
			<input
				name={fieldName}
				on:input={handleInput}
				placeholder="Enter the IPFS CID or Hash of the picture"
				class="input input-bordered w-full"
			/>
			{#if errorText} <span class="label-text-alt text-red-700">{errorText}</span>{/if}
		</div>

		<div class="avatar">
			{#if isImageValid}
				<div class="w-12 rounded">
					<img src={`https://ipfs.io/ipfs/${fieldValue}`} alt="IPFS Logo" />
				</div>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-question-mark"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
					<path d="M12 19l0 .01" />
				</svg>
			{/if}
		</div>
	</div>

	<p class="text-xl text-center">⚠️ Only IPFS CID or IPFS Hash is allowed</p>
{/if}
