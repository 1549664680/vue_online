<template>
  <div class="signup">
    <Row class="container">
      <i-col class="signup-img-box" span='12' offset='2'>
        <img src="/img/signup-sale.png" alt="">
      </i-col>
      <i-col span="8">
        <div class="sign-up-title">
          <h1 >欢迎注册账号</h1>
          <br>
          <h2>BIT  MALL, 天天低价品质保证， 让消费者钱更值钱</h2>
        </div>
        <div class="sing-up-step-box">
          <Steps :current="signUpStep">
            <Step title="验证手机号" icon="iphone"></Step>
            <Step title="填写账号信息" icon="person-add"></Step>
             <Step title="注册成功" icon="ios-chekmark-outline"></Step>
          </Steps>
          <div class="sign-up-box">
            <router-view></router-view>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import register from '@/components/register.vue'
export default {
data(){
  return{
    signUpStep:1
  }
},
  components:{
    register
  }
}
</script>

<style scoped>
  .container{
    margin: 15rpx auto;
    height: 500px;
    overflow: hidden;
  }
  .signup-img-box{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signup-img-box>img{
    height: 80%;
    max-width: 100%
  }
  .sign-up-title{
    width: 430px;
    margin: 15px auto;
    height: 80px;  
    text-align: left;
    }

  .sing-up-step-box{
    margin: 15px auto;
    padding-left: 30px;
    padding-top: 30px;
    width: 430px;
    height: 380px;
    border: 1px solid #495060;
  }
  .sign-up-box{
    margin: 30px 25px;
    width: 350px;
    display:flex;
    align-items: center 
  }

</style>