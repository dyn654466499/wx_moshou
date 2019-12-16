const App = getApp();
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  gomember: function(){
    wx.navigateTo({
      url: '/pages/member/member',
    })
  },
  goaward: function () {
    wx.navigateTo({
      url: '/pages/award/award',
    })
  },
  gocent: function () {
    wx.navigateTo({
      url: '/pages/cent/cent',
    })
  },
  goauction: function () {
    wx.navigateTo({
      url: '/pages/auction/auction',
    })
  },
})