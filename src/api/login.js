import request from '@/utils/request'

export const login = (username, password, code, uuid) => {
    const data = {
        username,
        password,
        code,
        uuid
    }
    return request({
        url: '/login',
        method: 'post',
        data: data
    })
}

// 退出方法
export const logout = () => {
    return request({
        url: '/logout',
        method: 'post'
    })
}
