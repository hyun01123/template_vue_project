import{
  createStore
} from 'vuex'

import persistedstate from 'vuex-persistedstate';

const store = createStore({
  state() {
    return {
      user : {}
    }
  },
  mutations: {
    user(state, date) {
      store.user = date;
    }
  },
  plugins:[
    persitedstate({
      paths:['user']
    })
  ]
});
export default store;
