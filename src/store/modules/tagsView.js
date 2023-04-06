const state = {
  cachedViews: [],
}

const mutations = {
  ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.includes(view.name)) return
    if (view.meta && view.meta.keep) {
      state.cachedViews.push(view.name)
      // console.log(state.cachedViews)
    }
  },
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view.name)
    index > -1 && state.cachedViews.splice(index, 1)
  },
}

const actions = {
  addView({ commit }, view) {
    commit('ADD_CACHED_VIEW', view)
  },
  delView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('DEL_CACHED_VIEW', view)
      resolve({
        cachedViews: [...state.cachedViews],
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
