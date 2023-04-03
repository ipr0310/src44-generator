import * as yup from 'yup';

export const schema = yup.object({
	type: yup.string().trim(),
	name: yup.string().trim().max(24),
	description: yup.string().trim().max(384),
	homePage: yup.string().url('Invalid Field, Enter URL').trim().max(128),
	socialNetworks: yup
		.array()
		.of(yup.string().url('Invalid Field, Enter URL').required().trim().max(92))
		.max(3),
	avatar: yup.string().trim(),
	avatarMimeType: yup.string().trim(),
	background: yup.string().trim(),
	backgroundMimeType: yup.string().trim(),
	receiverAddress: yup.string().trim(),
	sendRule: yup.string().trim().max(64),
	alias: yup
		.string()
		.nullable()
		.max(100)
		.matches(/^\w+(\.\w+)?$/, { message: 'Invalid field', excludeEmptyString: true })
});

export const initialValues = {
	type: '',
	name: '',
	description: '',
	homePage: '',
	socialNetworks: [],
	avatar: '',
	avatarMimeType: '',
	background: '',
	backgroundMimeType: '',
	receiverAddress: '',
	sendRule: '',
	alias: ''
};
