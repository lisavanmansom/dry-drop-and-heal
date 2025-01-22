export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/chatbot": [~3],
		"/form-intro": [~4],
		"/form-redirect/[slug]": [5],
		"/hulpverlening": [6],
		"/introductie-algemeen": [7],
		"/introductie-hulp": [8],
		"/introductie-rouwtaken": [9],
		"/multiple-task-1": [10],
		"/multiple-task-2": [11],
		"/multiple-task-3": [12],
		"/multiple-task-4": [13],
		"/praat-met-naasten": [14],
		"/praten": [15],
		"/uitleg-metafoor": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';