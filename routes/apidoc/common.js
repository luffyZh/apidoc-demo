// 抽离公共代码块
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
 * @apiDefine none 不需要任何权限
 * permission定义成none，不需要任何权限就可访问接口
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