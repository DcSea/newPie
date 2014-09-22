var pie = {
  id:'pie',
  serverBase:'http://www.piemoment.com',
  gameBase:'http://piemoment.com:3000',
  maleHeadUrl:'img/maleHead.jpg',
  femaleHeadUrl:'img/femaleHead.jpg',
  smallMaleHeadUrl:'img/smallMaleHead.jpg',
  smallFemaleHeadUrl:'img/smallFemaleHead.jpg',
  useRenren:false,
  useWeibo:false,
  useQQ:false,
  dpi:1,
  refreshTime:12,
  originHeight:null,
  originWidth:null,
  headerHeight:44,
  maxWidth:400,
  height:null,
  width:null,
  pieMoment:null,
  curPageId:null,
  confirmShow:false,
  loadingShow:false,
  loading:null,
  remindDisapear:null,
  gps:null,
  soundOn:true,
  onInput:false,
  curInputId:null,
  swipePhoto:false,
  atBackstage:false,
  notifyNum:0,
  curLoginAccount:null,
  curLoginPassword:null,
  unreadMessageNum:0,
  needCheckLeave:true,
  refreshReady:false,
  talkScrollArea:null,
  platform:'web',
  platformModel:null,
  platformVersion:null,
  isOld:false,
  canvasExist:null,
  online:false,
  studyStart:false,
  femaleTips:['一颗心与另一颗心到底有多远的距离，是咫尺 ?是天涯 ?而我会默默地等待，等待你和我一个浪漫的开始。'
  ,'人生有太多等待，我们不得不学会等待，还要学会习惯于不尽如人意的等待。'
  ,'认识了你，是你让我学会了等待，虽然等待有时会换来失望，但是我还是选择了等待！你若不离，我定不弃！'
  ,'缘起缘灭，缘浓缘淡，不是我们能够控制的，我们能做到的，是因缘际会的时候，好好珍惜那短暂的时光。'
  ,'我要你知道，这世界上有一个人是永远等着你的，不管是在什么时候，不管你是在什么地方，反正你知道，总有这样一个人。'
  ,'似乎习惯了等待， 单纯的以为等待就会到来。   但却在等待中错过了， 那些可以幸福的幸福。   在失去时后悔， 为什么没有抓住。'
  ,'在什么都不确定的年代，我们总是爱得太早，放弃的太快，轻易付出承诺，又不想等待结果。'
  ,'成熟的爱情，敬意、忠心并不轻易表现出来，它的声音是低的，它是谦逊的、退让的、潜伏的，等待了又等待。'
  ,'等待你的love是一种勇气，因为我看不到未来，但是等你对我来说是一种幸福，是一种依赖！！！'
  ,'Like or pass， it‘s your choice.'
  ,'Pie Moment a day, keep single away.'
  ,'It is your Pie Moment.'
  ,'爱情，没有捷径。不过我们有Piemoment'
  ,'轻轻一点遇到希望中ta'
  ,'Like ta, ta 不知道你的选择！'
  ,'没想到ta也点了like.'
  ,'每天新缘分，自由派瞬间'
  ,'派瞬间，爱永恒'
  ,'男人就像食堂里的菜，不好吃，但来晚了就没有了'
  ,'爱情没有对错只有选择'
  ,'为什么不试试like，反正他也不知道。'
  ,'Pie Moment, Love Forever.'],
  maleTips:['一颗心与另一颗心到底有多远的距离，是咫尺 ?是天涯 ?而我会默默地等待，等待你和我一个浪漫的开始。'
  ,'人生有太多等待，我们不得不学会等待，还要学会习惯于不尽如人意的等待。'
  ,'认识了你，是你让我学会了等待，虽然等待有时会换来失望，但是我还是选择了等待！你若不离，我定不弃！'
  ,'缘起缘灭，缘浓缘淡，不是我们能够控制的，我们能做到的，是因缘际会的时候，好好珍惜那短暂的时光。'
  ,'我要你知道，这世界上有一个人是永远等着你的，不管是在什么时候，不管你是在什么地方，反正你知道，总有这样一个人。'
  ,'似乎习惯了等待， 单纯的以为等待就会到来。   但却在等待中错过了， 那些可以幸福的幸福。   在失去时后悔， 为什么没有抓住。'
  ,'在什么都不确定的年代，我们总是爱得太早，放弃的太快，轻易付出承诺，又不想等待结果。'
  ,'成熟的爱情，敬意、忠心并不轻易表现出来，它的声音是低的，它是谦逊的、退让的、潜伏的，等待了又等待。'
  ,'等待你的love是一种勇气，因为我看不到未来，但是等你对我来说是一种幸福，是一种依赖！！！'
  ,'Like or pass， it‘s your choice.'
  ,'Pie Moment a day, keep single away.'
  ,'It is your Pie Moment.'
  ,'爱情，没有捷径。不过我们有Piemoment'
  ,'轻轻一点遇到希望中ta'
  ,'Like ta, ta 不知道你的选择！'
  ,'没想到ta也点了like.'
  ,'每天新缘分，自由派瞬间'
  ,'派瞬间，爱永恒'
  ,'男人就像食堂里的菜，不好吃，但来晚了就没有了'
  ,'爱情没有对错只有选择'
  ,'为什么不试试like，反正他也不知道。'
  ,'Pie Moment, Love Forever.'],
  connectionType:null,
  connectionText:{
    'unknown':'未知',
    'ethernet':'以太网',
    'wifi':'WiFi',
    '2g':'2G蜂窝网络',
    '3g':'3G蜂窝网络',
    '4f':'4G蜂窝网络',
    'cellular':'蜂窝网络',
    'none':'无连接'
  },
  messageStatus:{
    inMessage:0,
    /*
      对方发来的信息
    */
    onSend:1,
    /*
      信息发送中
    */
    sendSuccess:2,
    /*
      信息发送成功,指被服务器接收
    */
    sendFailed:3,
    /*
      信息发送失败,等待用户选择重发或删除
    */
    deleted:4,
    /*
      信息发送失败后被用户删除
    */
    received:5,
    /*
      信息已被对方接收
    */
    read:6
    /*
      信息已被对方查看
    */
  },
  degreeList:['专科','本科','硕士','博士'],
  occupationList:['学习','工作','待业'],
  domainList:[['计算机','电子信息','中文','外文','经济学','金融学','管理','市场营销','法学','教育','社会学','历史','哲学','艺术','图书馆','情报档案','政治','数学','统计','物理','化学','生物','食品','医学','环境','地理','建筑','测绘','电气','机械','其他'],['计算机/网络','科研/教育','公关/广告','传媒/出版','营销/市场/策划','金融/证券/保险','房地产/建筑业','装饰/装潢','邮电通信','电子/电器','美容/形体','警察/其它','食品业','消费品业','制药业','商业/贸易','咨询业','汽车','航天','社会服务','旅游','餐饮','健康/医疗','交通运输','文化/娱乐/体育','政府机关','法律/司法','制造业','农林牧渔业','其他'],['其他']],
  tcp:{
    handle:null,
    dumped:false,
    checkSend:null,
    lastTime:null,
    init:function(){
      this.handle = io.connect(pie.gameBase);
      var Handle = this.handle;
      Handle.on('connected',function(){
        Handle.emit('login',{
          'puid':pie.user.data.puid,
          'sex':pie.user.info.sex,
          'platform':pie.platform,
          'model':pie.platformModel,
          'version':pie.platformVersion
        });
        Handle.on('dump',function(){
          if(pie.tcp.dumped){return;}
          pie.tcp.dumped = true;
          alert('你的账号已在别处登录');
          pie.user.logout(0);
        });
        Handle.on('pieTips',function(data){
          var len = data.tips.length;
          for(var i = 0; i < len; i++){
            pie.user.tips.push(data.tips[i]);
          }
        });
        Handle.on('disconnect',function(){
          if(pie.tcp.dumped){return;}
          pie.tcp.handle = null;
          pie.tcp.init();
        });
        Handle.on('pieMessage',function(data){
          if(pie.tcp.dumped||!pie.mate.info){return;}
          var message = data.content;
          if(data.from == pie.mate.info.puid){
            for(var i = pie.user.talkRecord.length-1, num=0; i >= 0; i--,num++){
              if(pie.user.talkRecord[i].mid == data.mid){return;}
              if(num>10){break;}
            }
            for(var i = pie.user.talkRecord.length-1; i >= 0; i--){
              if(pie.user.talkRecord[i].status != pie.messageStatus.inMessage){
                if(pie.user.talkRecord[i].status == pie.messageStatus.read){break;}
                for(var j = i; j >= 0; j--){
                  if(pie.user.talkRecord[j].status == pie.messageStatus.sendSuccess||pie.user.talkRecord[j].status == pie.messageStatus.received){
                    jQuery('#'+j+'userTalkBlock .messageStatus').html('已读');
                    pie.user.talkRecord[j].status = pie.messageStatus.read;
                  }
                }
                break;
              }
            }
            pie.user.talkRecord.push({
              'mid':data.mid,
              'from':pie.mate.info.puid,
              'to':pie.user.data.puid,
              'status':pie.messageStatus.inMessage,
              'content':message.content,
              'contentType':message.contentType,
              'time':message.time
            });
            Handle.emit('messageReceived',{'targetId':data.from,'mid':data.mid});
            var content = message.content;
            if(!pie.user.mateTalkAvatar){
              pie.user.mateTalkAvatar = pie.serverBase+'/asset/'+pie.mate.info.avatar.uri+'/40/40/smart/inline';
            }
            pie.backup();
            var messageTime = pie.tcp.judgeTime(message.time);
            var contentHtml = '<div class="mateTalkBlock" id="'+data.mid+'mateTalkBlock"><table><tbody><tr><td valign="top" width="15%"><div class="mateTalkHead" style="background-image:url('+pie.user.mateTalkAvatar+')"></div></td><td valign="top"><div class="mateTalkContent">'+content+'</div><span class="messageTime">'+messageTime+'</span></td></tr></tbody></table></div>';
            jQuery('#mateTalkPage .scrollArea').append(contentHtml);
            pie.talkScrollArea.refresh();
            var lastElem = document.getElementById(data.mid+'mateTalkBlock');
            pie.talkScrollArea.scrollToElement(lastElem,100);
            if(pie.atBackstage){
              pie.notifyNum++;
              if(pie.notifyNum>1){
                pie.localNotification.add(pie.mate.info.nickname,'发来'+pie.notifyNum+'条新消息');
              }
              else{
                pie.localNotification.add(pie.mate.info.nickname,message.content);
              }
            }
            else{
              if(pie.curPageId != 'mateTalkPage'){
                pie.tcp.newUnreadMessage();
              }
              else{
                Handle.emit('messageRead',{
                  'mid':data.mid,
                  'targetId':pie.mate.info.puid
                });
              }
            }
          }
        });
        Handle.on('messageSendSuccess',function(data){
          if(pie.user.messageSended){return;}
          clearTimeout(pie.tcp.checkSend);
          jQuery('#'+pie.user.nextMessageIndex+'userTalkBlock .userTalkContent').data('id',-1);
          jQuery('#'+pie.user.nextMessageIndex+'userTalkBlock .messageStatus').html('');
          jQuery('#'+pie.user.nextMessageIndex+'userTalkBlock .userTalkContent').css('background-color','#A5CFD3');
          pie.user.messageSended = true;
          pie.user.talkRecord[pie.user.nextMessageIndex].status = pie.messageStatus.sendSuccess;
          pie.user.talkRecord[pie.user.nextMessageIndex].mid = data.mid;
          pie.user.nextMessageIndex++;
          pie.tcp.emitNextMessage();
        });
        Handle.on('messageReceived',function(data){
          for(var i = pie.user.talkRecord.length-1; i >= 0; i--){
            if(pie.user.talkRecord[i].mid == data.mid&&pie.user.talkRecord[i].status == pie.messageStatus.sendSuccess){
              jQuery('#'+i+'userTalkBlock .messageStatus').html('送达');
              pie.user.talkRecord[i].status = pie.messageStatus.received;
              break;
            }
          }
        });
        Handle.on('messageRead',function(data){
          for(var i = pie.user.talkRecord.length-1; i >= 0; i--){
            if(pie.user.talkRecord[i].mid == data.mid){
              for(var j = i; j >= 0; j--){
                if(pie.user.talkRecord[j].status == pie.messageStatus.sendSuccess
                  ||pie.user.talkRecord[j].status == pie.messageStatus.received){
                  jQuery('#'+j+'userTalkBlock .messageStatus').html('已读');
                  pie.user.talkRecord[j].status = pie.messageStatus.read;
                }
              }
              break;
            }
          }
        });
        Handle.on('putQuestionSuccess',function(data){
          pie.hideLoading();
          pie.remind('提交问题成功,请等待审核结果');
          jQuery('#userInputPage').css('-webkit-transform','translate3d(0,0,0)');
          setTimeout(function(){
            pie.reduceLeft();
          },100);
        });
      });
    },
    judgeTime:function(mTime){
      var timeArray = mTime.split(' ');
      var dateArray = timeArray[0].split('-');
      var clockArray = timeArray[1].split(':');
      var curTime = new Date();
      var result = null;
      if(dateArray[0]<curTime.getFullYear()||dateArray[1]<curTime.getMonth()+1){
        result = mTime;
      }
      else{
        if(dateArray[2]<curTime.getDate()){
          result = dateArray[1]+'-'+dateArray[2]+' '+clockArray.join(':');
        }
        else{
          result = clockArray.join(':');
        }
      }
      return result;
    },
    sendMessage:function(content){
      if(pie.tcp.dumped){return false;}
      var content = jQuery('#talkInput').val();
      if(content ==''){return false;}
      jQuery('#talkInput').val('');
      jQuery('#talkInput').css('height',30);
      var userHeadUrl;
      if('avatar' in pie.user.info){
        if(pie.user.userTalkAvatar){
          userHeadUrl = pie.user.userTalkAvatar;
        }
        else{
          userHeadUrl = pie.serverBase+'/asset/'+pie.user.info.avatar.uri+'/40/40/smart/inline';
          pie.user.userTalkAvatar = userHeadUrl;
        }
      }
      else{
        if(pie.user.info.sex == 1){
          userHeadUrl = pie.maleHeadUrl;
        }
        else{
          userHeadUrl = pie.femaleHeadUrl;
        }
      }
      var messageStatusText = '发送中';
      if(!pie.mate.exist){
        messageStatusText = '已读';
      }
      var contentHtml = '<div class="userTalkBlock" id="'+pie.user.talkRecord.length+'userTalkBlock"><table><tbody><tr><td valign="bottom" text-align="right" width="85%"><span class="messageStatus">'+messageStatusText+'</span><div class="userTalkContent">'+content+'</div></td><td valign="top"><div class="userTalkHead" style="background-image:url('+userHeadUrl+')"></div></td></tr></tabody></table></div>';
      jQuery('#mateTalkPage .scrollArea').append(contentHtml);
      pie.talkScrollArea.refresh();
      var lastElem = document.getElementById(pie.user.talkRecord.length+'userTalkBlock');
      pie.talkScrollArea.scrollToElement(lastElem,100);
      if(pie.mate.exist){
        pie.user.talkRecord.push({
          'mid':-1,
          'from':pie.user.data.puid,
          'to':pie.mate.info.puid,
          'status':pie.messageStatus.onSend,
          'content':content,
          'contentType':0,
          'time':pie.messageTime()
        });
        this.emitNextMessage();
      }
      else{
        pie.user.talkRecord.push({
          'mid':-1,
          'from':pie.user.data.puid,
          'to':pie.mate.info.puid,
          'status':pie.messageStatus.read,
          'content':content,
          'contentType':0,
          'time':pie.messageTime()
        });
        pie.backup();
        pie.npc.talk(content);
      }
      return false;
    },
    emitNextMessage:function(){
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
          'contentType':talkRecord[next].contentType
        });
        this.checkSend = setTimeout(function(){
          pie.tcp.emitFailed();
        },15000)
        pie.backup();
      }
    },
    emitFailed:function(){
      jQuery('#'+pie.user.nextMessageIndex+'userTalkBlock .messageStatus').html('发送失败');
      jQuery('#'+pie.user.nextMessageIndex+'userTalkBlock .userTalkContent').data('id',pie.user.nextMessageIndex);
      jQuery('#'+pie.user.nextMessageIndex+'userTalkBlock .userTalkContent').css('background-color','#555');
      Quo('.userTalkContent').unbind('hold');
      Quo('.userTalkContent').bind('hold',function(){
        var id = jQuery(this).data('id');
        if(id >= 0){
          pie.tcp.showMessageControl(id);
        }
      });
      pie.user.messageSended = true;
      pie.user.talkRecord[pie.user.nextMessageIndex].status = pie.messageStatus.sendFailed;
      pie.user.nextMessageIndex++;
      pie.tcp.emitNextMessage();
    },
    showMessageControl:function(id){
      pie.showShadow();
      jQuery('#messageControlBox').css('top',Math.floor((pie.height-101)/2));
      jQuery('#messageControlBox').css('display','block');
      Quo('#resendMessage').unbind('tap');
      Quo('#resendMessage').bind('tap',function(){
        pie.user.nextMessageIndex = id;
        pie.user.talkRecord[pie.user.nextMessageIndex].status = pie.messageStatus.onSend;
        pie.hideShadow();
        jQuery('#messageControlBox').css('display','none');
        jQuery('#'+pie.user.nextMessageIndex+'userTalkBlock .messageStatus').html('重发中');
        pie.tcp.emitNextMessage();
      });
      Quo('#deleteMessage').unbind('tap');
      Quo('#deleteMessage').bind('tap',function(){
        pie.user.talkRecord[id].status = pie.messageStatus.deleted;
        pie.backup();
        pie.hideShadow();
        jQuery('#messageControlBox').css('display','none');
        jQuery('#'+id+'userTalkBlock').css('display','none');
        pie.talkScrollArea.refresh();
      });
      Quo('#pieShadow').unbind('tap');
      setTimeout(function(){
        Quo('#pieShadow').bind('tap',function(){
          jQuery('#messageControlBox').css('display','none');
          pie.hideShadow();
        });
      },500);
    },
    newUnreadMessage:function(){
      if(!pie.mate.exist){return;}
      pie.unreadMessageNum++;
      if(pie.unreadMessageNum>9){
        jQuery('.unreadMessageNum').html('9+');
      }
      else{
        jQuery('.unreadMessageNum').html(pie.unreadMessageNum);
      }
      jQuery('.unreadMessageNum').css('display','block');
    },
    clearUnreadMessage:function(){
      pie.unreadMessageNum = 0;
      jQuery('.unreadMessageNum').css('display','none');
      if(!pie.mate.exist){return;}
      for(var i = pie.user.talkRecord.length-1; i >= 0; i--){
        if(pie.user.talkRecord[i].status == pie.messageStatus.inMessage){
          this.handle.emit('messageRead',{
            'mid':pie.user.talkRecord[i].mid,
            'targetId':pie.mate.info.puid
          });
          break;
        }
      }
    },
    askQuestion:function(title){
      this.handle.emit('askQuestion',{'title':title,'type':1});
    }
  },
  select:{
  	scroll:{},
    range:{},
  	value:{},
    dayArray:[31,28,31,30,31,30,31,31,30,31,30,31],
    liHeight:40,
    rTime:1000,//二级菜单联动的变化时间
  	init:function(id){
  		if(id in this.scroll){
        this.scroll[id].refresh();
        var dv = this.getValue(id);
        var target = this.getValueIndex(id,dv);
        var goal = target*this.liHeight;
        this.scroll[id].scrollTo(0,-goal,0,false);
        this.change(id);
        return;
      }
      var innerHtml = '';
      this.range[id] = [];
      var index = 0;
      switch(id){
        case 'userInfoHeightInput':
        for(var i = 100; i <= 230; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+i+'cm</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'170');
        }
        break;
        case 'userInfoWeightInput':
        for(var i = 30; i <= 200; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+i+'kg</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'60');
        }
        break;
        case 'userInfoBirthdayYearInput':
        for(var i = 1960; i <= 2000; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+i+'年</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'1990');
        }
        break;
        case 'userInfoBirthdayMonthInput':
        for(var i = 1; i <= 12; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+i+'月</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'1');
        }
        break;
        case 'userInfoBirthdayDayInput':
        var month = this.value['userInfoBirthdayMonthInput'];
        for(var i=1;i<=this.dayArray[month-1];i++){
          this.range[id].push(i);
          innerHtml+='<li>'+i+'日</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'1');
        }
        break;
        case 'userInfoCurrentLocationProvinceInput':
        case 'userInfoBirthPlaceProvinceInput':
        case 'userExpectationIdealLocationProvinceInput':
        for(var key in pieLocation['中国']){
          this.range[id].push(key);
          innerHtml += '<li>'+key+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'北京市');
        }
        break;
        case 'userInfoCurrentLocationCityInput':
        var parent = 'userInfoCurrentLocationProvinceInput';
        var val = this.value[parent];
        var innerHtml = '';
        for(var cityKey in pieLocation['中国'][val]){
          this.range[id].push(cityKey);
          innerHtml +='<li>'+cityKey+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'东城区');
        }
        break;
        case 'userInfoBirthPlaceCityInput':
        var parent = 'userInfoBirthPlaceProvinceInput';
        var val = this.value[parent];
        var innerHtml = '';
        for(var cityKey in pieLocation['中国'][val]){
          this.range[id].push(cityKey);
          innerHtml +='<li>'+cityKey+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'东城区');
        }
        break;
        case 'userExpectationIdealLocationCityInput':
        var parent = 'userExpectationIdealLocationProvinceInput';
        var val = this.getValue(parent);
        for(var cityKey in pieLocation['中国'][val]){
          this.range[id].push(cityKey);
          innerHtml +='<li>'+cityKey+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'东城区');
        }
        break;
        case 'schoolProvinceInput':
        for(var i = 0; i < schoolList.length; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+schoolList[i].name+'</li>'
        }
        if(!(id in this.value)){
          this.setValue(id,'0');
        }
        break;
        case 'userInfoSchoolInput':
        var index = this.value['schoolProvinceInput'];
        for(var key in schoolList[index].school){
          this.range[id].push(schoolList[index].school[key].name);
          innerHtml +='<li>'+schoolList[index].school[key].name+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'北京大学');
        }
        break;
        case 'userInfoDegreeInput':
        var len = pie.degreeList.length;
        for(var i = 0; i < len; i++){
          this.range[id].push(pie.degreeList[i]);
          innerHtml += '<li>'+pie.degreeList[i]+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'本科');
        }
        break;
        case 'userInfoOccupationInput':
        var len = pie.occupationList.length;
        for(var i = 0; i < len; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+pie.occupationList[i]+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'0');
        }
        break;
        case 'userInfoDomainInput':
        var index = this.getValue('userInfoOccupationInput');
        var list = pie.domainList[index];
        for(var i = 0; i < list.length; i++){
          this.range[id].push(i);
          innerHtml +='<li>'+list[i]+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'计算机');
        }
        break;
        case 'userExpectationMinHeightInput':
        for(var i = 100; i <= 230; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+i+'cm</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'150');
        }
        break;
        case 'userExpectationMaxHeightInput':
        var index = this.getValue('userExpectationMinHeightInput');
        for(var i = index; i <= 230; i++){
          this.range[id].push(i);
          innerHtml +='<li>'+i+'cm</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'190');
        }
        break;
        case 'userExpectationMinAgeInput':
        for(var i = -30; i <= 30; i++){
          this.range[id].push(i);
          if(i<0){
            innerHtml += '<li>小我'+(-1*i)+'岁</li>';
          }
          else if(i==0){
            innerHtml += '<li>和我同岁</li>';
          }
          else if(i>0){
            innerHtml += '<li>大我'+i+'岁</li>';
          }
        }
        if(!(id in this.value)){
          this.setValue(id,'-2');
        }
        break;
        case 'userExpectationMaxAgeInput':
        var index = this.getValue('userExpectationMinAgeInput');
        for(var i = index; i <= 30; i++){
          this.range[id].push(i);
          if(i<0){
            innerHtml += '<li>小我'+(-1*i)+'岁</li>';
          }
          if(i==0){
            innerHtml += '<li>和我同岁</li>';
          }
          if(i>0){
            innerHtml += '<li>大我'+i+'岁</li>';
          }
        }
        if(!(id in this.value)){
          this.setValue(id,'3');
        }
        break;
        case 'userExpectationMinDegreeInput':
        var len = pie.degreeList.length;
        for(var i = 0; i < len; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+pie.degreeList[i]+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'1');
        }
        break;
        case 'userExpectationMaxDegreeInput':
        var index = this.getValue('userExpectationMinDegreeInput');
        for(var i = index; i < pie.degreeList.length; i++){
          this.range[id].push(i);
          innerHtml += '<li>'+pie.degreeList[i]+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'2');
        }
        break;
        case 'userExpectationLocationDistanceInput':
        var tmp = ['同城','同省','同国','同星球'];
        var len = tmp.length;
        for(var i = 0; i < len; i++){
          this.range[id].push(tmp[i]);
          innerHtml += '<li>'+tmp[i]+'</li>';
        }
        if(!(id in this.value)){
          this.setValue(id,'同省');
        }
        break;
      }
  		jQuery('#'+id+' ul').html(innerHtml);
  		this.scroll[id] = new iScroll(id,{
  			useTransition:true,
  			hScroll:false,
        scrollbarClass: 'hidden',
  			checkDOMChanges:false,
  			onScrollEnd:function(){
          var cur = -1*this.y;
          var tid = this.wrapper.id;
          var ss = pie.select;
          var index = Math.floor(cur/ss.liHeight);
          var more = cur - index*ss.liHeight;
          if(more == 0){
            var bv = ss.getValue(id);
            var nv = ss.range[tid][index];
            ss.setValue(id,nv);
            if(nv != bv){ss.change(id);}
            return;
          }
          if(more >= ss.liHeight/2){
            index++;
            this.scrollTo(0,ss.liHeight-more,500,true);
          }
          else{
            this.scrollTo(0,-more,500,true);
          }
        }
  		});
      var dv = this.getValue(id);
      var target = this.getValueIndex(id,dv);
      var goal = target*this.liHeight;
      this.scroll[id].scrollTo(0,-goal,0,false);
  	},
    setValue:function(id,val){
      this.value[id] = val;
    },
    getValue:function(id){
      return this.value[id];
    },
    getValueIndex:function(id,val){
      var len = this.range[id].length;
      for(var i = len-1; i>=0; i--){
        if(this.range[id][i] == val){
          return i;
        }
      }
      return -1;
    },
    change:function(id){
      switch(id){
        case 'userInfoBirthdayYearInput':
        this.judgeLeapYear();
        break;
        case 'userInfoBirthdayMonthInput':
        this.showDay();
        break;
        case 'userInfoCurrentLocationProvinceInput':
        this.showCity('userInfoCurrentLocationCityInput',this.getValue(id));
        break;
        case 'userInfoBirthPlaceProvinceInput':
        this.showCity('userInfoBirthPlaceCityInput',this.getValue(id));
        break;
        case 'userExpectationIdealLocationProvinceInput':
        this.showCity('userExpectationIdealLocationCityInput',this.getValue(id));
        break;
        case 'schoolProvinceInput':
        this.showSchool();
        break;
        case 'userInfoOccupationInput':
        this.showDomain();
        break;
        case 'userExpectationMinHeightInput':
        this.showMaxHeight();
        break;
        case 'userExpectationMinAgeInput':
        this.showMaxAge();
        break;
        case 'userExpectationMinDegreeInput':
        this.showMaxDegree();
        break;
      }
    },
    judgeLeapYear:function(){
      var num = this.value['userInfoBirthdayYearInput']
      if((num%4==0&&num%100!=0)||(num%400==0)){
        this.dayArray[1]=29;
      }
      else{
        this.dayArray[1]=28;
      }
      this.change('userInfoBirthdayMonthInput');
    },
    showDay:function(){
      var id = 'userInfoBirthdayDayInput';
      var curVal = this.getValue(id);
      var curIndex = this.getValueIndex(id,curVal);
      var innerHtml='';
      this.range[id] = [];
      var month = this.value['userInfoBirthdayMonthInput'];
      for(var i=1;i<=this.dayArray[month-1];i++){
        this.range[id].push(i);
        innerHtml+='<li>'+i+'日</li>';
      }
      jQuery('#'+id+' ul').html(innerHtml);
      this.scroll[id].refresh();
      var nIndex = this.getValueIndex(id,curVal);
      if(nIndex>=0){
        this.setValue(curVal);
        this.scroll[id].scrollTo(0,(nIndex-curIndex)*this.liHeight,this.rTime,true);
      }
      else{
        this.setValue(this.range[id][0]);
        this.scroll[id].scrollTo(0,-curIndex*this.liHeight,this.rTime,true);
      }
    },
  	showCity:function(id,val){
      var curVal = this.getValue(id);
      var curIndex = this.getValueIndex(id,curVal);
      var innerHtml = '';
      this.range[id] = [];
      for(var provinceKey in pieLocation['中国']){
        if(provinceKey == val){
          for(var cityKey in pieLocation['中国'][provinceKey]){
            this.range[id].push(cityKey);
            innerHtml +='<li>'+cityKey+'</li>';
          }
          break;
        }
      }
      jQuery('#'+id+' ul').html(innerHtml);
      this.scroll[id].refresh();
      var nIndex = this.getValueIndex(id,curVal);
      if(nIndex>=0){
        this.setValue(curVal);
        this.scroll[id].scrollTo(0,(nIndex-curIndex)*this.liHeight,this.rTime,true);
      }
      else{
        this.setValue(this.range[id][0]);
        this.scroll[id].scrollTo(0,-curIndex*this.liHeight,this.rTime,true);
      }
  	},
  	showSchool:function(){
      var id = 'userInfoSchoolInput';
      var curVal = this.getValue(id);
      var curIndex = this.getValueIndex(id,curVal);
      var innerHtml = '';
      this.range[id] = [];
      var index = this.value['schoolProvinceInput'];
      for(var key in schoolList[index].school){
        this.range[id].push(schoolList[index].school[key].name);
        innerHtml +='<li>'+schoolList[index].school[key].name+'</li>';
      }
      jQuery('#'+id+' ul').html(innerHtml);
      this.scroll[id].refresh();
      var nIndex = this.getValueIndex(id,curVal);
      if(nIndex>=0){
        this.setValue(curVal);
        this.scroll[id].scrollTo(0,(nIndex-curIndex)*this.liHeight,this.rTime,true);
      }
      else{
        this.setValue(this.range[id][0]);
        this.scroll[id].scrollTo(0,-curIndex*this.liHeight,this.rTime,true);
      }
  	},
  	showDomain:function(item){
      var id = 'userInfoDomainInput';
      var curVal = this.getValue(id);
      var curIndex = this.getValueIndex(id,curVal);
      var innerHtml = '';
      this.range[id] = [];
  		var index = this.getValue('userInfoOccupationInput');
      var list = pie.domainList[index];
  		for(var i = 0; i < list.length; i++){
        this.range[id].push(i);
  			innerHtml +='<li>'+list[i]+'</li>';
  		}
      jQuery('#'+id+' ul').html(innerHtml);
      this.scroll[id].refresh();
      var nIndex = this.getValueIndex(id,curVal);
      if(nIndex>=0){
        this.setValue(curVal);
        this.scroll[id].scrollTo(0,(nIndex-curIndex)*this.liHeight,this.rTime,true);
      }
      else{
        this.setValue(this.range[id][0]);
        this.scroll[id].scrollTo(0,-curIndex*this.liHeight,this.rTime,true);
      }
  	},
  	showMaxHeight:function(item){
      var id = 'userExpectationMaxHeightInput';
      var curVal = this.getValue(id);
      var curIndex = this.getValueIndex(id,curVal);
  		var innerHtml = '';
      this.range[id] = [];
  		var index = this.getValue('userExpectationMinHeightInput');
  		for(var i = index; i <= 230; i++){
        this.range[id].push(i);
  			innerHtml +='<li>'+i+'cm</li>';
  		}
  		jQuery('#'+id+' ul').html(innerHtml);
      this.scroll[id].refresh();
      var nIndex = this.getValueIndex(id,curVal);
      if(nIndex>=0){
        this.setValue(curVal);
        this.scroll[id].scrollTo(0,(nIndex-curIndex)*this.liHeight,this.rTime,true);
      }
      else{
        this.setValue(this.range[id][0]);
        this.scroll[id].scrollTo(0,-curIndex*this.liHeight,this.rTime,true);
      }
  	},
  	showMaxDegree:function(item){
  		var id = 'userExpectationMaxDegreeInput';
      var curVal = this.getValue(id);
      var curIndex = this.getValueIndex(id,curVal);
      var innerHtml = '';
      this.range[id] = [];
      var index = this.getValue('userExpectationMinDegreeInput');
      for(var i = index; i < pie.degreeList.length; i++){
        this.range[id].push(i);
        innerHtml +='<li>'+pie.degreeList[i]+'</li>';
      }
      jQuery('#'+id+' ul').html(innerHtml);
      this.scroll[id].refresh();
      var nIndex = this.getValueIndex(id,curVal);
      if(nIndex>=0){
        this.setValue(curVal);
        this.scroll[id].scrollTo(0,(nIndex-curIndex)*this.liHeight,this.rTime,true);
      }
      else{
        this.setValue(this.range[id][0]);
        this.scroll[id].scrollTo(0,-curIndex*this.liHeight,this.rTime,true);
      }
  	},
  	showMaxAge:function(item){
  		var id = 'userExpectationMaxAgeInput';
      var curVal = this.getValue(id);
      var curIndex = this.getValueIndex(id,curVal);
      var innerHtml = '';
      this.range[id] = [];
      var index = this.getValue('userExpectationMinAgeInput');
      for(var i = index; i <= 230; i++){
        this.range[id].push(i);
        if(i<0){
          innerHtml += '<li>小我'+(-1*i)+'岁</li>';
        }
        if(i==0){
          innerHtml += '<li>和我同岁</li>';
        }
        if(i>0){
          innerHtml += '<li>大我'+i+'岁</li>';
        }
      }
      jQuery('#'+id+' ul').html(innerHtml);
      this.scroll[id].refresh();
      var nIndex = this.getValueIndex(id,curVal);
      if(nIndex>=0){
        this.setValue(curVal);
        this.scroll[id].scrollTo(0,(nIndex-curIndex)*this.liHeight,this.rTime,true);
      }
      else{
        this.setValue(this.range[id][0]);
        this.scroll[id].scrollTo(0,-curIndex*this.liHeight,this.rTime,true);
      }
  	}
  },
  jPush:{
    bind:function(){
      if(typeof(cordova) == 'undefined'){return;}
      return cordova.exec(function(reply){
      },function(error){
      },'jPushPlugin','bind',[{'puid':''+pie.user.data.puid}]);
    },
    unbind:function(){
      if(typeof(cordova) == 'undefined'){return;}
      return cordova.exec(function(reply){
      },function(error){
      },'jPushPlugin','unbind',[{'puid':''+pie.user.data.puid}]);
    }
  },
  localNotification:{
    add:function(title,content){
      if(pie.platform == 'android'){
        window.plugins.statusBarNotification.notify(title,content);
      }
    },
    clear:function(){
      if(typeof(cordova) == 'undefined'){return;}
      return cordova.exec(function(reply){
      },function(error){
      },'localNotification','setApplicationBadge',[0]);
    }
  },
  npc:{
    nickname:'小Pie',
    headNum:20,
    liked:false,
    headUrl:null,
    talk:function(message){
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
    },
    init:function(){
      if(!pie.user.info){return;}
      if(!('sex' in pie.user.info)){return;}
      jQuery('#matchMateAvatar').unbind('load');
      jQuery('#matchMateAvatar').bind('load',function(){
        if(this.width>pie.width){
          this.width /= pie.dpi;
        }
        this.style.left = ''+(-1)*Math.floor((this.width-pie.width)/2)+'px';
      })
      var mateSex = 1;
      if(pie.user.info.sex == 1){
        mateSex = 0;
        this.headUrl = pie.femaleHeadUrl;
        this.smallHeadUrl = pie.smallFemaleHeadUrl;
        pie.mate.info = {
          puid:1234567,
          nickname:'小Pie',
          sex:mateSex,
          height:164,
          weight:50,
          current_location:'中国:北京市:海淀区',
          birthday:'1992-10-18',
          school:'北京大学',
          degree:'本科',
          birth_place:'中国:四川省:重庆市',
          presentation:'喵,天气真好～',
          occupation:'学生',
          domain:'外语',
          photos:[]
        };
        pie.mate.expectations = {
          'height_min':170,
          'height_max':180,
          'age_diff_min':0,
          'age_diff_max':3,
          'degree_min':'本科',
          'degree_max':'博士',
          'location_ideal':'中国:北京市:海淀区',
          'location_distance':'同省'
        };
        jQuery('#matchMateAvatar').attr('src',this.headUrl);
      }
      else{
        this.headUrl = pie.maleHeadUrl;
        this.smallHeadUrl = pie.smallMaleHeadUrl;
        pie.mate.info = {
          puid:7654321,
          nickname:'小Pie',
          sex:mateSex,
          height:175,
          weight:70,
          current_location:'中国:北京市:海淀区',
          birthday:'1992-03-13',
          school:'北京大学',
          degree:'本科',
          birth_place:'中国:湖北省:咸宁市',
          presentation:'今天阳光真好~',
          occupation:'学生',
          domain:'计算机',
          photos:[]
        };
        pie.mate.expectations = {
          'height_min':160,
          'height_max':180,
          'age_diff_min':-3,
          'age_diff_max':2,
          'degree_min':'本科',
          'degree_max':'博士',
          'location_ideal':'中国:北京市:海淀区',
          'location_distance':'同省'
        };
        jQuery('#matchMateAvatar').attr('src',this.headUrl);
      }
      pie.mate.info.photos.push({'uri':this.smallHeadUrl});
      pie.page.mateHomePage.refresh();
      if(pie.user.talkRecord.length > 0){
        if(pie.user.talkRecord[0].from != pie.mate.info.puid&&pie.user.talkRecord[0].to != pie.mate.info.puid){
          pie.user.talkRecord = [];
          jQuery('#mateTalkPage .scrollArea').html('');
          pie.backup();
        }
        pie.page.mateTalkPage.showRecord();
        return;
      }
      var pieWords = '你好,我是小Pie,很高兴认识你！';
      var curTime = pie.tcp.judgeTime(pie.messageTime());
      var contentHtml = '<div class="mateTalkBlock" id="'+pie.user.talkRecord.length+'mateTalkBlock"><table><tbody><tr><td valign="top" width="15%"><div class="mateTalkHead" style="background-image:url('+this.smallHeadUrl+')"></div></td><td valign="top"><div class="mateTalkContent">'+pieWords+'</div><span class="messageTime">'+curTime+'</span></td></tr></tbody></table></div>';
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
    }
  },
  user:{
    exist:false,
    info:null,
    matchReply:null,
    curMate:null,
    matchInfo:null,
    matchType:null,
    infoFinished:false,
    tips:null,
    mateAnswerIndex:0,
    data:null,
    menuAvatar:null,
    userHomeAvatar:null,
    userInfoAvatar:null,
    userTalkAvatar:null,
    mateTalkAvatar:null,
    mateHomeAvatar:null,
    expectations:null,
    seeLifeReport:null,
    seeLoveReport:null,
    communicationReport:null,
    personalityReport:null,
    message:null,
    talkRecord:[],
    messageSended:true,
    nextMessageIndex:0,
    curImgIndex:0,
    autoLogin:function(){
      pie.showPage("pieMatchIndexPage");
      pie.user.messageSended = true;
      pie.tcp.init();
      if(this.info){
        pie.page.userHomePage.refresh();
      }
      if(this.seeLoveReport){
        pie.page.userSeeLoveTestPage.inited = true;
        pie.page.userSeeLoveTestPage.showReport();
      }
      if(this.seeLifeReport){
        pie.page.userSeeLifeTestPage.inited = true;
        pie.page.userSeeLifeTestPage.showReport();
      }
      if(this.personalityReport){
        pie.page.userPersonalityTestPage.inited = true;
        pie.page.userPersonalityTestPage.showReport();
      }
      if(this.communicationReport){
        pie.page.userCommunicationTestPage.inited = true;
        pie.page.userCommunicationTestPage.showReport();
      }
      if(pie.connectionType == 'none'){
        if(this.matchReply){
          pie.page.pieMatchIndexPage.refresh();
        }
      }
      else{
        pie.user.getInfo(0);
      }
    },
    getMessage:function(){
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/dashboard/posters.json',
        type:'get',
        dataType:'json',
        success:function(reply){
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('获取系统消息失败,错误码:'+reply.code+'请报告管理员');
            }
            return;
          }
          pie.user.message = reply.data;
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取系统消息失败'+err+',这应该是网络问题造成的');
        }
      })
    },
    initMatch:function(sync){
      if(this.infoFinished){
        this.getMate(sync);
        return;
      }
      if(sync){
        pie.showLoading('正在初始化配对');
      }
      var userData = {
        'token':pie.user.data.access_token
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/users/'+pie.user.data.puid+'/init.json',
        type:'patch',
        data:userData,
        dataType:'json',
        success:function(reply){
          pie.hideLoading();
          if(pie.refreshStart){
            pie.endRefresh();
          }
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              jQuery('#pieMatchIndexPageMenu').html('体验一下');
              jQuery('#matchStatusText').html('参与配对请完善您的信息并上传至少2张照片');
              jQuery('#finishInfoButton').css('display','block');
            }
            pie.npc.init();
            return;
          }
          pie.user.infoFinished = true;
          jQuery('#finishInfoButton').css('display','none');
          pie.backup();
          pie.user.getMate(sync);
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('初始化配对出错:'+err+',这应该是网络问题造成的');
        }
      })
    },
    getInfo:function(sync){
      var userData = {
        '_format':'json',
        'token':pie.user.data.access_token,
        'platform':pie.platform
      }
      if(sync){
        pie.showLoading('正在同步');
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/users/'+pie.user.data.puid,
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
    },
    submitGPS:function(){
      if(!pie.gps||!this.data){return;}
      var gpsData = {
        'token':this.data.access_token,
        'longitude':pie.gps.longitude,
        'latitude':pie.gps.latitude,
        'altitude':pie.gps.altitude
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/users/'+this.data.puid+'/geo/location.json',
        type:'put',
        dataType:'json',
        data:gpsData,
        success:function(reply){
        },
        error:function(err){
        }
      })
    },
    getMate:function(sync){
      var userData = {
        '_format':'json',
        'token':this.data.access_token
      }
      if(sync){
        pie.showLoading('正在获取配对信息');
      }
      this.submitGPS();
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/apps/pie_match/result',
        type:'get',
        data:userData,
        dataType:'json',
        success:function(reply){
          pie.hideLoading();
          if(pie.refreshStart){
            pie.endRefresh();
          }
          pie.user.matchReply = reply;
          pie.page.pieMatchIndexPage.refresh();
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取配对信息出错:'+err+',这应该是网络问题造成的');
        }
      })
    },
    likeMate:function(){
      pie.confirm('确认要like对方吗?',function(){
        var userData = {
          'token':pie.user.data.access_token,
          'target_id':pie.mate.info.puid,
          'type':pie.user.matchType
        }
        pie.showLoading('正在提交');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_match/results/'+pie.user.matchInfo.match_id+'/like.json',
          type:'patch',
          data:userData,
          dataType:'json',
          success:function(reply){
            if(reply.status != 'success'){
              pie.hideLoading();
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('like对方的动作失败,错误码:'+reply.code+',请报告管理员');
              }
              return;
            }
            pie.user.getMate(1);
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('like对方的动作出错:'+err+',这应该是网络问题造成的');
          }
        })
      });
    },
    passMate:function(){
      pie.confirm('确认要pass对方吗?',function(){
        var userData = {
          'token':pie.user.data.access_token,
          'target_id':pie.mate.info.puid,
          'type':pie.user.matchType
        }
        pie.showLoading('正在提交');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_match/results/'+pie.user.matchInfo.match_id+'/pass.json',
          type:'patch',
          data:userData,
          dataType:'json',
          success:function(reply){
            if(reply.status != 'success'){
              pie.hideLoading();
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('pass对方出错,错误码:'+reply.code+',请报告管理员');
              }
              return;
            }
            pie.user.getMate(1);
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('pass对方出错:'+err+',这应该是网络问题造成的');
          }
        })
      });
    },
    reportMate:function(){
      pie.page.pieReportPage.change(1);
      pie.showPage('pieReportPage');
    },
    feedBack:function(){
      pie.page.pieReportPage.change(0);
      pie.showPage('pieReportPage');
    },
    refreshMatch:function(){
      pie.confirm('你真的要解除和ta的配对关系么?缘分难得啊!',function(){
        var breakData = {
          'token':pie.user.data.access_token,
          'type':pie.user.matchType
        }
        pie.showLoading('正在解除配对');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_match/results/'+pie.user.matchInfo.match_id+'/break.json',
          type:'patch',
          data:breakData,
          dataType:'json',
          success:function(reply){
            if(reply.status != 'success'){
              pie.hideLoading();
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('解除配对出错,错误码:'+reply.code+',请报告管理员');
              }
              return;
            }
            pie.user.getMate(1);
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('解除配对出错:'+err+',这应该是网络问题造成的');
          }
        })
      });
    },
    getQuestions:function(sync){
      var userData = {
        'token':pie.user.data.access_token,
        'number':100
      }
      if(sync){
        pie.showLoading('正在获取问答题库');
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/apps/pie_match/qa/public/random/questions.json',
        type:'get',
        data:userData,
        dataType:'json',
        success:function(reply){
          pie.hideLoading();
          if(pie.refreshStart){
            pie.endRefresh();
          }
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('获取问答题库出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          pie.page.pieQAIndexPage.refresh(reply.data);
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取问答题库出错:'+err+',这应该是网络问题造成的');
        }
      })
    },
    getSeeLoveTest:function(sync){
      var moduleCode = 'see_love';
      var userData = {
        'token':pie.user.data.access_token
      }
      if(sync){
        pie.showLoading('正在加载');
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/apps/pie_test/modules/'+moduleCode
        +'/questions/not/answered.json',
        type:'get',
        data:userData,
        dataType:'json',
        success:function(reply){
          pie.hideLoading();
          if(pie.refreshStart){
            pie.endRefresh();
          }
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('获取测试题库出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          if(reply.data.length>0){
            pie.page.userSeeLoveTestPage.refresh(reply.data);
          }
          else{
            pie.page.userSeeLoveTestPage.showReport();
          }
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取测试题库出错:'+err+',这应该是网络问题造成的');
        }
      })
    },
    getSeeLifeTest:function(sync){
      var moduleCode = 'see_life';
      var userData = {
        'token':pie.user.data.access_token
      }
      if(sync){
        pie.showLoading('正在加载');
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/apps/pie_test/modules/'+moduleCode
        +'/questions/not/answered.json',
        type:'get',
        data:userData,
        dataType:'json',
        success:function(reply){
          pie.hideLoading();
          if(pie.refreshStart){
            pie.endRefresh();
          }
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('获取测试题库出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          if(reply.data.length>0){
            pie.page.userSeeLifeTestPage.refresh(reply.data);
          }
          else{
            pie.page.userSeeLifeTestPage.showReport();
          }
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取测试题库出错:'+err+',这应该是网络问题造成的');
        }
      })
    },
    getPersonalityTest:function(sync){
      var moduleCode = 'personality';
      var userData = {
        'token':pie.user.data.access_token
      }
      if(sync){
        pie.showLoading('正在加载');
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/apps/pie_test/modules/'+moduleCode
        +'/questions/not/answered.json',
        type:'get',
        data:userData,
        dataType:'json',
        success:function(reply){
          pie.hideLoading();
          if(pie.refreshStart){
            pie.endRefresh();
          }
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('获取测试题库出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          if(reply.data.length>0){
            pie.page.userPersonalityTestPage.refresh(reply.data);
          }
          else{
            pie.page.userPersonalityTestPage.showReport();
          }
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取测试题库出错:'+err+',这应该是网络问题造成的');
        }
      })
    },
    getCommunicationTest:function(sync){
      var moduleCode = 'communication';
      var userData = {
        'token':pie.user.data.access_token
      }
      if(sync){
        pie.showLoading('正在加载');
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/apps/pie_test/modules/'+moduleCode
        +'/questions/not/answered.json',
        type:'get',
        data:userData,
        dataType:'json',
        success:function(reply){
          pie.hideLoading();
          if(pie.refreshStart){
            pie.endRefresh();
          }
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('获取测试题库出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          if(reply.data.length>0){
            pie.page.userCommunicationTestPage.refresh(reply.data);
          }
          else{
            pie.page.userCommunicationTestPage.showReport();
          }
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取测试题库出错:'+err+',这应该是网络问题造成的');
        }
      })
    },
    showImg:function(index){
      this.curImgIndex = index;
      window.userSwipe.slide(this.info.photos.length-index-1,0);
      pie.showPage('userShowImgPage');
      var curImg = document.getElementById(index+'userBigPhoto');
      if(!curImg.src){
        pie.showLoading('正在加载');
        curImg.addEventListener('load',function(){
          this.width /= pie.dpi;
          this.style.left = (pie.width-this.width)/2+'px';
          this.style.top = (pie.height-this.height)/2+'px';
          pie.hideLoading();
        });
        curImg.src = pie.serverBase+'/asset/'+pie.user.info.photos[index].uri+'/'+pie.width*pie.dpi+'/'+pie.height*pie.dpi+'/inner/inline';
      }
    },
    showImgHeader:function(){
      if(jQuery('#userShowImgPage .imgHeader').css('display') == 'none'){
        jQuery('#userShowImgPage .imgHeader').css('display','block');
      }
      else{
        jQuery('#userShowImgPage .imgHeader').css('display','none');
      }
    },
    setHead:function(){
      var headData = {
        'token':this.data.access_token,
        'uri':this.info.photos[this.curImgIndex].uri
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/users/'+this.data.puid+'/avatar.json',
        type:'put',
        data:headData,
        dataType:'json',
        success:function(reply){
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('设定头像出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          pie.remind('设定头像成功:');
          pie.user.getInfo(0);
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('设定头像失败:'+err+',这应该是网络问题造成的');
        }
      })
    },
    deleteHead:function(){
      var headData = {
        'token':this.data.access_token,
        'puid':this.data.puid,
        'uri':this.info.photos[this.curImgIndex].uri,
        '_method':'DELETE'
      }
      pie.showLoading('正在删除图片');
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/users/'+this.data.puid+'/photo.json',
        type:'post',
        data:headData,
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
              pie.remind('删除图片出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          var photoArray = pie.user.info.photos;
          pie.user.info.photos = photoArray.slice(0,pie.user.curImgIndex).concat(photoArray.slice(pie.user.curImgIndex+1));
          if(pie.user.info.photos.length<=0){
            pie.showPage('userHomePage');
            jQuery('#userHomePhotoArea').html('');
          }
          else{
            pie.page.userHomePage.photoInit(pie.user.info.photos.length-pie.user.curImgIndex,true);
          }
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('删除图片失败:'+err+',这应该是网络问题造成的');
        }
      })
    },
    logout:function(needCheck){
      if(needCheck){
        pie.confirm('确认要退出么?',this.doLogout)
      }
      else{
        this.doLogout();
      }
    },
    doLogout:function(){
      pie.pieMoment.userId = -1;
      window.localStorage.pieMoment = JSON.stringify(pie.pieMoment);
      pie.jPush.unbind();
      if(pie.useWeibo){
        var weiboFrame = document.getElementById('weiboLoginFrame');
        weiboFrame.src = 'http://weibo.com/logout.php?backurl=%2F';
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
      }
      else{
        window.location.reload();
      }
    }
  },
  mate:{
    exist:false,
    changed:false,
    info:null,
    expectations:null,
    questions:null,
    answers:null,
    curImgIndex:0,
    init:function(){
      pie.page.mateHomePage.refresh();
      this.getAnswer();
    },
    getAnswer:function(){
      var mid;
      if(pie.user.matchType == 1){
        mid = pie.aladdin.info.aladdin_id;
      }
      else{
        mid = pie.user.matchInfo.match_id;
      }
      var mateData = {
        'token':pie.user.data.access_token,
        'type':pie.user.matchType,
        'target_id':pie.mate.info.puid
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/apps/pie_match/results/'+mid+'/qa/public/questions/all/target/answers.json',
        type:'get',
        data:mateData,
        dataType:'json',
        success:function(reply){
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('获取对方回答出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
          pie.mate.answers = reply.data;
          pie.page.mateHomePage.initAnswer();
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('获取对方的回答出错:'+err+',这应该是网络问题造成的');
        }
      })
    },
    showImg:function(index){
      this.curImgIndex = index;
      window.mateSwipe.slide(this.info.photos.length-index-1,0);
      pie.showPage('mateShowImgPage');
      var curImg = document.getElementById(index+'mateBigPhoto');
      if(!curImg.src){
        pie.showLoading('正在加载');
        curImg.addEventListener('load',function(){
          this.width /= pie.dpi;
          this.style.left = (pie.width-this.width)/2+'px';
          this.style.top = (pie.height-this.height)/2+'px';
          pie.hideLoading();
        });
        if(pie.mate.exist){
          curImg.src = pie.serverBase+'/asset/'+pie.mate.info.photos[index].uri+'/'+pie.width*pie.dpi+'/'+pie.height*pie.dpi+'/inner/inline';
        }
        else{
          curImg.src = pie.npc.headUrl;
        }
      }
    },
    showImgHeader:function(){
      if(jQuery('#mateShowImgPage .imgHeader').css('display') == 'none'){
        jQuery('#mateShowImgPage .imgHeader').css('display','block');
      }
      else{
        jQuery('#mateShowImgPage .imgHeader').css('display','none');
      }
    },
    controlLeft:function(){
      if(!this.exist){
        if(pie.npc.liked){
          pie.showPage('mateTalkPage');
        }
        else{
          pie.confirm('你确认要like小Pie吗?双方都选择like之后你们将取得联系,之前他不会知道你的选择(这只是一个教程)',function(){
            pie.npc.liked = true;
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
            pie.remind('你已成功like小Pie,小Pie也选择了like,你们配对成功啦,快点击talk按钮跟小Pie聊聊吧!');
          });
        }
        return;
      }
      if(pie.user.matchType == 1){
        if(!pie.aladdin.info){
          return;
        }
        switch(pie.aladdin.info.aladdin_status){
          case 'successful aladdin':
          pie.showPage('mateTalkPage');
          break;
          case 'not decided yet':
          pie.aladdin.likeFollower();
          break;
          case 'failed aladdin':
          break;
          case 'break up match':
          break;
        }
        return;
      }
      if(!pie.user.matchInfo){
        return;
      }
      switch(pie.user.matchInfo.match_status){
        case 'successful aladdin':
        case 'successful match':
        pie.showPage('mateTalkPage');
        break;
        case 'not decided yet':
        switch(pie.user.matchInfo.my_decision){
          case 'like':
          break;
          case 'pass':
          break;
          case 'unknown':
          switch(pie.user.matchInfo.target_decision){
            case 'unknown':
            pie.user.likeMate();
            break;
            case 'decision_made':
            pie.user.likeMate();
            break;
          }
          break;
          default:break;
        }
        break;
        case 'failed aladdin':
        case 'failed match':
        switch(pie.user.matchInfo.my_decision){
          case 'unknown':
          pie.user.likeMate();
          break;
          case 'like':
          break;
          case 'pass':
          break;
        }
        break;
        case 'break up match':
        break;
      }
    },
    controlCenter:function(){
      if(!this.exist){
        pie.showPage('mateHomePage');
        return;
      }
      if(pie.user.matchType == 1){
        pie.aladdin.lookFollower();
        return;
      }
      if(!pie.user.matchInfo){
        return;
      }
      switch(pie.user.matchInfo.match_status){
        case 'successful aladdin':
        case 'successful match':
        pie.showPage('mateHomePage');
        break;
        case 'not decided yet':
        pie.showPage('mateHomePage');
        break;
        case 'failed aladdin':
        case 'failed match':
        switch(pie.user.matchInfo.my_decision){
          case 'unknown':
          pie.showPage('mateHomePage');
          break;
          case 'like':
          break;
          case 'pass':
          break;
        }
        break;
        case 'break up match':
        break;
      }
    },
    controlRight:function(){
      if(!this.exist){
        if(pie.npc.liked){
          pie.confirm('你确认要解除和小Pie的配对吗?(这只是一个教程)',function(){
            pie.remind('你已成功解除了和小Pie的配对,下次配对将在下个中午12点准时开始!');
            jQuery('#matchControlBox').css('display','none');
            jQuery('#mateDecisionText i').css('display','none');
            jQuery('#mateDecisionText span').html('配对失败');
          });
        }
        else{
          pie.confirm('你确认要pass小Pie吗?(这只是一个教程)',function(){
            pie.remind('你已成功pass小Pie,你们的配对失败了,下次配对将在下个中午12点准时开始!');
            jQuery('#matchControlBox').css('display','none');
            jQuery('#mateDecisionText i').css('display','none');
            jQuery('#mateDecisionText span').html('配对失败');
          });
        }
        return;
      }
      if(pie.user.matchType == 1){
        if(!pie.aladdin.info){
          return;
        }
        switch(pie.aladdin.info.aladdin_status){
          case 'successful aladdin':
          pie.aladdin.refreshAladdin();
          break;
          case 'not decided yet':
          pie.aladdin.passFollower();
          break;
          case 'failed aladdin':
          break;
          case 'break up match':
          break;
        }
        return;
      }
      if(!pie.user.matchInfo){
        return;
      }
      switch(pie.user.matchInfo.match_status){
        case 'successful aladdin':
        case 'successful match':
        pie.user.refreshMatch();
        break;
        case 'not decided yet':
        switch(pie.user.matchInfo.my_decision){
          case 'like':
          break;
          case 'pass':
          break;
          case 'unknown':
          pie.user.passMate();
          break;
          default:break;
        }
        break;
        case 'failed aladdin':
        case 'failed match':
        switch(pie.user.matchInfo.my_decision){
          case 'unknown':
          pie.user.passMate();
          break;
          case 'like':
          break;
          case 'pass':
          break;
        }
        break;
        case 'break up match':
        break;
      }
    }
  },
  aladdin:{
    info:null,
    personInfo:null,
    personExpecation:null,
    areaDisplay:false,
    curFollower:null,
    init:function(first){
      var len = Math.min(4,this.personInfo.length);
      var size = Math.floor(pie.width*0.2);
      for(var i = 0; i < 4; i++){
        if(i<len){
          jQuery('#follower'+i+' img').attr('src',pie.serverBase+'/asset/'+this.personInfo[i].avatar.uri+'/'+size+'/'+size+'/smart/inline');
          jQuery('#follower'+i).css('display','block');
        }
        else{
          jQuery('#follower'+i).css('display','none');
        }
      }
      if(first){
        jQuery('.follower').css('width',size);
        this.showFollower(0);
      }
    },
    showArea:function(){
      this.areaDisplay = true;
      jQuery('#matchMateHead').css('display','none');
      jQuery('#pieMatchType').css('display','none');
      jQuery('#matchControlBox').css('display','none');
      jQuery('#aladdinArea').css('display','block');
    },
    hideArea:function(){
      this.areaDisplay = false;
      jQuery('#matchMateHead').css('display','block');
      jQuery('#pieMatchType').css('display','block');
      jQuery('#matchControlBox').css('display','block');
      jQuery('#aladdinArea').css('display','none');
    },
    showFollower:function(n){
      var size = Math.floor(pie.width*0.9-6);
      jQuery('#matchMateAvatar').attr('src',pie.serverBase+'/asset/'+this.personInfo[n].avatar.uri+'/'+size+'/'+size+'/smart/inline');
      this.hideArea();
      this.curFollower = n;
      pie.mate.info = this.personInfo[n];
      pie.mate.expectations = this.personExpecation[n];
    },
    deleteFollower:function(n){
      var userData = {
        'token':pie.user.data.access_token,
        'target_id':this.personInfo[n].puid,
        'type':pie.user.matchType
      }
      jQuery.ajax({
        url:pie.serverBase+'/api/rest/apps/pie_match/results/'+pie.aladdin.info.aladdin_id+'/pass.json',
        type:'patch',
        data:userData,
        dataType:'json',
        success:function(reply){
          if(reply.status != 'success'){
            if(reply.code == '2002'){
              pie.confirm('账号已过期,请重新登录',function(){
                pie.user.logout(0);
              },false)
            }
            else{
              pie.remind('pass对方出错,错误码:'+reply.code+',请报告管理员');
            }
            return;
          }
        },
        error:function(err){
          pie.hideLoading();
          pie.remind('pass对方的动作出错:'+err+',这应该是网络问题造成的');
        }
      })
      this.personInfo = this.personInfo.slice(0,n).concat(this.personInfo.slice(n+1));
      this.personExpecation = this.personExpecation.slice(0,n).concat(this.personExpecation.slice(n+1));
      this.init(0);
    },
    command:function(){
      if(this.areaDisplay){
        this.hideArea();
      }
      else{
        this.showArea();
      }
    },
    lookFollower:function(){
      pie.mate.init();
      pie.showPage('mateHomePage');
    },
    passFollower:function(){
      pie.confirm('确认要pass对方吗?',function(){
        var userData = {
          'token':pie.user.data.access_token,
          'target_id':pie.mate.info.puid,
          'type':pie.user.matchType
        }
        pie.showLoading('正在提交');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_match/results/'+pie.aladdin.info.aladdin_id+'/pass.json',
          type:'patch',
          data:userData,
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
                pie.remind('pass对方出错,错误码:'+reply.code+',请报告管理员');
              }
              return;
            }
            pie.aladdin.deleteFollower(pie.aladdin.curFollower);
            pie.aladdin.showArea();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('pass对方的动作出错:'+err+',这应该是网络问题造成的');
          }
        })
      });
    },
    likeFollower:function(){
      pie.confirm('确认要like对方吗?',function(){
        var userData = {
          'token':pie.user.data.access_token,
          'target_id':pie.mate.info.puid,
          'type':pie.user.matchType
        }
        pie.showLoading('正在提交');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_match/results/'+pie.aladdin.info.aladdin_id+'/like.json',
          type:'patch',
          data:userData,
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
                pie.remind('like对方出错,错误码:'+reply.code+',请报告管理员');
              }
              return;
            }
            jQuery('#statusText').html('配对成功,加油!');
            pie.aladdin.info.aladdin_status = 'successful match';
            jQuery('#pieMatchType').css('display','none');
            jQuery('#matchControlLeftButton i').removeClass('icon-remove');
            jQuery('#matchControlLeftButton i').addClass('icon-refresh');
            jQuery('#matchControlRightButton i').removeClass('icon-heart');
            jQuery('#matchControlRightButton i').addClass('icon-comment');
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('like对方的动作出错:'+err+',这应该是网络问题造成的');
          }
        })
      });
    },
    refreshAladdin:function(){
      pie.confirm('你真的要解除和ta的配对关系么?缘分难得啊!',function(){
        var breakData = {
          'token':pie.user.data.access_token,
          'type':pie.user.matchType
        }
        pie.showLoading('正在解除配对');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_match/results/'+pie.aladdin.info.aladdin_id+'/break.json',
          type:'patch',
          data:breakData,
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
                pie.remind('解除关系出错,错误码:'+reply.code+',请报告管理员');
              }
              return;
            }
            pie.npc.init();
            jQuery('#statusText').html('你已解除了本次配对,下次配对只剩');
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('解除配对碰到出错:'+err+',这应该是网络问题造成的');
          }
        })
      });
    }
  },
  leftMenu:{
    id:'pieLeftMenu',
    display:false,
    scrollArea:null,
    show:function(){
      this.display=true;
      jQuery('#'+this.id).css('display','block');
      if(!this.scrollArea){
        this.scrollArea = new iScroll(this.id,{
          useTransition:true,
          hScroll:false,
          checkDOMChanges:false
        });
      }
    },
    hide:function(){
      this.display=false;
      jQuery('#'+this.id).css('display','none');
    }
  },
  rightMenu:{
    id:'pieRightMenu',
    display:false,
    scrollArea:null,
    autoPlay:null,
    curTipIndex:-1,
    show:function(){
      this.display=true;
      jQuery('#'+this.id).css('display','block');
      if(!this.scrollArea){
        this.scrollArea = new iScroll(this.id,{
          useTransition:true,
          hScroll:false,
          checkDOMChanges:false
        });
      }
      if(this.curTipIndex<0){
        this.curTipIndex = Math.floor(pie.user.tips.length*Math.random());
      }
      this.showTips();
      this.autoPlay = setInterval(function(){
        jQuery('#pieTips').css('opacity','0.2');
        setTimeout(function(){
          pie.rightMenu.showTips();
        },500);
      },9000);
    },
    hide:function(){
      this.display=false;
      jQuery('#'+this.id).css('display','none');
      clearInterval(this.autoPlay);
      this.autoPlay = null;
    },
    showTips:function(){
      this.curTipIndex++;
      this.curTipIndex %= pie.user.tips.length;
      jQuery('#tipContent').html(pie.user.tips[this.curTipIndex]);
      jQuery('#pieTips').css('opacity','1');
    }
  },
  page:{
    pieLoginPage:{
      id:'pieLoginPage',
      needScroll:true,
      scrollArea:null,
      init:function(){},
      submit:function(){
        var account = jQuery('#pieLoginAccountInput').val();
        if(account == ""){
          pie.remind('帐号不能为空');
          jQuery('#pieLoginAccountInput').focus();
          return;
        }
        pie.curLoginAccount = account;
        var passwordMode = /^[a-zA-Z0-9]{6,36}$/;
        var password = jQuery('#pieLoginPasswordInput').val()
        if(!passwordMode.test(password)){
          pie.remind('帐号或密码错误');
          jQuery('#pieLoginPasswordInput').focus();
          return;
        }
        pie.curLoginPassword = password;
        var loginData = {
          '_format':'json',
          'app_token':'app_token',
          'userkey':account,
          'passwd':password
        }
        pie.showLoading('正在登录');
        jQuery.ajax({
          url:pie.serverBase+'/api/auth/token/via/passwd',
          type:'post',
          data:loginData,
          dataType:'json',
          success:function(reply){
            pie.hideLoading();
            if(reply.status == 'error'){
              switch(reply.code){
                case 1011:pie.remind('请输入正确的帐号');break;
                case 1012:pie.remind('请输入密码');break;
                case 1013:pie.remind('帐号不存在');break;
                case 1014:pie.remind('帐号已过期');pie.showPage("pieResetByEmailPage");break;
                case 1015:pie.remind('密码不正确');break;
                case 1016:pie.remind('帐号未激活');pie.showPage("pieActivatePage");break;
                case 1018:pie.remind('帐号被禁用');pie.showPage("pieActivatePage");break;
                case 2002:
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false);
                break;
                default:pie.remind('登录碰到未知错误:'+reply.reason);break;
              }
            }
            else{
              pie.user.exist = true;
              pie.user.account = loginData.userkey;
              pie.user.data = reply.data;
              pie.jPush.bind();
              pie.user.getInfo(0);
              var newUser = {
                'account':loginData.userkey,
                'data':pie.user.data,
                'info':null,
                'curMate':null,
                'matchReply':null,
                'tips':null,
                'infoFinished':false,
                'talkRecord':[],
                'mateAnswerIndex':null,
                'messageSended':true,
                'nextMessageIndex':0,
                'menuAvatar':null,
                'userHomeAvatar':null,
                'userInfoAvatar':null,
                'userTalkAvatar':null,
                'mateTalkAvatar':null,
                'mateHomeAvatar':null,
                'expectations':null,
                'seeLifeReport':null,
                'seeLoveReport':null,
                'communicationReport':null,
                'personalityReport':null
              }
              if(pie.pieMoment == undefined){
                pie.pieMoment = {
                  users:[newUser],
                  userId:0
                }
              }
              else{
                var recordExist = false;
                for(var i = 0; i < pie.pieMoment.users.length; i++){
                  if(pie.pieMoment.users[i].account == loginData.userkey){
                    pie.pieMoment.userId = i;
                    pie.pieMoment.users[i].data = pie.user.data;
                    recordExist = true;
                    break;
                  }
                }
                if(!recordExist){
                  pie.pieMoment.users.push(newUser);
                  pie.pieMoment.userId = pie.pieMoment.users.length-1;
                }
                else{
                  pie.getLocalData();
                }
              }
              pie.backup();
              pie.showPage("pieMatchIndexPage");
            }
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('登录碰到未知错误,你的网络连接状况不太行吧?连不上啊:'+err)
          }
        });
        return;
      },
      listenInput:function(event){
        var e = event||window.event;
        if(e.keyCode==13){
          this.submit();
        }
      }
    },
    pieRegPage:{
      id:'pieRegPage',
      backPageId:'pieLoginPage',
      needScroll:true,
      scrollArea:null,
      curSex:1,
      title:'注册',
      init:function(){},
      chooseSex:function(n){
        this.curSex = n;
        if(n){
          jQuery('#chooseMale').css('color','rgb(9, 172, 165)');
          jQuery('#chooseFemale').css('color','#aaa');
        }
        else{
          jQuery('#chooseFemale').css('color','rgb(255, 40, 49)');
          jQuery('#chooseMale').css('color','#aaa');
        }
      },
      submit:function(){
        var mobileMode = /[0-9]{11}$/;
        var mobile = jQuery('#pieRegMobileInput').val();
        if(!mobileMode.test(mobile)){
          pie.remind('请输入正确的11位手机号');
          jQuery('#pieRegMobileInput').focus();
          return;
        }
        var emailMode = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        /*var pkuEmailMode = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)*pku.edu.cn$/;*/
        var email = jQuery('#pieRegEmailInput').val();
        if(!emailMode.test(email)){
          pie.remind('请输入正确的邮箱');
          jQuery('#pieRegEmailInput').focus();
          return;
        }
        var passwordMode = /^[a-zA-Z0-9]{6,36}$/;
        var password = jQuery('#pieRegPasswordInput').val();
        if(!passwordMode.test(password)){
          pie.remind('请输入6~36位字符的密码');
          jQuery('#pieRegPasswordInput').focus();
          return;
        }
        pie.showLoading('正在注册');
        var regData = {
          'app_token':'app_token',
          '_format':'json',
          'mobile_phone':mobile,
          'email':email,
          'passwd':password,
          'sex':this.curSex
        }
        jQuery.ajax({
          url:pie.serverBase+'/api/auth/account/register/via/mobile/phone',
          type:'post',
          data:regData,
          dataType:'json',
          success:function(reply){
            pie.hideLoading();
            if(reply.status == 'success'){
              pie.remind('激活码已发至您的手机,请查看');
              pie.showPage("pieActivatePage");
            }
            else{
              switch(reply.code){
                case 1081:pie.remind('请输入正确的信息');break;
                case 1082:pie.remind('用户名已被注册');break;
                case 1083:pie.remind('该邮箱已被注册');break;
                case 1084:pie.remind('该手机已被注册');break;
                default:pie.remind('注册未知错误:'+reply.message);break;
              }
            }
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('激活码发送失败:'+err+',这应该是网络问题造成的');
          }
        });
      },
      listenInput:function(event){
        var e = event||window.event;
        if(e.keyCode==13){
          this.submit();
        }
      }
    },
    pieActivatePage:{
      id:'pieActivatePage',
      backPageId:'pieLoginPage',
      needScroll:true,
      scrollArea:null,
      title:'激活',
      init:function(){},
      submit:function(){
        var code = jQuery('#pieActivateInput').val();
        var codeMode = /^[0-9]{6}$/;
        if(!codeMode.test(code)){
          pie.remind('请输入正确的6位验证码');
          jQuery('#pieActivateInput').focus();
          return;
        }
        var mobile = jQuery('#pieRegMobileInput').val()||pie.curLoginAccount;
        pie.showLoading('正在激活');
        var activateData = {
          '_format':'json',
          'app_token':'app_token',
          'mobile_phone':mobile,
          'security_code':code
        }
        jQuery.ajax({
          url:pie.serverBase+'/api/auth/account/activate/by/security/code',
          type:'post',
          data:activateData,
          dataType:'json',
          success:function(reply){
            pie.hideLoading();
            if(reply.status == 'success'){
              var mobile = jQuery('#pieRegMobileInput').val()||pie.curLoginAccount;
              jQuery('#pieLoginAccountInput').val(mobile);
              var password = jQuery('#pieRegPasswordInput').val()||pie.curLoginPassword;
              jQuery('#pieLoginPasswordInput').val(password);
              pie.page.pieLoginPage.submit();
            }
            else{
              pie.remind('激活码错误');
              jQuery('#pieActivateInput').val('');
            }
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交激活码失败:'+err+',这应该是网络问题造成的');
          }
        });
        return;
      },
      listenInput:function(event){
        var e = event||window.event;
        if(e.keyCode==13){
          this.submit();
        }
      }
    },
    pieFindBackPasswordPage:{
      id:'pieFindBackPasswordPage',
      backPageId:'pieLoginPage',
      needScroll:true,
      scrollArea:null,
      title:'找回密码',
      init:function(){},
      getSms:function(){
        var mobile = jQuery('#findBackPasswordMobileInput').val();
        var mobileMode = /[0-9]{11}$/;
        if(!mobileMode.test(mobile)){
          pie.remind('请输入正确的11位手机号');
          jQuery('#findBackPasswordMobileInput').focus();
          return;
        }
        var smsData = {
          '_format':'json',
          'app_token':'app_token',
          'mobile_phone':mobile
        }
        pie.showLoading('正在获取手机验证码');
        jQuery.ajax({
          url:pie.serverBase+'/api/auth/account/reset/passwd/via/mobile/phone',
          type:'get',
          data:smsData,
          dataType:'json',
          success:function(reply){
            pie.hideLoading();
            if(reply.status != 'success'){
              pie.remind('发送验证码失败，请报告管理员');
              return;
            }
            jQuery('#resetGetSmsArea').css('display','none');
            jQuery('#resetInputSmsArea').css('display','block');
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('发送验证码失败:'+err+',这应该是网络问题造成的');
          }
        });
        return;
      },
      submitReset:function(){
        var mobile = jQuery('#findBackPasswordMobileInput').val();
        var smsCode = jQuery('#findBackPasswordSmsInput').val();
        var newPassword = jQuery('#findBackPasswordNewPasswordInput').val();
        var codeMode = /^[0-9]{6}$/;
        if(!codeMode.test(smsCode)){
          pie.remind('请输入正确的6位验证码');
          jQuery('#findBackPasswordSmsInput').focus();
          return;
        }
        var passwordMode = /^[a-zA-Z0-9]{6,36}$/;
        if(!passwordMode.test(newPassword)){
          pie.remind('请输入6～36位密码');
          jQuery('#findBackPasswordNewPasswordInput').focus();
          return;
        }
        var smsData = {
          '_format':'json',
          'app_token':'app_token',
          'mobile_phone':mobile,
          'code':smsCode,
          'new_passwd':newPassword
        }
        pie.showLoading('正在重置密码');
        jQuery.ajax({
          url:pie.serverBase+'/api/auth/account/reset/passwd/by/security/code',
          type:'post',
          data:smsData,
          dataType:'json',
          success:function(reply){
            pie.hideLoading();
            if(reply.status != 'success'){
              pie.remind('验证码错误');
              return;
            }
            var mobile = jQuery('#findBackPasswordMobileInput').val();
            var newPassword = jQuery('#findBackPasswordNewPasswordInput').val();
            jQuery('#pieLoginAccountInput').val(mobile);
            jQuery('#pieLoginPasswordInput').val(newPassword);
            pie.page.pieLoginPage.submit();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交验证码出错:'+err+',这应该是网络问题造成的');
          }
        });
        return;
      }
    },
    userInputPage:{
      id:'userInputPage',
      backPageId:'userHomePage',
      needScroll:true,
      scrollArea:null,
      title:'输入',
      inputType:null,
      curMobile:null,
      init:function(){},
      showInput:function(id){
        jQuery('#userInputPage').css('display','block');
        jQuery('.inputArea').css('display','none');
        jQuery('#'+id+'Area').css('display','block');
        var ss = pie.select;
        switch(id){
          case 'userInfoMobile':
          this.title = '绑定手机';
          this.inputType = 0;
          break;
          case 'userInfoNickname':
          this.title = '昵称';
          this.inputType = 1;
          break;
          case 'userInfoPresentation':
          this.title = '自我介绍';
          this.inputType = 2;
          break;
          case 'userInfoRealname':
          this.title = '真实姓名';
          this.inputType = 2;
          break;
          case 'userInfoHeight':
          this.title = '身高';
          this.inputType = 2;
          ss.init('userInfoHeightInput');
          break;
          case 'userInfoWeight':
          this.title = '体重';
          this.inputType = 2;
          ss.init('userInfoWeightInput');
          break;
          case 'userInfoBirthday':
          this.title = '生日';
          this.inputType = 2;
          ss.init('userInfoBirthdayYearInput');
          ss.init('userInfoBirthdayMonthInput');
          ss.init('userInfoBirthdayDayInput');
          break;
          case 'userInfoCurrentLocation':
          this.title = '现居地';
          this.inputType = 2;
          ss.init('userInfoCurrentLocationProvinceInput');
          ss.init('userInfoCurrentLocationCityInput');
          break;
          case 'userInfoBirthPlace':
          this.title = '籍贯';
          this.inputType = 2;
          ss.init('userInfoBirthPlaceProvinceInput');
          ss.init('userInfoBirthPlaceCityInput');
          break;
          case 'userInfoSchool':
          this.title = '学校';
          this.inputType = 2;
          ss.init('schoolProvinceInput');
          ss.init('userInfoSchoolInput');
          break;
          case 'userInfoDegree':
          this.title = '学历';
          this.inputType = 2;
          ss.init('userInfoDegreeInput');
          break;
          case 'userInfoOccupation':
          this.title = '职业';
          this.inputType = 2;
          ss.init('userInfoOccupationInput');
          ss.init('userInfoDomainInput');
          break;
          case 'userExpectationHeight':
          this.title = '身高要求';
          this.inputType = 3;
          ss.init('userExpectationMinHeightInput');
          ss.init('userExpectationMaxHeightInput');
          break;
          case 'userExpectationAge':
          this.title = '年龄要求';
          this.inputType = 3;
          ss.init('userExpectationMinAgeInput');
          ss.init('userExpectationMaxAgeInput');
          break;
          case 'userExpectationDegree':
          this.title = '学历要求';
          this.inputType = 3;
          ss.init('userExpectationMinDegreeInput');
          ss.init('userExpectationMaxDegreeInput');
          break;
          case 'userExpectationIdealLocation':
          this.title = '理想城市';
          this.inputType = 3;
          ss.init('userExpectationIdealLocationProvinceInput');
          ss.init('userExpectationIdealLocationCityInput');
          break;
          case 'userExpectationLocationDistance':
          this.title = '距离要求';
          this.inputType = 3;
          ss.init('userExpectationLocationDistanceInput');
          break;
          default:this.title = '未知情况';break;
        }
        jQuery('#inputTitle').html(this.title);
        setTimeout(function(){
          jQuery('#userInputPage').css('-webkit-transform','translate3d('+pie.width+'px,0,0)');
        },0);
      },
      getSms:function(){
        var mobile = jQuery('#bindMobileInput').val();
        this.curMobile = mobile;
        var mobileMode = /[0-9]{11}$/;
        if(!mobileMode.test(mobile)){
          pie.remind('请输入正确的11位手机号');
          jQuery('#bindMobileInput').focus();
          return;
        }
        var smsData = {
          'token':pie.user.data.access_token,
          'puid':pie.user.data.puid,
          'mobile_phone':mobile
        }
        pie.showLoading('正在获取手机验证码');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/users/'+pie.user.data.puid+'/mobile/phone.json',
          type:'put',
          data:smsData,
          dataType:'json',
          success:function(reply){
            pie.hideLoading();
            if(reply.status != 'success'){
              if(reply.code == 2042){
                pie.remind('不能重复绑定相同的手机');
              }
              else{
                pie.remind('发送验证码失败，错误码:'+reply.code+',请报告管理员');
              }
              return;
            }
            pie.remind('验证码已经发到手机:'+pie.page.userInputPage.curMobile+',请查收');
            jQuery('#bindMobileInput').css('display','none');
            jQuery('#bindMobileSmsInput').css('display','block');
            pie.page.userInputPage.inputType = -1;
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('发送验证码失败:'+err+',这应该是网络问题造成的');
          }
        })
      },
      codeSubmit:function(){
        var smsCode = jQuery('#bindMobileSmsInput').val();
        var codeMode = /^[0-9]{6}$/;
        if(!codeMode.test(smsCode)){
          pie.remind('请输入正确的6位验证码');
          jQuery('#bindMobileSmsInput').focus();
          return;
        }
        jQuery('#bindMobileSmsInput').val('');
        var smsData = {
          'token':pie.user.data.access_token,
          'channel':'mobile',
          'code':smsCode
        }
        pie.showLoading('正在重置密码');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/users/'+pie.user.data.puid+'/verify.json',
          type:'patch',
          data:smsData,
          dataType:'json',
          success:function(reply){
            pie.hideLoading();
            if(reply.status != 'success'){
              pie.remind('验证码错误');
              return;
            }
            jQuery('#userInputPage').css('-webkit-transform','translate3d(0,0,0)');
            setTimeout(function(){
              jQuery('#userInputPage').css('display','none');
            },300);
            jQuery('#bindGetSmsArea').css('display','block');
            jQuery('#bindInputSmsArea').css('display','none');
            pie.remind('绑定手机成功');
            jQuery('#userInfoMobile .userInfoItemContent').html(pie.page.userInputPage.curMobile);
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交验证码出错:'+err+',这应该是网络问题造成的');
          }
        })
      },
      submitUserExpectation:function(){
        var ss = pie.select;
        var height_min = ss.getValue('userExpectationMinHeightInput');
        var height_max = ss.getValue('userExpectationMaxHeightInput');
        var degree_min = pie.degreeList[ss.getValue('userExpectationMinDegreeInput')];
        var degree_max = pie.degreeList[ss.getValue('userExpectationMaxDegreeInput')];
        var age_diff_min = ss.getValue('userExpectationMinAgeInput');
        var age_diff_max = ss.getValue('userExpectationMaxAgeInput');
        var location_ideal = '中国:'+ss.getValue('userExpectationIdealLocationProvinceInput')
        +':'+ss.getValue('userExpectationIdealLocationCityInput');
        var location_distance = ss.getValue('userExpectationLocationDistanceInput');
        var userInfoData = {
          'token':pie.user.data.access_token,
          'height_min':height_min,
          'height_max':height_max,
          'degree_min':degree_min,
          'degree_max':degree_max,
          'age_diff_min':age_diff_min,
          'age_diff_max':age_diff_max,
          'location_ideal':location_ideal,
          'location_distance':location_distance
        }
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
              pie.user.getInfo(0);
            }
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交用户期望信息出错:'+err+',这应该是网络问题造成的');
          }
        })
      },
      updateInfo:function(){
        var ss = pie.select;
        var realname = jQuery('#userInfoRealnameInput').val();
        var currentLocation = '中国:'+ss.getValue('userInfoCurrentLocationProvinceInput')
        +':'+ss.getValue('userInfoCurrentLocationCityInput');
        var birthdayYear = parseInt(ss.getValue('userInfoBirthdayYearInput'));
        var birthdayMonth = parseInt(ss.getValue('userInfoBirthdayMonthInput'));
        var birthdayDay = parseInt(ss.getValue('userInfoBirthdayDayInput'));
        if(birthdayMonth<10){
          birthdayMonth = '0'+birthdayMonth;
        }
        if(birthdayDay<10){
          birthdayDay = '0'+birthdayDay;
        }
        var birthday = birthdayYear+'-'+birthdayMonth+'-'+birthdayDay;
        var height = ss.getValue('userInfoHeightInput');
        var weight = ss.getValue('userInfoWeightInput');
        var school = ss.getValue('userInfoSchoolInput');
        var degree = ss.getValue('userInfoDegreeInput');
        var presentation = jQuery('#userInfoPresentationInput').val();
        var birthPlace = '中国:'+ss.getValue('userInfoBirthPlaceProvinceInput')
        +':'+ss.getValue('userInfoBirthPlaceCityInput');
        var occupationIndex = ss.getValue('userInfoOccupationInput');
        var occupation = pie.occupationList[occupationIndex];
        var domainIndex = ss.getValue('userInfoDomainInput');
        var domain = pie.domainList[occupationIndex][domainIndex];
        var userInfoData = {
          'token':pie.user.data.access_token,
          'realname':realname,
          'birthday':birthday,
          'current_location':currentLocation,
          'height':height,
          'weight':weight,
          'school':school,
          'degree':degree,
          'presentation':presentation,
          'birth_place':birthPlace,
          'occupation':occupation,
          'domain':domain
        }
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
              jQuery('#userInputPage').css('-webkit-transform','translate3d(0,0,0)');
              setTimeout(function(){
                jQuery('#userInputPage').css('display','none');
              },300);
              pie.user.getInfo(0);
            }
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交用户基本信息出错:'+err+',这应该是网络问题造成的');
          }
        })
      },
      updateNickname:function(){
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
      },
      submitQuestion:function(){
        var question = jQuery('#askQuestionInput').val();
        if(question == ''){return;}
        pie.tcp.askQuestion(question);
        pie.showLoading('正在提交问题');
      },
      bindEmail:function(){
        var emailMode = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //var pkuEmailMode = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)*pku.edu.cn$/;
        var newEmail = jQuery('#bindEmailInput').val();
        if(!emailMode.test(newEmail)){
          pie.remind('请输入正确的邮箱');
          jQuery('#bindEmailInput').focus();
          return;
        }
        var emailData = {
          'token':pie.user.data.access_token,
          'email':newEmail
        }
        pie.showLoading('正在提交')
        jQuery.ajax({
          'url':pie.serverBase+'/api/rest/users/'+pie.user.data.puid+'/email.json',
          'type':'put',
          'data':emailData,
          'dataType':'json',
          success:function(reply){
            pie.hideLoading();
            if(reply.status == 'success'){
              pie.remind('提交成功,我们已经发送了一封验证邮件到:'+newEmail+',请尽快前去验证');
              jQuery('#userInputPage').css('-webkit-transform','translate3d(0,0,0)');
              setTimeout(function(){
                jQuery('#userInputPage').css('display','none');
              },300);
              pie.user.getInfo(0);
            }
            else{
              if(reply.code == 2031){
                pie.confirm('很遗憾,该邮箱已被使用...请重新输入',function(){
                  jQuery('#bindEmailInput').val('');
                  jQuery('#bindEmailInput').focus();
                });
              }
              else{
                pie.remind('绑定邮箱出现未知错误,错误码:'+reply.code+',请报告管理员');
              }
            }
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('绑定邮箱出现未知错误,这应该是网络问题造成的');
          }
        });
      },
      submit:function(){
        if(pie.curInputId){
          jQuery('#'+pie.curInputId).blur();
        }
        switch(this.inputType){
          case -1:this.codeSubmit();break;
          case 0:this.getSms();break;
          case 1:this.updateNickname();break;
          case 2:this.updateInfo();break;
          case 3:this.submitUserExpectation();break;
          case 4:this.submitQuestion();break;
          case 5:this.bindEmail();break;
        }
      },
      cancel:function(){
        if(pie.curInputId){
          jQuery('#'+pie.curInputId).blur();
        }
        jQuery('#userInputPage').css('-webkit-transform','translate3d(0,0,0)');
        setTimeout(function(){
          jQuery('#userInputPage').css('display','none');
        },300);
        if(this.inputType == 4){
          setTimeout(function(){
            pie.reduceLeft();
          },100)
        }
      }
    },
    renrenLoginPage:{
      id:'renrenLoginPage',
      backPageId:'pieLoginPage',
      title:'人人登录',
      inited:false,
      init:function(){
        if(this.inited){return;}
        this.inited = true;
        var iframe = document.createElement("iframe");
        var host =pie.serverBase.slice(7,10)+'.';
        if(host != 'www.'&&host != 'dev.'){
          host = '';
        }
        var devSrc = 'http://graph.renren.com/login?redirect_uri=http%3A%2F%2Fgraph.renren.com%2Foauth%2Fauthorize%3Fclient_id%3Db29edbb8c9154c2f9a97d00e96138b66%26redirect_uri%3Dhttp%253A%252F%252F'+host+'piemoment.com%252Foauth%252Flogin_check%252Finner%252Frenren%26response_type%3Dcode%26display%3Dtouch%26scope%3Dread_user_album%2Bread_user_photo%2Bread_user_feed%2Bpublish_feed%2Bphoto_upload%2Bread_user_status%26state%3D1bd7cd029976e6f20ef14ede386cd6a2%26pp%3D1%26origin%3D00000&post_form_id=feccdf9a033fd1df450cc9c1e234e0cd-10-1374774007525';
        var devRenewSrc = 'http://graph.renren.com/login?renew=true&redirect_uri=http%3A%2F%2Fgraph.renren.com%2Foauth%2Fauthorize%3Fclient_id%3Db29edbb8c9154c2f9a97d00e96138b66%26redirect_uri%3Dhttp%253A%252F%252F'+host+'piemoment.com%252Foauth%252Flogin_check%252Finner%252Frenren%26response_type%3Dcode%26display%3Dtouch%26scope%3Dread_user_album%2Bread_user_photo%2Bread_user_feed%2Bpublish_feed%2Bphoto_upload%2Bread_user_status%26state%3D1bd7cd029976e6f20ef14ede386cd6a2%26pp%3D1%26origin%3D00000&post_form_id=feccdf9a033fd1df450cc9c1e234e0cd-10-1374774007525';
        iframe.id='renrenLoginFrame';
        if (iframe.attachEvent){
          iframe.attachEvent("onload", function(){
            pie.hideLoading();
          });
        }
        else {
          iframe.onload = function(){
            pie.hideLoading();
          };
        }
        pie.showLoading('正在加载');
        if(pie.pieMoment){
          if(pie.pieMoment.userId < 0){
            iframe.src = devRenewSrc;
          }
          else{
            iframe.src = devSrc;
          }
        }
        else{
          iframe.src = devRenewSrc;
        }
        document.getElementById('renrenLoginPage').appendChild(iframe);
        jQuery('#renrenLoginFrame').css('min-height',pie.height-pie.headerHeight+55);
      }
    },
    weiboLoginPage:{
      id:'weiboLoginPage',
      backPageId:'pieLoginPage',
      title:'微博登录',
      inited:false,
      init:function(){
        if(this.inited){return;}
        this.inited = true;
        var iframe = document.createElement("iframe");
        var host =pie.serverBase.slice(7,10)+'.';
        if(host != 'www.'&&host != 'dev.'){
          host = '';
        }
        var devSrc = 'https://api.weibo.com/oauth2/authorize?client_id=3912447897&response_type=code&redirect_uri=http%3A%2F%2F'+host+'piemoment.com%2Fweb%2Fapp_dev.php%2Foauth%2Flogin_check%2Finner%2Fweibo&state=cbbdd76851674d47cc47b8bd1ca46ecb&scope=all&display=mobile';
        iframe.id='weiboLoginFrame';
        if (iframe.attachEvent){
          iframe.attachEvent("onload", function(){
            pie.hideLoading();
          });
        }
        else {
          iframe.onload = function(){
            pie.hideLoading();
          };
        }
        pie.showLoading('正在加载');
        iframe.src = devSrc;
        document.getElementById('weiboLoginPage').appendChild(iframe);
        jQuery('#weiboLoginFrame').css('min-height',pie.height-pie.headerHeight+60);
      }
    },
    userHomePage:{
      id:'userHomePage',
      needScroll:true,
      scrollArea:null,
      title:'个人主页',
      curAvatar:null,
      curPhotos:null,
      curInfoArea:null,
      init:function(){},
      refresh:function(){
        if(!this.curInfoArea){
          this.showPersonalInfo();
        }
        if('is_mobile_phone_verified' in pie.user.info){
          if(pie.user.info.is_mobile_phone_verified){
            if(pie.user.info.mobile_phone){
              jQuery('#userInfoMobile .userInfoItemContent').html(pie.user.info.mobile_phone);
            }
          }
        }
        /*if('email' in pie.user.info){
          if(pie.user.info.is_email_verified){
            jQuery('#userInfoEmail .userInfoItemContent').html(pie.user.info.email);
          }
          else{
            jQuery('#userInfoEmail .userInfoItemContent').html('未验证:'+pie.user.info.email);
          }
        }*/
        var ss = pie.select;
        if('current_location' in pie.user.info){
          var currentLocation = pie.user.info.current_location.split(':');
          if(currentLocation.length == 3){
            ss.setValue('userInfoCurrentLocationProvinceInput',currentLocation[1]);
            ss.setValue('userInfoCurrentLocationCityInput',currentLocation[2]);
            jQuery('#userInfoCurrentLocation .userInfoItemContent').html(currentLocation[1]+' '+currentLocation[2]);
          }
        }
        if('birthday' in pie.user.info){
          var birthdayArray = pie.user.info.birthday.split('-');
          if(birthdayArray.length == 3){
            if(birthdayArray[0]>=1960&&birthdayArray[0]<=2000){
              ss.setValue('userInfoBirthdayYearInput',birthdayArray[0]);
              ss.setValue('userInfoBirthdayMonthInput',birthdayArray[1]);
              ss.setValue('userInfoBirthdayDayInput',birthdayArray[2]);
              jQuery('#userInfoBirthday .userInfoItemContent').html(birthdayArray[0]+'年'+birthdayArray[1]+'月'+birthdayArray[2]+'日');
            }
          }
        }
        if('birth_place' in pie.user.info){
          var birthPlaceLocation = pie.user.info.birth_place.split(':');
          if(birthPlaceLocation.length==3){
            ss.setValue('userInfoBirthPlaceProvinceInput',birthPlaceLocation[1]);
            ss.setValue('userInfoBirthPlaceCityInput',birthPlaceLocation[2]);
            jQuery('#userInfoBirthPlace .userInfoItemContent').html(birthPlaceLocation[1]+' '+birthPlaceLocation[2]);
          }
        }
        if('nickname' in pie.user.info){
          this.title = pie.user.info.nickname;
          if(pie.curPageId == this.id){
            jQuery('#pageTitle').html(this.title);
          }
          jQuery('#menuUserName').html(pie.user.info.nickname);
          jQuery('#userInfoNicknameInput').val(pie.user.info.nickname);
          jQuery('#userInfoNickname .userInfoItemContent').html(pie.user.info.nickname);
        }
        if('sex' in pie.user.info){
          var sexText = '男';
          if(pie.user.info.sex == 1){
            jQuery('#userHomeGround').css('background-color','rgb(8, 143, 148)');
            jQuery('#userInfoSex i').removeClass('icon-female');
            jQuery('#userInfoSex i').addClass('icon-male');
            jQuery('#userHomeNavBox span').removeClass('femaleInfoNav');
            jQuery('#userHomeNavBox span').addClass('maleInfoNav');
          }
          else{
            sexText = '女';
            jQuery('#userInfoSex i').removeClass('icon-male');
            jQuery('#userInfoSex i').addClass('icon-female');
            jQuery('#userHomeGround').css('background-color','#ea4c89');
            jQuery('#userHomeNavBox span').removeClass('maleInfoNav');
            jQuery('#userHomeNavBox span').addClass('femaleInfoNav');
          }
          jQuery('#userInfoSex .userInfoItemContent').html(sexText); 
        }
        if('realname' in pie.user.info){
          jQuery('#userInfoRealnameInput').val(pie.user.info.realname);
          jQuery('#userInfoRealname .userInfoItemContent').html(pie.user.info.realname); 
        }
        if('height' in pie.user.info){
          ss.setValue('userInfoHeightInput',pie.user.info.height);
          jQuery('#userInfoHeight .userInfoItemContent').html(pie.user.info.height+'cm'); 
        }
        if('weight' in pie.user.info){
          ss.setValue('userInfoWeightInput',pie.user.info.weight);
          jQuery('#userInfoWeight .userInfoItemContent').html(pie.user.info.weight+'kg'); 
        }
        if('school' in pie.user.info){
          var schoolProvinceIndex = -1;
          for(var i = 0; i < schoolList.length; i++){
            for(var iKey in schoolList[i].school){
              if(schoolList[i].school[iKey].name == pie.user.info.school){
                schoolProvinceIndex = i;
                break;
              }
            }
            if(schoolProvinceIndex>=0){break;}
          }
          if(schoolProvinceIndex >= 0){
            ss.setValue('schoolProvinceInput',schoolProvinceIndex);
            ss.setValue('userInfoSchoolInput',pie.user.info.school);
            jQuery('#userInfoSchool .userInfoItemContent').html(pie.user.info.school); 
          }
        }
        if('degree' in pie.user.info){
          ss.setValue('userInfoDegreeInput',pie.user.info.degree);
          jQuery('#userInfoDegree .userInfoItemContent').html(pie.user.info.degree); 
        }
        if('presentation' in pie.user.info){
          jQuery('#userInfoPresentationInput').val(pie.user.info.presentation);
          jQuery('#userInfoPresentation .userInfoItemContent').html(pie.user.info.presentation); 
        }
        if(('occupation' in pie.user.info)&&('domain' in pie.user.info)){
          var occupationIndex = 0;
          for(var i = 0; i < pie.occupationList.length; i++){
            if(pie.occupationList[i] == pie.user.info.occupation){
              occupationIndex = i;
              break;
            }
          }
          ss.setValue('userInfoOccupationInput',occupationIndex);
          var domainIndex = 0;
          for(var i = 0; i < pie.domainList[occupationIndex].length; i++){
            if(pie.domainList[occupationIndex][i] == pie.user.info.domain){
              domainIndex = i;
              break;
            }
          }
          ss.setValue('userInfoDomainInput',domainIndex);
          jQuery('#userInfoOccupation .userInfoItemContent').html(pie.user.info.occupation+'--'+pie.user.info.domain);
        }
        if('location_ideal' in pie.user.expectations){
          var expectationLocation = pie.user.expectations.location_ideal.split(':');
          if(expectationLocation.length==3){
            ss.setValue('userExpectationIdealLocationProvinceInput',expectationLocation[1]);
            ss.setValue('userExpectationIdealLocationCityInput',expectationLocation[2]);
            jQuery('#userExpectationIdealLocation .userInfoItemContent').html(expectationLocation[1]+' '+expectationLocation[2]);
          }
        }
        if(('height_min' in pie.user.expectations)&&('height_max' in pie.user.expectations)){
          ss.setValue('userExpectationMinHeightInput',pie.user.expectations.height_min);
          ss.setValue('userExpectationMaxHeightInput',pie.user.expectations.height_max);
          jQuery('#userExpectationHeight .userInfoItemContent').html(pie.user.expectations.height_min+'cm到'+pie.user.expectations.height_max+'cm');
        }
        if(('degree_min' in pie.user.expectations)&&('degree_max' in pie.user.expectations)){
          var dmi = -1, dma = -1;
          for(var i = 0; i < pie.degreeList.length; i++){
            if(pie.degreeList[i] == pie.user.expectations.degree_min){
              dmi = i;
            }
            if(pie.degreeList[i] == pie.user.expectations.degree_max){
              dma = i;
            }
          }
          ss.setValue('userExpectationMinDegreeInput',dmi);
          ss.setValue('userExpectationMaxDegreeInput',dma);
          jQuery('#userExpectationDegree .userInfoItemContent').html(pie.user.expectations.degree_min+'到'+pie.user.expectations.degree_max);
        }
        if(('age_diff_min' in pie.user.expectations)&&('age_diff_max' in pie.user.expectations)){
          ss.setValue('userExpectationMinAgeInput',pie.user.expectations.age_diff_min);
          ss.setValue('userExpectationMaxAgeInput',pie.user.expectations.age_diff_max);
          var minAgeText;
          if(pie.user.expectations.age_diff_min<0){
            minAgeText = '小我'+(-1*pie.user.expectations.age_diff_min)+'岁';
          }
          if(pie.user.expectations.age_diff_min==0){
            minAgeText = '与我同岁';
          }
          if(pie.user.expectations.age_diff_min>0){
            minAgeText = '大我'+pie.user.expectations.age_diff_min+'岁';
          }
          var maxAgeText;
          if(pie.user.expectations.age_diff_max<0){
            maxAgeText = '小我'+(-1*pie.user.expectations.age_diff_max)+'岁';
          }
          if(pie.user.expectations.age_diff_max==0){
            maxAgeText = '与我同岁';
          }
          if(pie.user.expectations.age_diff_max>0){
            maxAgeText = '大我'+pie.user.expectations.age_diff_max+'岁';
          }
          jQuery('#userExpectationAge .userInfoItemContent').html(minAgeText+'到'+maxAgeText);
        }
        if('location_distance' in pie.user.expectations){
          ss.setValue('userExpectationLocationDistanceInput',pie.user.expectations.location_distance);
          jQuery('#userExpectationLocationDistance .userInfoItemContent').html(pie.user.expectations.location_distance);
        }
        this.photoInit(0,false);
      },
      resetInfoNav:function(id){
        this.curInfoArea = id;
        if(pie.user.info.sex == 1){
          jQuery('#userHomeNavBox span').css('background-color','rgb(12, 187, 194)');
          jQuery('#userHomeNavBox span').css('top','2px');
          jQuery('#userHomeNavBox span').css('box-shadow','0 2px rgb(9, 134, 139)');
          jQuery('#'+id).css('background-color','rgb(3, 101, 105)');
        }
        else{
          jQuery('#userHomeNavBox span').css('background-color','#fa619c');
          jQuery('#userHomeNavBox span').css('top','2px');
          jQuery('#userHomeNavBox span').css('box-shadow','0 2px #d03671');
          jQuery('#'+id).css('background-color','rgb(208, 54, 113)');
        }
        jQuery('#'+id).css('top','0x');
        jQuery('#'+id).css('box-shadow','none');
      },
      showPersonalInfo:function(){
        if(jQuery('#userPersonalInfoArea').css('display') == 'block'){return;}
        this.resetInfoNav('userPersonalInfoNav');
        jQuery('#userPersonalInfoArea').css('display','block');
        jQuery('#userMatchInfoArea').css('display','none');
        jQuery('#userQAInfoArea').css('display','none');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showMatchInfo:function(){
        if(jQuery('#userMatchInfoArea').css('display') == 'block'){return;}
        this.resetInfoNav('userMatchInfoNav');
        jQuery('#userPersonalInfoArea').css('display','none');
        jQuery('#userMatchInfoArea').css('display','block');
        jQuery('#userQAInfoArea').css('display','none');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showQAInfo:function(){
        if(jQuery('#userQAInfoArea').css('display') == 'block'){return;}
        pie.page.pieQAIndexPage.init(1);
        this.resetInfoNav('userQAInfoNav');
        jQuery('#userQAInfoArea').css('display','block');
        jQuery('#userPersonalInfoArea').css('display','none');
        jQuery('#userMatchInfoArea').css('display','none');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      uploadPhoto:function(files){
        var imageMode = /^[\s\S]+(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.BMP|.bmp|.PNG|.png)$/;
        if(!imageMode.test(files[0].name)){
          pie.remind('请上传png,jpg,peg,gif,bmp格式的图像');
          return;
        }
        jQuery('#access_token').val(pie.user.data.access_token);
        var form = document.getElementById('uploadPhotoForm');
        var action = pie.serverBase+'/api/rest/users/'+pie.user.data.puid+'/photos.json';
        var xhr = new XMLHttpRequest();
        pie.showLoading('正在上传头像');
        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pie.hideLoading();
              var reply = jQuery.parseJSON(xhr.responseText);
              if(reply.status == 'success'){
                pie.user.getInfo(0);
              }
              else{
                pie.remind('上传头像失败');
              }
            }
          }
        }
        xhr.open('POST',action);
        xhr.send(new FormData(form));
      },
      photoInit:function(startIndex,needLoad){
        if('avatar' in pie.user.info){
          var avatarChanged = (this.curAvatar != null&&pie.user.info.avatar.uri != this.curAvatar);
          this.curAvatar = pie.user.info.avatar.uri;
          var talkHeadSize=40*pie.dpi;
          if(pie.canvasExist&&(!pie.user.userTalkAvatar||avatarChanged)){
            var userTalkAvatar = document.createElement('img');
            userTalkAvatar.addEventListener('load',function(){
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');
              canvas.width = this.width;
              canvas.height = this.height;
              ctx.drawImage(this,0,0,this.width,this.height);
              pie.user.userTalkAvatar = canvas.toDataURL("image/png");
              canvas = null;
              pie.backup();
            })
            userTalkAvatar.src = pie.serverBase+'/asset/'+pie.user.info.avatar.uri+'/'+talkHeadSize+'/'+talkHeadSize+'/smart/inline';
          }

          var homeHeadSize=(Math.floor(pie.width*0.3)-6)*pie.dpi;
          var userHomeAvatar = document.getElementById('userHomeAvatar');
          if(!pie.user.userHomeAvatar||avatarChanged){
            if(pie.canvasExist){
              jQuery('#userHomeAvatar').unbind('load');
              jQuery('#userHomeAvatar').bind('load',function(){
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = this.width;
                canvas.height = this.height;
                ctx.drawImage(this,0,0,this.width,this.height);
                pie.user.userHomeAvatar = canvas.toDataURL("image/png");
                canvas = null;
                pie.backup();
              });
            }
            userHomeAvatar.src = pie.serverBase+'/asset/'+pie.user.info.avatar.uri+'/'+homeHeadSize+'/'+homeHeadSize+'/smart/inline';
          }
          else{
            userHomeAvatar.src = pie.user.userHomeAvatar;
          }

          var menuHeadSize=56*pie.dpi;
          var menuAvatar = document.getElementById('menuAvatar');
          if(!pie.user.menuAvatar||avatarChanged){
            if(pie.canvasExist){
              jQuery('#menuAvatar').unbind('load');
              jQuery('#menuAvatar').bind('load',function(){
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = this.width;
                canvas.height = this.height;
                ctx.drawImage(this,0,0,this.width,this.height);
                pie.user.menuAvatar = canvas.toDataURL("image/png");
                canvas = null;
                pie.backup();
              })
            }
            menuAvatar.src = pie.serverBase+'/asset/'+pie.user.info.avatar.uri+'/'+menuHeadSize+'/'+menuHeadSize+'/smart/inline';
          }
          else{
            menuAvatar.src = pie.user.menuAvatar;
          }
        }
        else{
          if(pie.user.info.sex == 1){
            jQuery('#userHomeAvatar').attr('src',pie.smallMaleHeadUrl);
            jQuery('#menuAvatar').attr('src',pie.smallMaleHeadUrl);
          }
          else{
            jQuery('#userHomeAvatar').attr('src',pie.smallFemaleHeadUrl);
            jQuery('#menuAvatar').attr('src',pie.smallFemaleHeadUrl);
          }
        }
        if(!('photos' in pie.user.info)){return;}
        var theSame = true;
        if(this.curPhotos&&this.curPhotos.length == pie.user.info.photos.length){
          for(var i = 0; i < this.curPhotos.length; i++){
            if(this.curPhotos[i] != pie.user.info.photos[i].uri){
              theSame = false;
              break;
            }
          }
        }
        else{
          theSame = false;
        }
        if(theSame){return;}
        this.curPhotos = [];
        for(var i = 0; i < pie.user.info.photos.length; i++){
          this.curPhotos[i] = pie.user.info.photos[i].uri;
        }
        var smallPhotoHtml = '';
        var bigPhotoHtml = '';
        var imgFooterHtml = '';
        var len = pie.user.info.photos.length;
        if(len<=0){
          jQuery('#userHomePhotoArea').html('');
          jQuery('#userShowImgPage .swipe-wrap').html('');
          return;
        }
        if(startIndex>=len){
          startIndex--;
        }
        if(startIndex<0){
          startIndex++;
        }
        var smallPhotoNum = Math.min(len,Math.floor(pie.width*0.9/67)-1);
        var min = Math.max(0,len-smallPhotoNum);
        for(var i = len-1; i >= min; i--){
          smallPhotoHtml += '<div class="userHomePhoto"><img id="'+i+'userSmallPhoto"/></div>';
        }
        jQuery('#userHomePhotoArea').html(smallPhotoHtml);
        Quo('.userHomePhoto').unbind('tap');
        Quo('.userHomePhoto').bind('tap',function(event){
          var len = pie.user.info.photos.length;
          var i = len-1-jQuery(this).index();
          pie.user.showImg(i);
        });
        for(var i = len-1; i >= min; i--){
          var curImg = document.getElementById(i+'userSmallPhoto');
          curImg.src = pie.serverBase+'/asset/'+pie.user.info.photos[i].uri+'/'+48*pie.dpi+'/'+48*pie.dpi+'/smart/inline';
        }
        for(var i = len-1; i >= 0; i--){
          bigPhotoHtml += '<div class="swipeItem"><img id="'+i+'userBigPhoto" class="userBigPhoto"/></div>';
          imgFooterHtml += '<i class="icon-circle swipeNav" id="'+(len-1-i)+'userImgNav"></i>';
        }
        jQuery('#userShowImgPage .swipe-wrap').html(bigPhotoHtml);
        jQuery('#userShowImgPage .swipeFooter').html(imgFooterHtml);
        Quo('#userShowImgPage .swipeNav').unbind('tap');
        Quo('#userShowImgPage .swipeNav').bind('tap',function(){
          var e = event||window.event;
          e.stopPropagation();
          var id = parseInt(this.id);
          window.userSwipe.slide(id,500);
        });
        pie.user.curImgIndex = len-startIndex-1;
        if(needLoad){
          var curImg = document.getElementById(pie.user.curImgIndex+'userBigPhoto');
          pie.showLoading('正在加载');
          curImg.addEventListener('load',function(){
            this.width /= pie.dpi;
            this.style.left = (pie.width-this.width)/2+'px';
            this.style.top = (pie.height-this.height)/2+'px';
            pie.hideLoading();
          });
          curImg.src = pie.serverBase+'/asset/'+pie.user.info.photos[pie.user.curImgIndex].uri+'/'+pie.width*pie.dpi+'/'+pie.height*pie.dpi+'/inner/inline';
        }
        var elem = document.getElementById('userImgSwipe');
        jQuery('#'+startIndex+'userImgNav').css('color','#555');
        window.userSwipe = null;
        window.userSwipe = Swipe(elem, {
          startSlide:startIndex,
          continuous:false,
          disableScroll:true,
          stopPropagation:false,
          callback: function(index, element){
            index %= pie.user.info.photos.length;
            pie.user.curImgIndex = pie.user.info.photos.length-index-1;
            var curImg = document.getElementById(pie.user.curImgIndex+'userBigPhoto');
            if(!curImg.src){
              pie.showLoading('正在加载');
              curImg.addEventListener('load',function(){
                this.width /= pie.dpi;
                this.style.left = (pie.width-this.width)/2+'px';
                this.style.top = (pie.height-this.height)/2+'px';
                pie.hideLoading();
              });
              curImg.src = pie.serverBase+'/asset/'+pie.user.info.photos[pie.user.curImgIndex].uri+'/'+pie.width*pie.dpi+'/'+pie.height*pie.dpi+'/inner/inline';
            }
            jQuery('#userShowImgPage .swipeNav').css('color','#eee');
            jQuery('#'+index+'userImgNav').css('color','#555');
          },
          transitionEnd: function(index, element){}
        });
      }
    },
    userShowImgPage:{
      id:'userShowImgPage',
      backPageId:'userHomePage',
      init:function(){}
    },
    pieMatchIndexPage:{
      id:'pieMatchIndexPage',
      needScroll:true,
      needRefresh:true,
      scrollArea:null,
      title:'PieMoment',
      inited:false,
      init:function(sync){
        if(this.inited){return;}
        this.inited=true;
        var cur = new Date();
        var hour = cur.getHours();
        if(hour>=pie.refreshTime){pie.autoRefresh=true;}
        pie.user.initMatch(sync);
      },
      refresh:function(){
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
            jQuery('#matchStatusText').html('您的账号由于太久没有登录已经不能参与配对,请点击此处激活');
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
    },
    mateHomePage:{
      id:'mateHomePage',
      backPageId:'pieMatchIndexPage',
      curAnswerIndex:null,
      needScroll:true,
      scrollArea:null,
      title:'它的主页',
      curAvatar:null,
      curPhotos:null,
      curInfoArea:null,
      bigPhotoInited:false,
      init:function(){},
      refresh:function(){
        this.photoInit();
        if(!this.curInfoArea){
          this.showPersonalInfo();
        }
        var profileOk = 0;
        if('nickname' in pie.mate.info){
          this.title = pie.mate.info.nickname;
          pie.page.mateTalkPage.title = this.title;
          if(pie.curPageId == this.id){
            jQuery('#pageTitle').html(this.title);
          }
          jQuery('#matchMateName').html(pie.mate.info.nickname);
          jQuery('#mateInfoNickname .mateInfoItemContent').html(pie.mate.info.nickname);
        }
        if('sex' in pie.mate.info){
          if(pie.mate.info.sex == 1){
            jQuery('#mateInfoSex .mateInfoItemContent').html('男');
            jQuery('#mateExpecationBlock .infoBlockTitle').html('他的期望');
            jQuery('#mateQABlock .infoBlockTitle').html('他的回答');
            jQuery('#mateHomeGround').css('background-color','rgb(8, 143, 148)');
            jQuery('#mateHomeNavBox span').removeClass('femaleInfoNav');
            jQuery('#mateHomeNavBox span').addClass('maleInfoNav');
          }
          else{
            jQuery('#mateInfoSex .mateInfoItemContent').html('女');
            jQuery('#mateExpecationBlock .infoBlockTitle').html('她的期望');
            jQuery('#mateQABlock .infoBlockTitle').html('她的回答');
            jQuery('#mateHomeGround').css('background-color','#ea4c89');
            jQuery('#mateHomeNavBox span').removeClass('maleInfoNav');
            jQuery('#mateHomeNavBox span').addClass('femaleInfoNav');
          }
        }
        if('current_location' in pie.mate.info){
          var location = pie.mate.info.current_location.split(':');
          if(location.length == 3){
            jQuery('#mateInfoCurrentLocation .mateInfoItemContent').html(location[1]+' '+location[2]);
          }
          else{
            jQuery('#mateInfoCurrentLocation .mateInfoItemContent').html(location[1]);
          }
        }
        if('birthday' in pie.mate.info){
          profileOk++;
          jQuery('#mateInfoBirthday .mateInfoItemContent').html(pie.mate.info.birthday);
        }
        if('height' in pie.mate.info){
          jQuery('#mateInfoHeight .mateInfoItemContent').html(pie.mate.info.height+'cm');
        }
        if('weight' in pie.mate.info){
          jQuery('#mateInfoWeight .mateInfoItemContent').html(pie.mate.info.weight+'kg');
        }
        if('school' in pie.mate.info){
          profileOk++;
          jQuery('#mateInfoSchool .mateInfoItemContent').html(pie.mate.info.school);
        }
        if('degree' in pie.mate.info){
          jQuery('#mateInfoDegree .mateInfoItemContent').html(pie.mate.info.degree);
        }
        if('presentation' in pie.mate.info){
          jQuery('#mateInfoPresentation .mateInfoItemContent').html(pie.mate.info.presentation);
        }
        if('birth_place' in pie.mate.info){
          var location = pie.mate.info.birth_place.split(':');
          if(location.length == 3){
            jQuery('#mateInfoBirthPlace .mateInfoItemContent').html(location[1]+' '+location[2]);  
          }
          else{
            jQuery('#mateInfoBirthPlace .mateInfoItemContent').html(location[1]);  
          }
        }
        if(('occupation' in pie.mate.info)&&('domain' in pie.mate.info)){
          jQuery('#mateInfoOccupation .mateInfoItemContent').html(pie.mate.info.occupation+'--'+pie.mate.info.domain);
        }
        if(('height_min' in pie.mate.expectations)&&('height_max' in pie.mate.expectations)){
          jQuery('#mateExpectationMinHeight .mateExpectationItemContent').html(pie.mate.expectations.height_min+'cm到'+pie.mate.expectations.height_max+'cm');
        }
        if(('degree_min' in pie.mate.expectations)&&('degree_max' in pie.mate.expectations)){
          jQuery('#mateExpectationMinDegree .mateExpectationItemContent').html(pie.mate.expectations.degree_min+'到'+pie.mate.expectations.degree_max);
        }
        if(('age_diff_min' in pie.mate.expectations)&&('age_diff_max' in pie.mate.expectations)){
          var minAgeText;
          if(pie.mate.expectations.age_diff_min<0){
            minAgeText = '小我'+(-1*pie.mate.expectations.age_diff_min)+'岁';
          }
          if(pie.mate.expectations.age_diff_min==0){
            minAgeText = '与我同岁';
          }
          if(pie.mate.expectations.age_diff_min>0){
            minAgeText = '大我'+pie.mate.expectations.age_diff_min+'岁';
          }
          var maxAgeText;
          if(pie.mate.expectations.age_diff_max<0){
            maxAgeText = '小我'+(-1*pie.mate.expectations.age_diff_max)+'岁';
          }
          if(pie.mate.expectations.age_diff_max==0){
            maxAgeText = '与我同岁';
          }
          if(pie.mate.expectations.age_diff_max>0){
            maxAgeText = '大我'+pie.mate.expectations.age_diff_max+'岁';
          }
          jQuery('#mateExpectationMinAge .mateExpectationItemContent').html(minAgeText+'到'+maxAgeText);
        }
        if('location_ideal' in pie.mate.expectations){
          var expectationLocation = pie.mate.expectations.location_ideal.split(':');
          if(expectationLocation.length==3){
            jQuery('#mateExpectationIdealLocation .mateExpectationItemContent').html(expectationLocation[1]+' '+expectationLocation[2]);  
          }
        }
        if('location_distance' in pie.mate.expectations){
          jQuery('#mateExpectationDistance .mateExpectationItemContent').html(pie.mate.expectations.location_distance);
        }
        if(profileOk == 2){
          var birthdayArray = pie.mate.info.birthday.split('-');
          var xingzuo = pie.countConstellation(birthdayArray);
          if(birthdayArray[0]<=1960||birthdayArray[0]>=2000){return;}
          jQuery('#matchMateProfile').html(birthdayArray[0]+' / '+xingzuo+' / '+pie.mate.info.school);
        }
      },
      resetInfoNav:function(id){
        this.curInfoArea = id;
        if(pie.mate.info.sex == 1){
          jQuery('#mateHomeNavBox span').css('background-color','rgb(12, 187, 194)');
          jQuery('#mateHomeNavBox span').css('top','2px');
          jQuery('#mateHomeNavBox span').css('box-shadow','0 2px rgb(9, 134, 139)');
          jQuery('#'+id).css('background-color','rgb(3, 101, 105)');
        }
        else{
          jQuery('#mateHomeNavBox span').css('background-color','#fa619c');
          jQuery('#mateHomeNavBox span').css('top','2px');
          jQuery('#mateHomeNavBox span').css('box-shadow','0 2px #d03671');
          jQuery('#'+id).css('background-color','rgb(208, 54, 113)');
        }
        jQuery('#'+id).css('top','0x');
        jQuery('#'+id).css('box-shadow','none');
      },
      showPersonalInfo:function(){
        if(jQuery('#matePersonalInfoArea').css('display') == 'block'){return;}
        this.resetInfoNav('matePersonalInfoNav');
        jQuery('#matePersonalInfoArea').css('display','block');
        jQuery('#mateMatchInfoArea').css('display','none');
        jQuery('#mateQAInfoArea').css('display','none');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showMatchInfo:function(){
        if(jQuery('#mateMatchInfoArea').css('display') == 'block'){return;}
        this.resetInfoNav('mateMatchInfoNav');
        jQuery('#matePersonalInfoArea').css('display','none');
        jQuery('#mateMatchInfoArea').css('display','block');
        jQuery('#mateQAInfoArea').css('display','none');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showQAInfo:function(){
        if(jQuery('#mateQAInfoArea').css('display') == 'block'){return;}
        this.resetInfoNav('mateQAInfoNav');
        jQuery('#mateQAInfoArea').css('display','block');
        jQuery('#matePersonalInfoArea').css('display','none');
        jQuery('#mateMatchInfoArea').css('display','none');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      photoInit:function(){
        if(!pie.mate.exist){
          jQuery('#mateHomeAvatar').attr('src',pie.npc.smallHeadUrl);
          this.curAvatar = pie.npc.smallHeadUrl;
        }
        else if('avatar' in pie.mate.info){
          var avatarChanged = false;
          if(pie.mate.changed){
            avatarChanged = true;
          }
          else{
            avatarChanged = (this.curAvatar != null&&this.curAvatar != pie.mate.info.avatar.uri);
          }
          pie.mate.changed = false;
          this.curAvatar = pie.mate.info.avatar.uri;
          if(!this.bigPhotoInited||avatarChanged){
            var matchMateAvatar = document.getElementById('matchMateAvatar');
            jQuery('#matchMateAvatar').load(function(){
              this.width /= pie.dpi;
              this.style.left = ''+(-1)*Math.floor((this.width-pie.width)/2)+'px';
            });
            matchMateAvatar.src = pie.serverBase+'/asset/'+pie.mate.info.avatar.uri+'/'+pie.width*pie.dpi+'/'+(pie.height-pie.headerHeight)*pie.dpi+'/smart/inline';
          }
          this.bigPhotoInited = true;

          var talkHeadSize = 40*pie.dpi;
          if(pie.canvasExist&&(!pie.user.mateTalkAvatar||avatarChanged)){
            var mateTalkAvatar = document.createElement('img');
            mateTalkAvatar.addEventListener('load',function(){
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');
              canvas.width = this.width;
              canvas.height = this.height;
              ctx.drawImage(this,0,0,this.width,this.height);
              pie.user.mateTalkAvatar = canvas.toDataURL("image/png");
              canvas = null;
              pie.backup();
            })
            mateTalkAvatar.src = pie.serverBase+'/asset/'+pie.mate.info.avatar.uri+'/'+talkHeadSize+'/'+talkHeadSize+'/smart/inline';
          }

          var homeHeadSize=(Math.floor(pie.width*0.3)-6)*pie.dpi;
          var mateHomeAvatar = document.getElementById('mateHomeAvatar');
          if(!pie.user.mateHomeAvatar||avatarChanged){
            if(pie.canvasExist){
              jQuery('#mateHomeAvatar').unbind('load');
              jQuery('#mateHomeAvatar').bind('load',function(){
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = this.width;
                canvas.height = this.height;
                ctx.drawImage(this,0,0,this.width,this.height);
                pie.user.mateHomeAvatar = canvas.toDataURL("image/png");
                canvas = null;
                pie.backup();
              });
            }
            mateHomeAvatar.src = pie.serverBase+'/asset/'+pie.mate.info.avatar.uri+'/'+homeHeadSize+'/'+homeHeadSize+'/smart/inline';
          }
          else{
            mateHomeAvatar.src = pie.user.mateHomeAvatar;
          }
        }
        if(!('photos' in pie.mate.info)){return;}
        var theSame = true;
        if(this.curPhotos&&this.curPhotos.length == pie.mate.info.photos.length){
          for(var i = 0; i < this.curPhotos.length; i++){
            if(this.curPhotos[i] != pie.mate.info.photos[i].uri){
              theSame = false;
              break;
            }
          }
        }
        else{
          theSame = false;
        }
        if(theSame){return;}
        this.curPhotos = [];
        for(var i = 0; i < pie.mate.info.photos.length; i++){
          this.curPhotos[i] = pie.mate.info.photos[i].uri;
        }
        var smallPhotoHtml = '';
        var bigPhotoHtml = '';
        var imgFooterHtml = '';
        var len = pie.mate.info.photos.length;
        var smallPhotoNum = Math.min(len,Math.floor(pie.width*0.9/52));
        var min = Math.max(0,len-smallPhotoNum);
        for(var i = len-1; i >= min; i--){
          smallPhotoHtml += '<div class="mateHomePhoto"><img id="'+i+'mateSmallPhoto"/></div>'
        }
        jQuery('#matePhotoBlock').html(smallPhotoHtml);
        Quo('.mateHomePhoto').unbind('tap');
        Quo('.mateHomePhoto').bind('tap',function(){
          var len = pie.mate.info.photos.length;
          var i = len-1-jQuery(this).index();
          pie.mate.showImg(i);
        });
        for(var i = len-1; i >= min; i--){
          var curImg = document.getElementById(i+'mateSmallPhoto');
          if(pie.mate.exist){
            curImg.src = pie.serverBase+'/asset/'+pie.mate.info.photos[i].uri+'/'+48*pie.dpi+'/'+48*pie.dpi+'/smart/inline';
          }
          else{
            curImg.src = pie.mate.info.photos[i].uri;
          }
        }
        for(var i = len-1; i >= 0; i--){
          bigPhotoHtml += '<div class="swipeItem"><img id="'+i+'mateBigPhoto" class="mateBigPhoto"/></div>';
          imgFooterHtml += '<i class="icon-circle swipeNav" id="'+(len-1-i)+'mateImgNav"></i>';
        }
        jQuery('#mateShowImgPage .swipe-wrap').html(bigPhotoHtml);
        jQuery('#mateShowImgPage .swipeFooter').html(imgFooterHtml);
        Quo('#mateShowImgPage .swipeNav').unbind('tap');
        Quo('#mateShowImgPage .swipeNav').bind('tap',function(){
          var e = event||window.event;
          e.stopPropagation();
          var id = parseInt(this.id);
          window.mateSwipe.slide(id,500)
        });
        jQuery('#0mateImgNav').css('color','#555');
        var elem = document.getElementById('mateImgSwipe');
        window.mateSwipe = Swipe(elem, {
          startSlide:0,
          continuous:false,
          disableScroll:true,
          stopPropagation:false,
          callback: function(index, element){
            index %= pie.mate.info.photos.length;
            pie.mate.curImgIndex = pie.mate.info.photos.length-index-1;
            var curImg = document.getElementById(pie.mate.curImgIndex+'mateBigPhoto');
            if(!curImg.src){
              pie.showLoading('正在加载');
              curImg.addEventListener('load',function(){
                this.width /= pie.dpi;
                this.style.left = (pie.width-this.width)/2+'px';
                this.style.top = (pie.height-this.height)/2+'px';
                pie.hideLoading();
              });
              if(pie.mate.exist){
                curImg.src = pie.serverBase+'/asset/'+pie.mate.info.photos[pie.mate.curImgIndex].uri+'/'+pie.width*pie.dpi+'/'+pie.height*pie.dpi+'/inner/inline';
              }
              else{
                curImg.src = pie.mate.info.photos[pie.mate.curImgIndex].uri;
              }
              
            }
            jQuery('#mateShowImgPage .swipeNav').css('color','#eee');
            jQuery('#'+index+'mateImgNav').css('color','#555');
          },
          transitionEnd: function(index, element){}
        });
      },
      initAnswer:function(){
        if(pie.mate.answers.length<=0){return;}
        jQuery('#mateNoQA').css('display','none');
        jQuery('#mateQABlock').css('display','block');
        this.curAnswerIndex = pie.user.mateAnswerIndex;
        this.showAnswer();
      },
      showAnswer:function(){
        if(this.curAnswerIndex <= 0){
          jQuery('#lastAnswerNav').css('display','none');
        }
        else{
          jQuery('#lastAnswerNav').css('display','block');
        }
        if(this.curAnswerIndex >= pie.mate.answers.length-1){
          jQuery('#nextAnswerNav').css('display','none');
        }
        else{
          jQuery('#nextAnswerNav').css('display','block');
        }
        var n = this.curAnswerIndex;
        pie.user.mateAnswerIndex = n;
        pie.backup();
        var choices = pie.mate.answers[n].question.possible_answers;
        var choiceHtml = "";
        for(var i = 0; i < choices.length; i++){
          if(choices[i] == pie.mate.answers[n].answer){
            choiceHtml += "<div class='answerChoice selectedChoice'>"+choices[i]+"</div>";
          }
          else{
            choiceHtml += "<div class='answerChoice'>"+choices[i]+"</div>";
          }
        }
        jQuery('#answerTitle').html(pie.mate.answers[n].question.title);
        jQuery('#answerChoices').html(choiceHtml);
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showNextAnswer:function(){
        this.curAnswerIndex++;
        this.showAnswer();
      },
      showLastAnswer:function(){
        this.curAnswerIndex--;
        this.showAnswer();
      }
    },
    mateShowImgPage:{
      id:'mateShowImgPage',
      backPageId:'mateHomePage',
      init:function(){}
    },
    mateTalkPage:{
      id:'mateTalkPage',
      backPageId:'pieMatchIndexPage',
      scrollArea:null,
      title:'小Pie',
      curBlockNum:null,
      init:function(){
        pie.talkScrollArea.refresh();
        var height = jQuery('#mateTalkPage .scrollArea').height();
        pie.talkScrollArea.scrollTo(0,height,0,true);
        Quo('.userTalkContent').unbind('hold');
        Quo('.userTalkContent').bind('hold',function(){
          var id = jQuery(this).data('id');
          if(id >= 0){
            pie.tcp.showMessageControl(id);
          }
        });
      },
      showRecord:function(){
        if(pie.user.talkRecord.length < 1){return;}
        if(pie.user.talkRecord[0].from != pie.mate.info.puid&&pie.user.talkRecord[0].to != pie.mate.info.puid){
          pie.user.talkRecord = [];
          jQuery('#mateTalkPage .scrollArea').html('');
          pie.backup();
          return;
        }
        var talkBlockNum = Math.ceil(pie.user.talkRecord.length/20);
        var talkBlockHtml = '';
        for(var i = 0; i < talkBlockNum; i++){
          talkBlockHtml += '<div class="talkRecordBlock" id="'+i+'talkRecordBlock"></div>';
        }
        jQuery('#mateTalkPage .scrollArea').html(talkBlockHtml);
        this.showTalkBlock(talkBlockNum-1);
      },
      showTalkBlock:function(num){
        this.curBlockNum = num;
        if(num>0){
          jQuery('#'+(num-1)+'talkRecordBlock').html('下拉加载更多');
        }
        var start = 20*num;
        var talkRecord = pie.user.talkRecord;
        var end = Math.min(talkRecord.length,20*(num+1));
        var contentHtml = '';
        var userHeadUrl = null;
        if(!pie.user.infoFinished){
          if(pie.user.info.sex == 1){
            userHeadUrl = pie.smallMaleHeadUrl;
          }
          else{
            userHeadUrl = pie.smallFemaleHeadUrl;
          }
        }
        else{
          if(pie.user.userTalkAvatar){
            userHeadUrl = pie.user.userTalkAvatar;
          }
          else{
            userHeadUrl = pie.serverBase+'/asset/'+pie.user.info.avatar.uri+'/40/40/smart/inline';
          }
        }
        var mateHeadUrl = null;
        if(!pie.mate.exist){
          mateHeadUrl = pie.npc.smallHeadUrl;
        }
        else{
          if(pie.user.mateTalkAvatar){
            mateHeadUrl = pie.user.mateTalkAvatar;
          }
          else{
            mateHeadUrl = pie.serverBase+'/asset/'+pie.mate.info.avatar.uri+'/40/40/smart/inline';
            pie.user.mateTalkAvatar = mateHeadUrl;
          }
        }
        for(var i = start; i < end; i++){
          switch(talkRecord[i].status){
            case pie.messageStatus.inMessage:
            var messageTime = pie.tcp.judgeTime(talkRecord[i].time);
            contentHtml += '<div class="mateTalkBlock" id="'+i+'mateTalkBlock"><table><tbody><tr><td valign="top" width="15%"><div class="mateTalkHead" style="background-image:url('+mateHeadUrl+')"></div></td><td valign="top"><div class="mateTalkContent">'+talkRecord[i].content+'</div><span class="messageTime">'+messageTime+'</span></td></tr></tbody></table></div>';
            break;
            case pie.messageStatus.onSend:
            talkRecord[i].status = pie.messageStatus.sendFailed;
            contentHtml += '<div class="userTalkBlock" id="'+i+'userTalkBlock"><table><tbody><tr><td valign="bottom" text-align="right" width="85%"><span class="messageStatus">发送失败</span><div class="userTalkContent">'+talkRecord[i].content+'</div></td><td valign="top"><div class="userTalkHead" style="background-image:url('+userHeadUrl+')"></div></td></tr></tabody></table></div>';
            break;
            case pie.messageStatus.sendSuccess:
            contentHtml += '<div class="userTalkBlock" id="'+i+'userTalkBlock"><table><tbody><tr><td valign="bottom" text-align="right" width="85%"><span class="messageStatus"></span><div class="userTalkContent">'+talkRecord[i].content+'</div></td><td valign="top"><div class="userTalkHead" style="background-image:url('+userHeadUrl+')"></div></td></tr></tabody></table></div>';
            break;
            case pie.messageStatus.sendFailed:
            contentHtml += '<div class="userTalkBlock" id="'+i+'userTalkBlock"><table><tbody><tr><td valign="bottom" text-align="right" width="85%"><span class="messageStatus">发送失败</span><div class="userTalkContent">'+talkRecord[i].content+'</div></td><td valign="top"><div class="userTalkHead" style="background-image:url('+userHeadUrl+')"></div></td></tr></tabody></table></div>';
            break;
            case pie.messageStatus.received:
            contentHtml += '<div class="userTalkBlock" id="'+i+'userTalkBlock"><table><tbody><tr><td valign="bottom" text-align="right" width="85%"><span class="messageStatus">送达</span><div class="userTalkContent">'+talkRecord[i].content+'</div></td><td valign="top"><div class="userTalkHead" style="background-image:url('+userHeadUrl+')"></div></td></tr></tabody></table></div>';
            break;
            case pie.messageStatus.read:
            contentHtml += '<div class="userTalkBlock" id="'+i+'userTalkBlock"><table><tbody><tr><td valign="bottom" text-align="right" width="85%"><span class="messageStatus">已读</span><div class="userTalkContent">'+talkRecord[i].content+'</div></td><td valign="top"><div class="userTalkHead" style="background-image:url('+userHeadUrl+')"></div></td></tr></tabody></table></div>';
            break;
          }
        }
        pie.backup();
        jQuery('#'+num+'talkRecordBlock').html(contentHtml);
        for(var i = start; i < end; i++){
          if(talkRecord[i].status == pie.messageStatus.sendFailed){
            jQuery('#'+i+'userTalkBlock'+' .userTalkContent').data('id',i);
          }
        }
        pie.talkScrollArea.refresh();
      }
    },
    pieTestIndexPage:{
      id:'pieTestIndexPage',
      needScroll:true,
      scrollArea:null,
      title:'心理测试',
      init:function(){}
    },
    userSeeLoveTestPage:{
      id:'userSeeLoveTestPage',
      moduleCode:'see_love',
      seeLoveTest:null,
      title:'爱情态度',
      curQuestionIndex:null,
      backPageId:'pieTestIndexPage',
      needScroll:true,
      scrollArea:null,
      atSubmit:false,
      inited:false,
      init:function(sync){
        if(this.inited){return;}
        this.inited=true;
        pie.user.getSeeLoveTest(sync);
      },
      refresh:function(data){
        this.seeLoveTest = data;
        this.curQuestionIndex = 0;
        this.showQuestion();
      },
      submit:function(n){
        if(this.atSubmit){return;}
        this.atSubmit = true;
        var testData = {
          'token':pie.user.data.access_token,
          'answer':this.seeLoveTest[this.curQuestionIndex].possible_answers[n]
        }
        jQuery('#'+this.id+' .testTitle').html('正在提交答案……');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_test/questions/'
          +this.seeLoveTest[this.curQuestionIndex].code+'/my/answer.json',
          type:'post',
          dataType:'json',
          data:testData,
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('提交答案出错,错误码:'+reply.code+'请报告管理员');
              }
              return;
            }
            pie.page.userSeeLoveTestPage.atSubmit = false;
            pie.page.userSeeLoveTestPage.showNextQuestion();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交答案失败:'+err+',这应该是网络问题造成的');
          }
        })
      },
      showQuestion:function(){
        var x = this.curQuestionIndex;
        jQuery('#'+this.id+' .testTitle').html((x+1)+'/'+this.seeLoveTest.length)
        jQuery('#'+this.id+' .testQuestion').html(this.seeLoveTest[x].question);
        var choices = this.seeLoveTest[x].possible_answers;
        var choiceHtml = '';
        for(var i = 0; i < choices.length; i++){
          choiceHtml += "<li><a>"+choices[i]+"</a></li>";
        }
        jQuery('#'+this.id+' .userTestChoices').html(choiceHtml);
        pie.ratingAnimate('seeLove');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showNextQuestion:function(){
        if(this.curQuestionIndex >= this.seeLoveTest.length-1){this.showReport();return;}
        this.curQuestionIndex++;
        this.showQuestion();
      },
      showReport:function(){
        var testData = {
          'token':pie.user.data.access_token
        }
        jQuery('#'+this.id+' .testChoices').css('display','none');
        jQuery('#'+this.id+' .testQuestion').css('display','none');
        jQuery('#'+this.id+' .testReport').css('display','block');
        if(pie.user.seeLoveReport){
          jQuery('#'+this.id+' .testTitle').html('测试报告');
          jQuery('#'+this.id+' .testReport').html(pie.user.seeLoveReport);
          if(this.scrollArea){
            this.scrollArea.refresh();
          }
          return;
        }
        jQuery('#'+this.id+' .testTitle').html('正在获取测试报告');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_test/modules/'+this.moduleCode+'/analysis/report.json',
          type:'get',
          data:testData,
          dataType:'json',
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('获取报告失败,错误码:'+reply.code+'请报告管理员');
              }
              return;
            }
            pie.user.seeLoveReport = reply.data.report;
            pie.backup();
            jQuery('#userSeeLoveTestPage .testTitle').html('测试报告');
            jQuery('#userSeeLoveTestPage .testReport').html(reply.data.report);
            pie.page.userSeeLoveTestPage.scrollArea.refresh();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('获取报告失败:'+err+',这应该是网络问题造成的');
          }
        })
      }
    },
    userSeeLifeTestPage:{
      id:'userSeeLifeTestPage',
      backPageId:'pieTestIndexPage',
      seeLifeTest:null,
      title:'人生态度',
      curQuestionIndex:null,
      moduleCode:'see_life',
      needScroll:true,
      scrollArea:null,
      inited:false,
      atSubmit:false,
      init:function(sync){
        if(this.inited){return;}
        this.inited=true;
        pie.user.getSeeLifeTest(sync);
      },
      refresh:function(data){
        this.seeLifeTest = data;
        this.curQuestionIndex = 0;
        this.showQuestion();
      },
      submit:function(n){
        if(this.atSubmit){return;}
        this.atSubmit = true;
        var testData = {
          'token':pie.user.data.access_token,
          'answer':this.seeLifeTest[this.curQuestionIndex].possible_answers[n]
        }
        jQuery('#'+this.id+' .testTitle').html('正在提交答案……');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_test/questions/'
          +this.seeLifeTest[this.curQuestionIndex].code+'/my/answer.json',
          type:'post',
          dataType:'json',
          data:testData,
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('提交答案失败,错误码:'+reply.code+'请报告管理员');
              }
              return;
            }
            pie.page.userSeeLifeTestPage.atSubmit = false;
            pie.page.userSeeLifeTestPage.showNextQuestion();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交答案失败:'+err+',这应该是网络问题造成的');
          }
        })
      },
      showQuestion:function(){
        var x = this.curQuestionIndex;
        jQuery('#'+this.id+' .testTitle').html((x+1)+'/'+this.seeLifeTest.length);
        jQuery('#'+this.id+' .testQuestion').html(this.seeLifeTest[x].question);
        var choices = this.seeLifeTest[x].possible_answers;
        var choiceHtml = '';
        for(var i = 0; i < choices.length; i++){
          choiceHtml += "<li><a>"+choices[i]+"</a></li>";
        }
        jQuery('#'+this.id+' .userTestChoices').html(choiceHtml);
        pie.ratingAnimate('seeLife');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showNextQuestion:function(){
        if(this.curQuestionIndex >= this.seeLifeTest.length-1){this.showReport();return;}
        this.curQuestionIndex++;
        this.showQuestion();
      },
      showReport:function(){
        var testData = {
          'token':pie.user.data.access_token
        }
        jQuery('#'+this.id+' .testChoices').css('display','none');
        jQuery('#'+this.id+' .testQuestion').css('display','none');
        jQuery('#'+this.id+' .testReport').css('display','block');
        if(pie.user.seeLifeReport){
          jQuery('#'+this.id+' .testTitle').html('测试报告');
          jQuery('#'+this.id+' .testReport').html(pie.user.seeLifeReport);
          if(this.scrollArea){
            this.scrollArea.refresh();
          }
          return;
        }
        jQuery('#'+this.id+' .testTitle').html('正在获取测试报告');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_test/modules/'+this.moduleCode+'/analysis/report.json',
          type:'get',
          data:testData,
          dataType:'json',
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('获取报告失败,错误码:'+reply.code+'请报告管理员');
              }
              return;
            }
            pie.user.seeLifeReport = reply.data.report;
            pie.backup();
            jQuery('#userSeeLifeTestPage .testTitle').html('测试报告');
            jQuery('#userSeeLifeTestPage .testReport').html(reply.data.report);
            pie.page.userSeeLifeTestPage.scrollArea.refresh();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('获取报告失败:'+err+',这应该是网络问题造成的');
          }
        })
      }
    },
    userPersonalityTestPage:{
      id:'userPersonalityTestPage',
      backPageId:'pieTestIndexPage',
      personalityTest:null,
      title:'性格特质',
      curQuestionIndex:null,
      moduleCode:'personality',
      needScroll:true,
      scrollArea:null,
      inited:false,
      atSubmit:false,
      init:function(sync){
        if(this.inited){return;}
        this.inited=true;
        pie.user.getPersonalityTest(sync);
      },
      refresh:function(data){
        this.personalityTest = data;
        this.curQuestionIndex = 0;
        this.showQuestion();
      },
      submit:function(n){
        if(this.atSubmit){return;}
        this.atSubmit = true;
        var testData = {
          'token':pie.user.data.access_token,
          'answer':this.personalityTest[this.curQuestionIndex].possible_answers[n]
        }
        jQuery('#'+this.id+' .testTitle').html('正在提交答案……');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_test/questions/'
          +this.personalityTest[this.curQuestionIndex].code+'/my/answer.json',
          type:'post',
          dataType:'json',
          data:testData,
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('提交答案失败,错误码:'+reply.code+'请报告管理员');
              }
              return;
            }
            pie.page.userPersonalityTestPage.atSubmit = false;
            pie.page.userPersonalityTestPage.showNextQuestion();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交答案失败:'+err+',这应该是网络问题造成的');
          }
        })
      },
      showQuestion:function(){
        var x = this.curQuestionIndex;
        jQuery('#'+this.id+' .testTitle').html((x+1)+'/'+this.personalityTest.length);
        var choices = this.personalityTest[x].possible_answers;
        var choiceHtml = "";
        for(var i = 0; i < choices.length; i++){
          choiceHtml += "<div class='questionChoice'>"+choices[i]+"</div>";
        }
        jQuery('#'+this.id+' .testQuestion').html(this.personalityTest[x].question);
        jQuery('#'+this.id+' .testChoices').html(choiceHtml);
        Quo('#'+this.id+' .questionChoice').unbind('tap');
        Quo('#'+this.id+' .questionChoice').bind('tap',function(){
          var i = jQuery(this).index();
          pie.page.userPersonalityTestPage.submit(i);
        });
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showNextQuestion:function(){
        if(this.curQuestionIndex >= this.personalityTest.length-1){this.showReport();return;}
        this.curQuestionIndex++;
        this.showQuestion();
      },
      showReport:function(){
        var testData = {
          'token':pie.user.data.access_token
        }
        jQuery('#'+this.id+' .testChoices').css('display','none');
        jQuery('#'+this.id+' .testQuestion').css('display','none');
        jQuery('#'+this.id+' .testReport').css('display','block');
        if(pie.user.personalityReport){
          jQuery('#'+this.id+' .testTitle').html('测试报告');
          jQuery('#'+this.id+' .testReport').html(pie.user.personalityReport);
          if(this.scrollArea){
            this.scrollArea.refresh();
          }
          return;
        }
        jQuery('#'+this.id+' .testTitle').html('正在获取报告');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_test/modules/'+this.moduleCode+'/analysis/report.json',
          type:'get',
          data:testData,
          dataType:'json',
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('获取报告失败,错误码:'+reply.code+'请报告管理员');
              }
              return;
            }
            pie.user.personalityReport = reply.data.report;
            pie.backup();
            jQuery('#userPersonalityTestPage .testTitle').html('测试报告');
            jQuery('#userPersonalityTestPage .testReport').html(reply.data.report);
            pie.page.userPersonalityTestPage.scrollArea.refresh();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('获取报告失败:'+err+',这应该是网络问题造成的');
          }
        })
      }
    },
    userCommunicationTestPage:{
      id:'userCommunicationTestPage',
      communicationTest:null,
      backPageId:'pieTestIndexPage',
      title:'交往模式',
      curQuestionIndex:null,
      moduleCode:'communication',
      needScroll:true,
      scrollArea:null,
      inited:false,
      atSubmit:false,
      init:function(sync){
        if(this.inited){return;}
        this.inited=true;
        pie.user.getCommunicationTest(sync);
      },
      refresh:function(data){
        this.communicationTest = data
        this.curQuestionIndex = 0;
        this.showQuestion();
      },
      submit:function(n){
        if(this.atSubmit){return;}
        this.atSubmit = true;
        var testData = {
          'token':pie.user.data.access_token,
          'answer':this.communicationTest[this.curQuestionIndex].possible_answers[n]
        }
        jQuery('#'+this.id+' .testTitle').html('正在提交答案……');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_test/questions/'
          +this.communicationTest[this.curQuestionIndex].code+'/my/answer.json',
          type:'post',
          dataType:'json',
          data:testData,
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('提交答案失败,错误码:'+reply.code+'请报告管理员');
              }
              return;
            }
            pie.page.userCommunicationTestPage.atSubmit = false;
            pie.page.userCommunicationTestPage.showNextQuestion();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交答案失败:'+err+',这应该是网络问题造成的');
          }
        })
      },
      showQuestion:function(){
        var x = this.curQuestionIndex;
        jQuery('#'+this.id+' .testTitle').html((x+1)+'/'+this.communicationTest.length)
        jQuery('#'+this.id+' .testQuestion').html(this.communicationTest[x].question);
        var choices = this.communicationTest[x].possible_answers;
        var choiceHtml = '';
        for(var i = 0; i < choices.length; i++){
          if(choices[i] != ''){
            choiceHtml += "<li><a>"+choices[i]+"</a></li>";
          }
        }
        jQuery('#'+this.id+' .userTestChoices').html(choiceHtml);
        pie.ratingAnimate('communication');
        if(this.scrollArea){
          this.scrollArea.refresh();
        }
      },
      showNextQuestion:function(){
        if(this.curQuestionIndex >= this.communicationTest.length-1){this.showReport();return;}
        this.curQuestionIndex++;
        this.showQuestion();
      },
      showReport:function(){
        var testData = {
          'token':pie.user.data.access_token
        }
        jQuery('#'+this.id+' .testChoices').css('display','none');
        jQuery('#'+this.id+' .testQuestion').css('display','none');
        jQuery('#'+this.id+' .testReport').css('display','block');
        if(pie.user.communicationReport){
          jQuery('#'+this.id+' .testTitle').html('测试报告');
          jQuery('#'+this.id+' .testReport').html(pie.user.communicationReport);
          if(this.scrollArea){
            this.scrollArea.refresh();
          }
          return;
        }
        jQuery('#'+this.id+' .testTitle').html('正在获取测试报告');
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_test/modules/'+this.moduleCode+'/analysis/report.json',
          type:'get',
          data:testData,
          dataType:'json',
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              else{
                pie.remind('获取报告失败,错误码:'+reply.code+'请报告管理员');
              }
              return;
            }
            pie.user.communicationReport = reply.data.report;
            pie.backup();
            jQuery('#userCommunicationTestPage .testTitle').html('测试报告');
            jQuery('#userCommunicationTestPage .testReport').html(reply.data.report);
            pie.page.userCommunicationTestPage.scrollArea.refresh();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('获取报告失败:'+err+',这应该是网络问题造成的');
          }
        })
      }
    },
    pieQAIndexPage:{
      questions:null,
      curQuestionIndex:null,
      inited:false,
      titleEle:null,
      atSubmit:false,
      init:function(sync){
        if(this.inited){return;}
        if(!this.titleEle){
          this.titleEle = document.getElementById('questionContent').querySelector('.infoBlockTitle');
        }
        this.inited=true;
        pie.user.getQuestions(sync);
      },
      refresh:function(data){
        this.questions = data;
        this.curQuestionIndex = 0;
        this.showQuestion();
      },
      submit:function(i){
        if(this.atSubmit){return;}
        this.atSubmit = true;
        var qData = {
          'token':pie.user.data.access_token,
          'answer':this.questions[this.curQuestionIndex].possible_answers[i]
        }
        this.titleEle.innerText = '正在提交...';
        jQuery.ajax({
          url:pie.serverBase+'/api/rest/apps/pie_match/qa/public/questions/'
          +this.questions[this.curQuestionIndex].code+'/my/answers.json',
          type:'post',
          dataType:'json',
          data:qData,
          success:function(reply){
            if(reply.status != 'success'){
              if(reply.code == '2002'){
                pie.confirm('账号已过期,请重新登录',function(){
                  pie.user.logout(0);
                },false)
              }
              return;
            }
            pie.page.pieQAIndexPage.atSubmit = false;
            pie.page.pieQAIndexPage.titleEle.innerText = '互动问答';
            pie.page.pieQAIndexPage.showNextQuestion();
          },
          error:function(err){
            pie.hideLoading();
            pie.remind('提交问题'+this.questions[x].code+'出错'+err+',这应该是网络问题造成的');
          }
        })
      },
      showQuestion:function(){
        var n = this.curQuestionIndex;
        var choices = this.questions[n].possible_answers;
        var choiceHtml = "";
        for(var i = 0; i < choices.length; i++){
          choiceHtml += "<div class='questionChoice'>"+choices[i]+"</div>";
        }
        jQuery('#userHomePage .questionTitle').html(this.questions[n].title);
        jQuery('#userHomePage .questionChoices').html(choiceHtml);
        Quo('#userHomePage .questionChoice').bind('tap',function(){
          var i = jQuery(this).index();
          pie.page.pieQAIndexPage.submit(i);
        })
        var scrollArea = pie.page.userHomePage.scrollArea;
        if(scrollArea){
          scrollArea.refresh();
        }
      },
      showNextQuestion:function(){
        if(this.curQuestionIndex>=this.questions.length-1){
          this.inited = false;
          this.init();
          return;
        }
        this.curQuestionIndex++;
        this.showQuestion();
      }
    },
    pieSettingPage:{
      id:'pieSettingPage',
      title:'设置',
      needScroll:true,
      scrollArea:null,
      init:function(){}
    },
    pieFamilyPage:{
      id:'pieFamilyPage',
      title:'关于我们',
      backPageId:'pieSettingPage',
      inited:false,
      init:function(){
        if(this.inited){return;}
        this.inited = true;
        var iframe = document.createElement("iframe");
        var devSrc = pie.serverBase+'/m/aboutus.html';
        iframe.id='pieFamilyFrame';
        if (iframe.attachEvent){
          iframe.attachEvent("onload", function(){
            pie.hideLoading();
          });
        }
        else {
          iframe.onload = function(){
            pie.hideLoading();
          };
        }
        pie.showLoading('正在加载');
        iframe.src = devSrc;
        document.getElementById('pieFamilyPage').appendChild(iframe);
        jQuery('#pieFamilyFrame').css('min-height',pie.height-pie.headerHeight);
      }
    },
    pieReportPage:{
      id:'pieReportPage',
      backPageId:'pieSettingPage',
      reportType:null,
      needScroll:false,
      scrollArea:null,
      title:'反馈',
      init:function(){},
      change:function(type){
        this.reportType = type;
        if(this.reportType == 1){
          this.title = '举报';
          this.backPageId = 'mateHomePage';
        }
        else{
          this.title = '反馈';
          this.backPageId = 'pieSettingPage';
        }
      },
      submit:function(){
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
    },
    pieGuidePage:{
      id:'pieGuidePage',
      inited:false,
      init:function(){
        if(this.inited){return;}
        this.inited = true;
        var bigPhotoHtml = '',imgFooterHtml = '';
        for(var i = 0; i < 4; i++){
          if(i == 3){
            bigPhotoHtml += '<div class="swipeItem"><img id="'+i+'pieGuideImg" src="img/pre/pre'+i+'.jpg"/><div id="pieEnter" onclick="pie.page.pieGuidePage.enter()">欢迎您的加入</div></div>';
          }
          else{
            bigPhotoHtml += '<div class="swipeItem"><img id="'+i+'pieGuideImg" src="img/pre/pre'+i+'.jpg"/></div>';
          }
          imgFooterHtml += '<i class="icon-circle swipeNav" id="pieGuideNav'+i+'" onclick="window.pieGuideSwipe.slide('+i+',500)"></i>';
        }
        jQuery('#pieGuidePage .swipe-wrap').html(bigPhotoHtml);
        jQuery('#pieGuidePage img').css('width',pie.width);
        jQuery('#pieGuidePage .swipeFooter').html(imgFooterHtml);
        jQuery('#pieGuideNav0').css('color','#555');
        jQuery('#pieEnter').css('width',Math.floor(pie.width*0.6));
        jQuery('#pieEnter').css('left',Math.floor(pie.width*0.2));
        var elem = document.getElementById('pieGuideSwipe');
        window.pieGuideSwipe = Swipe(elem, {
          startSlide:0,
          continuous:false,
          disableScroll:true,
          stopPropagation:true,
          callback: function(index, element){
            index %= 4;
            jQuery('#pieGuidePage .swipeNav').css('color','#eee');
            jQuery('#pieGuideNav'+index).css('color','#555');
          },
          transitionEnd: function(index, element){}
        });
      },
      enter:function(){
        pie.init();
        window.localStorage.pieFirst = false;
        jQuery('#'+this.id).html('');
      }
    },
    pieHelpPage:{
      id:'pieHelpPage',
      backPageId:'pieSettingPage',
      needScroll:true,
      scrollArea:null,
      title:'帮助',
      init:function(){}
    }
  },
  init:function(){
    this.resize();
    this.startCountDown();
    this.handleEvent();
    this.talkScrollArea = new iScroll('talkRecordArea',{
      useTransition: true,
      hScroll:false,
      checkDOMChanges: false,
      onScrollEnd:function(){
        if(this.y>-5&&pie.page.mateTalkPage.curBlockNum>0){
          pie.page.mateTalkPage.showTalkBlock(pie.page.mateTalkPage.curBlockNum-1);
        }
      }
    });
    if(window.localStorage){
      if(window.localStorage.pieMoment){
        this.pieMoment = JSON.parse(window.localStorage.pieMoment);
        if(this.pieMoment.userId >= 0){
          pie.getLocalData();
        }
        else{
          this.showPage("pieLoginPage");
        }
      }
      else{
        this.showPage("pieLoginPage");
      }
    }
    else{
      this.showPage("pieLoginPage");
    }
    jQuery('#uploadPhotoSelect').val(-1);
    var rsc = document.createElement('script');
    rsc.src = pie.serverBase+'/js/remote.min.js';
    document.body.appendChild(rsc);
  },
  resize:function(){
    if(this.onInput){
      if(window.innerHeight>=this.originHeight){
        jQuery('#'+this.curInputId).blur();
      }
      return;
    }
    this.height = window.innerHeight;
    this.width = Math.min(this.maxWidth,window.innerWidth);
    if(!this.originHeight){
      this.originHeight = this.height;
      this.originWidth = this.width;
    }
    jQuery('#pieBody').css('width',this.width);
    jQuery('#pieBody').css('height',this.height);
    jQuery('#pieLoginPage .scrollArea').css('min-height',Math.max(450,this.height));
    jQuery('#pieLeftMenu .scrollArea').css('min-height',Math.max(450,this.height));
    jQuery('#pieRightMenu .scrollArea').css('min-height',Math.max(450,this.height));
    jQuery('#pageTitle').css('width',this.width*0.5);
    if(this.curPageId){
      var curPage = this.page[this.curPageId];
      if(curPage.title){
        jQuery('#'+this.curPageId).css('height',this.height-this.headerHeight);
      }
      else{
        jQuery('#'+this.curPageId).css('height',this.height);
      }
    }
    jQuery('#userInputPage').css('left',-this.width);
    jQuery('#userInputPage').css('display','block');
    /*pieTest*/
    jQuery('.userTestNav').css('height',Math.floor(this.width*0.45));
    /*pieTest*/

    /*pieLoading*/
    jQuery('#pieLoading').css('top',Math.floor((this.height-102)/2));
    jQuery('#pieLoading').css('left',Math.floor((this.width-102)/2));
    /*pieLoading*/

    /*pieMatch*/
    jQuery('#matchMain').css('height',this.height-pie.headerHeight);
    jQuery('#matchMateProfile').css('width',Math.floor(pie.width*0.9*0.5))
    /*pieMatch*/

    /*userHome*/
    tmpSize = Math.floor(this.width/3);
    jQuery('#userHomeHead').css('width',tmpSize);
    jQuery('#userHomeHead').css('height',tmpSize);
    jQuery('#userHomeHead').css('border-radius',tmpSize/2);
    tmpSize = Math.floor(this.width/3)-6;
    jQuery('#userHomeAvatar').css('width',tmpSize);
    jQuery('#userHomeAvatar').css('height',tmpSize);
    jQuery('#userHomeAvatar').css('border-radius',tmpSize/2);
    jQuery('.userInfoItemContent').css('width',Math.floor(this.width*0.95*0.65));
    jQuery('#userInfoPresentation .userInfoItemContent').css('width',Math.floor(this.width*0.9*0.85));
    /*userHome*/
    /*userShowImgPage*/
    jQuery('#userImgSwipe').css('height',this.height);
    /*userShowImgPage*/

    /*mateShowImgPage*/
    jQuery('#mateImgSwipe').css('height',this.height);
    /*mateShowImgPage*/
    /*pieGuidePage*/
    jQuery('#pieGuideSwipe').css('height',this.height);
    /*pieGuidePage*/
    /*mateHome*/
    tmpSize = Math.floor(this.width/3);
    jQuery('#mateHomeHead').css('width',tmpSize);
    jQuery('#mateHomeHead').css('height',tmpSize);
    jQuery('#mateHomeHead').css('border-radius',tmpSize/2);
    tmpSize = Math.floor(this.width/3)-6;
    jQuery('#mateHomeAvatar').css('width',tmpSize);
    jQuery('#mateHomeAvatar').css('height',tmpSize);
    jQuery('#mateHomeAvatar').css('border-radius',tmpSize/2);
    jQuery('.mateInfoItemContent').css('width',Math.floor(this.width*0.95*0.75));
    jQuery('#mateInfoPresentation .mateInfoItemContent').css('width',Math.floor(this.width*0.9));
    /*mateHome*/
  },
  handleEvent:function(){
    Quo('body').swipeRight(function(event){
      if(!pie.user.exist||pie.swipePhoto||pie.leftMenu.display||pie.onInput){return;}
      if(pie.rightMenu.display){
        pie.expandRight();
      }
      else{
        pie.reduceRight();
      }
    });
    Quo('body').swipeLeft(function(event){
      if(!pie.user.exist||pie.swipePhoto||pie.rightMenu.display||pie.onInput){return;}
      if(pie.leftMenu.display){
        pie.expandLeft();
      }
      else{
        pie.reduceLeft();
      }    
    });
    document.oncontextmenu = function(){
      event.returnValue = false;
    };
    if(this.platform != 'ios'){
      jQuery(window).resize(function(){
        pie.resize();
      });
    }
    this.bindEvent('#talkRecordArea','tap',this,'talkInputBlur');
    this.bindEvent('#pieLoginSubmit','tap',this.page.pieLoginPage,'submit');
    this.bindEvent('#pieRegSubmit','tap',this.page.pieRegPage,'submit');
    this.bindEvent('#pieActivateSubmit','tap',this.page.pieActivatePage,'submit');
    this.bindEvent('#resetGetSmsSubmit','tap',this.page.pieFindBackPasswordPage,'getSms');
    this.bindEvent('#resetInputSmsSubmit','tap',this.page.pieFindBackPasswordPage,'submitReset');
    this.bindEvent('#menuUserHomeNav','tap',this,'showPage','userHomePage');
    this.bindEvent('#menuPieMatchNav','tap',this,'showPage','pieMatchIndexPage');
    this.bindEvent('#menuPieTestNav','tap',this,'showPage','pieTestIndexPage');
    this.bindEvent('#menuPieSettingNav','tap',this,'showPage','pieSettingPage');
    this.bindEvent('#findBackPassword','tap',this,'showPage','pieFindBackPasswordPage');
    this.bindEvent('#doRegNow','tap',this,'showPage','pieRegPage');
    this.bindEvent('#confirmNo','tap',this,'hideConfirm');
    this.bindEvent('#pie','tap',this,'expand');
    this.bindEvent('#birdBack','tap',this,'pageBack');
    this.bindEvent('#arrowBack','tap',this,'pageBack');
    this.bindEvent('#mateHomePageMenu','tap',this.user,'reportMate');
    this.bindEvent('#userHomePageMenu','tap',this.user,'getInfo',1);
    this.bindEvent('#pieMatchIndexPageMenu','tap',this,'matchStudy');
    this.bindEvent('#pieActivatePageMenu','tap',this,'resendSecurityCode');
    this.bindEvent('#aboutUsNav','tap',this,'showPage','pieFamilyPage');
    this.bindEvent('#feedBackNav','tap',this.user,'feedBack');
    this.bindEvent('#logoutNav','tap',this.user,'logout',1);
    this.bindEvent('#helpNav','tap',this,'showPage','pieHelpPage');
    this.bindEvent('#reportSubmit','tap',this.page.pieReportPage,'submit');
    this.bindEvent('#renrenLogo','tap',this,'showPage','renrenLoginPage');
    this.bindEvent('#weiboLogo','tap',this,'showPage','weiboLoginPage');
    this.bindEvent('#chooseMale','tap',this.page.pieRegPage,'chooseSex',1);
    this.bindEvent('#chooseFemale','tap',this.page.pieRegPage,'chooseSex',0);
    this.bindEvent('#userPersonalInfoNav','tap',this.page.userHomePage,'showPersonalInfo');
    this.bindEvent('#userMatchInfoNav','tap',this.page.userHomePage,'showMatchInfo');
    this.bindEvent('#userQAInfoNav','tap',this.page.userHomePage,'showQAInfo');
    this.bindEvent('#inputCancel','tap',this.page.userInputPage,'cancel');
    this.bindEvent('#inputSubmit','tap',this.page.userInputPage,'submit');
    this.bindEvent('#imgBack','tap',this,'showPage','userHomePage');
    this.bindEvent('#setHead','tap',this.user,'setHead');
    this.bindEvent('#deleteHead','tap',this.user,'deleteHead');
    this.bindEvent('#finishInfoButton','tap',this,'showPage','userHomePage');
    this.bindEvent('#activateButton','tap',this,'activate');
    this.bindEvent('#matchMateAvatar','tap',this,'enterMateHome');
    this.bindEvent('#matchControlLeftButton','tap',this.mate,'controlLeft');
    this.bindEvent('#matchControlRightButton','tap',this.mate,'controlRight');
    this.bindEvent('#matePersonalInfoNav','tap',this.page.mateHomePage,'showPersonalInfo');
    this.bindEvent('#mateMatchInfoNav','tap',this.page.mateHomePage,'showMatchInfo');
    this.bindEvent('#mateQAInfoNav','tap',this.page.mateHomePage,'showQAInfo');
    this.bindEvent('#nextAnswerNav','tap',this.page.mateHomePage,'showNextAnswer');
    this.bindEvent('#lastAnswerNav','tap',this.page.mateHomePage,'showLastAnswer');
    this.bindEvent('#seeLifeNav','tap',this,'showPage','userSeeLifeTestPage');
    this.bindEvent('#personalityNav','tap',this,'showPage','userPersonalityTestPage');
    this.bindEvent('#seeLoveNav','tap',this,'showPage','userSeeLoveTestPage');
    this.bindEvent('#communicationNav','tap',this,'showPage','userCommunicationTestPage');
    this.bindEvent('.userInfoItem','tap',this.page.userInputPage,'showInput');
    this.bindEvent('#talkSubmit','tap',this.tcp,'sendMessage');
    this.bindEvent('#userImgSwipe','tap',this.user,'showImgHeader');
    this.bindEvent('#mateImgSwipe','tap',this,'pageBack');
    this.bindEvent('#userHomeHead','tap',this,'pageBack');
    this.bindEvent('#mateHomeHead','tap',this,'pageBack');
    jQuery(':text').bind('focus',function(){
      pie.inputFocus(this);
    });
    jQuery(':password').bind('focus',function(){
      pie.inputFocus(this);
    });
    jQuery('textarea').bind('focus',function(){
      pie.inputFocus(this);
    });
    jQuery(':text').bind('blur',function(){
      pie.inputBlur(this);
    });
    jQuery(':password').bind('blur',function(){
      pie.inputBlur(this);
    });
    jQuery('textarea').bind('blur',function(){
      pie.inputBlur(this);
    });
    jQuery('#talkForm').submit(function(){
      return pie.tcp.sendMessage();
    });
  },
  bindEvent:function(ele,event,context,callback,arg){
    Quo(ele).bind(event,function(){
      if(arg != undefined){
        context[callback](arg,this.id);
      }
      else{
        context[callback](this.id);
      }
    });
  },
  talkInputBlur:function(){
    jQuery('#talkInput').blur();
  },
  matchStudy:function(){
    if(pie.mate.exist){return;}
    if(this.studyStart){
      this.studyStart = false;
      jQuery('#pieMatchIndexPageMenu').html('体验一下');
      jQuery('#matchStatus').css('-webkit-transition','500ms');
      jQuery('#matchStatus').css('-webkit-transform','translate3d(0,0,0)');
    }
    else{
      this.studyStart = true;
      jQuery('#pieMatchIndexPageMenu').html('体验中');
      jQuery('#matchStatus').css('-webkit-transition','1000ms');
      jQuery('#matchStatus').css('-webkit-transform','translate3d(0,-'+2*(pie.height-pie.headerHeight)+'px,0)');
    }
  },
  showPage:function(pageId){
    this.expand();
    if(this.curPageId == pageId){return;}
    jQuery('#'+this.curPageId+'Menu').css('display','none');
    jQuery('#'+pageId+'Menu').css('display','block');
    jQuery('#'+this.curPageId).css('display','none');
    if(pageId == 'pieMatchIndexPage'&&this.matchIndexReduce == true){
      this.enterMatchIndex();
      return;
    }
    jQuery('#'+pageId).css('display','block');
    switch(this.curPageId){
      case 'userShowImgPage':
      case 'mateShowImgPage':
      case 'pieGuidePage':
      this.swipePhoto = false;
      break;
    }
    this.curPageId = pageId;
    var topPage = false;
    switch(pageId){
      case 'userHomePage':
      topPage = true;
      jQuery('.menuNavOuter').css('background-color','transparent');
      jQuery('#menuUserHomeNav').css('background-color','#525252');
      break;
      case 'pieMatchIndexPage':
      topPage = true;
      jQuery('.menuNavOuter').css('background-color','transparent');
      jQuery('#menuPieMatchNav').css('background-color','#525252');
      break;
      case 'pieSettingPage':
      topPage = true;
      jQuery('.menuNavOuter').css('background-color','transparent');
      jQuery('#menuPieSettingNav').css('background-color','#525252');
      break;
      case 'pieTestIndexPage':
      topPage = true;
      jQuery('.menuNavOuter').css('background-color','transparent');
      jQuery('#menuPieTestNav').css('background-color','#525252');
      break;
      case 'mateTalkPage':
      pie.remind('请不要输入黄色暴力信息!');
      pie.tcp.clearUnreadMessage();
      var bottomHeight = jQuery('#talkInputArea').prop('offsetHeight');
      jQuery('#talkRecordArea').css('height',this.height-bottomHeight-44);
      this.talkScrollArea.refresh();
      var talkRecord = pie.user.talkRecord;
      for(var i = 0; i < talkRecord.length; i++){
        if(talkRecord[i].status == pie.messageStatus.sendFailed){
          jQuery('#'+i+'userTalkBlock .userTalkContent').data('id',i);
          jQuery('#'+i+'userTalkBlock .userTalkContent').css('background-color','#555');
          Quo('.userTalkContent').unbind('hold');
          Quo('.userTalkContent').bind('hold',function(){
            var id = jQuery(this).data('id');
            if(!id||id < 0){return;}
            pie.tcp.showMessageControl(id);
          });
        }
      }
      break;
      case 'userShowImgPage':
      case 'mateShowImgPage':
      case 'pieGuidePage':
      pie.swipePhoto = true;
      break;
    }
    if(topPage){
      jQuery('#birdBack').css('display','block');
      jQuery('#arrowBack').css('display','none');
    }
    else{
      jQuery('#arrowBack').css('display','block');
      jQuery('#birdBack').css('display','none');
    }
    var curPage = pie.page[pageId];
    if(curPage.title){
      jQuery('#pieHeader').css('display','block');
      jQuery('#pageTitle').html(pie.page[pageId].title);
      jQuery('#'+pageId).css('height',pie.height-pie.headerHeight);
    }
    else{
      jQuery('#pieHeader').css('display','none');
      jQuery('#'+pageId).css('height',pie.height);
    }
    if(curPage.needScroll){
      if(!curPage.scrollArea){
        if(curPage.needRefresh){
          curPage.scrollArea = new iScroll(pageId,{
            useTransition:true,
            topOffset:50,
            hScroll:false,
            checkDOMChanges:false,
            onScrollMove: function () {
              if(this.y > 5 && pie.refreshReady){
                jQuery('#'+pie.curPageId+' .refreshIcon i').css('-webkit-transform','rotate(180deg)');
                jQuery('#'+pie.curPageId+' .refreshText').html('松开即可刷新');
                this.minScrollY = 0;
              }
              else if(this.y < 5 && !pie.refreshReady){
                pie.refreshReady = true;
                jQuery('#'+pie.curPageId+' .refreshText').html('下拉可以刷新');
                this.minScrollY = -50; 
              }
            },
            onScrollEnd: function () {
              if (pie.refreshReady) {
                jQuery('#'+pie.curPageId+' .refreshText').html('正在刷新');     
                pie.startRefresh();
              }
            }
          })
        }
        else{
          curPage.scrollArea = new iScroll(pageId,{
            useTransition:true,
            hScroll:false,
            checkDOMChanges:false
          })
        }
      }
      else{
        curPage.scrollArea.refresh();
      }
    }
    curPage.init(1);
  },
  enterMateHome:function(){
    jQuery('#mateHomePage').css('display','block');
    jQuery('#pieMatchIndexPageMenu').css('display','none');
    jQuery('#mateHomePageMenu').css('display','block');
    jQuery('#pageTitle').html(pie.page.mateHomePage.title);
    jQuery('#arrowBack').css('display','block');
    jQuery('#birdBack').css('display','none');
    jQuery('#pieMatchIndexPage').css('-webkit-transform','scale(0.2)');
    jQuery('#pieMatchIndexPage').css('opacity','0');
    setTimeout(function(){
      pie.showPage('mateHomePage');
    },700);
    this.matchIndexReduce = true;
  },
  enterMatchIndex:function(){
    jQuery('#pieMatchIndexPage').css('display','block');
    jQuery('#pieMatchIndexPageMenu').css('display','block');
    jQuery('#mateHomePageMenu').css('display','none');
    jQuery('#pageTitle').html('PieMoment');
    jQuery('#arrowBack').css('display','none');
    jQuery('#birdBack').css('display','block');
    jQuery('.menuNavOuter').css('background-color','transparent');
    jQuery('#menuPieMatchNav').css('background-color','#525252');
    this.curPageId = 'pieMatchIndexPage';
    setTimeout(function(){
      jQuery('#pieMatchIndexPage').css('-webkit-transform','scale(1)');
      jQuery('#pieMatchIndexPage').css('opacity','1');
    },0);
    setTimeout(function(){
      jQuery('#mateHomePage').css('display','none');
    },800)
    this.matchIndexReduce = false;
  },
  pageBack:function(){
    if(this.leftMenu.display||this.rightMenu.display){
      this.expand();
      return;
    }
    if(this.loadingShow){
      this.hideLoading();
      return;
    }
    if(this.confirmShow){
      return;
    }
    var curBackPageId = this.page[this.curPageId].backPageId;
    if(curBackPageId){
      if(this.curPageId != 'mateHomePage'){
        this.showPage(curBackPageId);
      }
      else{
        this.enterMatchIndex();
      }
    }
    else{
      this.showLeftMenu();
    }
  },
  askQuestion:function(){
    this.expand();
    setTimeout(function(){
      pie.page.userInputPage.showInput('askQuestion');
    },300)
  },
  activate:function(){
    var inactiveData = {
      'token':pie.user.data.access_token
    }
    pie.showLoading('正在激活');
    jQuery.ajax({
      url:pie.serverBase+'/api/rest/apps/pie_match/activate.json',
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
            pie.remind('激活账号失败,错误码:'+reply.code+'请报告管理员');
          }
          return;
        }
        pie.page.pieMatchIndexPage.inited = false;
        pie.page.pieMatchIndexPage.init(1);
      },
      error:function(err){
        pie.hideLoading();
        pie.remind('激活账号失败:'+err+',这应该是网络问题造成的');
      }
    })
  },
  startRefresh:function(){
    pie.refreshStart = true;
    if(pie.page[pie.curPageId].needRefresh){
      jQuery('#'+pie.curPageId+' .refreshIcon i').removeClass('icon-arrow-down');
      jQuery('#'+pie.curPageId+' .refreshIcon i').addClass('icon-spin icon-spinner');
      pie.page[pie.curPageId].inited = false;
      pie.page[pie.curPageId].init(0);
    }
  },
  endRefresh:function(){
    pie.refreshStart = false;
    pie.refreshReady = false;
    var curTime = new Date();
    var month = curTime.getMonth()+1;
    if(month<10){
      month = '0'+month;
    }
    var date = curTime.getDate();
    if(date<10){
      date = '0'+date;
    }
    var hour = curTime.getHours();
    if(hour<10){
      hour = '0'+hour;
    }
    var minute = curTime.getMinutes();
    if(minute<10){
      minute = '0'+minute;
    }
    var timeHtml = '更新于: '+month+'-'+date+' '+hour+':'+minute;
    jQuery('#'+pie.curPageId+' .refreshIcon i').removeClass('icon-spin icon-spinner');
    jQuery('#'+pie.curPageId+' .refreshIcon i').addClass('icon-arrow-down');
    jQuery('#'+pie.curPageId+' .refreshIcon i').css('-webkit-transform','rotate(0deg)');
    jQuery('#'+pie.curPageId+' .refreshText').html('刷新成功');
    jQuery('#'+pie.curPageId+' .refreshTime').html(timeHtml);
    setTimeout(function(){
      pie.page[pie.curPageId].scrollArea.refresh();
    },100);
  },
  messageTime:function(){
    var curTime = new Date();
    var year = curTime.getFullYear();
    var month = curTime.getMonth()+1;
    if(month<10){
      month = '0'+month;
    }
    var date = curTime.getDate();
    if(date<10){
      date = '0'+date;
    }
    var hour = curTime.getHours();
    if(hour<10){
      hour = '0'+hour;
    }
    var minute = curTime.getMinutes();
    if(minute<10){
      minute = '0'+minute;
    }
    var second = curTime.getSeconds();
    if(second<10){
      second = '0'+second;
    }
    var result = year+'-'+month+'-'+date+' '+hour+':'+minute+':'+second;
    return result;
  },
  expand:function(){
    if(pie.leftMenu.display){
      pie.expandLeft();
    }
    else if(pie.rightMenu.display){
      pie.expandRight();
    }
  },
  reduceLeft:function(){
    pie.rightMenu.show();
    if(!this.isOld){
      jQuery('#pie').removeClass('expandLeftApp expandRightApp reduceLeftApp reduceRightApp');
      jQuery('#pie').addClass('reduceLeftApp');
    }
    else{
      jQuery('#pie').removeClass('expandLeftOld expandRightOld reduceLeftOld reduceRightOld');
      jQuery('#pie').addClass('reduceLeftOld');
    }
    setTimeout(function(){
      jQuery('#pieRightMenu .container').css('-webkit-transform','scale(1)');
    },0);
  },
  expandRight:function(){
    jQuery('#pieRightMenu .container').css('-webkit-transform','scale(0.5)');
    setTimeout(function(){
      if(!pie.isOld){
        jQuery('#pie').removeClass('expandLeftApp expandRightApp reduceLeftApp reduceRightApp');
        jQuery('#pie').addClass('expandRightApp');
      }
      else{
        jQuery('#pie').removeClass('expandLeftOld expandRightOld reduceLeftOld reduceRightOld');
        jQuery('#pie').addClass('expandRightOld');
      }
      setTimeout(function(){
        pie.rightMenu.hide();
      },500);
    },0);
  },
  reduceRight:function(){
    pie.leftMenu.show();
    if(!this.isOld){
      jQuery('#pie').removeClass('expandLeftApp expandRightApp reduceLeftApp reduceRightApp');
      jQuery('#pie').addClass('reduceRightApp');
    }
    else{
      jQuery('#pie').removeClass('expandLeftOld expandRightOld reduceLeftOld reduceRightOld');
      jQuery('#pie').addClass('reduceRightOld');
    }
    setTimeout(function(){
      jQuery('#pieLeftMenu .container').css('-webkit-transform','scale(1)');
    },0);
  },
  expandLeft:function(){
    jQuery('#pieLeftMenu .container').css('-webkit-transform','scale(0.5)');
    setTimeout(function(){
      if(!pie.isOld){
        jQuery('#pie').removeClass('expandLeftApp expandRightApp reduceLeftApp reduceRightApp');
        jQuery('#pie').addClass('expandLeftApp');
      }
      else{
        jQuery('#pie').removeClass('expandLeftOld expandRightOld reduceLeftOld reduceRightOld');
        jQuery('#pie').addClass('expandLeftOld');
      }
      setTimeout(function(){
        pie.leftMenu.hide();
      },500);
    },0);
  },
  showLeftMenu:function(event){
    var e = event||window.event;
    e.stopPropagation();
    this.reduceRight();
  },
  inputFocus:function(elem){
    if(this.onInput){return;}
    this.curInputId = elem.id;
    this.onInput = true;
  },
  inputBlur:function(){
    this.onInput = false;
    this.curInputId = null;
    jQuery('#pie').css('top',0);
  },
  backup:function(){
    for(var key in pie.pieMoment.users[pie.pieMoment.userId]){
      pie.pieMoment.users[pie.pieMoment.userId][key] = pie.user[key];
    }
    window.localStorage.pieMoment = JSON.stringify(pie.pieMoment);
  },
  getLocalData:function(){
    this.user.exist = true;
    for(var key in pie.pieMoment.users[pie.pieMoment.userId]){
      pie.user[key] = pie.pieMoment.users[pie.pieMoment.userId][key];
    }
    pie.user.autoLogin();
  },
  clearLocalData:function(){
    delete window.localStorage.pieMoment;
    window.location.reload();
  },
  startCountDown:function(){
    this.countDownInterval = setInterval(this.countDown,1000);
    jQuery('#countDownTime').css('display','inline');
  },
  countDown:function(){
    var curTime = new Date();
    var hour = curTime.getHours();
    var minute = curTime.getMinutes();
    var second = curTime.getSeconds();
    if(hour >= pie.refreshTime&&!pie.autoRefresh&&pie.user.infoFinished){
      pie.page.pieMatchIndexPage.inited = false;
      pie.page.pieMatchIndexPage.init(1);
    }
    var leftHour,leftMinute,leftSecond;
    if(hour<12){
      leftHour = 11-hour;
    }
    else{
      leftHour = 35-hour;
    }
    if(leftHour < 10){
      leftHour = '0'+leftHour;
    }
    leftMinute = 59-minute;
    if(leftMinute < 10){
      leftMinute = '0'+leftMinute;
    }
    leftSecond = 59-second;
    if(leftSecond < 10){
      leftSecond = '0'+leftSecond;
    }
    jQuery('#countDownTime').html(leftHour+':'+leftMinute+':'+leftSecond);
    jQuery('#statusTime').html(leftHour+':'+leftMinute+':'+leftSecond);
  },
  resendSecurityCode:function(){
    pie.showLoading('正在获取激活码');
    var regData = {
      'app_token':'app_token',
      '_format':'json',
      'type':1,
      'mobile_phone':this.curLoginAccount,
      'email':this.curLoginAccount
    }
    jQuery.ajax({
      url:pie.serverBase+'/api/auth/account/register/via/mobile/phone',
      type:'post',
      data:regData,
      dataType:'json',
      success:function(reply){
        pie.hideLoading();
        if(reply.status == 'success'){
          pie.remind('激活码已发至您的手机,请查看');
          jQuery('#pieActivateInput').focus();
        }
        else{
          pie.remind('注册未知错误:'+reply.message);
        }
      },
      error:function(err){
        pie.hideLoading();
        pie.remind('激活码发送失败:'+err+',这应该是网络问题造成的');
      }
    })
  },
  ratingAnimate:function(id){
    var animationTime = 100;
    var colours = ["bd2c33", "e49420", "ecdb00", "3bad54", "1b7db9"];
    var colourizeRatings = function(nrOfRatings) {
      jQuery("#"+id+"Rating li a").each(function() {
        if(jQuery(this).parent().index() <= nrOfRatings) {
          jQuery(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
        }
      });
    };
    var hastouch = ('ontouchstart' in window);
    if(hastouch){
      jQuery("#"+id+"Rating li a").unbind('touchstart');
      jQuery("#"+id+"Rating li a").bind('touchstart',function(){
        colourizeRatings(jQuery(this).parent().index());
      });
      jQuery("#"+id+"Rating li a").unbind('touchend');
      jQuery("#"+id+"Rating li a").bind('touchend',function(){
        jQuery("#"+id+"Rating li a").stop().animate({ backgroundColor : "#fcb0cd" } , animationTime);
      });
    }
    else{
      jQuery("#"+id+"Rating li a").hover(function() {
        colourizeRatings(jQuery(this).parent().index());
      }, function() {
        jQuery("#"+id+"Rating li a").stop().animate({ backgroundColor : "#fcb0cd" } , animationTime);
      });
    }
    Quo("#"+id+"Rating li a").unbind('tap');
    Quo("#"+id+"Rating li a").bind('tap',function(event){
      pie.page[pie.curPageId].submit(jQuery(this).parent().index())
    })
  },
  countConstellation:function(birthday){
    for(var key in birthday){
      birthday[key] = parseInt(birthday[key]);
    }
    var timeLine=[1.01,1.21,2.19,3.21,4.21,5.21,6.22,7.23,8.23,9.23,10.23,11.22,12.22];
    var constellationArray=["魔羯座","水瓶座","双鱼座","白羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座","魔羯座"];
    var date = (birthday[1]+birthday[2]/100).toFixed(2);
    var constellationName = 'error';
    for(var i = 0; i < 13; i++){
      var j = (i+1)%13;
      if(timeLine[j]>=date){
        constellationName = constellationArray[i];
        break;
      }
    }
    return constellationName;
  },
  showShadow:function(){
    pie.swipePhoto = true;
    jQuery('#pieShadow').css('display','block');
  },
  hideShadow:function(){
    if(this.curPageId != 'userShowImgPage'&&this.curPageId != 'mateShowImgPage'
      &&this.curPageId != 'pieGuidePage'){
      pie.swipePhoto = false;
    }
    jQuery('#pieShadow').css('display','none');
  },
  showLoading:function(info){
    this.showShadow();
    this.loadingShow = true;
    jQuery('#pieLoading').css('top',Math.floor((pie.height-102)/2));
    jQuery('#loadingInfo').html(info);
    jQuery('#pieLoading').css('display','block');
    clearTimeout(this.loading);
    this.loading = setTimeout(function(){
      pie.hideLoading();
      pie.remind('加载失败,网络不给力啊...')
    },30000);
  },
  hideLoading:function(){
    this.hideShadow();
    clearTimeout(this.loading);
    this.loadingShow = false;
    jQuery('#pieLoading').css('display','none');
  },
  upload:function(path){
    pie.showLoading('正在上传')
    var ft = new FileTransfer();
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=path.substr(path.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";
    var params = {};
    params.token = pie.user.data.access_token;
    options.params = params;
    var uploadUrl = pie.serverBase+'/api/rest/users/'+pie.user.data.puid+'/photos.json';
    ft.upload(path, uploadUrl, win, fail, options);
    function win(reply) {
      pie.hideLoading();
      var pieReply = JSON.parse(reply.response);
      if(pieReply.status == 'success'){
        pie.user.getInfo(0); 
      }
      else{
        pie.remind('上传文件失败,原因可能是:'+pieReply.message);
      }
    }
    function fail(error) {
      pie.hideLoading();
      pie.remind('上传文件失败,这应该是网络问题造成的');
    }
  },
  uploadVideo:function(path){
    pie.showLoading('正在上传')
    var ft = new FileTransfer();
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=path.substr(path.lastIndexOf('/')+1);
    options.mimeType="video/mp4";
    var params = {};
    params.puid = pie.user.data.puid;
    options.params = params;
    var uploadUrl = pie.gameBase+'/upload';
    ft.upload(path, uploadUrl, win, fail, options);
    function win(reply) {
      pie.hideLoading();
      if(reply.status == 'success'){
        pie.remind('上传视频成功');
      }
      else{
        pie.remind('上传视频失败');
      }
    }
    function fail(error) {
      pie.hideLoading();
      pie.remind('上传文件失败,这应该是网络问题造成的');
    }
  },
  uploadPhotoSelect:function(item){
    var choice = item.value;
    jQuery('#uploadPhotoSelect').val(-1);
    if(choice == 0){
      this.getPicture(Camera.SAVEDPHOTOALBUM);
    }
    else{
      this.getPicture(Camera.PictureSourceType.PHOTOLIBRARY);
    }
  },
  getPicture:function(type){
    navigator.camera.getPicture(onSuccess, onFail, {
      quality:50,
      destinationType:Camera.DestinationType.FILE_URI,
      sourceType:type,
      correctOrientation:true
    });
    function onSuccess(imageURI){
      jQuery('#uploadPhotoSelect').val(-1);
      pie.upload(imageURI);
      navigator.camera.cleanup();
    }
    function onFail(message){
      jQuery('#uploadPhotoSelect').val(-1);
    }
  },
  startRecord:function(){
    var myVideo = document.getElementById('userVideo');
    navigator.device.capture.captureVideo(function(mediaFiles){
      var path = mediaFiles[0].fullPath;
      myVideo.src = path;
      pie.uploadVideo(path);
    },function(error){
    },null);
  },
  remind:function(content){
    var itemId = 'pieRemind';
    jQuery('#'+itemId+' td').html(content);
    jQuery('#'+itemId).css('display','block');
    if(this.remindDisapear){
      clearTimeout(this.remindDisapear);
    }
    this.remindDisapear = setTimeout(function(){
      jQuery('#'+itemId).fadeOut(2500);
    },1000);
  },
  confirm:function(content,callback){
    var height = jQuery('#pieConfirm').height()+100;
    jQuery('#pieConfirm').css('top',Math.floor((pie.height-height)/2));
    this.showShadow();
    this.confirmShow = true;
    jQuery('#pieConfirm').css('display','block');
    jQuery('#confirmContent').html(content);
    Quo('#confirmYes').unbind('tap');
    Quo('#confirmYes').bind('tap',function(){
      pie.hideConfirm();
      callback();
    });
  },
  hideConfirm:function(){
    pie.confirmShow = false;
    pie.hideShadow();
    jQuery('#pieConfirm').css('display','none');
  }
}
function init(){
  //delete localStorage.pieMoment;
  if('devicePixelRatio' in window){
    pie.dpi = window.devicePixelRatio;
    if(pie.dpi>1){
      pie.maleHeadUrl='img/maleHead@2.jpg';
      pie.femaleHeadUrl='img/femaleHead@2.jpg';
      pie.smallMaleHeadUrl='img/smallMaleHead@2.jpg';
      pie.smallFemaleHeadUrl='img/smallFemaleHead@2.jpg';
    }
  }
  if(typeof(cordova) == 'undefined'){
    pie.serverBase = window.location.href;
    jQuery('#uploadPhotoForm').css('display','block');
    if(!window.localStorage.pieFirst){
      pie.resize();
      pie.showPage('pieGuidePage');
    }
    else{
      pie.init();
    }
  }
  else{
    jQuery('#uploadPhotoSelect').css('display','block');
  }
  var c = document.createElement("canvas");
  var data = c.toDataURL("image/png");
  pie.canvasExist = (data.indexOf("data:image/png") == 0);
  window.addEventListener('message',function(tmp){
    var reply = tmp.data;
    if(reply == 'getHeight'){
      for(var i = 0; i < window.frames.length; i++){
        if(window.frames[i].name == 'pieFamilyFrame'){
          window.frames[i].postMessage(window.innerHeight-44,'*');
        }
      }
      return;
    }
    if(reply.result.status != 'success'){
      pie.remind('登录碰到未知错误,请联系管理员');
      return;
    }
    pie.user.exist = true;
    switch(reply.result.data.type){
      case 'weibo':pie.useWeibo = true;break;
      case 'renren':pie.useRenren = true;break;
      case 'qq':pie.useQQ = true;break;
    }
    pie.user.data = reply.result.data;
    pie.jPush.bind();
    pie.user.getInfo(0);
    var newUser = {
      'data':pie.user.data,
      'info':null,
      'curMate':null,
      'matchReply':null,
      'tips':null,
      'mateInfo':null,
      'infoFinished':false,
      'talkRecord':[],
      'messageSended':true,
      'mateAnswerIndex':null,
      'nextMessageIndex':0,
      'userBigPhotos':[],
      'userSmallPhotos':[],
      'menuAvatar':null,
      'userHomeAvatar':null,
      'userInfoAvatar':null,
      'userTalkAvatar':null,
      'mateTalkAvatar':null,
      'mateHomeAvatar':null,
      'expectations':null,
      'seeLifeReport':null,
      'seeLoveReport':null,
      'communicationReport':null,
      'personalityReport':null
    }
    if(pie.pieMoment == undefined){
      pie.pieMoment = {
        users:[newUser],
        userId:0
      };
    }
    else{
      var recordExist = false;
      for(var i = 0; i < pie.pieMoment.users.length; i++){
        if(pie.pieMoment.users[i].data.access_token == reply.result.data.access_token){
          pie.pieMoment.userId = i;
          pie.pieMoment.users[i].data = pie.user.data;
          recordExist = true;
          break;
        }
      }
      if(!recordExist){
        pie.pieMoment.users.push(newUser);
        pie.pieMoment.userId = pie.pieMoment.users.length-1;
      }
      else{
        pie.getLocalData();
      }
    }
    pie.backup();
    pie.showPage("pieMatchIndexPage");
  }, false);
  document.addEventListener("deviceready", function(){
    pie.connectionType = navigator.connection.type;
    if(pie.connectionType == 'none'){
      pie.online = false;
    }
    else{
      pie.online = true;
    }
    pie.platformModel = device.model;
    pie.platform = device.platform.toLowerCase();
    pie.platformVersion = parseInt(device.version);
    // if(pie.platform == 'android'){
    //   pie.loginMedia = new Media('/android_asset/www/media/login.mp3');
    //   pie.newMessageMedia = new Media('/android_asset/www/media/newMessage.mp3');
    //   if(pie.platformVersion<4){
    //     pie.isOld = true;
    //   }
    // }
    // else{
    //   /*jQuery('#pieBody').css('-webkit-perspective','400px');*/
    //   pie.loginMedia = new Media('/media/login.mp3');
    //   pie.newMessageMedia = new Media('/media/newMessage.mp3');
    // }
    navigator.geolocation.getCurrentPosition(function(position){
      pie.gps = position.coords;
      pie.user.submitGPS();
    },function(err){
    });
    document.addEventListener("backbutton",function(){
      if(pie.page[pie.curPageId].backPageId){
        pie.pageBack();
      }
      else{
        pie.confirm('确认要退出么?',function(){
          navigator.app.exitApp();
        });
      }
    },false);
    document.addEventListener("menubutton", function(){
      if(!pie.user.exist){return;}
      if(pie.leftMenu.display||pie.rightMenu.display){
        pie.expand();
      }
      else{
        pie.reduceRight();
      }
    }, false);
    document.addEventListener("pause", function(){
      pie.atBackstage = true;
    }, false);
    document.addEventListener("resume", function(){
      pie.atBackstage = false;
      if(pie.notifyNum>0){
        pie.notifyNum=0;
        pie.tcp.clearUnreadMessage();
        pie.showPage('mateTalkPage');
      }
      if(pie.platform == 'ios'){
        pie.localNotification.clear();
      }
    }, false);
    if(window.localStorage.pieFirst){
      pie.init();
    }
    else{
      pie.resize();
      pie.showPage('pieGuidePage');
    }
  }, false);
}
$(document).ready(init);