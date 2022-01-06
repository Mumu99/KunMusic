/*
 * @Author: v_polixiong
 * @Date: 2022-01-06 14:12:31
 * @LastEditTime: 2022-01-06 15:10:09
 * @LastEditors: your name
 * @FilePath: \music\pages\login\login.js
 * 登录流程：
 *  1. 收集表单项数据
 *  2. 前端验证
 *    2.1 用户信息(账号、密码)是否合法
 *    2.2 前端验证不通过、直接提示, 不发请求
 *    2.3 前端验证通过、携带用户名和密码发送请求
 *  3. 后端验证
 *    3.1 验证用户是否存在
 *      用户不存在-> 返回用户不存在
 *      用户存在
 *         验证密码是否正确
 */
Page({
  data: {
    phoneNumber: "",
    password: "",
  },
  onLoad(options) {},
  setUser(event) {
    console.log(event);
    const { currentTarget, detail } = event;
    if (currentTarget.id === "phone") {
      this.setData({
        phoneNumber: detail.value,
      });
    } else {
      this.setData({
        password: detail.value,
      });
    }
  },
  // 点击提交表单
  submit() {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onShareAppMessage() {
    return {
      title: "",
    };
  },
});
