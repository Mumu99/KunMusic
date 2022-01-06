/*
 * @Author: your name
 * @Date: 2021-12-08 11:17:14
 * @LastEditTime: 2021-12-08 14:12:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \music\utils\request.js
 */
// 发送ajax请求
import config from './config'
export default (url, data = {}, method = "GET") => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.mobileHost + url,
      data,
      method,
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        console.log("失败", err)
      },
    })
  })
}
