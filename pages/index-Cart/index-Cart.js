// pages/index-Cart/index-Cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    compileSite:'北京市 北京市 昌平区 西三旗 西三旗桥东 新龙大厦 B1121号',
    compileText:'编辑',
    compileIf:true,//是否购买商品
    anonymous:false,//是否暂无记录
    totalPrice:0.00,//购物车总价
    goodsAttr:[
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531732002314_384.jpg',
        goodsName: '哈强原味海锥500g（因天气原因，乡镇及偏远地区购买前请联系客服，敬请谅解！！！）',
        goodsPrice: 28,
        goodsNum:1,
        goodsClose:false
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531734131797_759.jpg',
        goodsName: '丹东东港黄海大黄蚬子干250g/袋',
        goodsPrice: 39.8,
        goodsNum: 1,
        goodsClose: false
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531734137804_333.jpg',
        goodsName: '夫润虹香辣杂色蛤肉120g（因天气原因，乡镇及偏远地区购买前请联系客服，敬请谅解！！！）',
        goodsPrice: 63.8,
        goodsNum: 1,
        goodsClose: false
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531751465366_119.jpg',
        goodsName: '冰媚儿冰冻草莓150g*4/盒（因天气原因，乡镇及偏远地区购买前请联系客服，敬请谅解！！！）',
        goodsPrice: 28,
        goodsNum: 1,
        goodsClose: false
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531791066651_410.jpg',
        goodsName: '阿尔帝红烧黄花鱼（红盒）100g/罐',
        goodsPrice: 7,
        goodsNum: 1,
        goodsClose: false
      },
      {
        goodsUrl: '#',
        goodsImg: '../../datas/1531734131797_759.jpg',
        goodsName: '丹东东港黄海大黄蚬子干250g/袋',
        goodsPrice: 39.8,
        goodsNum: 1,
        goodsClose: false
      }
    ],
  },

  //计算合计
  aggregation(){
    let goodsAttrLength = this.data.goodsAttr.length;
    let goodsAttr = this.data.goodsAttr;
    let totalPrices = 0;
    for (let i = 0; i < goodsAttrLength; i++) {
      if (goodsAttr[i].goodsClose) {
        let goodsPrice = goodsAttr[i].goodsPrice;//价格
        let goodsNum = goodsAttr[i].goodsNum;//数量
        totalPrices = totalPrices + (goodsPrice * goodsNum);
      }
    };
    totalPrices = parseFloat(totalPrices).toFixed(2);
    this.setData({
      totalPrice: totalPrices
    });
  },

  //控制全选商品
  AllGoods(){
    let goodsAttrLength = this.data.goodsAttr.length;
    let goodsAttr = this.data.goodsAttr;
    let goodsClose = true;
    for (let i = 0; i < goodsAttrLength;i++){
      if (goodsAttr[i].goodsClose == false){
        goodsClose = false;
      }
    };
    this.setData({

    });
  },

  //编辑商品
  compileText: function(obj){
    if (this.data.compileIf){
      this.setData({
        compileIf:false,
        compileText:'完成'
      });
    }else{
      this.setData({
        compileIf:true,
        compileText:'编辑'
      });
    };
  },

  //购物车选中
  goodsClose: function(obj){
    let index = obj.target.dataset.index;
    let goodsAttr = this.data.goodsAttr;
    if (goodsAttr[index].goodsClose){
      goodsAttr[index].goodsClose = false;
    }else{
      goodsAttr[index].goodsClose = true;
    }
    this.setData({
      goodsAttr: goodsAttr
    });
    this.aggregation();
  },

  //数量加加
  goodsNumAdd:function(obj){
    let index = obj.currentTarget.dataset.index;
    let goodsAttr = this.data.goodsAttr;
    goodsAttr[index].goodsNum = goodsAttr[index].goodsNum+1;
    this.setData({
      goodsAttr: goodsAttr
    });
    this.aggregation();
  },

  //数量减减
  goodsNumMinus: function (obj) {
    let index = obj.currentTarget.dataset.index;
    let goodsAttr = this.data.goodsAttr;
    if (goodsAttr[index].goodsNum - 1 > 0) {
      goodsAttr[index].goodsNum = goodsAttr[index].goodsNum - 1;
      this.setData({
        goodsAttr: goodsAttr
      });
      this.aggregation();
    }
  },

  //监听页面初次渲染完成
  onReady: function () {
    this.aggregation();
  }
})