var express = require('express');
var router = express.Router();

const userData = [
  {
    id: 1,
    name: 'luffy',
    email: 'luffy@163.com'
  }, {
    id: 2,
    name: 'naruto',
    email: 'naruto@126.com'
  }
]
/**
 * @api {get} /users GetUserList
 * @apiDescription 获取用户列表
 * @apiName GetUserList
 * @apiGroup User
 * @apiPermission token
 * @apiHeader {String} Authorization 用户权限验证
 * @apiUse CommonSuccess
 * @apiSuccess {Array} data 响应数据
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *      "errcode" : 0,
 *      "message": "",
 *      "data" : [{
 *          "id": 0,
 *          "name" : "userName",
 *          "email" : "userEmail"
 *      }]
 *  }
 * @apiSampleRequest http://localhost:3333/users
 * @apiVersion 1.0.0
 */
router.get('/', function(req, res, next) {
  if (!req.headers['authorization']) {
    // 验证失败
    return res.status(401).json({
      errcode: 401,
      message: 'Invalid Token'
    });
  }
  res.json({
    errcode: 0,
    message: '',
    data: userData
  });
});

/**
 * @api {get} /users/:id GetUserInfoById
 * @apiDescription 获取用户列表
 * @apiName GetUserById
 * @apiGroup User
 * @apiParam {Number} id Users unique ID.
 * @apiSuccess {Object} data 响应数据
 * @apiSuccess {String} message 响应消息
 * @apiSuccess {Number} errcode 错误码（自己定义，0为无错误）
 * @apiSuccessExample {Json} Success-Response:
 * HTTP/1.1 200 OK
 *  {
 *      "errcode" : 0,
 *      "message": "",
 *      "data" : {
 *          "id": 0,
 *          "name" : "userName",
 *          "email" : "userEmail"
 *      }
 *  }
 *  @apiError {4XX} UserNotFound The <code>id</code> of the User was not found.
 *  @apiErrorExample {json} Error-Response:
 *  HTTP/1.1 404 Not Found
 *  {
 *    "error": "UserNotFound"
 *  }
 * @apiSampleRequest http://localhost:3333/users/:id
 * @apiVersion 1.0.0
 */
router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  if (!userData.some(item => item.id === parseInt(id, 10))) {
    // 不存在直接404
    return res.status(404).json({
      errcode: 404,
      message: `The ${id} of users was not found!`,
      data: {}
    });
  }
   // 存在
   res.json({
    errcode: 0,
    message: '',
    data: userData.find(item => item.id === parseInt(id, 10))
  })
});

/**
 * @apiIgnore 没写完的POST USER
 * @api {post} /users
 */
router.post('/users', function (req, res, next) {
  console.log('没写完的POST USER');
});

module.exports = router;
