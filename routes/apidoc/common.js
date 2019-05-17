/**
 * @apiDefine CommonSuccess 公共响应字段
 * @apiSuccess {Number} errcode The success res code.
 * @apiSuccess {Strng} message The res message.
 */

 /**
  * @apiDefine token 需要验证用户权限
  * 需要在header中加入Authorization字段进行用户权限验证 
  */

/**
 * @apiDefine InvalidToken 权限认证失败
 * @apiError {401} InvalidToken 用户权限校验不通过
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 401 Unauthorized
 * {
 *    "errcode": 401,
 *    "message": "Invalid Token"
 * }
 */