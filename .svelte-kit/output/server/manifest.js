export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon-16x16.png","favicon.ico","img/laura.jpg","img/lauraxnanna.jpg","img/nanna.jpg","img/nanna_box.jpg","img/nanna_suit.jpg","img/tablet.jpg","styles.css"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		entry: {"file":"start-0423b66e.js","js":["start-0423b66e.js","chunks/index-205e43c4.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: () => import('./entries/endpoints/index.js'),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "dine-traenere",
				pattern: /^\/dine-traenere\/?$/,
				names: [],
				types: [],
				path: "/dine-traenere",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "hvorfor-ems",
				pattern: /^\/hvorfor-ems\/?$/,
				names: [],
				types: [],
				path: "/hvorfor-ems",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "kontakt",
				pattern: /^\/kontakt\/?$/,
				names: [],
				types: [],
				path: "/kontakt",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
