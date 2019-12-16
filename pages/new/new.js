// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus: true,  //聚焦 
  },
  //点击radio-group中的列表项事件
  radiochange: function (e) {
    console.log('radio发生change事件，携带的value值为：', e.detail.value)
  },
  goindex: function () {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  gorole: function () {
    wx.navigateTo({
      url: '/pages/role/role',
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