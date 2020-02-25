<template>
  <div id="app" class="container">
    <!-- <register/> -->
    <!-- <router-view/> -->
    <!-- <goodsDetail/> -->
    <!-- <search/> -->
    <router-view/>
  </div>
</template>
<script>
import register from '@/components/register.vue'
import goodsDetail from '@/components/goodsDetail.vue'
import search from '@/components/search.vue'
export default {
  components:{
    register,
    goodsDetail,
    search
  },
  data() {
    return {
      
    }
  },
  methods: {
   
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