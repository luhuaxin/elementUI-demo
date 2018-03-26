import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import layout from '@/views/layout/layout'
import login from '@/views/login/login'
import locking from '@/views/layout/locking'
import users from '@/views/users/users'
import menu from '@/views/users/menu'
import roles from '@/views/users/roles'
import page401 from '@/views/error/401'
import page404 from '@/views/error/404'


Vue.use(Router)
export const constantRouterMap = [{
		path: '/login',
		name: 'login',
		component: login,
		hidden: true
	},
	{ path: '/401', component: page401, hidden: true },
  	{ path: '/404', component: page404, hidden: true },
	{
		path: '/locking',
		name: 'locking',
		component: locking,
		hidden: true
	},
	{
		path: '',
		component: layout,
		redirect: 'HelloWorld',
		children: [{
			path: 'HelloWorld',
			component: HelloWorld,
			name: 'HelloWorld',
			meta: {
				title: '首页',
				icon: 'el-icon-menu',
				noCache: true
			}
		}]
	},
	{
		path: '/users',
		component: layout,
		redirect: 'noredirect',
		name: 'user',
		meta: {
			title: '用户中心',
			icon: 'el-icon-menu'
		},
		children: [{
				path: 'users',
				component: users,
				name: 'users',
				meta: {
					title: '用户管理',
					icon: 'el-icon-menu'
				}
			},
			{
				path: 'roles',
				component: roles,
				name: 'roles',
				meta: {
					title: '角色管理',
					icon: 'el-icon-menu'
				}
			},
			{
				path: 'menu',
				component: menu,
				name: 'menu',
				meta: {
					title: '菜单管理',
					icon: 'el-icon-menu'
				}
			}
		]
	},
	{
		path: '/form',
		component: layout,
		redirect: 'noredirect',
		name: 'form',
		meta: {
			title: '表格',
			icon: 'el-icon-menu'
		},
		children: [{
				path: 'create-form',
				component: HelloWorld2,
				name: 'createForm',
				meta: {
					title: '创建表单',
					icon: 'el-icon-menu'
				}
			},
			{
				path: 'edit-form',
				component: HelloWorld2,
				name: 'editForm',
				meta: {
					title: '编辑表单',
					icon: 'el-icon-menu'
				}
			}
		]
	},
	{
    path: '/example',
    component: layout,
    redirect: 'noredirect',
    name: 'example',
    meta: {
      title: 'example',
      icon: 'el-icon-menu'
    },
    children: [
      {
        path: '/example/table',
        component: HelloWorld2,
        redirect: '/example/table/complex-table',
        name: 'Table',
        meta: {
          title: 'Table',
          icon: 'el-icon-menu'
        },
        children: [
          { path: 'dynamic-table', component: HelloWorld2, name: 'dynamicTable', meta: { title: 'dynamicTable' }},
          { path: 'drag-table', component: HelloWorld2, name: 'dragTable', meta: { title: 'dragTable' }},
        ]
      },
      { path: 'tab/index', icon: 'el-icon-menu', component: HelloWorld2, name: 'tab', meta: { title: 'tab' }}
    ]
  },
]
export default new Router({
	 mode: 'history', // require service support
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRouterMap
})

export const asyncRouterMap = [];
/*export default new Router({
  routes: [
    { path: '/login', component:login, hidden: true },
    {
	    path: '/',
	    component: layout,
	    redirect: 'HelloWorld',
	    children: [{
	      path: 'HelloWorld',
	      component: HelloWorld,
	      name: 'HelloWorld',
	      meta: { title: 'HelloWorld', icon: 'dashboard', noCache: true }
	    }]
	  },
	  {
	    path: '/form',
	    component: layout,
	    redirect: 'noredirect',
	    name: 'form',
	    meta: {
	      title: 'form',
	      icon: 'form'
	    },
	    children: [
	      { path: 'create-form', component: HelloWorld2, name: 'createForm', meta: { title: 'createForm', icon: 'table' }},
	      { path: 'edit-form', component: HelloWorld2, name: 'editForm', meta: { title: 'editForm', icon: 'table' }}
	    ]
	  },
  ]
})*/