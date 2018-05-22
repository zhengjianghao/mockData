module.exports = {
    mockData: {
        //---------------------以下user.service---------------------//
        // 用户信息
        account: {
            ali_sms_remain: 0,
            created_at: "2018-03-13 11:18:49",
            expired_date: 181,
            modified: "2018-03-14 11:00:08",
            money_remain: "350.0000",
            ordinary_sms_remain: 1999,
            sign: "d[s477694964]",
            tips: 0,
            type: "p4p",
            user_id: 2196246209,
            user_nick: "ai_love426"
        },
        accountAfter: {
            ali_sms_remain: 0,
            created_at: "2018-03-13 11:18:49",
            expired_date: 181,
            modified: "2018-03-14 11:00:08",
            money_remain: "650.0000",
            ordinary_sms_remain: 2300,
            sign: "d[s477694964]",
            tips: 0,
            type: "p4p",
            user_id: 2196246209,
            user_nick: "ai_love426"
        },
        // token
        login_token: {
            data: 'code_123456'
        },
        // 店铺签名
        sign_name: {
            data: 'sign_name_123'
        },
        // 头部重要信息提示
        notice: [
            {
                type: 'IMPORT',
                value: '请前去导入'
            }, {
                type: 'EDITGOODS',
                value: '请修改宝贝短名'
            }
        ],
        deductionRule: {
            name: 'test',
            rate: '0.07'
        },
        progress: {
            is_show: true,
            progress_info: [
                { text: '同步订单', finish_time: '2018-04-13 10:18:46', state: 'success' },
                { text: '合并订单', finish_time: '2018-04-13 10:18:46', state: 'success' },
                { text: '会员流转', finish_time: '2018-04-13 10:18:46', state: 'success' },
                { text: 'AI潜需运算', finish_time: '', state: 'wait' },
                { text: '完成并开启', finish_time: '', state: 'wait' }
            ]
        },
        //---------------------以上user.service---------------------//
        //---------------------以下message.service---------------------//
        // 测试短信联系人列表
        contact: [{
            id: 410,
            mobile: '13676810804',
            name: "金木"
        }, {
            id: 412,
            name: "ces",
            mobile: "13265362365"
        }, {
            id: 413,
            name: "des",
            mobile: "13264561825"
        }, {
            id: 412,
            name: "adaf",
            mobile: "15326548612"
        }, {
            id: 415,
            name: "we",
            mobile: "13265362365"
        }, {
            id: 416,
            name: "rew",
            mobile: "13254564859"
        }, {
            id: 417,
            name: "cx",
            mobile: "18657036006"
        }, {
            id: 418,
            name: "xy",
            mobile: "18158501412"
        }, {
            id: 421,
            name: "hyy",
            mobile: "15957014383"
        }, {
            id: 422,
            name: "myj",
            mobile: "17816875759"
        }, {
            id: 423,
            name: "fae",
            mobile: "13265436565"
        }, {
            id: 424,
            name: "ggv",
            mobile: "13262645365"
        }, {
            id: 425,
            name: "xyd",
            mobile: "13265366565"
        }],
        // 充值列表
        settingSmsPlan: [{
            id: 6,
            item_price: 50,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334943-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "LOW",
            sms_count: 1000,
            sms_unit_price: 0.05
        }, {
            id: 7,
            item_price: 392,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000335206-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "LOW",
            sms_count: 8000,
            sms_unit_price: 0.049
        }, {
            id: 8,
            item_price: 768,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334877-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "LOW",
            sms_count: 16000,
            sms_unit_price: 0.048
        }, {
            id: 9,
            item_price: 1504,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000335133-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "LOW",
            sms_count: 32000,
            sms_unit_price: 0.047
        }, {
            id: 10,
            item_price: 2944,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000335040-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "LOW",
            sms_count: 64000,
            sms_unit_price: 0.046
        }, {
            id: 11,
            item_price: 5632,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334879-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "LOW",
            sms_count: 128000,
            sms_unit_price: 0.044
        }, {
            id: 12,
            item_price: 10752,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "LOW",
            sms_count: 256000,
            sms_unit_price: 0.042
        }, {
            id: 13,
            item_price: 300,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 14,
            item_price: 1000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 13,
            item_price: 2000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 13,
            item_price: 5000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 13,
            item_price: 10000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 13,
            item_price: 15000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 13,
            item_price: 20000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 13,
            item_price: 30000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 13,
            item_price: 40000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }, {
            id: 13,
            item_price: 50000,
            order_url: "https://fuwu.taobao.com/ser/assemble_param.htm?activityCode=&promIds=&subParams=itemCode%3AFW_GOODS-1000334882-1%2CcycleNum%3A100%2CcycleUnit%3A1&commonParams=onlyContent%3A1%3BoutTradeType%3A2849143012%3BappKey%3A23497488",
            sms_channel: "P4PMONEY",
            sms_count: 0,
            sms_unit_price: ''
        }],
        // 测试短信联系人分组列表
        contactGroup: [
            {
                contacts: [
                    {
                        id: 410,
                        mobile: '13676810804',
                        name: "金木"
                    }, {
                        id: 412,
                        name: "ces",
                        mobile: "13265362365"
                    }
                ],
                group_member_count: 2,
                group_name: "test1",
                id: 1
            },
            {
                contacts: [
                    {
                        id: 410,
                        mobile: '13676810804',
                        name: "金木"
                    }
                ],
                group_member_count: 1,
                group_name: "test2",
                id: 2
            },
        ],
        // 充值记录
        settingSmsOrderM: [
            {
                before_payment: 0,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 10,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 20,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 30,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 40,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 50,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 60,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 70,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 80,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 90,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 100,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 110,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 120,
                type: " P4PMONEY",
            }, {
                before_payment: 10,
                channel: "预付费",
                pay_time: 1520838001000,
                payment: 10,
                remain: 130,
                type: " P4PMONEY",
            }
        ],
        settingSmsOrderS: [
            {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 10,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 20,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 30,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 40,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 50,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 60,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 70,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 80,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 90,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 100,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 110,
                type: "买家充值"
            }, {
                before_payment: 0,
                channel: "自用短信",
                pay_time: 1520924868000,
                payment: 10,
                remain: 120,
                type: "买家充值"
            }
        ],
        // 消费记录
        costOrderM: [
            {
                use_date: 1520924868000,
                buyer_nick: 'test',
                use_way: '预付费',
                marketing_task: '测试发送',
                tid: '135435165465',
                use_money: 20.2
            }, {
                use_date: 1520923868000,
                buyer_nick: '165',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 0.2
            }, {
                use_date: 1530424868000,
                buyer_nick: '165',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 0.2
            }, {
                use_date: 1521024868000,
                buyer_nick: '6893215',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 3.2
            }, {
                use_date: 1520923868000,
                buyer_nick: '165',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 0.2
            }, {
                use_date: 1530424868000,
                buyer_nick: '165',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 0.2
            }, {
                use_date: 1521024868000,
                buyer_nick: '6893215',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 3.2
            }, {
                use_date: 1520923868000,
                buyer_nick: '165',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 0.2
            }, {
                use_date: 1530424868000,
                buyer_nick: '165',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 0.2
            }, {
                use_date: 1521024868000,
                buyer_nick: '6893215',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 3.2
            }, {
                use_date: 1521024868000,
                buyer_nick: '6893215',
                use_way: '预付费',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 3.2
            }
        ],
        costOrderS: [
            {
                use_date: 1521024868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '测试发送',
                tid: '135435165465',
                use_money: 1
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '测试发送',
                tid: '135435165465',
                use_money: 2
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 1
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '测试发送',
                tid: '135435165465',
                use_money: 2
            }, {
                use_date: 1521264868000,
                buyer_nick: '大师傅',
                use_way: '自用短信',
                marketing_task: '初评关怀',
                tid: '112136514',
                use_money: 1
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '测试发送',
                tid: '135435165465',
                use_money: 2
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 1
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '测试发送',
                tid: '135435165465',
                use_money: 2
            }, {
                use_date: 1521264868000,
                buyer_nick: '大师傅',
                use_way: '自用短信',
                marketing_task: '初评关怀',
                tid: '112136514',
                use_money: 1
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '测试发送',
                tid: '135435165465',
                use_money: 2
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '默认催付',
                tid: '135435165465',
                use_money: 1
            }, {
                use_date: 1521224868000,
                buyer_nick: '6893215',
                use_way: '自用短信',
                marketing_task: '测试发送',
                tid: '135435165465',
                use_money: 2
            }, {
                use_date: 1521264868000,
                buyer_nick: '大师傅',
                use_way: '自用短信',
                marketing_task: '初评关怀',
                tid: '112136514',
                use_money: 1
            }
        ],
        // 发送明细
        settingSmsReport: [
            {
                buyer_nick: "cmk",
                send_time: "2018-03-13 17:24:07",
                channel: "普通通道",
                marketing_job: "测试发送",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送12",
                sms_count: 1,
                name_type: "seller"
            },
            {
                buyer_nick: "18358107404",
                send_time: "2018-03-08 09:28:35",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】 c.tb.cn/c.Y2wWP ",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810855",
                send_time: "2018-03-07 09:22:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸡工作室重生】测试发送10",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810853",
                send_time: "2018-03-05 09:11:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送9",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810822",
                send_time: "2018-03-01 09:11:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送8",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810866",
                send_time: "2018-02-27 09:11:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送7",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810777",
                send_time: "2018-02-25 09:11:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送6",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810888",
                send_time: "2018-02-22 09:11:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送5",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810000",
                send_time: "2018-02-20 09:11:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送4",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810999",
                send_time: "2018-02-20 03:13:14",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送3",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810222",
                send_time: "2018-02-16 09:11:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送2",
                sms_count: 1,
                name_type: "buyer"
            },
            {
                buyer_nick: "13676810851",
                send_time: "2018-02-15 09:11:34",
                channel: "普通通道",
                marketing_job: "速发短信",
                price: "0.051",
                content: "【火鸟工作室重生】测试发送1",
                sms_count: 1,
                name_type: "buyer"
            }
        ],
        // 速发短信发送明细
        sendSufaReport: [
            {
                member_id: "18358107404",
                marketing_time: "2018-03-08 09:28:35",
                phone: "18358107404",
                marketing_status: "已营销",
                name: 'test1'
            },
            {
                member_id: "13676810804",
                marketing_time: "2018-03-08 09:11:34",
                phone: "13676810804",
                marketing_status: "已营销",
                name: 'test2'
            }
        ],
        // 速发任务
        sendSufaTask: [{
            num: '1',
            task_id: '12354',
            set_time: '2014-14-01 12:21',
            task_name: '测试一',//任务名
            send_time_start: '2014-14-01 12:21',//发送时间
            send_channel: '普通通道',//送通道
            send_all_num: '20032',//总发送数
            status: '待发送',//处理进度
            send_time_end: '2014-14-01 12:21',//发完时间
            send_success_num: '13612',//|总发送成功数
            send_defeat_num: '2135', //总发送失败数
            items: '士大夫士大夫',// | 发送宝贝
            message_text: '手动阀地方',// | 发送内容
            receiver: '123456789012345678901234567890123456789012345678901234567890',// | 接收人
            is_stop: true,
            can_stop: true,
            stop_reason: '用户停止',
        }, {
            num: '2',
            task_id: '12354',
            set_time: '2014-14-01 12:21',
            task_name: '测试二',//任务名
            send_time_start: '2014-14-01 12:21',//发送时间
            send_channel: '普通通道',//送通道
            send_all_num: '20032',//总发送数
            status: '待发送',//处理进度
            send_time_end: '2014-14-01 12:21',//发完时间
            send_success_num: '13612',//|总发送成功数
            send_defeat_num: '2135', //总发送失败数
            items: '士大夫士大夫',// | 发送宝贝
            message_text: '手动阀地方',// | 发送内容
            receiver: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',// | 接收人
            is_stop: false,
            can_stop: true,
            stop_reason: '',
        }, {
            num: '2',
            task_id: '12354',
            set_time: '2014-14-01 12:21',
            task_name: '测试二',//任务名
            send_time_start: '2014-14-01 12:21',//发送时间
            send_channel: '普通通道',//送通道
            send_all_num: '20032',//总发送数
            status: '待发送',//处理进度
            send_time_end: '2014-14-01 12:21',//发完时间
            send_success_num: '13612',//|总发送成功数
            send_defeat_num: '2135', //总发送失败数
            items: '士大夫士大夫',// | 发送宝贝
            message_text: '手动阀地方',// | 发送内容
            receiver: '阿斯蒂芬啊',// | 接收人
            is_stop: false,
            can_stop: false,
            stop_reason: '超时不能停止或删除',
        }],
        // 安全配置信息
        settingContact: {
            ADMIN_MOBILE: "15669922253",
            ADMIN_NAME: "测试用",
            EMAIL: "284169035@qq.com",
            QQ: "",
            REMIND_MOBILE: "13015522602",
            WANGWANG: "juanjuan_9071"
        },
        settingGlobal: {
            CONSIGN_NODE: "16:00",
            IS_HIDE_ID: "1",
            IS_HIDE_NAME: "1",
            IS_HIDE_PHONE: "1",
            IS_INITIALIZATION: "1",
            MERGED_TRADE_INTERVAL: "12",
            MERGED_TRADE_ISCOVER: "1",
            NOPAYED_IN_MONTH: "1",
            PAYED_IN_MONTH: "2",
            PAYED_IN_WEEK: "4"
        },
        serverCenterN: {
            data: [
                {
                    id: 1,
                    send_time: '2017-10-11 12:24:11', //或者是时间戳
                    user_name: '12354',
                    buyer_nick: '预付费',
                    marketing_task: '拍下即时营销',
                    content: '2135436216958465',
                    use_money: '223',
                    state: '待处理'
                }, {
                    id: 2,
                    send_time: '2017-10-11 12:24:11', //或者是时间戳
                    user_name: '12354',
                    buyer_nick: '预付费',
                    marketing_task: '拍下即时营销',
                    content: '2135436216958465',
                    use_money: '223',
                    state: '待处理'
                }
            ],
            meta: {
                pagination: {
                    count: 1,
                    current_page: 1,
                    per_page: 10,
                    total: 1,
                    total_pages: 1
                }
            }
        },
        serverCenterY: {
            data: [
                {
                    send_time: '2017-10-11 12:24:11', //或者是时间戳
                    user_name: '12354',
                    buyer_nick: '预付费',
                    marketing_task: '拍下即时营销',
                    content: '2135436216958465',
                    use_money: '223',
                    state: '已处理'
                }, {
                    send_time: '2017-10-11 12:24:11', //或者是时间戳
                    user_name: '12354',
                    buyer_nick: '预付费',
                    marketing_task: '拍下即时营销',
                    content: '2135436216958465',
                    use_money: '223',
                    state: '已处理'
                }
            ],
            meta: {
                pagination: {
                    count: 1,
                    current_page: 1,
                    per_page: 10,
                    total: 1,
                    total_pages: 1
                }
            }
        },
        //---------------------以上message.service---------------------//

        //---------------------以上marketing.service---------------------//
        // 首页服务费
        serviceCharge: [],
        // 首页销售额
        sales: [],
        // 营销任务列表
        marketingjob: [
            {
                "id": 26184,
                "title": "即时营销",
                "start_time": "0000-00-00 00:00:00",
                "end_time": "0000-00-00 00:00:00",
                "activity_time": "0000-00-00 00:00:00",
                "status": "CLOSED",
                "activity_status": "ACTIVITY",
                "type": "PAYED_P4P_SYS",
                "filter_option": "{\"status\":\"\",\"deadline\":[],\"trigger_time\":\"\",\"send_time\":\"\",\"items\":[],\"trade_from\":\"\",\"items_range\":{\"include\":[],\"exclude\":[]},\"interval\":1,\"activity_type\":[],\"payment\":[],\"created\":[],\"group\":{\"category_id\":1,\"group_id\":[],\"is_first\":\"\",\"is_item\":\"\"},\"buyer_message\":\"\",\"seller_flag\":[],\"reminder\":{\"time\":\"24\",\"mobile\":\"\"},\"send_type\":\"sms\",\"message\":\"\\u3010\\u7b7e\\u540d\\u3011\\u4eb2\\uff0c\\u60a8\\u53ef\\u80fd\\u8fd8\\u9700\\u8981\\u3010\\u3011\\uff0c\\u4e00\\u8d77\\u4e70\\u66f4\\u7701\\u5fc3\\u5965^_^\\u6233\"}",
                "is_system": 1,
                "is_shared": 1,
                "sms_channel": "普通通道"
            },
            {
                "id": 26185,
                "title": "跟随潜需式营销",
                "start_time": "0000-00-00 00:00:00",
                "end_time": "0000-00-00 00:00:00",
                "activity_time": "0000-00-00 00:00:00",
                "status": "CLOSED",
                "activity_status": "ACTIVITY",
                "type": "POTENTIAL_P4P_SYS",
                "filter_option": "{\"interval\":\"\",\"items\":[],\"deadline\":[],\"group\":{\"category_id\":1,\"group_id\":[],\"is_first\":\"\",\"is_item\":\"\"},\"created\":[],\"trade_from\":\"\",\"activity_type\":[],\"payment\":[],\"buys\":[],\"items_range\":{\"include\":[],\"exclude\":[]},\"pay_time\":[],\"consign_time\":[],\"sign_time\":[],\"end_time\":[],\"buyer_message\":\"\",\"seller_flag\":[],\"reminder\":{\"time\":\"24\",\"mobile\":\"\"},\"send_time\":\"\",\"exclude_time\":[\"22:00\",\"8:30\"],\"ahead_time\":\"true\",\"send_type\":\"sms\",\"message\":\"\\u3010\\u7b7e\\u540d\\u3011\\u4eb2\\uff0c\\u597d\\u4e45\\u4e0d\\u89c1 \\u60f3\\u60a8\\u4e86^_^ \\u60a8\\u5bf9\\u3010\\u3011\\u6709\\u5174\\u8da3\\u5417\\uff0c\\u6233\"}",
                "is_system": 1,
                "is_shared": 1,
                "sms_channel": "普通通道"
            },
            {
                "id": 26186,
                "title": "到达所在城市提醒",
                "start_time": "0000-00-00 00:00:00",
                "end_time": "0000-00-00 00:00:00",
                "activity_time": "0000-00-00 00:00:00",
                "status": "CLOSED",
                "activity_status": "ACTIVITY",
                "type": "SENDREMIND_P4P_SYS",
                "filter_option": "{\"deadline\":[],\"trigger_node\":\"0\",\"send_time\":[\"08:30\",\"22:00\"],\"send_time_behind\":true,\"trade_from\":\"\",\"send_times\":1,\"activity_type\":[],\"items_range\":{\"include\":[],\"exclude\":[]},\"payment\":[],\"created\":[],\"group\":{\"category_id\":\"\",\"group_id\":[]},\"buyer_message\":\"\",\"seller_flag\":[],\"reminder\":{\"time\":\"24\",\"mobile\":\"\"},\"send_type\":\"sms\",\"message\":\"【签名】亲爱的<收件人全名>，您的【<订单主商品短名>】已到你的城市，请安排查收，<快递公司><快递单号>，有事呼我们：）\"}",
                "is_system": 1,
                "is_shared": 1,
                "sms_channel": "普通通道"
            }
        ],
        marketingjobs: {
            "26184": {
                "id": 26184,
                "title": "即时营销",
                "start_time": "0000-00-00 00:00:00",
                "end_time": "0000-00-00 00:00:00",
                "activity_time": "0000-00-00 00:00:00",
                "status": "CLOSED",
                "activity_status": "ACTIVITY",
                "type": "PAYED_P4P_SYS",
                "filter_option": "{\"status\":\"\",\"deadline\":[],\"trigger_time\":\"\",\"send_time\":\"\",\"items\":[],\"trade_from\":\"\",\"items_range\":{\"include\":[],\"exclude\":[]},\"interval\":1,\"activity_type\":[],\"payment\":[],\"created\":[],\"group\":{\"category_id\":1,\"group_id\":[],\"is_first\":\"\",\"is_item\":\"\"},\"buyer_message\":\"\",\"seller_flag\":[],\"reminder\":{\"time\":\"24\",\"mobile\":\"\"},\"send_type\":\"sms\",\"message\":\"\\u3010\\u7b7e\\u540d\\u3011\\u4eb2\\uff0c\\u60a8\\u53ef\\u80fd\\u8fd8\\u9700\\u8981\\u3010\\u3011\\uff0c\\u4e00\\u8d77\\u4e70\\u66f4\\u7701\\u5fc3\\u5965^_^\\u6233\"}",
                "is_system": 1,
                "is_shared": 1,
                "sms_channel": "普通通道"
            },
            "26185": {
                "id": 26185,
                "title": "跟随潜需式营销",
                "start_time": "0000-00-00 00:00:00",
                "end_time": "0000-00-00 00:00:00",
                "activity_time": "0000-00-00 00:00:00",
                "status": "CLOSED",
                "activity_status": "ACTIVITY",
                "type": "POTENTIAL_P4P_SYS",
                "filter_option": "{\"interval\":\"\",\"items\":[],\"deadline\":[],\"group\":{\"category_id\":1,\"group_id\":[],\"is_first\":\"\",\"is_item\":\"\"},\"created\":[],\"trade_from\":\"\",\"activity_type\":[],\"payment\":[],\"buys\":[],\"items_range\":{\"include\":[],\"exclude\":[]},\"pay_time\":[],\"consign_time\":[],\"sign_time\":[],\"end_time\":[],\"buyer_message\":\"\",\"seller_flag\":[],\"reminder\":{\"time\":\"24\",\"mobile\":\"\"},\"send_time\":\"\",\"exclude_time\":[\"22:00\",\"8:30\"],\"ahead_time\":\"true\",\"send_type\":\"sms\",\"message\":\"\\u3010\\u7b7e\\u540d\\u3011\\u4eb2\\uff0c\\u597d\\u4e45\\u4e0d\\u89c1 \\u60f3\\u60a8\\u4e86^_^ \\u60a8\\u5bf9\\u3010\\u3011\\u6709\\u5174\\u8da3\\u5417\\uff0c\\u6233\"}",
                "is_system": 1,
                "is_shared": 1,
                "sms_channel": "普通通道"
            },
            "26186": {
                "id": 26186,
                "title": "到达所在城市提醒",
                "start_time": "0000-00-00 00:00:00",
                "end_time": "0000-00-00 00:00:00",
                "activity_time": "0000-00-00 00:00:00",
                "status": "CLOSED",
                "activity_status": "ACTIVITY",
                "type": "SENDREMIND_P4P_SYS",
                "filter_option": "{\"deadline\":[],\"trigger_node\":\"0\",\"send_time\":[\"08:30\",\"22:00\"],\"send_time_behind\":true,\"trade_from\":\"\",\"send_times\":1,\"activity_type\":[],\"items_range\":{\"include\":[],\"exclude\":[]},\"payment\":[],\"created\":[],\"group\":{\"category_id\":\"\",\"group_id\":[]},\"buyer_message\":\"\",\"seller_flag\":[],\"reminder\":{\"time\":\"24\",\"mobile\":\"\"},\"send_type\":\"sms\",\"message\":\"【签名】亲爱的<收件人全名>，您的【<订单主商品短名>】已到你的城市，请安排查收，<快递公司><快递单号>，有事呼我们：）\"}",
                "is_system": 1,
                "is_shared": 1,
                "sms_channel": "普通通道"
            }

        },
        // 拓展场景购买列表
        buyMarketingList: [
            {
                "past_date": null,
                "type": "NOSENDREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626382-1+,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626382-1+,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626382-1+,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "EXPRESSOUT_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626574-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "45元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626574-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "81元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626574-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "146元\/年"
                }]
            }, {
                "past_date": null,
                "type": "RETURNREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626691-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626691-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626691-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "DELIVERYDELAY_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627163-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "45元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627163-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "81元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627163-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "146元\/年"
                }]
            }, {
                "past_date": null,
                "type": "NOTRANSFERRECORD_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627744-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "45元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627744-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "81元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627744-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "146元\/年"
                }]
            }, {
                "past_date": null,
                "type": "CREATEDREMIND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627047-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "15元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627047-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "27元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627047-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "49元\/年"
                }]
            }, {
                "past_date": null,
                "type": "REFUSERETURNREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638087-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638087-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638087-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "AGREERETURNREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638088-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638088-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638088-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": 1528819200000,
                "type": "SENDREMIND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638370-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638370-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638370-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "SUCCESSREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638480-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638480-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638480-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "REFUSEREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638933-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638933-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638933-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "PAYCARE_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639033-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639033-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639033-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "REFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639130-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639130-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639130-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "DELIVERREMIND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639218-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639218-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639218-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "AFFIRMCARE_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639219-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639219-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639219-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "12元\/年"
                }]
            }, {
                "past_date": null,
                "type": "COMMENTCARE_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639220-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639220-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639220-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "APPLYRETURNREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639225-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639225-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639225-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "EXPERIENCEPOOR_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627238-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "45元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627238-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "81元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627238-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "146元\/年"
                }]
            }, {
                "past_date": null,
                "type": "NORECEIPTREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626480-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626480-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626480-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }
        ],
        buyMarketingListAfter: [
            {
                "past_date": null,
                "type": "NOSENDREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626382-1+,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626382-1+,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626382-1+,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "EXPRESSOUT_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626574-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "45元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626574-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "81元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626574-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "146元\/年"
                }]
            }, {
                "past_date": null,
                "type": "RETURNREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626691-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626691-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626691-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "DELIVERYDELAY_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627163-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "45元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627163-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "81元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627163-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "146元\/年"
                }]
            }, {
                "past_date": 1528819200000,
                "type": "NOTRANSFERRECORD_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627744-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "45元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627744-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "81元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627744-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "146元\/年"
                }]
            }, {
                "past_date": 1528819200000,
                "type": "CREATEDREMIND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627047-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "15元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627047-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "27元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627047-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "49元\/年"
                }]
            }, {
                "past_date": null,
                "type": "REFUSERETURNREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638087-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638087-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638087-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "AGREERETURNREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638088-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638088-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638088-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": 1528819200000,
                "type": "SENDREMIND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638370-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638370-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638370-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "SUCCESSREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638480-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638480-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638480-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "REFUSEREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638933-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638933-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000638933-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "PAYCARE_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639033-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639033-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639033-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "REFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639130-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639130-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639130-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "DELIVERREMIND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639218-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639218-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639218-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "AFFIRMCARE_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639219-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639219-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639219-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "12元\/年"
                }]
            }, {
                "past_date": null,
                "type": "COMMENTCARE_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639220-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639220-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639220-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "APPLYRETURNREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639225-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639225-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000639225-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }, {
                "past_date": null,
                "type": "EXPERIENCEPOOR_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627238-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "45元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627238-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "81元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000627238-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "146元\/年"
                }]
            }, {
                "past_date": null,
                "type": "NORECEIPTREFUND_P4P",
                "buys": [{
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626480-1,cycleNum:3,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "6元\/季"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626480-1,cycleNum:6,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "11元\/半年"
                }, {
                    "order_url": "https:\/\/fuwu.taobao.com\/ser\/assemble_param.htm?activityCode=&promIds=&subParams=itemCode:FW_GOODS-1000626480-1,cycleNum:12,cycleUnit:2&commonParams=onlyContent:1;outTradeType:2849143012;appKey:23497488",
                    "name": "19元\/年"
                }]
            }
        ],
        buyMarketOrder: [
            {
                "id": 1001,
                "buy_date": 1520839621000,
                "past_date": 1528819200000,
                "tid": 311933677850209,
                "cost": 6,
                "market": "SENDREMIND_P4P"
            }
        ],
        // 效果数据
        marketingReport: [],
        // 成果详单
        marketingResult: [
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-17 16:56:35",
                "created": "2017-10-19 14:47:38",
                "buyer_nick": "caimengkuang",
                "payment": "0.01",
                "tid": "70810226830036400",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-17 16:56:35",
                "pay_time": "2017-10-19 14:47:44",
                "marketing_interval": "1天21小时51分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:24",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-17 16:56:35",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 14:47:45",
                "created": "2017-10-19 14:47:38",
                "buyer_nick": "caimengkuang",
                "payment": "0.01",
                "tid": "70810226830036400",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 14:47:45",
                "pay_time": "2017-10-19 14:47:44",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:24",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 14:47:45",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            }
        ],
        // 推送记录
        marketingRecord: [
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }, {
                "created_at": "2017-11-19 15:12:28",
                "created": "2017-11-19 15:12:20",
                "buyer_nick": "测试数据1test",
                "payment": "3.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时3分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": "",
                "message_send_content": "【测试】测试数据，保证正常运行。"
            }
        ],
        // 退订记录
        marketingRefund: [
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 15:12:28",
                "created": "2017-10-19 15:12:20",
                "buyer_nick": "ai_love426",
                "payment": "0.01",
                "tid": "75762152414240962",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 15:12:28",
                "pay_time": "2017-10-19 15:12:29",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:31",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 15:12:28",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-17 16:56:35",
                "created": "2017-10-19 14:47:38",
                "buyer_nick": "caimengkuang",
                "payment": "0.01",
                "tid": "70810226830036400",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-17 16:56:35",
                "pay_time": "2017-10-19 14:47:44",
                "marketing_interval": "1天21小时51分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:24",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-17 16:56:35",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            },
            {
                "created_at": "2017-10-19 14:47:45",
                "created": "2017-10-19 14:47:38",
                "buyer_nick": "caimengkuang",
                "payment": "0.01",
                "tid": "70810226830036400",
                "marketing_status": "营销成功",
                "marketing_time": "2017-10-19 14:47:45",
                "pay_time": "2017-10-19 14:47:44",
                "marketing_interval": "0天0小时0分",
                "grade_crm": "",
                "marketing_job": "短信",
                "order_interval": "",
                "status": "交易成功",
                "purchase_times": 1,
                "end_time": "2017-11-04 09:42:24",
                "first_comment_state": false,
                "first_comment_date": "",
                "item_iid": "",
                "holiday": "",
                "bad_weather": "",
                "gift": "",
                "lost_reason": "",
                "sort_time": "2017-10-19 14:47:45",
                "start_send_time": "",
                "success_refund_date": "",
                "refuse_date": "",
                "express_receive_time": ""
            }
        ],

        //---------------------以上marketing.service---------------------//

        //---------------------以上member.service---------------------//

        // 会员分组
        customerGroup: [
            {
                "id": 12423,
                "category_id": 1,
                "title": "潜在客户",
                "tag": "平销",
                "desc": "潜在客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12424,
                "category_id": 1,
                "title": "处女购",
                "tag": "平销",
                "desc": "处女购",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12425,
                "category_id": 1,
                "title": "沉睡客户",
                "tag": "平销",
                "desc": "沉睡客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12426,
                "category_id": 1,
                "title": "活跃客户",
                "tag": "平销",
                "desc": "活跃客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12427,
                "category_id": 1,
                "title": "预流失客户",
                "tag": "平销",
                "desc": "预流失客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12428,
                "category_id": 1,
                "title": "流失客户",
                "tag": "平销",
                "desc": "流失客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12429,
                "category_id": 1,
                "title": "失败客户",
                "tag": "平销",
                "desc": "失败客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12430,
                "category_id": 1,
                "title": "可转化活动型客户",
                "tag": "活动",
                "desc": "可转化活动型客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12431,
                "category_id": 1,
                "title": "聚划算活动客户",
                "tag": "活动",
                "desc": "聚划算活动客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12432,
                "category_id": 1,
                "title": "品牌团活动客户",
                "tag": "活动",
                "desc": "品牌团活动客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12433,
                "category_id": 1,
                "title": "淘抢购活动客户",
                "tag": "活动",
                "desc": "淘抢购活动客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12434,
                "category_id": 1,
                "title": "其他淘宝活动客户",
                "tag": "活动",
                "desc": "其他淘宝活动客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12435,
                "category_id": 1,
                "title": "淘外大力度活动客户",
                "tag": "活动",
                "desc": "淘外大力度活动客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12436,
                "category_id": 1,
                "title": "店内大力度活动客户",
                "tag": "活动",
                "desc": "店内大力度活动客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12437,
                "category_id": 1,
                "title": "双11活动客户",
                "tag": "活动",
                "desc": "双11活动客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12438,
                "category_id": 1,
                "title": "双12活动客户",
                "tag": "活动",
                "desc": "双12活动客户",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12439,
                "category_id": 2,
                "title": "高客单价",
                "tag": "客单价标签",
                "desc": "高客单价",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12440,
                "category_id": 2,
                "title": "中客单价",
                "tag": "客单价标签",
                "desc": "中客单价",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12441,
                "category_id": 2,
                "title": "低客单价",
                "tag": "客单价标签",
                "desc": "低客单价",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12442,
                "category_id": 4,
                "title": "灰名单",
                "tag": "灰黑名单",
                "desc": "灰名单",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12443,
                "category_id": 4,
                "title": "黑名单",
                "tag": "灰黑名单",
                "desc": "黑名单",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12444,
                "category_id": 3,
                "title": "铸铁会员",
                "tag": "CRM内会员等级",
                "desc": "V1",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12445,
                "category_id": 3,
                "title": "青铜会员",
                "tag": "CRM内会员等级",
                "desc": "V2",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12446,
                "category_id": 3,
                "title": "白银会员",
                "tag": "CRM内会员等级",
                "desc": "V3",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12447,
                "category_id": 3,
                "title": "黄金会员",
                "tag": "CRM内会员等级",
                "desc": "V4",
                "is_system": 1,
                "sort_order": 0
            },
            {
                "id": 12448,
                "category_id": 3,
                "title": "钛金会员",
                "tag": "CRM内会员等级",
                "desc": "V5",
                "is_system": 1,
                "sort_order": 0
            }
        ],
        // crm内部会员
        groupCrm: {
            settings: [
                {
                    user_id: 2196246209,
                    config_name: "CRM_AI",
                    config_value: "NO_PRICE",
                    config_group: "customer"
                },
                {
                    user_id: 2196246209,
                    config_name: "CRM_SWITCH",
                    config_value: "AI",
                    config_group: "customer"
                }
            ],
            groups: [
                {
                    id: 12452,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "白钻会员(M1)",
                    desc: "M1",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"中端\",\"purchase_times\":1,\"payment\":0.00,\"discount\":9.4}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12453,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "白钻会员(M2)",
                    desc: "M2",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"中端\",\"purchase_times\":2,\"payment\":0.00,\"discount\":8.9}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12454,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "白钻会员(M3)",
                    desc: "M3",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"中端\",\"purchase_times\":4,\"payment\":0.00,\"discount\":8.4}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12446,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "白银会员",
                    desc: "V3",
                    tag: "CRM内会员等级",
                    filter_option: "{\"purchase_times\":3,\"payment\":0.00,\"discount\":8.8}",
                    is_system: 1,
                    enabled: 1
                },
                {
                    id: 12449,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "蓝钻会员(L1)",
                    desc: "L1",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"低端\",\"purchase_times\":1,\"payment\":0.00,\"discount\":9.5}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12450,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "蓝钻会员(L2)",
                    desc: "L2",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"低端\",\"purchase_times\":2,\"payment\":0.00,\"discount\":9}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12451,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "蓝钻会员(L3)",
                    desc: "L3",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"低端\",\"purchase_times\":4,\"payment\":0.00,\"discount\":8.5}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12455,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "金钻会员(H1)",
                    desc: "H1",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"高端\",\"purchase_times\":1,\"payment\":0.00,\"discount\":9.3}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12456,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "金钻会员(H2)",
                    desc: "H2",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"高端\",\"purchase_times\":2,\"payment\":0.00,\"discount\":8.8}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12457,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "金钻会员(H3)",
                    desc: "H3",
                    tag: "CRM内会员等级",
                    filter_option: "{\"title\":\"高端\",\"purchase_times\":4,\"payment\":0.00,\"discount\":8.3}",
                    is_system: 1,
                    enabled: 0
                },
                {
                    id: 12448,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "钛金会员",
                    desc: "V5",
                    tag: "CRM内会员等级",
                    filter_option: "{\"purchase_times\":5,\"payment\":0.00,\"discount\":8.5}",
                    is_system: 1,
                    enabled: 1
                },
                {
                    id: 12444,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "铸铁会员",
                    desc: "V1",
                    tag: "CRM内会员等级",
                    filter_option: "{\"purchase_times\":1,\"payment\":0.00,\"discount\":9.5}",
                    is_system: 1,
                    enabled: 1
                },
                {
                    id: 12445,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "青铜会员",
                    desc: "V2",
                    tag: "CRM内会员等级",
                    filter_option: "{\"purchase_times\":2,\"payment\":0.00,\"discount\":9}",
                    is_system: 1,
                    enabled: 1
                },
                {
                    id: 12447,
                    user_id: 2196246209,
                    category_id: 3,
                    title: "黄金会员",
                    desc: "V4",
                    tag: "CRM内会员等级",
                    filter_option: "{\"purchase_times\":4,\"payment\":0.00,\"discount\":8.6}",
                    is_system: 1,
                    enabled: 1
                }
            ]
        },
        // 会员管理分组
        customerCategory: [
            {
                "id": 1,
                "title": "AI引擎流转分组",
                "desc": "AI引擎流转分组,按平销，活动等维度进行会员流转。",
                "is_system": 1,
                "sort_order": 1
            },
            {
                "id": 2,
                "title": "智能标签",
                "desc": "智能标签分组,按购物次数，客单价等维度进行会员标签。",
                "is_system": 1,
                "sort_order": 2
            },
            {
                "id": 3,
                "title": "会员等级分组",
                "desc": "会员等级分组,按购物次数，客单价等维度进行会员标签。",
                "is_system": 1,
                "sort_order": 3
            },
            {
                "id": 4,
                "title": "自建营销标签",
                "desc": "自建营销标签分组,按自定义条件进行会员分组。",
                "is_system": 1,
                "sort_order": 4
            },
            {
                "id": 5,
                "title": "导入会员批次",
                "desc": "导入会员批次分组,按导入历史订单批次进行会员分组。",
                "is_system": 1,
                "sort_order": 5
            }
        ],
        //---------------------以上member.service---------------------//


        //---------------------以下goods.service---------------------//
        // 宝贝列表
        items: [
            {
                "seller_cids": ",236140831,",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB2CiVCgSFjpuFjSspbXXXagVXa_!!11451913.jpg",
                "num": 10088,
                "num_iid": 555257936484,
                "price": "0.03",
                "title": "33333333",
                "sub_title": "33333333",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": ",236140831,",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB27HRyeY8kpuFjy0FcXXaUhpXa_!!11451913.jpg",
                "num": 7650,
                "num_iid": 555254992669,
                "price": "0.01",
                "title": "7777",
                "sub_title": "77776a",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 8,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB2Cmpue80kpuFjy1XaXXaFkVXa_!!11451913.jpg",
                "num": 16,
                "num_iid": 554467956893,
                "price": "2.40",
                "title": "E1-4",
                "sub_title": "E1-4y y",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 1,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": ",236140831,",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB2Cmpue80kpuFjy1XaXXaFkVXa_!!11451913.jpg",
                "num": 7767,
                "num_iid": 555271593984,
                "price": "0.10",
                "title": "投入1000就买了",
                "sub_title": "投入1000就买了a",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 9,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB2CiVCgSFjpuFjSspbXXXagVXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553772004657,
                "price": "2.10",
                "title": "E1-1",
                "sub_title": "E1-1",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB2ErDlaFHzQeBjSZFzXXa__FXa_!!11451913.jpg",
                "num": 13,
                "num_iid": 553839785505,
                "price": "1.10",
                "title": "A4-1",
                "sub_title": "A4-1 a",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 7,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB2CiVCgSFjpuFjSspbXXXagVXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553876102821,
                "price": "5.10",
                "title": "B4-1",
                "sub_title": "B4-1",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB26_pBgR0kpuFjSsppXXcGTXXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553876262436,
                "price": "10.30",
                "title": "C4-3",
                "sub_title": "C4-3 dd",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB2.UhgeY0kpuFjy0FjXXcBbVXa_!!11451913.jpg",
                "num": 9,
                "num_iid": 553876042743,
                "price": "10.20",
                "title": "C4-2",
                "sub_title": "C4-2",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB26_pBgR0kpuFjSsppXXcGTXXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553771636713,
                "price": "10.10",
                "title": "C4-1",
                "sub_title": "C4-1",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB2ErDlaFHzQeBjSZFzXXa__FXa_!!11451913.jpg",
                "num": 1,
                "num_iid": 553839433441,
                "price": "1.30",
                "title": "A3-3",
                "sub_title": "A3-3 yy",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 1,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB26_pBgR0kpuFjSsppXXcGTXXa_!!11451913.jpg",
                "num": 13,
                "num_iid": 553921679560,
                "price": "1.20",
                "title": "A3-2",
                "sub_title": "A3-2 a",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 3,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB2ErDlaFHzQeBjSZFzXXa__FXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553771388696,
                "price": "5.30",
                "title": "B3-3",
                "sub_title": "B3-3",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB2ErDlaFHzQeBjSZFzXXa__FXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553839153569,
                "price": "5.20",
                "title": "B3-2",
                "sub_title": "B3-2",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB2CiVCgSFjpuFjSspbXXXagVXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553771192976,
                "price": "5.10",
                "title": "B3-1",
                "sub_title": "B3-1",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB2ErDlaFHzQeBjSZFzXXa__FXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553921619169,
                "price": "10.30",
                "title": "C3-3",
                "sub_title": "C3-3",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i3/11451913/TB2lb1oX4HxQeBjy1zjXXa5YVXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553771172922,
                "price": "10.20",
                "title": "C3-2",
                "sub_title": "C3-2",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB26_pBgR0kpuFjSsppXXcGTXXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553771172859,
                "price": "10.10",
                "title": "C3-1",
                "sub_title": "C3-1",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB2Cmpue80kpuFjy1XaXXaFkVXa_!!11451913.jpg",
                "num": 18,
                "num_iid": 553875530785,
                "price": "1.30",
                "title": "A2-3",
                "sub_title": "A2-3",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 1,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i3/11451913/TB2YOGpX1TyQeBjSspaXXcjjFXa_!!11451913.jpg",
                "num": 14,
                "num_iid": 553838949555,
                "price": "1.20",
                "title": "A2-2",
                "sub_title": "A2-22",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 1,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB2LeCpX4fxQeBjSsppXXXeoFXa_!!11451913.jpg",
                "num": 19,
                "num_iid": 553771472060,
                "price": "1.10",
                "title": "A2-1",
                "sub_title": "A2-1a",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 1,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB26_pBgR0kpuFjSsppXXcGTXXa_!!11451913.jpg",
                "num": 19,
                "num_iid": 553838545972,
                "price": "5.20",
                "title": "B2-2",
                "sub_title": "B2-2",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB2twtneYJkpuFjy1zcXXa5FFXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553919787508,
                "price": "5.10",
                "title": "B2-1",
                "sub_title": "B2-1",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i3/11451913/TB2uwBae30kpuFjSspdXXX4YXXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553837321575,
                "price": "10.20",
                "title": "C2-2",
                "sub_title": "C2-2",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB26_pBgR0kpuFjSsppXXcGTXXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553769696046,
                "price": "10.10",
                "title": "C2-1",
                "sub_title": "C2-1",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/11451913/TB24OdkeYFlpuFjy0FgXXbRBVXa_!!11451913.jpg",
                "num": 18,
                "num_iid": 553874074011,
                "price": "1.20",
                "title": "A1-2",
                "sub_title": "A1-2",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 1,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB26_pBgR0kpuFjSsppXXcGTXXa_!!11451913.jpg",
                "num": 15,
                "num_iid": 553837121090,
                "price": "1.10",
                "title": "A1-1",
                "sub_title": "A1-1a uu",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 2,
                "is_subtitle_edited": 0
            },
            {
                "seller_cids": "-1",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/11451913/TB2CiVCgSFjpuFjSspbXXXagVXa_!!11451913.jpg",
                "num": 20,
                "num_iid": 553918983937,
                "price": "5.30",
                "title": "B1-3",
                "sub_title": "B1-3",
                "outer_id": "",
                "approve_status": "instock",
                "sold_quantity": 0,
                "is_subtitle_edited": 0
            }
        ],
        // 宝贝分类
        itemCategory: [
            {
                "cid": 277332399,
                "parent_cid": 0,
                "name": "摄影套装DIY【自由配】",
                "sort_order": 1,
                "type": "manual_type"
            },
            {
                "cid": 277333103,
                "parent_cid": 277332399,
                "name": "A类-摄影棚",
                "sort_order": 1,
                "type": "manual_type"
            },
            {
                "cid": 277333104,
                "parent_cid": 277332399,
                "name": "B类-灯  具",
                "sort_order": 2,
                "type": "manual_type"
            },
            {
                "cid": 277333105,
                "parent_cid": 277332399,
                "name": "C类-灯  泡（光源）",
                "sort_order": 3,
                "type": "manual_type"
            },
            {
                "cid": 277422176,
                "parent_cid": 277332399,
                "name": "D类-增值服务卡",
                "sort_order": 4,
                "type": "manual_type"
            },
            {
                "cid": 277333108,
                "parent_cid": 277332399,
                "name": "E类-摄影台",
                "sort_order": 5,
                "type": "manual_type"
            },
            {
                "cid": 277333107,
                "parent_cid": 277332399,
                "name": "F类-背  景",
                "sort_order": 6,
                "type": "manual_type"
            },
            {
                "cid": 277333106,
                "parent_cid": 277332399,
                "name": "G类-扩展灯具",
                "sort_order": 7,
                "type": "manual_type"
            },
            {
                "cid": 277333109,
                "parent_cid": 277332399,
                "name": "H类-扩展器材",
                "sort_order": 8,
                "type": "manual_type"
            },
            {
                "cid": 159024529,
                "parent_cid": 0,
                "name": "按功能套装选择-摄影棚",
                "sort_order": 2,
                "type": "manual_type"
            },
            {
                "cid": 286788545,
                "parent_cid": 159024529,
                "name": "全配（含灯）摄影棚灯套装",
                "sort_order": 1,
                "type": "manual_type"
            },
            {
                "cid": 252936499,
                "parent_cid": 159024529,
                "name": "可拍摄【纯白】背景套装",
                "sort_order": 2,
                "type": "manual_type"
            },
            {
                "cid": 159024530,
                "parent_cid": 159024529,
                "name": "服饰/服装/人像-套装",
                "sort_order": 3,
                "type": "manual_type"
            },
            {
                "cid": 164027251,
                "parent_cid": 159024529,
                "name": "L 型摄影台-套装",
                "sort_order": 4,
                "type": "manual_type"
            },
            {
                "cid": 277667482,
                "parent_cid": 159024529,
                "name": "原创-矩阵布光系统",
                "sort_order": 5,
                "type": "manual_type"
            },
            {
                "cid": 289515174,
                "parent_cid": 159024529,
                "name": "全配 整合套装（集合）",
                "sort_order": 6,
                "type": "manual_type"
            },
            {
                "cid": 159026194,
                "parent_cid": 0,
                "name": "『火鸟·黑子』准专业【恒光】",
                "sort_order": 3,
                "type": "manual_type"
            },
            {
                "cid": 159028170,
                "parent_cid": 159026194,
                "name": "恒光灯-单元产品",
                "sort_order": 1,
                "type": "manual_type"
            },
            {
                "cid": 159028171,
                "parent_cid": 159026194,
                "name": "恒光灯-摄影柔光灯",
                "sort_order": 2,
                "type": "manual_type"
            },
            {
                "cid": 159028172,
                "parent_cid": 159026194,
                "name": "恒光灯-摄影套装",
                "sort_order": 3,
                "type": "manual_type"
            },
            {
                "cid": 236140032,
                "parent_cid": 0,
                "name": "『火鸟·黑子』准专业【闪光】",
                "sort_order": 4,
                "type": "manual_type"
            },
            {
                "cid": 236140830,
                "parent_cid": 236140032,
                "name": "闪光灯-单元产品",
                "sort_order": 1,
                "type": "manual_type"
            },
            {
                "cid": 236140831,
                "parent_cid": 236140032,
                "name": "闪光灯-套装",
                "sort_order": 2,
                "type": "manual_type"
            },
            {
                "cid": 28859371,
                "parent_cid": 0,
                "name": "杂七杂八^_^",
                "sort_order": 5,
                "type": "manual_type"
            },
            {
                "cid": 108361427,
                "parent_cid": 0,
                "name": "量子恒道统计",
                "sort_order": 6,
                "type": "manual_type"
            },
            {
                "cid": 210886987,
                "parent_cid": 0,
                "name": "E客服",
                "sort_order": 7,
                "type": "manual_type"
            }
        ]
        //---------------------以上goods.service---------------------//
    }
}