export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\dine-traenere\\index.svelte"),
	() => import("..\\..\\src\\routes\\forloeb\\index.svelte"),
	() => import("..\\..\\src\\routes\\hvorfor-ems\\index.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\kontakt\\index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1], 1],
	"dine-traenere": [[0, 2], [1]],
	"forloeb": [[0, 3], [1]],
	"hvorfor-ems": [[0, 4], [1]],
	"kontakt": [[0, 6], [1]]
};