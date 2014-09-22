var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/newPie',function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log('connect to mongodb succeed');
  }
});

var userSchema = new Schema({
  account:{type: String},
  hash:{type: String},
  token:{type: String},
  time:{type: String},
  _time:{type: Number},
  verified:{type: Number},
  headUrl:{type: String},
  headArray:[String],
  selfIntro:{type: String},
  sex:{type: Number},
  mobile:{type: String},
  name:{type:String},
  nickname:{type: String},
  heigh:{type: Number},
  weight:{type: Number},
  birthday:{type:Number},
  curLocation:{type: String},
  originPlace:{type: String},
  university:{type: String},
  degree:{type: String},
  job:{type: String},
  matchMinHeight:{type: Number},
  matchMaxHeight:{type: Number},
  matchMinAge:{type: Number},
  matchMaxAge:{type: Number},
  matchMinDegree:{type: Number},
  matchMaxDegree:{type: Number},
  matchDistanceRequire:{type: String}
});
var userModel = mongoose.model('user',userSchema);
exports.userModel = userModel;

var matchRecordSchema = new Schema({
  one:{type: String},
  another:{type: String},
  result:{type: Number},
  curStatus:{type: Number},
  time:{type: String},
  _time:{type: Number}
});
var loginRecordModel = mongoose.model('loginRecord',loginRecordSchema);
exports.loginRecordModel = loginRecordModel;

var loginRecordSchema = new Schema({
  account:{type: String},
  time:{type: String},
  _time:{type: Number}
});
var loginRecordModel = mongoose.model('loginRecord',loginRecordSchema);
exports.loginRecordModel = loginRecordModel;

var sessionSchema = new Schema({
  browser:{type: String},
  userId:{type: String},
  live:{type: Number}
});
var sessionModel = mongoose.model('session',sessionSchema);
exports.sessionModel = sessionModel;