import type { SvelteComponent } from 'svelte';

export interface Metadata {
	title: string;
	moral: string;
	characters: string[];
	motifs: string[];
}

export interface Fable {
	metadata: Metadata;
	default: typeof SvelteComponent;
}

export interface FableData {
	metadata: Metadata;
	slug: string;
}
