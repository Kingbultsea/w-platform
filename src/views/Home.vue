<template>
  <div class="home">
    <Layout :style="{minHeight: '100%'}">
      <Sider :style="{backgroundColor: '#fff'}" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">

        <Menu :active-name="an" theme="light" width="auto" :class="menuitemClasses" style="text-align: left">

          <router-link v-for="(li, index) in menu" style="color: #515a6e" :to="li.url" :key="index">
            <MenuItem :name="li.value">
              <Icon :type="li.icon" />
              <span>{{li.name}}</span>
            </MenuItem>
          </router-link>
        </Menu>

      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff',maxHeight: 'calc(100vh - 165px)', minHeight: '260px', overflowX: 'hidden', borderRadius: '10px', boxSizing: 'border-box', padding: '10px'}">
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// require('./type/Home.d.ts')

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  isCollapsed:boolean = false
  an:string = '' // active name menu中的
  menu: menuItem[] = [{
    name: '监控日志',
    value: 'LogSurveillance',
    icon: 'ios-clipboard-outline',
    url: 'LogSurveillance'
  }, {
    name: '敏感词管理',
    value: 'SensitiveWord',
    icon: 'ios-cloud-outline',
    url: 'SensitiveWord'
  }, {
    name: '账号状态',
    value: 'LangdingType',
    icon: 'ios-contact-outline',
    url: 'LangdingType'
  }]
  get rotateIcon () {
    return [
      'menu-icon',
      this.isCollapsed ? 'rotate-icon' : ''
    ]
  }
  get menuitemClasses () {
    return [
      'menu-item',
      this.isCollapsed ? 'collapsed-menu' : ''
    ]
  }

  // 解决跳转
  toMenue (id: any) {
    const myElement = document.getElementById(id)!
    myElement.scrollIntoView()
  }

  collapsedSider () {
    const ref: any = this.$refs['side1']
    ref.toggleCollapse()
  }

  mounted () {
    this.an = this.$router.currentRoute.path.replace(/\//, '')
  }
}
</script>

<style lang="scss" scoped>
  .home {
    flex-grow: 1;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: calc(100vh - 60px);
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    text-align: left;
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<style>
  .menu-item span {
    text-overflow: initial !important;
  }
</style>
