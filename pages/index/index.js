// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    imgUrls:[
      'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/1511141680824_469.png',
      'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/1511141687668_726.png',
      'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/1511141692043_193.png'
    ],
    indicatorDots:'true',
    indicatorColor:'#f5f5f5',
    indicatorActiveColor:'#fa4f52',
    autoplay:'true',

    // 快捷导航数据['跳转路径','图片路径']
    navAttr:[
      [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/informationBulletin.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/myOrder.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/onlineCustomerService.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/promoteProduct.png'
      ]
    ],

    //产品列表数据['跳转路径','图片路径']
    productList:[
      [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/informationBulletin.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/myOrder.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/onlineCustomerService.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/promoteProduct.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/informationBulletin.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/myOrder.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/onlineCustomerService.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/promoteProduct.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/informationBulletin.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/myOrder.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/onlineCustomerService.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/promoteProduct.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/informationBulletin.png'
      ], [
        '#', 'https://longyc-1257050523.cos.ap-beijing.myqcloud.com/images/myOrder.png'
      ]
    ]
  }
})