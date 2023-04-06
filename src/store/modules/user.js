import {getAccessToken, removeToken, setToken} from "@/utils/auth.js"
import {login, logout} from "@/api/login.js"

const user = {
    state: {
        token: getAccessToken(),
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
    },
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            return new Promise((resolve, reject) => {
                login(username, password).then(res => {
                    setToken(res.token)
                    commit('SET_TOKEN', res.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 退出系统
        LogOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default user
