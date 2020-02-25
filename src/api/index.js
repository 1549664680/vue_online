const getGoodInfo = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        goodsImg:['https://tu.66vod.net/2019/6087.jpg'],
        param:{},
        remarks:{
          detail:[
            {
            username:'lan',
            values:4,
            content:'不错',
            goods:'华为p30',
            time:'  2018 10 25 '
          },
          {
            username:'jin',
            values:5,
            content:'不错',
            goods:'小米10',
            time:'  2018 10 12 '
          }
        ],
          remarksNumDetail:[44,45,88,48],
          remarksTags:['不错','好评'],
          goodAnalyse:90
        }
      })
    },1000)
  }
)}
export default{
  getGoodInfo:getGoodInfo
}