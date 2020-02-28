(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e3dde408"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=s[e]=[t,r]}));t.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",c.name="ChunkLoadError",c.type=r,c.request=n,a[1](c)}s[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},"0a40":function(e,t,a){},2515:function(e,t,a){"use strict";var r=a("c9ad"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("GoodsList")],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-form"},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate}},[a("FormItem",{attrs:{label:"手机号",prop:"phone"}},[a("i-input",{attrs:{placeholder:"请输入手机号",size:"large"},model:{value:e.formValidate.phone,callback:function(t){e.$set(e.formValidate,"phone",t)},expression:"formValidate.phone"}})],1),a("FormItem",{attrs:{label:"验证码",prop:"checkNum"}},[a("i-input",{attrs:{placeholder:"请输入验证码",size:"large"},model:{value:e.formValidate.checkNum,callback:function(t){e.$set(e.formValidate,"checkNum",t)},expression:"formValidate.checkNum"}},[a("Button",{attrs:{slot:"append"},on:{click:e.getcheckNum},slot:"append"},[e._v("获取验证码")])],1)],1),a("Button",{attrs:{type:"error",size:"large",long:""},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("验证手机号")])],1)],1)},i=[],l={name:"register",data:function(){return{formValidate:{phone:"",checkNum:"",reciveNum:""},ruleValidate:{phone:[{required:!0,message:"手机号不能为空",trigger:"blur"},{type:"string",pattern:/^1[3|5|7|8|9][0-9]{9}$/,message:"手机号格式出错",trigger:"blur"}],checkNum:[{required:!0,message:"验证码不能为空",trigger:"blur"},{type:"string",min:4,max:4,message:"验证码长度错误",trigger:"blur"}]}}},methods:{handleSubmit:function(){var e=this;this.$refs.formValidate.validate((function(t){t?e.formValidate.checkNum==e.formValidate.reciveNum?(e.$Message.success({content:"成功激活手机号",duration:6,closable:!0}),console.log(t)):(e.$Message.error({content:"验证码错误",duration:6,closable:!0}),t=!1,console.log(t)):e.$Message.error({content:"表单有问题",duration:6,closable:!0})}))},getcheckNum:function(){11===this.formValidate.phone.length?(this.$Message.success({content:"验证码为：1234",duration:6,closable:!0}),this.formValidate.reciveNum=1234):this.$Message.error({content:"请输入正确的手机号",duration:6,closable:!0})}}},c=l,u=a("2877"),m=Object(u["a"])(c,o,i,!1,null,null,null),p=m.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"itemIntroDetail",staticClass:"item-intro-detail"},[a("div",{staticClass:"item-intro-nav item-tabs"},[a("Tabs",[a("TabPane",{attrs:{label:"商品介绍"}},[a("div",{staticClass:"remarks-title"},[a("span",[e._v("商品介绍")])]),a("div",{ref:"itemIntroGoods",staticClass:"item-intro-img"},e._l(e.goodsInfo.goodsImg,(function(e,t){return a("img",{key:t,attrs:{src:e,alt:""}})})),0)]),a("TabPane",{attrs:{label:"规格参数"}},[a("div",{staticClass:"remarks-title"},[a("span",[e._v("规格参数")])]),a("div",{staticClass:"item-param-container"},e._l(e.goodsInfo.param,(function(t,r){return a("span",{key:r,staticClass:"item-param-box"},[a("span",{staticClass:"item-param-title"},[e._v(e._s(t.title)+": ")]),a("span",{staticClass:"item-param-content"},[e._v(e._s(t.content))])])})),0)]),a("TabPane",{attrs:{label:"售后保障"}}),a("TabPane",{attrs:{label:"商品评价"}},[a("div",{staticClass:"remarks-container"},[a("div",{staticClass:"remarks-title"},[a("span",[e._v("商品评价")])]),a("div",{staticClass:"remarks-analyse-box"},[a("div",{staticClass:"remarks-analyse-goods"},[a("i-circle",{attrs:{percent:e.goodsInfo.remarks.goodAnalyse,"stroke-color":"#e4393c"}},[a("span",{staticClass:"remarks-analyse-num"},[e._v(e._s(e.goodsInfo.remarks.goodAnalyse)+"%")]),a("p",{staticClass:"remarks-analyse-title"},[e._v("好评率")])])],1),a("div",{staticClass:"remarks-analyse-tags"},e._l(e.goodsInfo.remarks.remarksTags,(function(t,r){return a("Tag",{key:r,attrs:{checkable:"",color:e.tagsColor[r%4]}},[e._v(e._s(t))])})),1)]),a("div",{staticClass:"remarks-bar"},[a("span",[e._v("追评("+e._s(e.goodsInfo.remarks.remarksNumDetail[0])+")")]),a("span",[e._v("好评("+e._s(e.goodsInfo.remarks.remarksNumDetail[1])+")")]),a("span",[e._v("中评("+e._s(e.goodsInfo.remarks.remarksNumDetail[2])+")")]),a("span",[e._v("差评("+e._s(e.goodsInfo.remarks.remarksNumDetail[3])+")")])]),e._l(e.goodsInfo.remarks.detail,(function(t,r){return a("div",{key:r,staticClass:"remarks-box"},[a("div",{staticClass:"remarks-user"},[a("Avatar",{attrs:{icon:"person"}}),a("span",{staticClass:"remarks-user-name"},[e._v(e._s(t.username))])],1),a("div",{staticClass:"remarks-content-box"},[a("p",[a("Rate",{staticClass:"remarks-star",attrs:{disabled:"",value:t.values,"allow-half":""}})],1),a("p",{staticClass:"remarks-content"},[e._v(e._s(t.content))]),a("p",{staticClass:"remarks-sub"},[a("span",{staticClass:"remarks-item"},[e._v(e._s(t.goods))]),a("span",{staticClass:"remarks-time"},[e._v(e._s(t.time))])])])])})),a("div",{staticClass:"remarks-page"},[a("Page",{attrs:{total:40,size:"small","show-elevator":"","show-sizer":""}})],1)],2)])],1)],1)])},d=[],v=(a("d3b7"),function(){return new Promise((function(e,t){setTimeout((function(){e({goodsImg:["https://tu.66vod.net/2019/6087.jpg"],param:{},remarks:{detail:[{username:"lan",values:4,content:"不错",goods:"华为p30",time:"  2018 10 25 "},{username:"jin",values:5,content:"不错",goods:"小米10",time:"  2018 10 12 "}],remarksNumDetail:[44,45,88,48],remarksTags:["不错","好评"],goodAnalyse:90}})}),1e3)}))}),h={getGoodInfo:v},g={name:"goodsDetail",data:function(){return{tagsColor:["blue","green","red","yellow"],goodsInfo:{goodsImg:[],param:{},remarks:{detail:[{username:"",values:0,content:"",goods:"",time:""}],remarksNumDetail:[],remarksTags:[],goodAnalyse:0}}}},mounted:function(){var e=this;h.getGoodInfo().then((function(t){console.log(t),e.goodsInfo=t}))}},_=g,b=(a("f682"),Object(u["a"])(_,f,d,!1,null,"787c5914",null)),k=(b.exports,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("i-input",{staticClass:"search",attrs:{placeholder:"输入你想查找的商品",size:"large"},model:{value:e.searchData,callback:function(t){e.searchData=t},expression:"searchData"}},[a("Button",{attrs:{slot:"append",icon:"ios-search"},on:{click:e.search},slot:"append"})],1),e._l(e.promotionTags,(function(t,r){return a("Tag",{key:r,attrs:{closable:""},on:{"on-close":function(t){return e.closeTags(r)}}},[a("span",{on:{click:function(t){return e.selectTags(r)}}},[e._v(" "+e._s(t)+" ")])])}))],2)])}),C=[],y=(a("a434"),{name:"search",data:function(){return{promotionTags:["买2免1","领200神券","199减100","母婴5折抢","充100送20"],searchData:""}},methods:{closeTags:function(e){this.promotionTags.splice(e,1)},search:function(){this.$router.push({path:"/search",query:{searchData:this.searchData}})},selectTags:function(e){console.log("--------"),this.searchData=this.promotionTags[e]}}}),j=y,x=(a("fa36"),Object(u["a"])(j,k,C,!1,null,"2c4dfde7",null)),w=(x.exports,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alet_container"},[a("section",{staticClass:"tip_text_container"},[e._m(0),a("p",{staticClass:"tip_text"},[e._v(e._s(e.alertText))]),a("div",{staticClass:"confrim",on:{click:e.closeTip}},[e._v("确认")])])])}),T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tip_icon"},[a("span"),a("span")])}],$={data:function(){return{positionY:0,timer:null}},mounted:function(){},props:["alertText"],methods:{closeTip:function(){this.$emit("closeTip")}}},I=$,O=(a("ba40"),Object(u["a"])(I,w,T,!1,null,"61913e38",null)),E=O.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("GoodsList")])},V=[],D={},A=D,P=Object(u["a"])(A,N,V,!1,null,null,null),S=P.exports,L={data:function(){return{showAlert:!1,alertText:""}},methods:{closeAlert:function(){this.showAlert=!1},showCancelAlert:function(){this.alertText="您真的要退出吗?",this.showAlert=!0},showLoginAlert:function(){this.alertText="您真的要登录吗",this.showAlert=!0}},components:{alertTip:E,GoodsList:S}},M=L,G=(a("034f"),Object(u["a"])(M,s,n,!1,null,null,null)),z=G.exports,F=a("8c4f"),U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},q=[],H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),e._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],W={name:"HelloWorld",props:{msg:String}},J=W,R=(a("eb21"),Object(u["a"])(J,H,B,!1,null,"018f599d",null)),Y=R.exports,K={name:"Home",components:{HelloWorld:Y}},Q=K,X=Object(u["a"])(Q,U,q,!1,null,null,null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("填写手机信息")])},te=[],ae={},re=ae,se=Object(u["a"])(re,ee,te,!1,null,null,null),ne=se.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("注册成功")])},ie=[],le={},ce=le,ue=Object(u["a"])(ce,oe,ie,!1,null,null,null),me=ue.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"signup"},[a("Row",{staticClass:"container"},[a("i-col",{staticClass:"signup-img-box",attrs:{span:"12",offset:"2"}},[a("img",{attrs:{src:"/img/signup-sale.png",alt:""}})]),a("i-col",{attrs:{span:"8"}},[a("div",{staticClass:"sign-up-title"},[a("h1",[e._v("欢迎注册账号")]),a("br"),a("h2",[e._v("BIT MALL, 天天低价品质保证， 让消费者钱更值钱")])]),a("div",{staticClass:"sing-up-step-box"},[a("Steps",{attrs:{current:e.signUpStep}},[a("Step",{attrs:{title:"验证手机号",icon:"iphone"}}),a("Step",{attrs:{title:"填写账号信息",icon:"person-add"}}),a("Step",{attrs:{title:"注册成功",icon:"ios-chekmark-outline"}})],1),a("div",{staticClass:"sign-up-box"},[a("router-view")],1)],1)])],1)],1)},fe=[],de={data:function(){return{signUpStep:1}},components:{register:p}},ve=de,he=(a("2515"),Object(u["a"])(ve,pe,fe,!1,null,"4026b0e6",null)),ge=he.exports,_e=function(e){return requestAnimationFrame(["@/components/GoodsList"],e)};r["default"].use(F["a"]);var be=[{path:"/",name:"Home",component:Z},{path:"/SignUp",name:"SignUp",component:ge,children:[{path:"/",name:"register",component:p},{path:"register",name:"register",component:p},{path:"inputinfo",name:"inputinfo",component:ne},{path:"signUpDone",name:"signUpDone",component:me}]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/GoodsList",name:"GoodsList",component:_e}],ke=new F["a"]({routes:be}),Ce=ke,ye=a("e069"),je=a.n(ye);a("dcad");r["default"].use(je.a),r["default"].config.productionTip=!1,new r["default"]({router:Ce,render:function(e){return e(z)}}).$mount("#app")},"85ec":function(e,t,a){},a3f3:function(e,t,a){},b316:function(e,t,a){},ba40:function(e,t,a){"use strict";var r=a("b316"),s=a.n(r);s.a},c9ad:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d5c9:function(e,t,a){},eb21:function(e,t,a){"use strict";var r=a("d5c9"),s=a.n(r);s.a},f682:function(e,t,a){"use strict";var r=a("0a40"),s=a.n(r);s.a},fa36:function(e,t,a){"use strict";var r=a("a3f3"),s=a.n(r);s.a}});
//# sourceMappingURL=app.97650a09.js.map