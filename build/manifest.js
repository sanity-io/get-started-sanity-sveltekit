export const manifest = {
	appDir: "_app",
	assets: new Set(["styles.css"]),
	mimeTypes: {".css":"text/css"},
	_: {
		entry: {"file":"start-314cfcc7.js","js":["start-314cfcc7.js","chunks/index-c0fb1f72.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: () => import('./server/entries/endpoints/index.js'),
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
