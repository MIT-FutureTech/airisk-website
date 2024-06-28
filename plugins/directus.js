import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

const directus = createDirectus('http://128.52.139.178:8055/').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});