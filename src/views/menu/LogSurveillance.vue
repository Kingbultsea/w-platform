<template>
  <div class="home">
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { wjhTool } from '../../util/wjhJS.js'

@Component({
  components: {

  }
})
export default class LogSurveillance extends Vue {
  columns1: object[] = [
    {
      title: '序号',
      key: 'id'
    },
    {
      title: '日期',
      key: 'date',
      render (h: any, params: any) {
        return h('span', wjhTool.dateFormat(+(params.row.date + '000'), 'y-M-dd hh:m'))
      }
    },
    {
      title: '推文主体',
      key: 'user'
    },
    {
      title: '检测链接',
      key: 'url',
      render (h: any, params: any) {
        return h('a', {
          attrs: {
            href: params.row.url
          }
        }, '链接')
      }
    },
    {
      title: '警报',
      key: 'warning',
      render (h: any, params: any) {
        return h('div', {
          attrs: {
            href: params.row.warning
          },
          domProps: {
            innerHTML: params.row.warning.replace(/\n/g, '<br/>')
          }
        })
      }
    }
  ]
  data1:lsdata[] = []

  // 服务器中拉取信息
  getData () {
    this.$axios.get('/lsdata').then((res: any) => {
      const data:lsdata[] = res.data
      this.data1 = data.reverse()
      console.log(data)
    })
  }

  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
</style>
