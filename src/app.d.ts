/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		'on:outclick'?: (event: CustomEvent) => void;
	}
}
