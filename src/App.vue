<template>
  <div id="app" class="container">
    <!-- <register/> -->
    <!-- <router-view/> -->
    <!-- <goodsDetail/> -->
    <!-- <search/> -->
    <!-- <router-view/> -->
    <!-- <alertTip v-if="showAlert" :alertText="alertText" @closeTip="closeAlert"/>
    <Button @click="showCancelAlert">提示退出</Button>
    <Button @click="showLoginAlert">提示登录</Button>  -->
    <!-- <GoodsList/> -->
    <watch/>
  </div>
</template>
<script>
import register from '@/components/register.vue'
import goodsDetail from '@/components/goodsDetail.vue'
import search from '@/components/search.vue'
import alertTip from '@/components/common/alertTip.vue'
import GoodsList from '@/components/GoodsList.vue'
import watch from '@/components/watch.vue'
export default {
  data() {
    return {
      showAlert: false,
      alertText: ''
    }
  },
  methods: {
    closeAlert () {
      this.showAlert = false
    },
    showCancelAlert() {
      this.alertText = '您真的要退出吗?'
      this.showAlert = true
    },
    showLoginAlert() {
      this.alertText = '您真的要登录吗'
      this.showAlert = true
    }
  },
  components: {
    alertTip,
    GoodsList,
    watch
    // 怎么解决？
  }  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>