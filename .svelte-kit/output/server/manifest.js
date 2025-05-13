export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.JfPhZGbl.js",app:"_app/immutable/entry/app.DNXdYm00.js",imports:["_app/immutable/entry/start.JfPhZGbl.js","_app/immutable/chunks/C71FrTKI.js","_app/immutable/chunks/C8M7huGC.js","_app/immutable/chunks/CMjohyKQ.js","_app/immutable/entry/app.DNXdYm00.js","_app/immutable/chunks/D8ZUucn5.js","_app/immutable/chunks/C8M7huGC.js","_app/immutable/chunks/CeWid8xA.js","_app/immutable/chunks/BWCsPxKq.js","_app/immutable/chunks/CMjohyKQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
