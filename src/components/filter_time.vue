<template>
  <div>
    时间{{t | format_date}}
    <!-- 
      | 单个竖线 用法 在linux 管道里面上一个结果是下一个执行的输入
      || js 逻辑
     -->
     <div>{{moment()}}</div>
     <div>{{moment().format('YY-MM-DD HH:mm:ss')}}</div>
     <div>过去多少时间{{moment().diff(moment(t), 'hours')}}</div>
     <!-- {{moment().diff(moment(t), 'minutes')}} -->
     <div>{{moment(t).add(2,'day').format('YY-MM-DD HH:mm:ss')}}</div>
  </div>
</template>

<script>
// moment 时间库
import moment from 'moment';
export default {
  // 过滤器 computed 重新计算
  filters:{
    format_data(value){
      // const date = new Date(value);
    //   return `${date.getFullYear()}年
    //   ${date.getMonth() + 1}月
    //   ${date.getDate()}日`
    }
  },
  data(){
    return {
      t:1583391046712,
      moment 
    }
  },
  computed:{

  },
  methods:{

  }

}
</script>

<style>

</style>