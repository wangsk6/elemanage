import http from './index'

// 获取所有订单
export  const getAllOrder = function (data){
  return http(`getAllOrder`,data,'get')
}
// 获取所有商品
export const getAllGoods = function (data){
  return http(`getAllGoods`,data,'get')
}
// 新增商品
export const insertGoods = function (data){
  return http(`insertGoods`,data,'post')
}
// 查询所有售后
export const getAllSaleAfter = function (data){
  return http(`getAllSaleAfter`,data,'get')
}
// 后台删除货物
export const deleteGoods = function (data){
  return http(`deletegoods`,data,'post')
}
// 查询所有收货地址
export const getAllAddress = function (data){
  return http(`getalladdress`,data,'get')
}
// 查询所有用户
 export const getUser = function (data){
  return http(`getuser`,data,'get')
}
// 查询所有轮播图
export const getlbimg = function (data){
  return http(`getlbimg`,data,'get')
}
// 根据ID查订单
export const getOrderByID = function (data){
  return http(`getorderbynum`,data,'post')
}
// 修改商品
export const updatagoods = function (data){
  return http(`updatagoods`,data,'post')
}
// updateaddress修改收货地址
export const updateaddress = function (data){
  return http(`updateaddress`,data,'post')
}
// getAllWillSend查询所有待发货
export const getAllWillSend = function (data){
  return http(`getAllWillSend`,data,'get')
}