import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  	app,
  	permission,
  	tagsView,
  	user
  },
  getters: {
  	permission_routers: state => state.permission.routers,
  	visitedViews: state => state.tagsView.visitedViews,
  	cachedViews: state => state.tagsView.cachedViews,
  }
})

export default store
