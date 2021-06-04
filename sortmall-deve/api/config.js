// const SERVER = 'https://api.mall.kuazhu.com'
const SERVER = 'https://127.0.0.1:3000';
const VERSION = 'v1'

const API_CONFIG = {
  //接口名称:[接口地址,方法,权限验证]
  getPositionAds: ['/ads/positionAds', 'get'],
  addCarts: ['/carts', 'post','auth'],
}
module.exports = {
  API_CONFIG,
  SERVER,
  VERSION
}