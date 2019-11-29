<template>
  <div class="landing-type">
    <Button type="info" style="text-align: left" @click="getqrblock">扫码登录</Button>
    <p style="margin-top: 15px">(如果在线谨慎扫码)</p>
    <Divider />

    <div class="">
      <div v-if="isLogin"><span class="blod-intend-font">登陆状态：</span> <div style="width: 10px;height: 10px;border-radius: 50%;background-color: green;display: inline-block;margin-right: 2px"></div>在线</div>
      <div v-else><span class="blod-intend-font">登陆状态：</span> <div style="width: 10px;height: 10px;border-radius: 50%;background-color: red;display: inline-block;margin-right: 2px"></div>离线</div>
      <div><span class="blod-intend-font">最近登录时间：</span>{{ parseTime(loginTime)}}</div>
      <div v-if="isLogin"><span class="blod-intend-font">累计登录时长：</span>{{ datePhase }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { wjhTool } from '../../util/wjhJS.js'

@Component({
  components: {
  }
})
export default class LandingType extends Vue {
  isLogin:boolean = false
  qrBlockUrl:string = ''
  loginTime: number = 0
  datePhase: number = 0
  getqrblock () {
    this.$root.load = true
    this.$axios.get('/qrblock').then((res: any) => {
      console.log(res.data)
      this.isLogin = res.data.isLogin
      this.qrBlockUrl = res.data.url
      this.loginTime = res.data.loginTime
      window.open(this.qrBlockUrl)
      this.$root.load = false
      // window.open(res.data.url)
      // window.location.href = res.data
    })
  }

  parseTime (date: number) {
    if (date !== 0) {
      localStorage.setItem('time', '' + date)
    } else {
      return wjhTool.dateFormat(+(localStorage.getItem('time') + '000'), 'y-M-dd hh:m')
    }
    return wjhTool.dateFormat(+(date + '000'), 'y-M-dd hh:m')
  }

  getCommonData () {
    this.$axios.get('/nowdata').then((res: any) => {
      this.qrBlockUrl = res.data.url
      this.loginTime = res.data.loginTime !== 0 ? res.data.loginTime : this.loginTime
      this.isLogin = res.data.isLogin
      this.datePhase = this.formatDuration(parseInt((new Date().getTime() / 1000).toString()) - this.loginTime)
    })
  }

  formatDuration (n: any) {
    if (n === 0) return 'now'
    const joinStr = (n: any): any => {
      if (n.length === 0) return ''
      if (n.length === 1) return String(n[0])
      if (n.length === 2) return String(n[0]) + ' and ' + String(n[1])
      return String(n[0]) + ', ' + joinStr(n.slice(1))
    }
    let seconds = n % 60
    let minutes = ~~((n /= 60) % 60)
    let hours = ~~((n /= 60) % 24)
    let days = ~~((n /= 24) % 365)
    let years = ~~(n /= 365)
    return joinStr([seconds === 0 ? '' : seconds === 1 ? '1 second' : (seconds + ' seconds'),
      minutes === 0 ? '' : minutes === 1 ? '1 minute' : (minutes + ' minutes'),
      hours === 0 ? '' : hours === 1 ? '1 hour' : (hours + ' hours'),
      days === 0 ? '' : days === 1 ? '1 day' : (days + ' days'),
      years === 0 ? '' : years === 1 ? '1 year' : (years + ' years')].filter(Boolean).reverse())
  }

  mounted () {
    setInterval(() => {
      this.getCommonData()
    }, 3000)
    this.getCommonData()
  }
}
</script>

<style lang="scss" scoped>
  .landing-type {
    text-align: left;
    .blod-intend-font {
      color: #464c5b;
      font-size: 14px;
      margin-right: 10px;
      font-weight: bolder;
    }
  }
</style>
