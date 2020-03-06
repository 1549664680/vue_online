const mongoose = require('mongoose');

const movisSchema = mongoose.Schema({
  title:{
    type:String,
    require:true
  },
  poster:String, /*封面 url 比较大 jpg png */
  rating:String,
  introduction:String,
  // 大多数表的时间类型的声明
  create_at:{
    type:Date,
    default:Date.now /*不传值的话 默认值 */
  },
  update_at:{
    type:Date,
    default:Date.now
  }
})

const Movie = mongoose.model('Movie',movisSchema)
module.exports = Movie