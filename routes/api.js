var express = require('express');
var router = express.Router();
var glob = require('../public/misc/global.constant.js')

//设置跨域访问  
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == 'OPTIONS') {
    res.status(200)
  }
  else {
    next();
  }
})
//---------------------以下user.service---------------------//
// 用户信息
router.get('/account', function (req, res, next) {
  let _data = {}
  if (req.query.token == 'after') {
    _data = glob.mockData.accountAfter
  } else {
    _data = glob.mockData.account
  }
  res.status(200).send({ data: _data })
})
// token
router.get('/auth/login', function (req, res, next) {
  let req_data = req.query
  let ret = { data: glob.mockData.login_token }
  if (req_data.code !== '') {
    res.status(200).send(ret)
  } else {
    res.status(401)
  }
})
router.get('/auth/refresh_token', function (req, res, next) {
  let ret = { data: glob.mockData.login_token }
  res.status(200).send(ret)
})
// 店铺签名
router.get('/sign', function (req, res, next) {
  let ret = { data: glob.mockData.login_token }
  res.status(200).send(ret)
})
// 头部重要信息提示
router.get('/notice', function (req, res, next) {
  let ret = { data: glob.mockData.notice }
  res.status(200).send(ret)
})
// 店铺扣费规则
router.get('/deduction_rule', function (req, res, next) {
  res.send({ "data": glob.mockData.deductionRule })
})
// 导入进度条
router.get('/progress', function (req, res, next) {
  res.send({ "data": glob.mockData.progress })
})
//---------------------以上user.service---------------------//
//---------------------以下message.service---------------------//
// 短信套餐列表

router.get('/setting_sms_plan', function (req, res, next) {
  res.send({ "data": glob.mockData.settingSmsPlan })
});
// 测试短信联系人列表
router.get('/contact', function (req, res, next) {
  res.send({ "data": glob.mockData.contact })
});
// 测试短信联系人分组列表
router.get('/contact_group', function (req, res, next) {
  res.send({ "data": glob.mockData.contactGroup })
});
// 充值记录
router.get('/setting_order', function (req, res, next) {
  var _data = req.query.type === 'sms' ? glob.mockData.settingSmsOrderS : glob.mockData.settingSmsOrderM
  res.send({ "data": _data })
});
// 消费记录
router.get('/cost_order', function (req, res, next) {
  var _data = {}
  // if (req.query.start_time == '2018-07-01' && req.query.end_time === "2018-07-01") { //时间每天都会变，弹出层会改变
  if (req.query.page != 1) {
    if (req.query.search == 'sms') {
      _data.data = [glob.mockData.costOrderS[0]]
    } else if (req.query.search == 'money') {
      _data.data = [glob.mockData.costOrderM[0]]
    }
    _data.meta = {
      pagination: {
        count: 1, //本页条数
        currentPage: req.query.page, //第几页
        perPage: req.query.per_page, //每页显示多少条
        total: 11, //总条数
        totalPages: 2 //总页数
      }
    }
  } else {
    if (req.query.search == 'sms') {
      _data.data = glob.mockData.costOrderS
    } else if (req.query.search == 'money') {
      _data.data = glob.mockData.costOrderM
    }
    _data.meta = {
      pagination: {
        count: 10, //本页条数
        currentPage: req.query.page, //第几页
        perPage: req.query.per_page, //每页显示多少条
        total: 11, //总条数
        totalPages: 2 //总页数
      }
    }
  }
  res.send({ "data": _data })
});
// 发送明细
router.get('/setting_sms_report', function (req, res, next) {
  var _data = {}
  var _total_pages = 1
  var _total_count = 0
  // 搜索
  if (req.query.search !== '') {
    _data.data = glob.mockData.settingSmsReport.slice(2, 3)
    _data.meta = {
      pagination: {
        total: 1,
        count: 1,
        per_page: parseInt(req.query.per_page), //每页显示多少条
        current_page: 1, //第几页
        total_pages: 1
      }
    }
    return res.send(_data)
  }
  // 近3/7/15日
  if (req.query.day == 3) {
    _data.data = glob.mockData.settingSmsReport.slice(0, 2)
    _total_count = _data.data.length
  } else if (req.query.day == 7) {
    _data.data = glob.mockData.settingSmsReport.slice(0, 5)
    _total_count = _data.data.length
  } else if (req.query.day == 15) {
    if (req.query.page == 1) {
      _data.data = glob.mockData.settingSmsReport.slice(0, 10)
    } else if (req.query.page == 2) {
      _data.data = glob.mockData.settingSmsReport.slice(10)
    }
    _total_count = glob.mockData.settingSmsReport.length
    _total_pages = 2
  }
  _data.meta = {
    pagination: {
      total: _total_count,
      count: _total_count,
      per_page: parseInt(req.query.per_page), //每页显示多少条
      current_page: parseInt(req.query.page), //第几页
      total_pages: _total_pages
    }
  }
  res.send(_data)
});
// 速发短信，发送明细
router.get('/send_sufa_report', function (req, res, next) {
  var _data = {}
  _data.data = glob.mockData.sendSufaReport
  _data.meta = {
    pagination: {
      total: 2,
      count: 2,
      per_page: req.query.per_page, //每页显示多少条
      current_page: req.query.page, //第几页
      total_pages: 1,
      links: []
    }
  }
  res.send({ "data": _data })
});
// 发送任务，
router.get('/send_sufa_task', function (req, res, next) {
  var _data = {}
  _data.data = glob.mockData.sendSufaTask
  _data.meta = {
    pagination: {
      total: 3,
      count: 3,
      per_page: req.query.per_page, //每页显示多少条
      current_page: req.query.page, //第几页
      total_pages: 1,
      links: []
    }
  }
  res.send(_data)
});
// 暂停
// router.get('/send_sufa_task/stop', function (req, res, next) {
//   var _data = {}
//   _data.data = glob.mockData.sendSufaTask
//   _data.meta = {
//     pagination: {
//       total: 2,
//       count: 2,
//       per_page: req.query.per_page, //每页显示多少条
//       current_page: req.query.page, //第几页
//       total_pages: 1,
//       links: []
//     }
//   }
//   res.send({ "data": _data })
// });
// 参考模板



// 获取安全配置信息
router.get('/setting_contact', function (req, res, next) {
  res.send({ "data": glob.mockData.settingContact })
})
// 全局配置信息
router.get('/setting_global', function (req, res, next) {
  res.send({ "data": glob.mockData.settingGlobal })
})
// 客户管理中心
router.get('/server_center', function (req, res, next) {
  var _data = req.query.type === 'wait' ? glob.mockData.serverCenterN : glob.mockData.serverCenterY
  res.send(_data)
})
router.post('/update_server_center', function (req, res, next) {
  res.send({ "data": true })
})
//---------------------以上message.service---------------------//
//---------------------以下marketing.service---------------------//
// 首页服务费
router.get('/service_charge', function (req, res, next) {
  res.send({ "data": glob.mockData.serviceCharge })
})

// 首页销售额
router.get('/output_sales', function (req, res, next) {
  res.send({ "data": glob.mockData.sales })
})
// 营销任务列表
router.get('/marketingjob', function (req, res, next) {
  res.send({ "data": glob.mockData.marketingjob })
})
// 获取单个营销任务
router.get('/marketingjob/:id', function (req, res, next) {
  res.send({ "data": glob.mockData.marketingjobs[req.params.id] })
})
// 购买拓展场景列表
router.get('/buy_market_list', function (req, res, next) {
  var _data = []
  if (req.query.is_after != "after") {
    _data = glob.mockData.buyMarketingList

  } else {
    _data = glob.mockData.buyMarketingListAfter
  }
  res.send({ "data": _data })
})
// 拓展场景购买记录
router.get('/buy_market_order', function (req, res, next) {
  res.send({ "data": glob.mockData.buyMarketOrder })
})

// 效果数据
router.get('/marketingjob/:id/marketing_report', function (req, res, next) {
  res.send({ "data": glob.mockData.marketingReport })
})
// 成果详单
router.get('/marketingjob/:id/marketing_result', function (req, res, next) {
  let _data = {}
  _data.data = glob.mockData.marketingResult
  _data.meta = {
    pagination: {
      count: 10, //本页条数
      current_page: req.query.page, //第几页
      per_page: req.query.per_page, //每页显示多少条
      total: 11, //总条数
      totalPages: 2 //总页数
    }
  }
  _data.data = glob.mockData.marketingResult.slice(-(req.query.day), -(req.query.page))
  if (req.query.search === 'test') {
    _data.data = glob.mockData.marketingResult.slice(1, 2)
  }
  _data.meta.count = _data.data.length
  res.send(_data)
})
// 推送记录
router.get('/marketingjob/:id/marketing_record', function (req, res, next) {
  let _data = {}
  _data.data = glob.mockData.marketingRecord
  _data.meta = {
    pagination: {
      count: 10, //本页条数
      current_page: req.query.page, //第几页
      per_page: req.query.per_page, //每页显示多少条
      total: 11, //总条数
      totalPages: 2 //总页数
    }
  }
  _data.data = glob.mockData.marketingRecord.slice(-(req.query.day), -(req.query.page))
  if (req.query.search === 'test') {
    _data.data = glob.mockData.marketingRecord.slice(1, 2)
  }
  _data.meta.count = _data.data.length
  res.send(_data)
})
// 退订记录
router.get('/marketingjob/:id/marketing_refund', function (req, res, next) {
  let _data = {}
  _data.data = glob.mockData.marketingRefund
  _data.meta = {
    pagination: {
      count: 10, //本页条数
      current_page: req.query.page, //第几页
      per_page: req.query.per_page, //每页显示多少条
      total: 11, //总条数
      totalPages: 2 //总页数
    }
  }
  _data.data = glob.mockData.marketingRefund.slice(-(req.query.day), -(req.query.page))
  if (req.query.search === 'test') {
    _data.data = glob.mockData.marketingRefund.slice(1, 2)
  }
  _data.meta.count = _data.data.length
  res.send(_data)
})
//---------------------以上marketing.service---------------------//


//---------------------以下member.service---------------------//
// 会员分组
router.get('/customer/customer_group', function (req, res, next) {
  res.send({ "data": glob.mockData.customerGroup })
})
// 会员分组
router.get('/customer/group_crm', function (req, res, next) {
  res.send({ "data": glob.mockData.groupCrm })
})
router.get('/customer/customer_category', function (req, res, next) {
  res.send({ "data": glob.mockData.customerCategory })
})

//---------------------以上member.service---------------------//

//---------------------以下goods.service---------------------//

// 获取所有宝贝
router.get('/item', function (req, res, next) {
  res.send({ "data": glob.mockData.items })
})
// 获取类目
router.get('/item_category', function (req, res, next) {
  res.send({ "data": glob.mockData.itemCategory })
})



//---------------------以上goods.service---------------------//

module.exports = router;
