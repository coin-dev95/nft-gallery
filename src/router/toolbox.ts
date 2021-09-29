const Toolbox = () =>
	import(/* webpackChunkName:'toolbox' */ '@/components/toolbox/Toolbox.vue')

export default [
	{
		path: '/toolbox',
		name: 'toolbox',
		component: Toolbox
		// beforeEnter: apiEnabled,
	}
]
