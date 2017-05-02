var express = require('express');
var router = express.Router();

// 测试数据
router.get('/hot', function(req, res, next) {
    res.json({
        errorno: 0,
        msg: "请求成功",
        data: [{
            pro_url: '###',
            pro_img: 'http://img.eventown.cn/upimg/litimg/090117/152I12JJ9.jpg!nw380h228',
            pro_title: '上海金茂君悦大酒店',
            pro_volume: '42',
            pro_price: '235',
            pro_info: '北京雁栖湖国际会展中心隶属于北控集团，由国际顶尖的会展场馆——国家会议中心负责运营管理'
        }, {
            pro_url: '###',
            pro_img: 'http://img.eventown.cn/upimg/litimg/081004/002A32O228.jpg!nw380h228',
            pro_title: '北京喜来登长城饭店',
            pro_volume: '415',
            pro_price: '656',
            pro_info: '北京雁栖湖国际会展中心隶属于北控集团，由国际顶尖的会展场馆——国家会议中心负责运营管理'
        }, {
            pro_url: '###',
            pro_img: 'http://img.eventown.cn/meeting/2015/08/14/4908b3ea0b87ae1a.jpg!nw380h228',
            pro_title: '北京雁栖湖国际会展中心',
            pro_volume: '890',
            pro_price: '999',
            pro_info: '北京雁栖湖国际会展中心隶属于北控集团，由国际顶尖的会展场馆——国家会议中心负责运营管理'
        }, {
            pro_url: '###',
            pro_img: 'http://img.eventown.cn/newimg/place/2013/07/17/20130717122243_357.jpg!nw380h228',
            pro_title: '北京饭店',
            pro_volume: '4542',
            pro_price: '6666',
            pro_info: '北京雁栖湖国际会展中心隶属于北控集团，由国际顶尖的会展场馆——国家会议中心负责运营管理'
        }, {
            pro_url: '###',
            pro_img: 'http://img.eventown.cn/userfiles/place/201004/426aa4e9b7e40ea3e07de21dc4d6f6fe.jpg!nw380h228',
            pro_title: '北京北辰洲际酒店',
            pro_volume: '924',
            pro_price: '888',
            pro_info: '北京雁栖湖国际会展中心隶属于北控集团，由国际顶尖的会展场馆——国家会议中心负责运营管理'
        }, {
            pro_url: '###',
            pro_img: 'http://img.eventown.cn/newimg/place/2013/12/12/20131212110918_177.jpg!nw380h228',
            pro_title: '北京富力万丽酒店',
            pro_volume: '551',
            pro_price: '690',
            pro_info: '北京雁栖湖国际会展中心隶属于北控集团，由国际顶尖的会展场馆——国家会议中心负责运营管理'
        }, {
            pro_url: '###',
            pro_img: 'http://img.eventown.cn/upimg/2016/12/14/1p6li0xhdccpqagv.jpg!nw380h228',
            pro_title: '惠州艾美酒店',
            pro_volume: '988',
            pro_price: '1314',
            pro_info: '北京雁栖湖国际会展中心隶属于北控集团，由国际顶尖的会展场馆——国家会议中心负责运营管理'
        }]
    });
});




/* 定义模拟接口 */
router.post('/xxx/xxx', function(req, res, next) {
    res.json({
        errorno: 0,
        msg: "接口返回：提交成功",
        data: [1, 2, 3]
    });

});

/* 定义模拟接口 */
router.get('/url', function(req, res, next) {
    res.json({
        errorno: 0,
        msg: "请求成功",
        data: [1, 2, 3, 4]
    });

});
module.exports = router;
