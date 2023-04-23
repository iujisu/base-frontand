import { createStore } from 'vuex';
import router from '@/router';

export const store = createStore ({
  state: {
    // 상태 관리하는 곳
    userId: '',
    userName: '',
    token: ''
  },
  getters: { 
     // 컴포넌트에서 state를 사용할 수 있게 해주는 곳
  },
  mutations: {
    // state 변경하는 곳
    login: function (state, payload) {
        state.userId = payload.userId
        state.userName = payload.userName
        state.token = payload.token
    },
    loginCheck: function (state) {
        if (!state.token) {
            router.push({
                name: 'login'
            }).catch(error => {
                console.log(error)
            })
        }
    }
  },
  actions: { 
     //비동기 요청, mutations 호출
   }
})