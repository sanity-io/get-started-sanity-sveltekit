import adapter from "@sveltejs/adapter-vercel";
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: {
		adapt: await node()
	},
  },
};

export default config;
