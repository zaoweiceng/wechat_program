// pages/perTo01/perTo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listH: [
      {
        listName: '计算机学院',
        item: [{
          itemName: '计算机科学与技术',
          url: 'compSciTec'
        },{
          itemName: '数字媒体技术',
          url: 'digitalMedia',
        },{
          itemName: '智能科学与技术',
          url: 'intellSciTec',
        }]
      },
      {
        listName: '大气科学学院',
        item: [{
          itemName: '大气科学',
          url: 'atmosphericSci',
        }, {
          itemName: '应用气象学',
          url: 'appliedMeteo',
        }]
      },
      {
        listName: '外国语学院',
        item: [{
          itemName: '英语',
          url: 'english',
        },{
          itemName: '翻译',
          url: 'translation',
        }]
      },
      {
        listName: '网络空间安全学院',
        item: [{
          itemName: '信息安全',
          url: 'infoSecurity'
        }, {
        itemName: '网络工程',
          url: 'netEng',
        }, {
          itemName: '物联网工程',
          url: 'thingsNetEng',
        }, {
          itemName: '信息对抗技术',
          url: 'infoConfront',
        }]
      },
      {
        listName: '应用数学学院',
        item: [{
          itemName: '信息与计算科学',
          url: 'infoCompSci'
        }, {
          itemName: '数学与应用数学',
          url: 'appliedMath',
        }]
      },
      {
        listName: '软件工程学院',
        item: [{
          itemName: '软件工程',
          url: 'softwareEng'
        }, {
          itemName: '空间信息与数字技术',
          url: 'spaceInfoDigitalTec',
        },{
          itemName: '数据科学与大数据技术',
          url: 'dataSciBigData',
        }]
      },
      {
        listName: '控制工程学院',
        item: [{
          itemName: '自动化',
          url: 'automation',
        }, {
          itemName: '测控技术与仪器',
          url: 'measureControl'
        }, {
          itemName: '电气工程及其自动化',
          url: 'ElecEng',
        }, {
          itemName: '机械电子工程',
          url: 'mecEleEng',
        }, {
          itemName: '机器人工程',
          url: 'robotEng',
        }]
      },
      {
        listName: '电子工程(大气探测)学院',
        item: [{
          itemName: '电子信息工程',
          url: 'eleInfoEng'
        }, {
          itemName: '电子信息科学与技术',
          url: 'eleInfoSciTec',
        }, {
          itemName: '生物医学工程',
          url: 'biomediEng',
        }]
      },
      {
        listName: '通信工程(微电子)学院',
        item: [{
          itemName: '通信工程',
          url: 'commEng'
        }, {
          itemName: '微电子科学与工程',
          url: 'tinyEleSceEng',
        }, {
          itemName: '集成电路设计与集成系统',
          url: 'integratSys',
        }]
      },
      {
        listName: '光电工程学院',
        item: [{
          itemName: '电子科学与技术',
          url: 'EleSciTec'
        }, {
          itemName: '光电信息科学与工程',
          url: 'LitEleSciEng',
        }, {
          itemName: '应用物理学',
          url: 'appliedPhysics',
        }, {
          itemName: '材料物理',
          url: 'materialPhysics',
        }]
      },
      {
        listName: '资源环境学院',
        item: [{
          itemName: '环境工程',
          url: 'environmentEng'
        }, {
          itemName: '环境科学',
          url: 'environmentSci',
        }, {
          itemName: '地理信息科学',
          url: 'geographInfoSci',
        }, {
          itemName: '遥感科学与技术',
          url: 'remoteSence',
        }, {
          itemName: '测绘工程',
          url: 'surveyMapEng',
        }]
      },],
    listL:[
      {
        listName: '统计学院',
        item: [{
          itemName: '统计学',
          url: 'statistics'
        }, {
          itemName: '经济统计学',
          url: 'ecoStatistics',
        }, {
          itemName: '金融工程',
          url: 'financialEng',
        }, {
          itemName: '国际经济与贸易',
          url: 'ecoTrade',
        }]
      },
      {
        listName: '管理学院',
        item: [{
          itemName: '人力资源管理',
          url: 'humanResManage',
        }, {
          itemName: '旅游管理',
          url: 'tourismManage',
        }, {
          itemName: '会展经济与管理',
          url: 'ecoManage',
        }, {
          itemName: '行政管理',
          url: 'adminManage',
        }, {
          itemName: '财务管理',
          url: 'financeManage',
        }, {
          itemName: '市场营销',
          url: 'marketing',
        }, {
          itemName: '会计',
          url: 'account',
        }]
      },
      {
        listName: '文化艺术学院',
        item: [{
          itemName: '视觉传达设计',
          url: 'visualCommDes'
        }, {
          itemName: '汉语言文学',
          url: 'chiLangLiterature',
        }, {
          itemName: '汉语国际教育',
          url: 'chiInterEdu',
        }, {
          itemName: '社会工作',
          url: 'socialWork',
        }]
      },
      {
        listName: '物流学院',
        item: [{
          itemName: '电子商务',
          url: 'EleCommerce'
        }, {
          itemName: '物流管理',
          url: 'logisticsManage',
        }, {
          itemName: '物流工程',
          url: 'logisticsEng',
        }, {
          itemName: '工程管理',
          url: 'EngManage',
        }, {
          itemName: '信息管理与信息系统',
          url: 'infoManageSys',
        }]
      }
    ]
  },

  //点击最外层列表展开收起
  listTapH(e) {
    let Index = e.currentTarget.dataset.parentindex,//获取点击的下标值
      listH = this.data.listH;
    listH[Index].show = !listH[Index].show || false;//变换其打开、关闭的状态
    if (listH[Index].show) {//如果点击后是展开状态，则让其他已经展开的列表变为收起状态
      this.packUp(listH, Index);
    }

    this.setData({ listH: listH });
  },
  //点击里面的子列表展开收起
  listItemTapH(e) {
    let parentindex = e.currentTarget.dataset.parentindex,//点击的内层所在的最外层列表下标
      Index = e.currentTarget.dataset.index,//点击的内层下标
      listH = this.data.listH;
    listH[parentindex].item[Index].show = !listH[parentindex].item[Index].show || false;//变换其打开、关闭的状态
    if (listH[parentindex].item[Index].show) {//如果是操作的打开状态，那么就让同级的其他列表变为关闭状态，保持始终只有一个打开
      for (let i = 0, len = listH[parentindex].item.length; i < len; i++) {
        if (i != Index) {
          listH[parentindex].item[i].show = false;
        }

      }
    }
    this.setData({listH: listH});
  },


  
  //点击最外层列表展开收起
  listTapL(e) {
    let Index = e.currentTarget.dataset.parentindex,//获取点击的下标值
      listL = this.data.listL;
    listL[Index].show = !listL[Index].show || false;//变换其打开、关闭的状态
    if (listL[Index].show) {//如果点击后是展开状态，则让其他已经展开的列表变为收起状态
      this.packUp(listL, Index);
    }

    this.setData({ listL: listL });
  },
  //点击里面的子列表展开收起
  listItemTapL(e) {
    let parentindex = e.currentTarget.dataset.parentindex,//点击的内层所在的最外层列表下标
      Index = e.currentTarget.dataset.index,//点击的内层下标
      listL = this.data.listL;
    listL[parentindex].item[Index].show = !listL[parentindex].item[Index].show || false;//变换其打开、关闭的状态
    if (listL[parentindex].item[Index].show) {//如果是操作的打开状态，那么就让同级的其他列表变为关闭状态，保持始终只有一个打开
      for (let i = 0, len = listL[parentindex].item.length; i < len; i++) {
        if (i != Index) {
          listL[parentindex].item[i].show = false;
        }

      }
    }
    this.setData({ listL: listL });
  },
  //让所有的展开项，都变为收起
  packUp(data, index) {
    for (let i = 0, len = data.length; i < len; i++) {//其他最外层列表变为关闭状态
      if (index != i) {
        data[i].show = false;
        for (let j = 0; j < data[i].item.length; j++) {//其他所有内层也为关闭状态
          data[i].item[j].show = false;
        }
      }
    }
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