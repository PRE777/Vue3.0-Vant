<template>
  <div class="home">
    <van-nav-bar title="主界面" right-text="按钮" @click-right="onClickRight" />
    <div class="mian-container">
      <h2 class="van-doc-demo-block__title">按钮类型</h2>
      <van-button type="primary" to="/about">路由跳转</van-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Toast } from "vant";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  methods: {
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>
<style lang="less" scoped>
.mian-container {
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
}
.van-doc-demo-block__title {
  margin: 0;
  padding: 32px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
.van-button--primary {
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
}
.van-button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    transition: opacity 0.2s;
    -webkit-appearance: none;
}
</style>
