<script lang="ts">
	import { descriptorTypesList } from './types';
	import type { initialValues } from './formSchema';
	import FieldToggler from './components/FieldToggler.svelte';
	import TextField from './components/TextField.svelte';
	import FileHashField from './components/FileHashField.svelte';
	import AccountAddressField from './components/AccountAddressField.svelte';
	import SendRuleField from './components/SendRuleField.svelte';
	import SocialNetworkFields from './components/SocialNetworkFields.svelte';

	export let data: typeof initialValues;
	export let errors: any;
	export let addField: any;
	export let unsetField: any;
	export let setData: any;
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
		errorText={(errors.name && errors.name[0]) || ''}
	/>

	<TextField
		name="description"
		label="Description"
		placeholder="Enter the description"
		type="text"
		maxlength={384}
		errorText={(errors.description && errors.description[0]) || ''}
		multiLine={true}
	/>

	<TextField
		name="homePage"
		label="Home Page"
		placeholder="You can add the official website or any URL"
		type="url"
		maxlength={128}
		errorText={(errors.homePage && errors.homePage[0]) || ''}
	/>

	<SocialNetworkFields {data} {errors} {addField} {unsetField} />

	<FileHashField
		fieldValue={data.avatar}
		fieldLabel="Avatar (Advanced)"
		fieldName="avatar"
		fieldMimeTypeName="avatarMimeType"
		{setData}
	/>

	<FileHashField
		fieldValue={data.background}
		fieldLabel="Background Image (Advanced)"
		fieldName="background"
		fieldMimeTypeName="backgroundMimeType"
		{setData}
	/>

	<AccountAddressField {setData} />

	<SendRuleField {setData} />

	<FieldToggler
		fieldLabel="Signum Alias (Advanced)"
		onToggleField={() => {
			setData('alias', '');
		}}
	>
		<TextField
			name="alias"
			placeholder="E.g. myalias"
			type="text"
			maxlength={141}
			errorText={(errors.alias && errors.alias[0]) || ''}
		/>
	</FieldToggler>
</div>
