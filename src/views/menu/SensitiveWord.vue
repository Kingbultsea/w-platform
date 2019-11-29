<template>
  <div class="sensitive-word">
    <div style="margin-bottom: 10px">
      <Button type="info" style="margin-right: 10px" @click="addWord">添加词段</Button>
      <Input v-model="value" placeholder="词段之间用英文逗号“,”分隔(英文逗号)" style="width: 300px" />
    </div>
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
export default class SensitiveWord extends Vue {
  value = '' // 词段
  columns1: object[] = [
    {
      title: '序号',
      key: 'id'
    },
    {
      title: '词段',
      key: 'word'
    },
    {
      title: '开始监测时间',
      key: 'date',
      render (h: any, params: any) {
        return h('span', wjhTool.dateFormat(+(params.row.date + '000'), 'y-M-dd hh:m'))
      }
    },
    {
      title: '监测后出现的数量',
      key: 'count'
    }
  ]
  data1:swdata[] = [
  ]

  addWord () {
    this.$axios.post('add/word', { content: this.value }).then((res: any) => {
      this.$Notice.success({
        title: `添加成功！`
      })
      this.getWord()
    })
  }

  getWord () {
    this.$axios.get('get/word').then((res: any) => {
      const data:swdata[] = res.data
      this.data1 = data
    })
  }

  mounted () {
    this.getWord()
  }
}
</script>

<style lang="scss" scoped>
</style>
