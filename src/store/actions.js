import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-type'

export default {
  addCart(context, payload) {
    // ?做法1: 
    /* 
    let oldProduct = null;
    for (let product of state.goodsList) {
      if (payload.iid === product.iid) {
        oldProduct = product;
      }
    }
    if (oldProduct) {
      oldProduct.count += 1;
    }else {
      payload.count = 1;
      state.goodsList.push(payload);
    } 
    */
    // ?做法2:
    return new Promise((resolve, reject) => {
      let product = context.state.goodsList.find((item) => item.iid === payload.iid);
      if (product) {
        // 添加1件商品
        context.commit(ADD_COUNTER, product);
        resolve('当前的商品数量+1')
      } else {
        // 添加新的商品到购物车
        payload.count = 1;
        payload.checked = true;
        context.commit(ADD_TO_CART, payload);
        resolve('新增商品到购物车')
      }
    })
  }
}
