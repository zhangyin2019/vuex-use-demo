import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    author: "zhangyin"
  },
  modules: {
    SecondPage: {
      namespaced: true, // 开启此以后，页面里就要用mapState和,mapActions来注册
      state: {
        otherCount: 100
      },
      actions: {
        asyncAddOtherCount(context, { diff }) {
          context.state.otherCount += diff;
        }
      },
      mutations: {
        updateOtherCount(state, v) {
          state.otherCount = v;
        }
      }
    },
    HelloWorld: {
      state: {
        count: 0
      },
      actions: {
        asyncAddCount(context, { diff }) {
          return new Promise(resolve => {
            setTimeout(() => {
              context.commit("addCount", { diff });
              console.log("根state: ", context.rootState.author);
              resolve();
            }, 2000);
          });
        }
      },
      getters: {
        outputCount(state) {
          return `这是store中的count: ${state.count}`;
        }
      },
      mutations: {
        addCount(state, { diff }) {
          state.count += diff;
        }
      }
    }
  }
});

export default store;
