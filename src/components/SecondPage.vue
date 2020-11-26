<template>
  <div class="">
    <div>这是第二页，点击数据仍然可以递增</div>
    <div @click="$store.commit('addCount', { diff: 1 })">
      {{ $store.state.HelloWorld.count }}
    </div>
    <div>{{ $store.getters.outputCount }}</div>
    <div @click="asyncAdd">{{ loading ? "等两秒" : "点击执行异步更改" }}</div>
    <br />
    <div>通过mapState后少写$store.state来得到otherCount: {{ otherCount }}</div>
    <div @click="asyncAddOtherCount({ diff: 3 })">点击以后otherCount变化</div>
    <br />
    <div>
      <span>也可以通过input来更改otherCount</span>
      <input type="text" v-model="otherCount" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "SecondPage",
  computed: {
    // ...mapState("SecondPage", {
    //   otherCount: state => state.otherCount
    // }),
    otherCount: {
      get() {
        return this.$store.state.SecondPage.otherCount;
      },
      set(v) {
        // this.$store.SecondPage.commit("updateOtherCount", v);
        this.updateOtherCount(parseInt(v));
      }
    }
  },
  data() {
    return {
      loading: false
    };
  },
  mounted() {},
  methods: {
    ...mapMutations("SecondPage", ["updateOtherCount"]),
    ...mapActions("SecondPage", ["asyncAddOtherCount"]),
    asyncAdd() {
      this.loading = true;
      this.$store.dispatch("asyncAddCount", { diff: 2 }).then(() => {
        // 变化以后的回调
        this.loading = false;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
