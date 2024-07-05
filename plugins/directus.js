import { createDirectus, rest, readItem, readItems, createItem } from '@directus/sdk';

const directus = createDirectus('http://localhost:8055/').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems,  createItem},
	};
});