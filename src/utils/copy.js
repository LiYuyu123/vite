import modal from '../plugins/modal'
/**
 * @description 复制
 * @param {*} text 内容
 */
export function copyDomText(text) {
  let OrderNumber = text
  // 创建一个input 元素
  // createElement() 方法通过指定名称创建一个元素
  let newInput = document.createElement('input')
  // 讲存储的数据赋值给input的value值
  newInput.value = OrderNumber
  // appendChild() 方法向节点添加最后一个子节点。
  document.body.appendChild(newInput)
  // 选中input元素中的文本
  // select() 方法用于选择该元素中的文本。
  newInput.select()
  // 执行浏览器复制命令
  //  execCommand方法是执行一个对当前文档，当前选择或者给出范围的命令
  document.execCommand('Copy')
  // 清空输入框
  newInput.remove()
  modal.msgSuccess('复制成功')
}
