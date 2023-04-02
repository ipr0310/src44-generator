<script lang="ts">
	import { descriptorTypesList } from './types';
	import TextField from './components/TextField.svelte';
	export let errors: any;

	$: nameFieldError = (errors.name && errors.name[0]) || '';
	$: descriptionFieldError = (errors.description && errors.description[0]) || '';
	$: homePageFieldError = (errors.homePage && errors.homePage[0]) || '';
</script>

<div class="flex flex-col gap-4">
	<div class="form-control gap-1">
		<span class="label-text">Select the type</span>
		<select name="type" class="select select-bordered">
			<option value="" disabled selected>Pick one</option>

			{#each descriptorTypesList as descriptorType}
				<option value={descriptorType.value}>{descriptorType.label}</option>
			{/each}
		</select>
		<span class="label-text-alt">Select how you would like to categorize the content</span>
	</div>

	<TextField
		name="name"
		label="Name"
		placeholder="Enter the name"
		type="text"
		maxlength={24}
		errorText={nameFieldError}
	/>

	<TextField
		name="description"
		label="Description"
		placeholder="Enter the description"
		type="text"
		maxlength={384}
		errorText={descriptionFieldError}
		multiLine={true}
	/>

	<TextField
		name="homePage"
		label="Home Page"
		placeholder="Enter the homepage"
		type="url"
		maxlength={128}
		errorText={homePageFieldError}
	/>
</div>
