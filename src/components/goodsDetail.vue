<template>
<div class="item-intro-detail" ref="itemIntroDetail">
  <div class="item-intro-nav item-tabs">
    <Tabs>
      <TabPane label="商品介绍">
        <div class="remarks-title">
          <span>商品介绍</span>
        </div>
        <div class="item-intro-img" ref="itemIntroGoods">
          <img :src="item" alt="" v-for="(item,index) in goodsInfo.goodsImg" :key="index">
        </div>
      </TabPane>
     <TabPane label="规格参数">
        <div class="remarks-title">
          <span>规格参数</span>
        </div>
        <div class="item-param-container">
          <span class="item-param-box" v-for="(item,index) in goodsInfo.param" :key="index">
            <span class="item-param-title">{{item.title}}: </span>
            <span class="item-param-content">{{item.content}}</span>
          </span>
        </div>
      </TabPane>
      <TabPane label="售后保障">
        <!-- <ShowProductWarranty></ShowProductWarranty> -->
      </TabPane>
      <TabPane label="商品评价">
        <div class="remarks-container">
          <div class="remarks-title">
            <span>商品评价</span>
          </div>
          <div class="remarks-analyse-box">
            <div class="remarks-analyse-goods">
              <i-circle :percent="goodsInfo.remarks.goodAnalyse" stroke-color="#e4393c">
                <span class="remarks-analyse-num">{{goodsInfo.remarks.goodAnalyse}}%</span>
                <p class="remarks-analyse-title">好评率</p>
              </i-circle>
            </div>
            <div class="remarks-analyse-tags">
              <Tag checkable :color="tagsColor[index % 4]" v-for="(item,index) in goodsInfo.remarks.remarksTags" :key="index">{{item}}</Tag>
            </div>
          </div>
          <div class="remarks-bar">
            <span>追评({{goodsInfo.remarks.remarksNumDetail[0]}})</span>
            <span>好评({{goodsInfo.remarks.remarksNumDetail[1]}})</span>
            <span>中评({{goodsInfo.remarks.remarksNumDetail[2]}})</span>
            <span>差评({{goodsInfo.remarks.remarksNumDetail[3]}})</span>
          </div>
          <div class="remarks-box" v-for="(item,index) in goodsInfo.remarks.detail" :key="index">
            <div class="remarks-user">
              <Avatar icon="person" />
              <span class="remarks-user-name">{{item.username}}</span>
            </div>
            <div class="remarks-content-box">
              <p>
                <Rate disabled :value="item.values" allow-half class="remarks-star"></Rate>
              </p>
              <p class="remarks-content">{{item.content}}</p>
              <p class="remarks-sub">
                <span class="remarks-item">{{item.goods}}</span>
                <span class="remarks-time">{{item.time}}</span>
              </p>
            </div>
          </div>
          <div class="remarks-page">
            <Page :total="40" size="small" show-elevator show-sizer></Page>
          </div>
        </div>
      </TabPane> 
    </Tabs>
  </div>
</div>
</template>

<script>
import api from '../api/index'
export default {
  name:'goodsDetail',
  data() {
    return {
       tagsColor: [ 'blue', 'green', 'red', 'yellow' ],
      goodsInfo:{
        goodsImg:[],
        param:{},
        remarks:{
          detail:[{
            username:'',
            values: 0,
            content:'',
            goods:'',
            time:''
          }
          ],
          remarksNumDetail:[],
          remarksTags:[],
          goodAnalyse:0
        }
      }
    }
  },
  mounted(){
    api
      .getGoodInfo()
      .then(data => {
        console.log(data);
        this.goodsInfo = data
      })
  }
}
</script>

<style scoped>
.remarks-title {
  padding-left: 15px;
  height: 36px;
  font-size: 16px;
  font-weight: bolder;
  line-height: 36px;
  color: #666666;
  background-color: #F7F7F7;
  text-align: left
}
.item-intro-img{
  width: 100%;
}
.item-intro-img img{
  width: 100%;
}
.item-intro-detail{
  margin-left: 30px;
  width: calc(80vw - 300px);
}
.item-intro-nav{
  width: 100%;
  height: 38px;
  background-color: #F7F7F7;
  border-bottom: 1px solid #E4393C;
}
.item-intro-nav ul{
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.item-intro-nav li{
  float: left;
  height: 100%;
  width: 120px;
  line-height: 38px;
  text-align: center;
  color: #E4393C;
}
.item-intro-nav li:first-child{
  background-color: #E4393C;
  color: #fff;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab{
  border-radius: 0px;
  color: #999;
  height: 38px;
  background: #F7F7F7;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active{
  color: #fff;
  background-color: #E4393C;
}
.item-tabs > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active:before{
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  color: #fff;
  background: #F7F7F7;
  position: absolute;
  top: 0;
  left: 0;
}
</style>