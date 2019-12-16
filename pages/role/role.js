// pages/role/role.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus: true,  //聚焦 
    roles: [
      { value: 'warrior', imga: '/image/role/warrior.jpg' },
      { value: 'mage', imga: '/image/role/mage.jpg' },
      { value: 'hunter', imga: '/image/role/hunter.jpg' },
      { value: 'priest', imga: '/image/role/priest.jpg' },
      { value: 'rogue', imga: '/image/role/rogue.jpg' },
      { value: 'warlock', imga: '/image/role/warlock.jpg' },
      { value: 'druid', imga: '/image/role/druid.jpg' },
      { value: 'paladin', imga: '/image/role/paladin.jpg' },
      { value: 'shaman', imga: '/image/role/shaman.jpg' },
      { value: 'death-knight', imga: '/image/role/death-knight.jpg' },
      { value: 'monk', imga: '/image/role/monk.jpg' },
      { value: 'demon-hunter', imga: '/image/role/demon-hunter.jpg' },
    ],
  },
  radioc: function (e) {
    var roles = this.data.roles;
    for (var i = 0; i < roles.length; ++i) {
      roles[i].checked = roles[i].value == e.detail.value
    }
    console.log(roles)
    this.setData({
      roles: roles,
    });
  },
  gomain: function () {
    wx.navigateTo({
      url: '/pages/main/main',
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