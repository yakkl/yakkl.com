import adapter from '@sveltejs/adapter-static';

import preprocess from "svelte-preprocess";
// import preprocessReact from "svelte-preprocess-react/preprocessReact";
// Notes: This is a workaround for the issue with the svelte-preprocess-react package
// npm i react react-dom @excalidraw/excalidraw
// npm i svelte-preprocess-react
// Too many issues for now.

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter ({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
    appDir: 'app',
  },
  preprocess: [
    preprocess({postcss: true}),
    // preprocessReact(),
  ],
};

export default config;
