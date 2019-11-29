<template>
  <div id="app">
    <div class="topBar">公众号监测管理平台</div>
    <router-view class="layout-content"/>
    <Spin fix style="z-index: 99999" v-if="this.$root.load">
      <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
      <div>Loading</div>
    </Spin>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {

  }
})

export default class App extends Vue {
  mounted () {
  }
}
</script>

<style lang="scss">
  .layout-content {
    box-sizing: border-box;
    padding: 10px;
  }
  .ivu-table-wrapper {
    overflow: initial !important;
  }
  .ivu-message-custon-content {
    z-index: 999999999999 !important;
  }
  .topBar {
    height: 60px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    font-size: 20px;
    >.logo {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  }
  * {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 1060px;
    min-width: 1250px;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
<style>
  .ivu-table-cell, .ivu-table {
    overflow: visible !important;
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
</style>
