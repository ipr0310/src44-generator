import * as yup from 'yup';

export const schema = yup.object({
	type: yup.string().trim(),
	name: yup.string().trim().max(24),
	description: yup.string().trim().max(384),
	homePage: yup.string().url().trim().max(128)
});

export const initialValues = {
	type: '',
	name: '',
	description: '',
	homePage: ''
};
