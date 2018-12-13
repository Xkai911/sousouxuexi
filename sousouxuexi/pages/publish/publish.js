// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aa:123,
  },
  goIndex: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  goUserInfo: function () {
    wx.redirectTo({
      url: '../userInfo/userInfo',
    })
  },
  goHome: function () {
    wx.redirectTo({
      url: '../home/home',
    })
  },
  goStudent: function () {
    wx.navigateTo({
      url: '../student/student',
    })
  },
  goTeacher: function () {
    wx.navigateTo({
      url: '../teacher/teacher',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})