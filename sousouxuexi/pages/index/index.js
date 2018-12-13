//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: ['地区','美国', '中国', '巴西', '日本'],
    array1: ['类型', '类型1', '类型2', '类型3', '类型4'],
    array2: ['薪资', '薪资1', '薪资2', '薪资3', '薪资4'],
    array3: ['排序', '排序1', '排序2', '排序3', '排序4'],
    index:0,
    index1:0,
    index2:0,
    index3:0,
  },
  //事件处理函数
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
    wx.navigateTo({
      url: '../index/index'
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goInfo: function () {
    wx.navigateTo({
      url: '../info/info'
    })
  },
  goPulish: function(){
    wx.redirectTo({
      url: '../publish/publish',
    })
  },
  goHome: function () {
    wx.redirectTo({
      url: '../home/home',
    })
  },
  goUserInfo: function () {
    wx.redirectTo({
      url: '../userInfo/userInfo',
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  
  // onPullDownRefresh: function () {
  //   wx.request({
  //     url: '',
  //     data: {},
  //     method: 'GET',
  //     success: function (res) { },
  //     fail: function (res) { },
  //     complete: function (res) {
  //       wx.stopPullDownRefresh();
  //     }
  //   })
  // }
})
