<template>
  <div class="">
    <!-- <img src="../assets/logo.png" /> -->
    <div>{{ msg }}</div>
    <div @click="add">{{ $store.state.HelloWorld.count }}</div>
    <div @click="goSecondPage">点击去往第二页</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "点击数字递增，数据将一直存储"
    };
  },
  mounted() {},
  methods: {
    // ...mapActions(["HelloWorld/asyncAddCount"]),
    goSecondPage() {
      this.$router.push("/SecondPage");
    },
    add() {
      this.$store.commit("addCount", { diff: 1 });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
