import type { SRC44DescriptorType } from '@signumjs/standards';

type descriptorType = { label: string; value: SRC44DescriptorType };

export const descriptorTypesList: descriptorType[] = [
	{ label: 'Human Account', value: 'hum' },
	{ label: 'Smart Contract Account', value: 'smc' },
	{ label: 'Bot Account (Non Smart Contract)', value: 'bot' },
	{ label: 'Smart Token', value: 'tok' },
	{ label: 'Business Account', value: 'biz' },
	{ label: 'Centralized Exchange Account (CEX)', value: 'cex' },
	{ label: 'Decentralized Exchange Account (DEX)', value: 'dex' },
	{ label: 'Other', value: 'oth' }
];
