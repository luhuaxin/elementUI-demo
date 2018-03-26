import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({
	showSpinner: false
}) // NProgress Configuration

// permissiom judge function
/*function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}*/

//const whiteList = ['/login', '/authredirect']// no redirect whitelist

router.beforeEach((to, from, next) => {
	//debugger;
	NProgress.start(); // start progress bar
	if(getToken()){//如果有就直接到首页咯
    next();
  }else{
    if(to.path == '/login'){//如果是登录页面路径，就直接next()
      next();
    }else{//不然就跳转到登录；
      next('/login');
    }
    NProgress.done()
  }
	
})

router.afterEach(() => {
	NProgress.done() // finish progress bar
})