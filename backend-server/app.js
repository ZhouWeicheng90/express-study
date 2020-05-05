const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
//     extended: true
// }));
app.use(bodyParser.json())
app.all('*', function (req, res, next) {
    console.log(req.method, req.params, req.body, req.query)
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "* ");
    res.header("Access-Control-Allow-Methods", "*");
    next()
})
app.route('/goods')
    .get('/goods/:id', function (req, res) {
        res.send('xin 查询商品：' + req.params.id)
    })
    .post(function (req, res) {
        res.send('你正在创建商品')
    })
    .put(function (req, res) {
        res.send('你正在修改商品')
    })
    .delete(function (req, res) {
        res.send('你正在删除商品')
    })

    // @pathVariable  @requestParams @requestBody
    // req.params.id  req.query.id   req.body
app.get('/list', function (req, res, next) {
    console.log('查询列表暂时查询所有商品！')
    next()
}, function (req, res) {
    res.send('这是商品列表')
})

app.listen(8000, () => {
    console.log('open in http://localhost:8000')
})