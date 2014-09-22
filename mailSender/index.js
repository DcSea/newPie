var nodemailer = require("nodemailer");
var mailConfig = {
    user:'15201317810@qq.com',
    pass:'mengzhidi9dui'
}
// var mailConfig = {
//     user:'domobNews@qq.com',
//     pass:'nodejsNewsSender'
// }
var mailSend = function(dest,title,content,callback){
    var transport = nodemailer.createTransport({
        service:'qq',
        auth:mailConfig
    });
    transport.sendMail({
        from : mailConfig.user,
        to : dest,
        subject: title,
        html : content
    },function(error, response){
        transport.close();
        if(error){
            console.log(error);
            callback('邮件发送失败');
        }else{
            console.log(response);
            callback(false);
        }
    });
}
exports.send = mailSend;
// mailSend('ducong@domob.cn','nodejs测试发送邮件','nodejs测试发送邮件',function(reply){
//     console.log('send reply:'+reply);
// });