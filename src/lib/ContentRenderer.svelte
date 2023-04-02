<script lang="ts">
	import { JsonView } from '@zerodevx/svelte-json-view';
	import type { initialValues } from './formSchema';

	export let data: typeof initialValues;
	export let isValid: boolean;

	$: payload = { vs: 1, isValid, ...data };

	const logNow = () => console.log(payload);
</script>

<JsonView json={payload} />
