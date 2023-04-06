/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-05-21 15:41:24
 * @LastEditors: superDragon
 * @LastEditTime: 2019-08-21 16:36:02
 */
export const regRule = {
  // 手机号正则
  mobile: /^1\d{10}$/,
  // 座机
  telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
  // 账号
  account: /^[\u4E00-\u9FA5A-Za-z0-9_.-]+$/,
  // 密码
  password:
    /^.*(?=.{8,20})(?=.*\d)(?=.*[a-zA-Z]{1,})(?=.*[!@#$%^&*?=/_()-]).*$/,
  // 身份证
  id: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  // 邮箱
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  // 名称, 只允许输入中英文数字，下划线，中划线，点
  name: /^[\u4E00-\u9FA5A-Za-z0-9_.,-]+$/,
  // 设备ID, 只允许输入英文数字，下划线，中划线
  devId: /^[A-Za-z0-9_-]+$/,
  // param,只允许输入英文，数字，下划线，中划线
  params: /^[a-zA-Z]\w*$/,
  // float,只允许输浮点数
  float: /^(-?\d+)(\.\d+)?$/,
  // 数量，只允许输入数字
  number: /^[0-9]*$/,
  // 整数
  integer: /^-?[0-9]\d*$/,
  // 配额数量
  quotaNumber: /^\+?[1-9]\d*$/,
  // 品类ID， 品类编码
  customId: /^[0-9a-zA-Z_-]{1,}$/,
  //user no
  userNo: /^[0-9a-zA-Z]{1,}$/,
  // 端口号
  port: /^\+?[0-9]\d*$/,
}

export const validate = {
  // 手机号
  mobile: (rule, value, callback) => {
    if (value && !regRule.mobile.test(value)) {
      callback(new Error('请输入正确的手机号'))
    } else {
      callback()
    }
  },
  telephone: (rule, value, callback) => {
    if (
      value &&
      (regRule.mobile.test(value) || regRule.telephone.test(value))
    ) {
      callback()
    } else {
      if (value === null || value === '') {
        callback()
      } else {
        callback(new Error('请输入正确的联系方式'))
      }
    }
  },
  // 账号
  account: (rule, value, callback) => {
    if (value && !regRule.account.test(value)) {
      callback(new Error('请输入3~24位只含字母、数字、中文、._-的字符。'))
    } else {
      callback()
    }
  },
  // 密码
  password: (rule, value, callback) => {
    if (value && !regRule.password.test(value)) {
      callback(
        new Error(
          '请输入 8-20 个字符，需同时包含数字、字母以及特殊符号（!@#$%^&*?=/_()-等非空格）。'
        )
      )
    } else {
      callback()
    }
  },
  // 邮箱
  email: (rule, value, callback) => {
    if (value && !regRule.email.test(value)) {
      callback(new Error('请输入正确的邮箱'))
    } else {
      callback()
    }
  },
  // 产品名称等
  name: (rule, value, callback) => {
    if (value && !regRule.name.test(value)) {
      callback(
        new Error('该字段只能由中英文、数字、下划线、中划线、点、逗号组成。')
      )
    } else {
      callback()
    }
  },
  // 设备ID
  devId: (rule, value, callback) => {
    if (value && !regRule.devId.test(value)) {
      callback(new Error('该字段只能由英文、数字、下划线、中划线组成。'))
    } else {
      callback()
    }
  },
  // 产品名称等
  params: (rule, value, callback) => {
    if (value && !regRule.params.test(value)) {
      callback(new Error('支持字母、数字、下划线，必须以英文字母开头。'))
    } else {
      callback()
    }
  },
  float: (rule, value, callback) => {
    if (value && !regRule.float.test(value)) {
      callback(new Error('请输入浮点数或整数'))
    } else {
      callback()
    }
  },
  verifyCode: (rule, value, callback) => {
    if (value && !regRule.number.test(value)) {
      callback(new Error('验证码格式错误'))
    } else {
      callback()
    }
  },
  number: (rule, value, callback) => {
    if (value && !regRule.number.test(value)) {
      callback(new Error('只允许输入数字'))
    } else {
      callback()
    }
  },
  integer: (rule, value, callback) => {
    if (value && !regRule.integer.test(value)) {
      callback(new Error('请输入整数'))
    } else {
      callback()
    }
  },
  quotaNumber: (rule, value, callback) => {
    if (value && !regRule.quotaNumber.test(value)) {
      callback(new Error('请输入大于0的整数'))
    } else {
      callback()
    }
  },
  port: (rule, value, callback) => {
    if (Number(value) < 65535 && Number(value) > 0) {
      callback()
    } else {
      callback(new Error('请输入0-65536之间的整数'))
    }
  },
  customId: (rule, value, callback) => {
    if (value && !regRule.customId.test(value)) {
      callback(new Error('支持字母、数字、下划线'))
    } else {
      callback()
    }
  },
  userNo: (rule, value, callback) => {
    if (value && !regRule.userNo.test(value)) {
      callback(new Error('支持字母、数字'))
    } else {
      callback()
    }
  },
}
