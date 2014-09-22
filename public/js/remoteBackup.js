if(typeof(cordova) != 'undefined'){
	jQuery('#uploadPhotoSelect').css('display','none');
	Quo('#uploadPhotoButton').bind('tap',function(){
		pie.selectUploadWay();
	});
}
pie.selectUploadWay = function(){
	pie.showShadow();
	jQuery('#messageControlBox').css('top',Math.floor((pie.height-101)/2));
	jQuery('#messageControlBox').css('display','block');
	jQuery('#resendMessage').html('照相上传');
	jQuery('#deleteMessage').html('选择相册');
	Quo('#resendMessage').unbind('tap');
	Quo('#resendMessage').bind('tap',function(){
		pie.hideShadow();
		jQuery('#messageControlBox').css('display','none');
		jQuery('#resendMessage').html('重发');
		jQuery('#deleteMessage').html('删除');
		pie.getPicture(Camera.SAVEDPHOTOALBUM);
	});
	Quo('#deleteMessage').unbind('tap');
	Quo('#deleteMessage').bind('tap',function(){
		pie.hideShadow();
		jQuery('#messageControlBox').css('display','none');
		jQuery('#resendMessage').html('重发');
		jQuery('#deleteMessage').html('删除');
		pie.getPicture(Camera.PictureSourceType.PHOTOLIBRARY);
	});
	Quo('#pieShadow').unbind('tap');
	setTimeout(function(){
		Quo('#pieShadow').bind('tap',function(){
			Quo(this).unbind('tap');
			jQuery('#messageControlBox').css('display','none');
			pie.hideShadow();
		});
	},500);
}
jQuery('#doRegNow').css('display','none');
var socialText = "<div id='socialText'>请放心,我们不会随意触发任何新鲜事的~</div>";
jQuery('#socialLoginNav').append(socialText);
jQuery('#renrenLogo').bind('load',function(){
	jQuery(this).css('width','180px');
});
jQuery('#renrenLogo').attr('src','http://piemoment.com/m/img/renrenBig.png');
jQuery('#weiboLogo').css('height','37px');
jQuery('#weiboLogo').css('width','37px');
var remoteCss = document.createElement('style');
var sendButton = document.createElement('input');
sendButton.type = 'button';
sendButton.id = 'sendMessageButton';
sendButton.value = '发送';
document.getElementById('talkForm').appendChild(sendButton);
jQuery('#talkInput').css('width','70%');
Quo('#sendMessageButton').bind('tap',function(){
	pie.tcp.sendMessage();
});
Quo('#finishInfoButton').unbind('tap');
Quo('#finishInfoButton').bind('tap',function(){
	pie.showLeftMenu();
	setTimeout(function(){
		jQuery('.menuNavOuter').css('background-color','transparent');
      	jQuery('#menuUserHomeNav').css('background-color','#525252');
		setTimeout(function(){
			pie.showPage('userHomePage');
		},500);
	},500);
});
jQuery('#resetGetSmsArea').css('display','none');
var resetGetEmailAreaHTML = "<div id='resetGetEmailArea'><div class='formArea'>"
+"<div class='formTitle'>请输入您的邮箱申请重置密码</div><div class='formItem formInputItem'>"
+"<input type='text' placeholder='邮箱' class='itemInput' id='resetEmailInput'>"
+"</div></div><div class='formItem formInputItem'><input type='submit' class='itemSubmit'"
+"value='确认' id='resetEmailSubmit'></div></div>";
jQuery('#pieFindBackPasswordPage .scrollArea').append(resetGetEmailAreaHTML);
jQuery('#resetGetEmailArea').css('display','none');
var selectResetAreaHTML = "<div id='selectResetArea'><div id='resetBySmsButton' class='button'>通过手机号找回</div>"
+"<div id='resetByEmailButton' class='button'>通过邮箱找回</div></div>";
jQuery('#pieFindBackPasswordPage .scrollArea').append(selectResetAreaHTML);
remoteCss.innerHTML = "#sendMessageButton{width:20%;height:30px;border:none;background-color:"
+"#eee;border-radius:15px;margin-left:1%;position:relative;top:-6px;box-shadow:0px 2px #bbb;}"
+"#sendMessageButton:active{top:-4px;box-shadow:none;}"
+"#selectResetArea .button{background:#ea4c89;border:1px solid #ccc;border-radius:4px;width:80%;"
+"height:50px;line-height:50px;color:#fff;text-align:center;margin:auto;outline: none;margin-bottom:20px;}"
+"#socialText{position:absolute;top:-20px;font-size:12px;color:#eee;}"
+"#newInputSubmit{display:none;width:85%;margin:auto;margin-top:20px;text-align:center;color:#fff;border-radius:5px;padding:15px 0px;background-color:#ea4c89;}"
+"#userInfoPhotosArea{text-align:center;font-size:60px;}#firstLeftUpload{margin-right:50px}"
+".firstUpload{display:inline-block;width:100px;height:100px;border-radius:50%;background-color:#ddd;}"
+"#userInfoPhotosArea i{position:relative;top:15px;}#userInputPage{z-index:10;}";
jQuery('#resetBySmsButton').css('display','none');
Quo('#resetBySmsButton').bind('tap',function(){
	jQuery('#selectResetArea').css('display','none');
	jQuery('#resetGetSmsArea').css('display','block');
	Quo('#arrowBack').unbind('tap');
	Quo('#arrowBack').bind('tap',function(){
		jQuery('#selectResetArea').css('display','block');
		jQuery('#resetGetSmsArea').css('display','none');
		Quo('#arrowBack').unbind('tap');
		Quo('#arrowBack').bind('tap',function(){
			pie.pageBack();
		})
	})
});
Quo('#resetByEmailButton').bind('tap',function(){
	jQuery('#selectResetArea').css('display','none');
	jQuery('#resetGetEmailArea').css('display','block');
	Quo('#arrowBack').unbind('tap');
	Quo('#arrowBack').bind('tap',function(){
		jQuery('#selectResetArea').css('display','block');
		jQuery('#resetGetEmailArea').css('display','none');
		Quo('#arrowBack').unbind('tap');
		Quo('#arrowBack').bind('tap',function(){
			pie.pageBack();
		})
	})
});
Quo('#resetEmailSubmit').bind('tap',function(){
	var emailMode = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email = jQuery('#resetEmailInput').val();
	if(!emailMode.test(email)){
		pie.remind('请输入正确的邮箱');
		jQuery('#resetEmailInput').focus();
		return;
	}
	var emailData = {
		'_format':'json',
		'app_token':'app_token',
		'userkey':email
	}
	pie.showLoading('正在发送邮件');
	jQuery.ajax({
		url:pie.serverBase+'/api/auth/account/reset/passwd/via/email',
		type:'get',
		data:emailData,
		dataType:'json',
		success:function(reply){
			pie.hideLoading();
			if(reply.status != 'success'){
				pie.remind('发送邮件失败，请报告管理员');
				return;
			}
			else{
				pie.remind('重置密码的邮件已经发送至您的邮箱:'+email+',请前往确认')
			}
		},
		error:function(err){
			pie.hideLoading();
			pie.remind('发送邮件失败:'+err+',这应该是网络问题造成的');
		}
	});
})
var inactivateHtml = "<div class='pieSettingNav' id='inactivateNav'><i class='icon-lock'></i><span>inactivate - 中止配对</span></div>";
jQuery('#feedBackNav').after(inactivateHtml);
Quo('#inactivateNav').bind('tap',function(){
	pie.inactivate();
});
jQuery('.pieSettingNav').css('position','relative');
jQuery('.pieSettingNav span').css('position','absolute');
jQuery('.pieSettingNav span').css('left','35px');
pie.inactivate = function(){
	var inactiveData = {
      'token':this.user.data.access_token
    }
    this.showLoading('正在中止配对服务');
    jQuery.ajax({
      url:this.serverBase+'/api/rest/apps/pie_match/inactivate.json',
      type:'get',
      data:inactiveData,
      dataType:'json',
      success:function(reply){
        pie.hideLoading();
        if(reply.status != 'success'){
          if(reply.code == '2002'){
            pie.confirm('账号已过期,请重新登录',function(){
              pie.user.logout(0);
            },false)
          }
          else{
            pie.remind('中止配对服务失败,错误码:'+reply.code+'请报告管理员');
          }
          return;
        }
        pie.page.pieMatchIndexPage.inited = false;
        pie.page.pieMatchIndexPage.init(1);
      },
      error:function(err){
        pie.hideLoading();
        pie.remind('中止配对服务失败:'+err+',这应该是网络问题造成的');
      }
    })
}
pie.activate = function(){
	var activeData = {
      'token':pie.user.data.access_token
    }
    pie.showLoading('正在激活');
    jQuery.ajax({
      url:pie.serverBase+'/api/rest/apps/pie_match/activate.json',
      type:'get',
      data:activeData,
      dataType:'json',
      success:function(reply){
        pie.hideLoading();
        if(reply.status != 'success'){
          if(reply.code == '2002'){
            pie.confirm('账号已过期,请重新登录',function(){
              pie.user.logout(0);
            },false)
          }
          else{
            pie.remind('激活账号失败,错误码:'+reply.code+'请报告管理员');
          }
          return;
        }
        jQuery('#activateButton').css('display','none');
        pie.page.pieMatchIndexPage.inited = false;
        pie.page.pieMatchIndexPage.init(1);
      },
      error:function(err){
        pie.hideLoading();
        pie.remind('激活账号失败:'+err+',这应该是网络问题造成的');
      }
    })
}
pie.user.doLogout = function(){
	pie.pieMoment.userId = -1;
	window.localStorage.pieMoment = JSON.stringify(pie.pieMoment);
	pie.jPush.unbind();
	if(pie.useWeibo){
		var weiboFrame = document.getElementById('weiboLoginFrame');
		pie.showLoading('正在退出');
		if (weiboFrame.attachEvent){
			weiboFrame.attachEvent("onload", function(){
				window.location.reload();
			});
		}
		else {
			weiboFrame.onload = function(){
				window.location.reload();
			};
		}
		weiboFrame.src = 'http://weibo.com/logout.php?backurl=%2F';
	}
	else{
		window.location.reload();
	}
}
if(localStorage.isDC){
	var newInputSubmitHtml = "<div id='newInputSubmit'>下一步</div>";
	jQuery('#userInputPage .paddingArea').append(newInputSubmitHtml);
	Quo('#newInputSubmit').bind('tap',function(){
		pie.page.userInputPage.submit();
	});
	pie.user.checkInfo = function(){
		var uip = pie.page.userInputPage;
		if(!('realname' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoRealname');
			return;
		}
		if(!('birthday' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoBirthday');
			return;
		}
		if(!('birth_place' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoBirthPlace');
			return;
		}
		if(!('height' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoHeight');
			return;
		}
		if(!('weight' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoWeight');
			return;
		}
		if(!('school' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoSchool');
			return;
		}
		if(!('degree' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoDegree');
			return;
		}
		if(!('current_location' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoCurrentLocation');
			return;
		}
		if(!('occupation' in this.info)||!('domain' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoOccupation');
			return;
		}
		if(!('nickname' in this.info)){
			pie.user.infoFinished = false;
			pie.backup();
			uip.showInput('userInfoNickname');
			return;
		}
		pie.user.infoFinished = true;
		pie.backup();
		for(var key in this.info){
			console.log(key+'='+this.info[key])
		}
		for(var key in this.expectations){
			console.log(key+'='+this.expectations[key])
		}
	}
	pie.user.getInfo = function(sync){
      var userData = {
        '_format':'json',
        'token':this.data.access_token,
        'platform':pie.platform
      }
      if(sync){
        pie.showLoading('正在同步');
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/users/'+this.data.puid,
        type:'get',
        data:userData,
        dataType:'json',
        success:function(reply){
          pie.hideLoading();
          if(pie.refreshStart){
            pie.endRefresh();
          }
          if(reply.status == 'error'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('获取基本信息出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          pie.user.info = reply.data[0];
          pie.user.expectations = reply.data[1];
          if(!pie.user.infoFinished){
          	pie.user.checkInfo();
          }
          if(pie.user.info.sex == true){
            pie.user.info.sex = 1;
            if(!pie.user.tips){
              pie.user.tips = pie.maleTips;
            }
          }
          else{
            pie.user.info.sex = 0;
            if(!pie.user.tips){
              pie.user.tips = pie.femaleTips;
            }
          }
          pie.backup();
          if(!sync){
            pie.tcp.init();
          }
          pie.page.userHomePage.refresh();
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取用户信息出错:'+err+',这应该是网络问题造成的');
        }
      })
	}
	if(pie.user.exist&&!pie.user.infoFinished){
		pie.user.getInfo();
	}
}
pie.npc.talk = function(message){
	pie.tcp.emitTalkToNpc(message);
	jQuery.post('http://www.xiaohuangji.com/ajax.php',{'para':message},function(pieWords){
		var unKnownReply = 
		['请问你在说什么鸟语?',
		'能说句我听得懂的吗?',
		'所以你是在考验我语义分析的能力吗?我听不懂啊',
		'你快别擦键盘了,说的我都听不懂啊',
		'饶了我吧~我真的不知道你在说什么',
		'再说一遍好吗?我刚没听明白'];
		if(pieWords == ''||pieWords.match('<a')){
			var rIndex = Math.floor(unKnownReply.length*Math.random());
			pieWords = unKnownReply[rIndex];
		}
		pieWords = pieWords.replace(/小黄鸡/g,'小Pie');
		pie.tcp.emitNpcReply(pieWords);
		if(pie.soundOn){
			pie.newMessageMedia.play();
		}
		var curTime = pie.tcp.judgeTime(pie.messageTime());
		var contentHtml = '<div class="mateTalkBlock" id="'+pie.user.talkRecord.length+'mateTalkBlock"><table><tbody><tr><td valign="top" width="15%"><div class="mateTalkHead" style="background-image:url('+pie.npc.smallHeadUrl+')"></div></td><td valign="top"><div class="mateTalkContent">'+pieWords+'</div><span class="messageTime">'+curTime+'</span></td></tr></tbody></table></div>';
		jQuery('#mateTalkPage .scrollArea').append(contentHtml);
		pie.talkScrollArea.refresh();
		var lastElem = document.getElementById(pie.user.talkRecord.length+'mateTalkBlock');
		pie.talkScrollArea.scrollToElement(lastElem,100);
		pie.user.talkRecord.push({
			'mid':10000*Math.random(),
			'from':pie.mate.info.puid,
			'to':pie.user.data.puid,
			'status':pie.messageStatus.inMessage,
			'content':pieWords,
			'contentType':0,
			'time':pie.messageTime()
		});
		pie.backup();
	});
}
pie.page.pieMatchIndexPage.refresh = function(){
	var reply = pie.user.matchReply;
	if(reply.status != 'success'){
		jQuery('#matchStatus').css('display','block');
		if(pie.studyStart){
			jQuery('#pieMatchIndexPageMenu').html('体验中');
		}
		else{
			jQuery('#pieMatchIndexPageMenu').html('体验一下');
		}
		switch(reply.message){
			case 'inactive':
			jQuery('#matchStatusText').html('您的账号目前不能参与配对,请点击此处激活');
			jQuery('#activateButton').css('display','block');
			jQuery('#statusTime').css('display','none');
			break;
			case 'not_matched': 
			jQuery('#matchStatusText').html('本着宁缺毋滥的原则,今日没有为你找到合适的配对,距下次配对:');
			jQuery('#statusTime').css('display','block');
			break;
			case 'ready_for_match':
			jQuery('#matchStatusText').html('每天中午12点为你匹配一位Ta,距下次配对:');
			jQuery('#statusTime').css('display','block');
			break;
		}
		pie.mate.exist = false;
		pie.npc.init();
		return;
	}
	jQuery('#pieMatchIndexPageMenu').html('');
	jQuery('#matchStatus').css('display','none');
	pie.user.matchType = reply.data.type;
	if(reply.data.type == 1){
		if(!('followers_info' in reply.data.data[0])){
			jQuery('#statusText').html('请耐心等待有缘人:');
			jQuery('#matchControlBox').css('display','none');
			return;
		}
		pie.aladdin.info = reply.data.data[0];
		pie.aladdin.personInfo = reply.data.data[0].followers_info;
		pie.aladdin.personExpecation = reply.data.data[0].followers_expectation;
		pie.aladdin.init(1);
		switch(pie.aladdin.info.aladdin_status){
			case 'successful aladdin':
			jQuery('#pieMatchType').css('display','none');
			jQuery('#statusText').html('配对成功,加油!');
			jQuery('#matchControlLeftButton i').removeClass('icon-remove');
			jQuery('#matchControlLeftButton i').addClass('icon-refresh');
			jQuery('#matchControlRightButton i').removeClass('icon-heart');
			jQuery('#matchControlRightButton i').addClass('icon-comment');
			jQuery('#matchControlRightButton').css('background-color','rgb(8, 143, 148)');
			break;
			case 'not decided yet':
			jQuery('#statusText').html('请尽快做出选择:');
			jQuery('#matchControlLeftButton i').removeClass('icon-refresh');
			jQuery('#matchControlLeftButton i').addClass('icon-remove');
			jQuery('#matchControlRightButton i').removeClass('icon-comment');
			jQuery('#matchControlRightButton i').addClass('icon-heart');
			break;
			case 'failed match':
			jQuery('#statusText').html('配对失败,下次配对只剩');
			pie.mate.exist = false;
			pie.npc.init();
			break;
			case 'break up match':
			jQuery('#statusText').html('配对被取消,下次配对只剩');
			pie.mate.exist = false;
			pie.npc.init();
			break;
			default:pie.remind('what?'+pie.user.matchInfo.match_status);
			break;
		}
		return;
	}
	if(reply.data.data.length > 0){
		pie.mate.exist = true;
		pie.user.matchInfo = reply.data.data[0];
		pie.mate.info = reply.data.data[0].target_info;
		if(pie.mate.info.puid != pie.user.curMate){
			pie.mate.changed = true;
		}
		pie.user.curMate = pie.mate.info.puid;
		if(pie.user.talkRecord){
			pie.page.mateTalkPage.showRecord();
		}
		pie.mate.expectations = reply.data.data[0].target_expectation;
		pie.mate.init();
		pie.backup();
		switch(pie.user.matchInfo.match_status){
			case 'successful aladdin':
			case 'successful match':
			jQuery('#matchControlBox').css('display','block');
			jQuery('#mateDecisionBox').css('font-size','20px');
			jQuery('#mateDecisionBox').css('top','23px');
			jQuery('#mateDecisionText i').removeClass('icon-ok');
			jQuery('#mateDecisionText i').addClass('icon-heart');
			jQuery('#mateDecisionText i').css('display','inline');
			jQuery('#mateDecisionText span').html('配对成功');
			jQuery('#countDownClock').css('display','none');
			jQuery('#leftButtonIcon i').removeClass('icon-heart');
			jQuery('#leftButtonIcon i').addClass('icon-comment');
			jQuery('#leftButtonText').html('talk');
			jQuery('#matchControlLeftButton').css('background-color','rgb(8, 143, 148)');
			jQuery('#rightButtonIcon i').removeClass('icon-play');
			jQuery('#rightButtonIcon i').addClass('icon-refresh');
			jQuery('#rightButtonText').html('break');
			break;
			case 'not decided yet':
			jQuery('#mateDecisionText i').css('display','none');
			switch(pie.user.matchInfo.my_decision){
				case 'like':
				jQuery('#mateDecisionText span').html('你已选择like');
				jQuery('#matchControlBox').css('display','none');
				break;
				case 'pass':
				jQuery('#mateDecisionText span').html('你已选择pass');
				jQuery('#matchControlBox').css('display','none');
				break;
				case 'unknown':
				jQuery('#matchControlBox').css('display','block');
				switch(pie.user.matchInfo.target_decision){
					case 'unknown':
					jQuery('#mateDecisionText span').html('请快选择');
					break;
					case 'decision_made':
					jQuery('#mateDecisionText i').removeClass('icon-heart');
					jQuery('#mateDecisionText i').addClass('icon-ok');
					jQuery('#mateDecisionText i').css('display','inline');
					if(pie.mate.info.sex == 0){
						jQuery('#mateDecisionText span').html('她已选择');
					}
					else{
						jQuery('#mateDecisionText span').html('他已选择');
					}
					break;
				}
				break;
				default:break;
			}
			break;
			case 'failed aladdin':
			case 'failed match':
			jQuery('#mateDecisionText i').css('display','none');
			switch(pie.user.matchInfo.my_decision){
				case 'unknown':
				if(pie.mate.info.sex == 0){
					jQuery('#mateDecisionText span').html('她已选择');
				}
				else{
					jQuery('#mateDecisionText span').html('他已选择');
				}
				jQuery('#mateDecisionText i').removeClass('icon-heart');
				jQuery('#mateDecisionText i').addClass('icon-ok');
				jQuery('#mateDecisionText i').css('display','inline');
				jQuery('#matchControlBox').css('display','block');
				break;
				case 'like':
				jQuery('#mateDecisionText span').html('配对失败');
				jQuery('#matchControlBox').css('display','none');
				pie.mate.exist = false;
				break;
				case 'pass':
				jQuery('#mateDecisionText span').html('你已选择pass');
				jQuery('#matchControlBox').css('display','none');
				break;
			}
			break;
			case 'break up match':
			jQuery('#mateDecisionText span').html('配对失败');
			jQuery('#mateDecisionText i').css('display','none');
			jQuery('#matchControlBox').css('display','none');
			pie.mate.exist = false;
			break;
			default:pie.remind('what?'+pie.user.matchInfo.match_status);
			break;
		}
	}
}
var pt = pie.tcp;
pt.emitNextMessage = function(){
	var next = pie.user.nextMessageIndex;
	var talkRecord = pie.user.talkRecord;
	while(next<talkRecord.length&&(talkRecord[next].from != pie.user.data.puid||talkRecord[next].status == pie.messageStatus.deleted)){
		next++;
	}
	pie.user.nextMessageIndex = next;
	pie.backup();
	if(next>=talkRecord.length){return;}
	if(pie.user.messageSended){
		pie.user.messageSended = false;
		this.handle.emit('pieTalk',{
			'targetId':pie.mate.info.puid,
			'content':talkRecord[next].content,
			'contentType':talkRecord[next].contentType,
			'nickname':pie.user.info.nickname,
			'puid':pie.user.data.puid,
			'access_token':pie.user.data.access_token
		});
		this.checkSend = setTimeout(function(){
			pie.tcp.emitFailed();
		},30000);
		pie.backup();
	}
}
pt.emitTalkToNpc = function(message){
	if(!this.handle){return;}
	this.handle.emit('talkToNpc',{
		'content':message
	});
}
pt.emitNpcReply = function(message){
	if(!this.handle){return;}
	this.handle.emit('npcReply',{
		'content':message
	});
}
pt.emitReport = function(message,target){
	if(!this.handle){return;}
	if(target == null){
		target = '产品';
	}
	this.handle.emit('pieReport',{'acc':pie.user.data.access_token,'content':message,'target':target,'platform':pie.platform});
}
var allPage = pie.page;
var newShowReport = function(){
	var newTestReport = "恭喜您已经完成了测试,我们将会根据您的测试结果为你匹配更适合的对象!";
	jQuery('#'+this.id+' .testChoices').css('display','none');
	jQuery('#'+this.id+' .testQuestion').css('display','none');
	jQuery('#'+this.id+' .testReport').css('display','block');
	jQuery('#'+this.id+' .testTitle').html('谢谢!');
	jQuery('#'+this.id+' .testReport').html(newTestReport);
	if(this.scrollArea){
		this.scrollArea.refresh();
	}
	pie.user.seeLoveReport = null;
	pie.user.seeLifeReport = null;
	pie.user.personalityReport = null;
	pie.user.communicationReport = null;
	pie.backup();
}
allPage.userSeeLoveTestPage.showReport = newShowReport;
allPage.userSeeLifeTestPage.showReport = newShowReport;
allPage.userPersonalityTestPage.showReport = newShowReport;
allPage.userCommunicationTestPage.showReport = newShowReport;
allPage.pieReportPage.submit = function(){
	var content = jQuery('#reportInput textarea').val();
	if(content == ''){return;}
	jQuery('#reportInput textarea').val('');
	pie.showLoading('正在提交');
	if(this.reportType == 1){
		var reportData = {
			'token':pie.user.data.access_token,
			'content':content,
			'type':this.reportType,
			'platform':pie.platform,
			'to_user':pie.mate.info.nickname
		}
		pie.tcp.emitReport(content,pie.mate.info.nickname);
		jQuery.ajax({
			url:pie.serverBase+'/api/rest/report/report.json',
			type:'post',
			data:reportData,
			dataType:'json',
			success:function(reply){
				pie.hideLoading();
				if(reply.status == 'success'){
					pie.remind('举报用户'+pie.mate.info.nickname+'成功,我们将尽快做出处理');
				}
			},
			error:function(err){
				pie.hideLoading();
				pie.remind('提交出错:'+err+',这应该是网络问题造成的');
			}
		})
	}
	else{
		var reportData = {
			'token':pie.user.data.access_token,
			'content':content,
			'type':this.reportType,
			'platform':pie.platform
		}
		pie.tcp.emitReport(content);
		jQuery.ajax({
			url:pie.serverBase+'/api/rest/report/report.json',
			type:'post',
			data:reportData,
			dataType:'json',
			success:function(reply){
				pie.hideLoading();
				if(reply.status == 'success'){
					pie.remind('提交反馈成功,谢谢您的配合~')
				}
			},
			error:function(err){
				pie.hideLoading();
				pie.remind('提交出错:'+err+',这应该是网络问题造成的');
			}
		})
	}
}
var uip = allPage.userInputPage;
uip.showInput = function(id){
	console.log('showInput:'+id);
	if(pie.user.infoFinished){
		jQuery('#newInputSubmit').css('display','none');
		jQuery('#inputCancel').css('display','block');
		jQuery('#inputSubmit').css('display','block');
	}
	else{
		jQuery('#newInputSubmit').css('display','block');
		jQuery('#inputCancel').css('display','none');
		jQuery('#inputSubmit').css('display','none');
	}
	jQuery('#userInputPage').css('display','block');
	jQuery('.inputArea').css('display','none');
	jQuery('#'+id+'Area').css('display','block');
	var ss = pie.select;
	switch(id){
		case 'userInfoMobile':
		this.title = '请输入绑定手机';
		this.inputType = 0;
		break;
		case 'userInfoNickname':
		this.title = '请选择昵称';
		this.inputType = 1;
		break;
		case 'userInfoPresentation':
		this.title = '请输入自我介绍';
		this.inputType = 2;
		break;
		case 'userInfoRealname':
		this.title = '请输入真实姓名';
		this.inputType = 3;
		break;
		case 'userInfoHeight':
		this.title = '请选择身高';
		this.inputType = 4;
		ss.init('userInfoHeightInput');
		break;
		case 'userInfoWeight':
		this.title = '请选择体重';
		this.inputType = 5;
		ss.init('userInfoWeightInput');
		break;
		case 'userInfoBirthday':
		this.title = '请选择生日';
		this.inputType = 6;
		ss.init('userInfoBirthdayYearInput');
		ss.init('userInfoBirthdayMonthInput');
		ss.init('userInfoBirthdayDayInput');
		break;
		case 'userInfoCurrentLocation':
		this.title = '请选择现居地';
		this.inputType = 7;
		ss.init('userInfoCurrentLocationProvinceInput');
		ss.init('userInfoCurrentLocationCityInput');
		break;
		case 'userInfoBirthPlace':
		this.title = '请选择籍贯';
		this.inputType = 8;
		ss.init('userInfoBirthPlaceProvinceInput');
		ss.init('userInfoBirthPlaceCityInput');
		break;
		case 'userInfoSchool':
		this.title = '请选择学校';
		this.inputType = 9;
		ss.init('schoolProvinceInput');
		ss.init('userInfoSchoolInput');
		break;
		case 'userInfoDegree':
		this.title = '请选择学历';
		this.inputType = 10;
		ss.init('userInfoDegreeInput');
		break;
		case 'userInfoOccupation':
		this.title = '请选择职业';
		this.inputType = 11;
		ss.init('userInfoOccupationInput');
		ss.init('userInfoDomainInput');
		break;
		case 'userExpectationHeight':
		this.title = '请选择身高要求';
		this.inputType = 12;
		ss.init('userExpectationMinHeightInput');
		ss.init('userExpectationMaxHeightInput');
		break;
		case 'userExpectationAge':
		this.title = '请选择年龄要求';
		this.inputType = 13;
		ss.init('userExpectationMinAgeInput');
		ss.init('userExpectationMaxAgeInput');
		break;
		case 'userExpectationDegree':
		this.title = '请选择学历要求';
		this.inputType = 14;
		ss.init('userExpectationMinDegreeInput');
		ss.init('userExpectationMaxDegreeInput');
		break;
		case 'userExpectationIdealLocation':
		this.title = '请选择理想城市';
		this.inputType = 15;
		ss.init('userExpectationIdealLocationProvinceInput');
		ss.init('userExpectationIdealLocationCityInput');
		break;
		case 'userExpectationLocationDistance':
		this.title = '请选择距离要求';
		this.inputType = 16;
		ss.init('userExpectationLocationDistanceInput');
		break;
		case 'userInfoPhotos':
		this.title = '请上传两张真实照片';
		this.inputType = 17;
		break;
		default:this.title = '未知情况';break;
	}
	jQuery('#inputTitle').html(this.title);
	setTimeout(function(){
		jQuery('#userInputPage').css('-webkit-transform','translate3d('+pie.width+'px,0,0)');
	},0);
}
uip.updatePresentation = function(){
	var newData = jQuery('#userInfoPresentationInput').val();
	var userInfoData = {
		'token':pie.user.data.access_token,
		'presentation':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateNickname = function(){
	var newNickname = jQuery('#userInfoNicknameInput').val();
	if(newNickname == ''){
		pie.remind('昵称不能为空');
		return;
	}
	var nicknameData = {
		'token':pie.user.data.access_token,
		'nickname':newNickname
	}
	pie.showLoading('正在检测昵称是否重复')
	jQuery.ajax({
		'url':pie.serverBase+'/api/rest/user/nickname.json',
		'type':'put',
		'data':nicknameData,
		'dataType':'json',
		success:function(reply){
			pie.hideLoading();
			if(reply.status == 'success'){
				pie.remind('修改昵称成功');
				jQuery('#userInputPage').css('-webkit-transform','translate3d(0,0,0)');
				setTimeout(function(){
					jQuery('#userInputPage').css('display','none');
				},300);
				pie.user.initMatch();
				pie.user.getInfo(0);
			}
			else{
				pie.confirm('很遗憾,昵称已被使用...请重新选择',function(){
					jQuery('#userInfoNicknameInput').val('');
					jQuery('#userInfoNicknameInput').focus();
				})
			}
		},
		error:function(err){
			pie.hideLoading();
			pie.remind('修改昵称碰到未知错误:'+err+',这应该是网络问题造成的');
		}
	});
}
uip.updateRealname = function(){
	var newData = jQuery('#userInfoRealnameInput').val();
	var userInfoData = {
		'token':pie.user.data.access_token,
		'realname':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateHeight = function(){
	var ss = pie.select;
	var newData = ss.getValue('userInfoHeightInput');
	var userInfoData = {
		'token':pie.user.data.access_token,
		'height':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateWeight = function(){
	var ss = pie.select;
	var newData = ss.getValue('userInfoWeightInput');
	var userInfoData = {
		'token':pie.user.data.access_token,
		'weight':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateBirthday = function(){
	var ss = pie.select;
	var birthdayYear = parseInt(ss.getValue('userInfoBirthdayYearInput'));
	var birthdayMonth = parseInt(ss.getValue('userInfoBirthdayMonthInput'));
	var birthdayDay = parseInt(ss.getValue('userInfoBirthdayDayInput'));
	if(birthdayMonth<10){
		birthdayMonth = '0'+birthdayMonth;
	}
	if(birthdayDay<10){
		birthdayDay = '0'+birthdayDay;
	}
	var newData = birthdayYear+'-'+birthdayMonth+'-'+birthdayDay;
	var userInfoData = {
		'token':pie.user.data.access_token,
		'birthday':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateCurrentLocation = function(){
    var ss = pie.select;
	var newData = '中国:'+ss.getValue('userInfoCurrentLocationProvinceInput')
        +':'+ss.getValue('userInfoCurrentLocationCityInput');
	var userInfoData = {
		'token':pie.user.data.access_token,
		'current_location':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateBirthPlace = function(){
	var ss = pie.select;
	var newData = '中国:'+ss.getValue('userInfoBirthPlaceProvinceInput')
        +':'+ss.getValue('userInfoBirthPlaceCityInput');
	var userInfoData = {
		'token':pie.user.data.access_token,
		'birth_place':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateSchool = function(){
	var ss = pie.select;
	var newData = ss.getValue('userInfoSchoolInput');
	var userInfoData = {
		'token':pie.user.data.access_token,
		'school':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateDegree = function(){
	var ss = pie.select;
	var newData = ss.getValue('userInfoDegreeInput');
	var userInfoData = {
		'token':pie.user.data.access_token,
		'degree':newData
	}
	this.updateUserInfo(userInfoData);
}
uip.updateOccupation = function(){
	var ss = pie.select;
	var occupationIndex = ss.getValue('userInfoOccupationInput');
    var occupation = pie.occupationList[occupationIndex];
    var domainIndex = ss.getValue('userInfoDomainInput');
    var domain = pie.domainList[occupationIndex][domainIndex];
	var userInfoData = {
		'token':pie.user.data.access_token,
		'occupation':occupation,
		'domain':domain
	}
	this.updateUserInfo(userInfoData);
}
uip.updateExpectationHeight = function(){
	var ss = pie.select;
	var height_min = ss.getValue('userExpectationMinHeightInput');
	var height_max = ss.getValue('userExpectationMaxHeightInput');
	var userInfoData = {
		'token':pie.user.data.access_token,
		'height_min':height_min,
		'height_max':height_max
	}
	this.updateUserExpectation(userInfoData);
}
uip.updateExpectationAge = function(){
	var ss = pie.select;
	var age_diff_min = ss.getValue('userExpectationMinAgeInput');
    var age_diff_max = ss.getValue('userExpectationMaxAgeInput');
	var userInfoData = {
		'token':pie.user.data.access_token,
		'age_diff_min':age_diff_min,
        'age_diff_max':age_diff_max
	}
	this.updateUserExpectation(userInfoData);
}
uip.updateExpectationDegree = function(){
	var ss = pie.select;
	var degree_min = pie.degreeList[ss.getValue('userExpectationMinDegreeInput')];
    var degree_max = pie.degreeList[ss.getValue('userExpectationMaxDegreeInput')];
    var userInfoData = {
		'token':pie.user.data.access_token,
		'degree_min':degree_min,
        'degree_max':degree_max
	}
	this.updateUserExpectation(userInfoData);
}
uip.updateIdealLocation = function(){
	var ss = pie.select;
	var location_ideal = '中国:'+ss.getValue('userExpectationIdealLocationProvinceInput')
        +':'+ss.getValue('userExpectationIdealLocationCityInput');
    var userInfoData = {
		'token':pie.user.data.access_token,
		'location_ideal':location_ideal
	}
	this.updateUserExpectation(userInfoData);
}
uip.updateLocationDistance = function(){
	var ss = pie.select;
	var location_distance = ss.getValue('userExpectationLocationDistanceInput');
    var userInfoData = {
		'token':pie.user.data.access_token,
		'location_distance':location_distance
	}
	this.updateUserExpectation(userInfoData);
}
uip.updateUserInfo = function(userInfoData){
	pie.showLoading('正在提交信息');
	jQuery.ajax({
		url:pie.serverBase+'/api/rest/users/'+pie.user.data.puid+'.json',
		type:'put',
		data:userInfoData,
		dataType:'json',
		success:function(reply){
			pie.hideLoading();
			if(reply.status != 'success'){
				if(reply.code == '2002'){
					pie.confirm('账号已过期,请重新登录',function(){
						pie.user.logout(0);
					});
				}
				else{
					pie.remind('提交信息出现未知错误,错误码:'+reply.code+',请报告管理员');
				}
			}
			else{
				pie.remind('更新信息成功');
				if(pie.user.infoFinished){
					jQuery('#userInputPage').css('-webkit-transform','translate3d(0,0,0)');
					setTimeout(function(){
						jQuery('#userInputPage').css('display','none');
					},300);
				}
				pie.user.initMatch();
				pie.user.getInfo(0);
			}
		},
		error:function(err){
			pie.hideLoading();
			pie.remind('提交用户基本信息出错:'+err+',这应该是网络问题造成的');
		}
	})
}
uip.updateUserExpectation = function(userInfoData){
	pie.showLoading('正在更新');
	jQuery.ajax({
		url:pie.serverBase+'/api/rest/apps/pie_match/expectations.json',
		type:'put',
		data:userInfoData,
		dataType:'json',
		success:function(reply){
			pie.hideLoading();
			if(reply.status != 'success'){
				if(reply.code == '2002'){
					pie.confirm('账号已过期,请重新登录',function(){
						pie.user.logout(0);
					},false)
				}
				else{
					pie.remind('提交期望出现未知错误,错误码:'+reply.code+',请报告管理员');
				}
			}
			else{
				pie.remind('更新配对要求成功');
				jQuery('#userInputPage').css('-webkit-transform','translate3d(0,0,0)');
				setTimeout(function(){
					jQuery('#userInputPage').css('display','none');
				},300);
				pie.user.initMatch();
				pie.user.getInfo(0);
			}
		},
		error:function(err){
			pie.hideLoading();
			pie.remind('提交用户期望信息出错:'+err+',这应该是网络问题造成的');
		}
	})
}
uip.submit = function(){
	if(pie.curInputId){
		jQuery('#'+pie.curInputId).blur();
	}
	switch(this.inputType){
		case -1:this.codeSubmit();break;
		case 0:this.getSms();break;
		case 1:this.updateNickname();break;
		case 2:this.updatePresentation();break;
		case 3:this.updateRealname();break;
		case 4:this.updateHeight();break;
		case 5:this.updateWeight();break;
		case 6:this.updateBirthday();break;
		case 7:this.updateCurrentLocation();break;
		case 8:this.updateBirthPlace();break;
		case 9:this.updateSchool();break;
		case 10:this.updateDegree();break;
		case 11:this.updateOccupation();break;
		case 12:this.updateExpectationHeight();break;
		case 13:this.updateExpectationAge();break;
		case 14:this.updateExpectationDegree();break;
		case 15:this.updateIdealLocation();break;
		case 16:this.updateLocationDistance();break;
		case 17:pie.user.initMatch();break;
	}
}
document.body.appendChild(remoteCss);