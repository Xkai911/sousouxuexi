// pages/intClass/intClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classInfoBgColor:"#000",
    classInfoColor:"#fff",
    classmoreBgColor: "#fff",
    classmoreColor: "#000",
    classAssessBgColor: "#fff",
    classAssessColor: "#000",
    classInfoDisplay:'block',
    classmoreDisplay: 'none',
    classAssessDisplay: 'none',
  },
  classInfo:function(){
    this.setData({
      classInfoBgColor: "#000",
      classInfoColor: "#fff",
      classmoreBgColor: "#fff",
      classmoreColor: "#000",
      classAssessBgColor: "#fff",
      classAssessColor: "#000",
      classInfoDisplay: 'block',
      classmoreDisplay: 'none',
      classAssessDisplay: 'none',
    })
  },
  classmore:function(){
    this.setData({
      classInfoBgColor: "#fff",
      classInfoColor: "#000",
      classmoreBgColor: "#000",
      classmoreColor: "#fff",
      classAssessBgColor: "#fff",
      classAssessColor: "#000",
      classInfoDisplay: 'none',
      classmoreDisplay: 'block',
      classAssessDisplay: 'none',
    })
  },
  classAssess:function(){
    this.setData({
      classInfoBgColor: "#fff",
      classInfoColor: "#000",
      classmoreBgColor: "#fff",
      classmoreColor: "#000",
      classAssessBgColor: "#000",
      classAssessColor: "#fff",
      classInfoDisplay: 'none',
      classmoreDisplay: 'none',
      classAssessDisplay: 'block',
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