import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-type'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    state.goodsList.push(payload);
  }
}