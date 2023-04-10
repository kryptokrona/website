import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		csp: {
			mode: 'nonce',
			directives: {
				"script-src": ['self', ' vitals.vercel-insights.com'],
				"base-uri": ['self'],
				"font-src": ['self'],
				"form-action": ['self'],
				"frame-ancestors": ['none'],
				"frame-src": ['self'],
				"manifest-src": ['self'],
				"media-src": ['self'],
				"object-src": ['none'],
				"upgrade-insecure-requests": true
			}
		},
	}
};

export default config;
