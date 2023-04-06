import { createStore } from 'vuex'
import tagsView from './modules/tagsView'
import user from "@/store/modules/user.js"
export default createStore({
  state: {},
  getters: {},
  modules: { tagsView,user },
})
