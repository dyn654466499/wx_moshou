//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  gonew: function () {
    wx.navigateTo({
      url: '/pages/new/new',
    })
  },
  goadd: function () {
    wx.navigateTo({
      url: '/pages/add/add',
    })
  },
  gomine: function () {
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  },
})
