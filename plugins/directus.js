import { createDirectus, rest, readItem, readItems, createItem } from '@directus/sdk';

const directus = createDirectus('https://airisk.mit.edu/directus').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems,  createItem},
	};
});