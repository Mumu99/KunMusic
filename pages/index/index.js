/*
 * @Author: your name
 * @Date: 2021-12-07 10:12:28
 * @LastEditTime: 2022-01-04 14:35:59
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \music\pages\index\index.js
 */
// pages/index/index.js
import request from "../../utils/request.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 图片list
    imageList: [],
    // 轮播图属性
    swiperContent: {
      // 是否需要轮播小圆点
      indicatorDots: true,
      // 轮播小圆点的颜色
      indicatorColor: "#e6e6e6",
      // 当前轮播小圆点选中的颜色
      indicatorActivecolor: "rgba(236, 65, 65, 1)",
      // 滑动方向是否为纵向
      vertical: false,
      // 是否采用衔接滑动
      circular: true,
      // 自动播放
      autoplay: true,
      // 自动切换时间间隔
      interval: 2000,
      // 滑动动画时长
      duration: 500,
    },
    // 推荐歌曲
    recommendList: [],
    // 排行榜数据
    topList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 轮播
    const banner = await request(`/banner`, { type: 2 });
    this.setData({
      imageList: banner.banners.map((item) => item.pic),
    });

    // 推荐
    const personalized = await request(`/personalized`, { type: 2 });
    this.setData({
      recommendList: personalized.result.map((item) => {
        const { picUrl, name, id } = item;
        return { picUrl, name, id };
      }),
    });

    /**
     * @desc: 排行榜, 只发前5个
     * @param {*}
     * @return {*}
     */
    let index = 0;
    let resultList = [];
    while (index < 5) {
      const topData = await request(`/top/list`, { idx: index++ });
      const { name, tracks } = topData.playlist;
      let topListItem = {
        name,
        tracks: tracks.slice(0, 5),
      };
      resultList.push(topListItem); 
      // 更新topList的值
      this.setData({
        topList: resultList,
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
