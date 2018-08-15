// pages/index-storewide/index-storewide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    atPresent:false,
    atPresentImg:'../../img/productList2.png',
    merchandiseModel:1,//默认样式
    goodsTabNum:2,
    goodsPaging:0, //分页
    goodsAttr:[],//显示列表
    scrollHeight:0,//初始高度
    scrollTop:0,//滚动条显示的位置
    returnTop:false,//返回顶部
    pogeAttr:[//每次请求回来的数据
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531732002314_384.jpg',
        goodsName: '哈强原味海锥500g（因天气原因，乡镇及偏远地区购买前请联系客服，敬请谅解！！！）',
        goodsPrice: '28',
        goodsSales: '2570'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531734131797_759.jpg',
        goodsName: '丹东东港黄海大黄蚬子干250g/袋',
        goodsPrice: '39.8',
        goodsSales: '3361'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531734137804_333.jpg',
        goodsName: '夫润虹香辣杂色蛤肉120g（因天气原因，乡镇及偏远地区购买前请联系客服，敬请谅解！！！）',
        goodsPrice: '63.8',
        goodsSales: '366'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531751465366_119.jpg',
        goodsName: '冰媚儿冰冻草莓150g*4/盒（因天气原因，乡镇及偏远地区购买前请联系客服，敬请谅解！！！）',
        goodsPrice: '28',
        goodsSales: '10043'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531791066651_410.jpg',
        goodsName: '阿尔帝红烧黄花鱼（红盒）100g/罐',
        goodsPrice: '7',
        goodsSales: '127'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531734131797_759.jpg',
        goodsName: '丹东东港黄海大黄蚬子干250g/袋',
        goodsPrice: '39.8',
        goodsSales: '3361'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531734137804_333.jpg',
        goodsName: '夫润虹香辣杂色蛤肉120g（因天气原因，乡镇及偏远地区购买前请联系客服，敬请谅解！！！）',
        goodsPrice: '63.8',
        goodsSales: '366'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531751465366_119.jpg',
        goodsName: '冰媚儿冰冻草莓150g*4/盒（因天气原因，乡镇及偏远地区购买前请联系客服，敬请谅解！！！）',
        goodsPrice: '28',
        goodsSales: '10043'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531791066651_410.jpg',
        goodsName: '阿尔帝红烧黄花鱼（红盒）100g/罐',
        goodsPrice: '7',
        goodsSales: '127'
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531791066651_410.jpg',
        goodsName: '阿尔帝红烧黄花鱼（红盒）100g/罐',
        goodsPrice: '7',
        goodsSales: '127'
      },
    ]
  },

  //初始化完成
  onLoad: function(){
    var that = this;
    let goodsPagings = this.data.goodsPaging;
    let pogeAttrs = this.data.pogeAttr;
    let goodsAttrs = this.data.goodsAttr;
    //创建节点选择器
    var query = wx.createSelectorQuery();
    //选择id
    query.select('#merchandise').boundingClientRect();
    query.exec(function (obj) {
      that.setData({
        goodsPaging: goodsPagings + 1,
        goodsAttr: goodsAttrs.concat(pogeAttrs),
        scrollHeight: obj[0].height
      });
    });
    

  },

  //点击切换商品显示样式
  tabType: function (obj) {
    if (this.data.atPresent){
      this.setData({
        atPresent: false,
        atPresentImg: '../../img/productList2.png',
        merchandiseModel: 1
      })
    }else{
      this.setData({
        atPresent: true,
        atPresentImg: '../../img/productList1.png',
        merchandiseModel: 2
      })
    }
  },

  //点击商品类目切换
  goodsTabColor:function(obj){
    this.setData({
      goodsTabNum:obj.currentTarget.dataset.index,
    })
  },

  //商品位置监听
  goodsLoadScroll:function(obj){
    let tops = obj.detail.scrollTop;
    if (this.data.scrollHeight < tops){
      this.setData({
        returnTop:true
      });
    }else{
      this.setData({
        returnTop: false
      });
    }
  },

  //商品列表返回顶部
  returnTop: function(obj){
    this.setData({
      scrollTop:0
    });
  },

  //商品下拉加载
  goodsLoadMore:function(obj){
    wx.showLoading({
      'title':'正在加载'
    });
    let goodsPagings = this.data.goodsPaging;
    let pogeAttrs = this.data.pogeAttr;
    let goodsAttrs = this.data.goodsAttr;
    this.setData({
      goodsPaging: goodsPagings+1,
      goodsAttr: goodsAttrs.concat(pogeAttrs)
    });
    /*if (this.data.goodsPaging>=10){
      console.log('+分页')
    }*/
    setTimeout(function () {
      wx.hideLoading()
    }, 100)
  }
})