(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{AP4B:function(e,t,n){"use strict";var a,i=n("R972"),r=n("3Lh0");t.a=((a={}).push_permission_prompt=i.d(i.f({component:r.a,bindActions:function(e){return{removeEntry:e.module.removeEntry}},createProps:function(e){var t=e.actions.removeEntry,n=e.entry;return{onDismiss:function(){t(n.entryId)}}}})),a)},EqKu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("VbXa")),r=a(n("lSNA")),o=a(n("q1tI")),s=a(n("Qelm")),l=a(n("A559")),c=(n("17x9"),a(n("38aF"))),u=a(n("Epja")),m=(a(n("cx9R")),function(e){function t(){return e.apply(this,arguments)||this}return(0,i.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.accessibilityLabel,n=e.accessibilityLiveRegion,a=e.count,i=e.maxCount,r=e.formatNumber,m=e.warningCount,p=i-a,h=Math.min(1,1-p/i),f=a>=i?"red":a>=m?"yellow":"primary",v=o.default.createElement(s.default,{color:f,progress:h,size:a>=m?30:20,style:[d.progressCircle,p<=-10&&d.hide]}),b=a>=m?o.default.createElement(c.default,{style:[d.text,p>0?d.deepGrayColor:d.redColor]},r(p)):null;return o.default.createElement(u.default,{accessibilityLabel:t,accessibilityLiveRegion:n,style:[d.root,d.center]},v,o.default.createElement(u.default,{style:[l.default.absoluteFill,d.center]},b))},t}(o.default.Component));(0,r.default)(m,"displayName","@twitter/CountdownCircle"),(0,r.default)(m,"defaultProps",{formatNumber:function(e){return e}}),m.propTypes={};var d=l.default.create((function(e){var t=e.colors;return{root:{alignItems:"flex-start",minHeight:30,minWidth:30},center:{alignItems:"center",justifyContent:"center",margin:"auto"},progressCircle:{transitionDuration:"0.2s",transitionProperty:"opacity"},hide:{opacity:0},text:{fontSize:13,lineHeight:.8,minWidth:16,textAlign:"center"},deepGrayColor:{color:t.deepGray},redColor:{color:t.red}}})),p=m;t.default=p},XhK8:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("91GP");var a=o(n("RvyH")),i=o(n("q1tI")),r=o(n("G04Q"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[r.default.root,e.style],viewBox:"0 0 24 24"}),i.default.createElement("g",null,i.default.createElement("path",{d:"M21 16.25H4.81l3.22-3.22c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4.5 4.5c-.293.292-.293.767 0 1.06l4.5 4.5c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.22-3.22H21c.414 0 .75-.337.75-.75s-.336-.75-.75-.75zM3 7.75h16.19l-3.22 3.22c-.294.293-.294.768 0 1.06.145.147.337.22.53.22s.383-.072.53-.22l4.5-4.5c.292-.292.292-.767 0-1.06l-4.5-4.5c-.294-.293-.77-.293-1.062 0s-.293.768 0 1.06l3.22 3.22H3c-.414 0-.75.336-.75.75s.336.75.75.75z"})))};s.metadata={height:24,width:24};var l=s;t.default=l},cOLG:function(e,t,n){"use strict";n.r(t);var a=n("PJYZ"),i=n.n(a),r=n("VbXa"),o=n.n(r),s=n("lSNA"),l=n.n(s),c=n("q1tI"),u=n("HIo9"),m=(n("f3/d"),n("QK5w")),d=n("wM4e"),p=n("peh1"),h=n("oEGd"),f=Object(p.createSelector)(m.a,m.b,d.h,d.c,(function(e,t,n,a){return{isInitialScreen:!e,loggedInUserAvatarURI:t&&t.profile_image_url_https,loggedInUserName:t&&t.name,useLatest:n,configurationFetchStatus:a}})),v=Object(h.b)(f),b=n("s14A"),_=n("dwig"),y=n("wrlS"),g=n("v//M"),T=n("0+qk"),w=(n("91GP"),n("DW2E"),function(e){var t=e.inactivityThresholdMs,n=e.lastFrustrationEventTimestamp,a=void 0===n?0:n,i=60*y.a.getNumberValue("home_timeline_latest_timeline_min_time_to_autoswitch_minutes",720)*1e3,r=60*y.a.getNumberValue("home_timeline_latest_timeline_autoswitch_half_life_minutes",20160)*1e3,o=t||i;return Math.max(i,o*Math.pow(2,(a-Date.now())/r))}),E=function(e){var t=60*y.a.getNumberValue("home_timeline_latest_timeline_max_time_to_autoswitch_minutes",10080)*1e3,n=y.a.getNumberValue("home_timeline_latest_timeline_autoswitch_threshold_multiplier",2);return Math.min(t,n*e)},S=function(e){if(!e)return!1;var t=1e3*y.a.getNumberValue("home_timeline_latest_timeline_threshold_to_increase_autoswitch_seconds",60);return Date.now()-e<t},x=function(e){var t=e.useLatest,n=e.lastActiveOnLatestTimestamp,a=e.inactivityThresholdMs,i=e.lastFrustrationEventTimestamp;return!(!y.a.isTrue("home_timeline_latest_timeline_switch_enabled")||!t)&&function(e){var t=e.lastActiveOnLatestTimestamp,n=e.inactivityThresholdMs;return Date.now()-t>n}({lastActiveOnLatestTimestamp:n,inactivityThresholdMs:w({inactivityThresholdMs:a,lastFrustrationEventTimestamp:i})})},C=n("1YZw"),I=n("zh9S"),A=Object(p.createSelector)(d.e,d.b,d.g,(function(e,t,n){return{inactivityThresholdMs:e,autoSwitchTimestamp:t,lastFrustrationEventTimestamp:n}})),L={addToast:C.b,scribeAction:I.c,updateAutoSwitchTimestamp:d.i,updateBehavior:d.j,updateInactivityThresholdMs:d.k,updateLastFrustrationEventTimestamp:d.m},M=Object(h.f)(A,L),O=n("gt4B"),j=n("YryT"),R=n.n(j),k=n("XhK8"),F=n.n(k),P=n("Tsss"),z=n.n(P),D=n("cjOy"),G=n.n(D),N=n("tZmz"),B=n.n(N),H=n("x8kz"),q=n.n(H),V=n("Cj8V"),W=n.n(V),J=n("A559"),U=n.n(J),Q=R.a.cc40a6aa,K=R.a.a69c6a1e,Y=R.a.be490582,Z=R.a.a8770415,X=R.a.cc5de004,$=R.a.f025f27b,ee=R.a.b1d90bf7,te=R.a.hd3af8df,ne=R.a.fa429b3c,ae=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,l()(i()(t),"_renderActionMenu",(function(e){var n=t.props.useLatest,a=n?X:Z,i=n?B.a:q.a;return c.createElement(O.a,{DescriptionIcon:i,description:a,descriptionStyle:ie.description,items:t._getActionMenuItems(),onCloseRequested:e})})),l()(i()(t),"_getActionMenuItems",(function(){var e=t.props.useLatest,n=e?ne:te;return[{text:e?$:ee,onClick:t._handleTimelineSwitch,Icon:F.a,subText:n},{link:"/settings/content_preferences",text:Q,onClick:t._handleContentPreferences,Icon:z.a}]})),l()(i()(t),"_handleTimelineSwitch",(function(e){var n=t.props.onToggle;e(),n()})),l()(i()(t),"_handleContentPreferences",(function(e){var n=t.props.onContentPreferencesSelect;e(),n()})),t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.useLatest,n=e.onPress,a=t?K:Y;return c.createElement(W.a,{accessibilityLabel:a,icon:c.createElement(G.a,null),onPress:n,pullRight:!0,renderMenu:this._renderActionMenu,style:ie.button,type:"text"})},t}(c.PureComponent),ie=U.a.create((function(e){return{button:{marginRight:"calc("+e.spaces.xSmall+" / 2)"},description:{fontSize:e.fontSizes.large,color:e.colors.text,textAlign:"center",fontWeight:"bold"}}})),re=ae,oe=n("17x9"),se=R.a.bd6bd60f,le=R.a.dcf33a31,ce=Object.freeze({}),ue=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,l()(i()(t),"_handleToggle",(function(){var e=t.props,n=e.updateBehavior,a=e.useLatest,i=e.addToast,r=e.scribeAction,o=e.scribeNamespace,s=e.updateInactivityThresholdMs,l=e.inactivityThresholdMs,c=e.autoSwitchTimestamp,u=e.updateAutoSwitchTimestamp,m=e.updateLastFrustrationEventTimestamp,d=e.lastFrustrationEventTimestamp;if(t.context.viewport.scrollToTop(),S(c)){var p=w({inactivityThresholdMs:l,lastFrustrationEventTimestamp:d});s({inactivityThresholdMs:E(p)}),m({lastFrustrationEventTimestamp:Date.now()})}var h={};c&&(h={duration_ms:Date.now()-c});r(Object.assign({},o,{component:"customize",element:a?"see_top":"see_latest",action:"click"}),h),c&&u({autoSwitchTimestamp:null});var f=a?se:le;n({useLatest:!a}).then((function(){i({text:f})}))})),l()(i()(t),"_handleSwitchPress",(function(){var e=t.props,n=e.scribeAction,a=e.scribeNamespace;n(Object.assign({},a,{section:"navigation_bar",element:"customize_button",action:"click"}),ce)})),l()(i()(t),"_handleContentPreferencesSelect",(function(){var e=t.props,n=e.scribeAction,a=e.scribeNamespace;n(Object.assign({},a,{component:"customize",element:"see_preferences",action:"click"}),ce)})),t}return o()(t,e),t.prototype.render=function(){var e=this.props.useLatest;return c.createElement(re,{onContentPreferencesSelect:this._handleContentPreferencesSelect,onPress:this._handleSwitchPress,onToggle:this._handleToggle,useLatest:e})},t}(c.Component);l()(ue,"contextTypes",{viewport:oe.object});var me,de,pe=M(ue),he=n("AwIm"),fe=n.n(he),ve=Object(p.createSelector)(m.b,(function(e){return{userAvatarURI:e&&e.profile_image_url_https,userName:e&&e.name}})),be=Object(h.b)(ve),_e=n("vJGI"),ye=n.n(_e),ge=n("jKRl"),Te=n.n(ge),we=n("Jw5s"),Ee=n.n(we),Se=n("iqZy"),xe=n.n(Se),Ce=n("uRxP"),Ie=n.n(Ce),Ae=n("Epja"),Le=n.n(Ae),Me=n("k5dz"),Oe=n.n(Me),je=n("EqKu"),Re=n.n(je),ke=n("xqLD"),Fe=n.n(ke),Pe=R.a.c6432564,ze=R.a.b973c93e,De=c.createElement(Ee.a,null),Ge=U.a.create((function(e){return{root:{backgroundColor:e.colors.cellBackground,flexDirection:"row",paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},avatarColumn:{flexGrow:1,marginRight:e.spaces.xxSmall,minWidth:32,maxWidth:e.spaces.xxLarge},avatar:{width:"100%"},body:{flexDirection:"column",flexGrow:1},fakeInput:{paddingVertical:"calc("+e.spaces.xSmall+" + "+e.spaces.micro+")",paddingHorizontal:e.spaces.micro},toolbar:{alignItems:"center",flexDirection:"row",justifyContent:"space-between",marginRight:e.spaces.micro,marginTop:e.spaces.xSmall},toolbarSection:{alignItems:"center",flexDirection:"row"},icon:{color:e.colors.primary,height:"1.5em",marginHorizontal:"calc("+e.spaces.xSmall+" - "+e.spaces.micro+")",width:"1.5em"},photoIcon:{marginLeft:0},emojiIcon:{marginRight:0},separator:{width:"1px",backgroundColor:e.colors.mediumGray,height:e.fontSizes.jumbo,marginRight:e.spaces.xSmall,marginLeft:"calc("+e.spaces.xSmall+" - 2px)"},tweetButton:{marginLeft:e.spaces.xSmall}}})),Ne=be((function(e){var t=e.userAvatarURI;return c.createElement(Le.a,{style:Ge.root},c.createElement(Le.a,{style:Ge.avatarColumn},c.createElement(Fe.a,{size:"custom",style:Ge.avatar,uri:t})),c.createElement(Le.a,{style:Ge.body},c.createElement(Oe.a,{color:"deepGray",numberOfLines:1,size:"large",style:Ge.fakeInput},ze),c.createElement(Le.a,{style:Ge.toolbar},c.createElement(Le.a,{style:Ge.toolbarSection},c.createElement(Te.a,{style:[Ge.icon,Ge.photoIcon]}),c.createElement(ye.a,{style:Ge.icon}),c.createElement(xe.a,{style:Ge.icon}),c.createElement(Ie.a,{style:[Ge.icon,Ge.emojiIcon]})),c.createElement(Le.a,{style:Ge.toolbarSection},c.createElement(Re.a,{count:0,maxCount:280,warningCount:260}),c.createElement(Le.a,{style:Ge.separator}),c.createElement(W.a,{disabled:!0,icon:De,size:"small",type:"secondary"}),c.createElement(W.a,{disabled:!0,style:Ge.tweetButton,type:"primary"},Pe)))))})),Be=fe()({loader:function(){return Promise.all([n.e(2),n.e(3),n.e(5),n.e(187)]).then(n.bind(null,"bJYH")).then((function(){return Promise.all([n.e(2),n.e(3),n.e(4),n.e(5),n.e(49)]).then(n.bind(null,"M5JI"))}))},renderPlaceholder:function(){return c.createElement(Ne,null)}}),He=n("wNSO"),qe=(n("VRzm"),n("Btvt"),function(){return window.performance&&"function"==typeof window.performance.now}),Ve=n("yoO3"),We=(n("rGqo"),n("yt8O"),n("aeN7")),Je=Object(p.createSelector)(d.e,d.f,d.g,(function(e,t,n){return{inactivityThresholdMs:e,lastActiveOnLatestTimestamp:t,lastFrustrationEventTimestamp:n}})),Ue={addToast:C.b,scribeAction:I.c,updateAutoSwitchTimestamp:d.i,updateBehavior:d.j,updateLastActiveOnLatestTimestamp:d.l},Qe=Object(h.f)(Je,Ue),Ke=n("7JQg"),Ye=n("QIgh"),Ze=n("8UdT"),Xe=n("RIqP"),$e=n.n(Xe),et=n("R972"),tt=n("hap+"),nt=n("6aYc"),at=n("+xF8"),it=n("k+D+"),rt=n("XOJV"),ot={},st=((me={})[Ze.a.HomeConversation]=et.d(et.e({splice:function(e){var t=e.content,n=t.displayTweets,a=t.allTweetIds,i=t.socialContext,r=mt(n,a),o=r.formerTweets,s=r.isMoreReplies,l=r.latterTweets,c=l.length>0,u=o.map((function(t,n){var a=0===n,r=a&&!t.socialContext?i:null,s={isStart:a,isEnd:!c&&ct(o,n),showReplyContext:a};return lt({homeConvoEntry:e,tweetContent:t,conversationPosition:s,socialContext:r})})),m=s&&o.length>0&&c?function(e,t){return{entryId:e.entryId+"-gap",type:"ui_homeConversationGap",content:{allTweetIds:e.content.allTweetIds,focalTweetId:t},itemMetadata:ot}}(e,o[0].id):null,d=l.map((function(t,n){return lt({homeConvoEntry:e,tweetContent:t,conversationPosition:{isStart:!1,isEnd:ct(l,n),showReplyContext:0===n}})})),p=u;return m&&p.push(m),p.push.apply(p,$e()(d)),p}})),me.ui_homeConversationGap=et.d(et.f({bindActions:Object(tt.a)({scribeAction:I.c}),component:it.a,defaultScribeNamespace:{component:"timeline_conversation"},selectData:function(e){var t=e.entry;e.module;return{isSelfThread:function(e){var n;return Object(nt.a)(t.content.allTweetIds,(function(t,a){var i=rt.a.select(e,t);return!i||(0===a?(n=i.id_str,!0):!!i.self_thread&&i.self_thread.id_str===n)}))}}},createProps:function(e){var t=e.data.isSelfThread,n=e.entry,a=e.actions.scribeAction,i=e.scribeNamespace;return{isSelfThread:t,onClick:function(e){var t=e.isSelfThreadGap;a(Object.assign({},i,{element:t?"see_more":"gap",action:"click"}))},onImpression:function(e){var t=e.isSelfThreadGap;a(Object.assign({},i,{element:t?"see_more":"gap",action:"impression"}))},url:"/i/status/"+n.content.focalTweetId}},shouldDisplayBorder:Object(tt.a)(!1)})),me),lt=function(e){var t=e.homeConvoEntry,n=e.tweetContent,a=e.conversationPosition,i=e.socialContext,r=void 0===i?null:i;return{type:Ze.a.Tweet,entryId:t.entryId+"-tweet-"+n.id,itemMetadata:t.itemMetadata,conversationPosition:a,content:Object.assign({},n,{},r?{socialContext:r}:null)}},ct=function(e,t){return t===e.length-1},ut=[],mt=function(e,t){var n=dt(e,t);return n?{formerTweets:e.slice(0,n.index),isMoreReplies:!0,latterTweets:e.slice(n.index)}:{formerTweets:e,isMoreReplies:!1,latterTweets:ut}},dt=function(e,t){if(0===e.length)return null;var n=e[0],a=Object(at.a)(t,(function(e){return e===n.id}));if(a<0)return null;var i=Object(at.a)(e,(function(e,n){var i=e.id,r=a+n;return r<t.length&&t[r]!==i}));if(i<0)return null;var r=a+i,o=e[i].id,s=Object(at.a)(t,(function(e){return e===o}),r);return s<0&&(s=t.length),{index:i,count:s-r}},pt=n("AP4B"),ht=n("S/Qv"),ft=n("/zpt"),vt=Object.assign({},Object(Ye.a)({tweetDismissable:!0,shouldSelfThreadIncludeAvatar:!0}),{},st,{},pt.a,((de={})[Ze.a.Prompt]=ft.a,de[Ze.a.Message]=ht.a,de)),bt=n("MDbM"),_t=n("+VJR"),yt=n.n(_t),gt=R.a.d27b4538,Tt=R.a.b48fc63b,wt=R.a.cced42b4,Et=function(e){var t=e.onImpression;return c.createElement(yt.a,{buttonLink:"/explore",buttonText:wt,header:gt,message:Tt,onImpression:t})},St=n("+ss/"),xt=n("IG4P"),Ct=n("fTQJ"),It=(n("AxOO"),n("WA1W")),At=R.a.e6e752dd,Lt=R.a.bd6bd60f,Mt={count:void 0},Ot=function(e){function t(t,n){var a;return a=e.call(this,t,n)||this,l()(i()(a),"_handleEntriesUpdate",(function(e){var t=e.entries,n=e.fetchStatus,i=a.props,r=i.isInitialScreen,o=i.recordTTFT,s=i.useLatest,l=i.updateLastActiveOnLatestTimestamp;if(n===bt.a.FAILED&&(a._shouldRecordTTFT=!1),a._shouldRecordTTFT&&r&&t.length){var c=t.some((function(e){return e.type===Ze.a.Tweet}));a._shouldRecordTTFT=!1,c&&o()}a._latestTimelineSwitchEnabled&&s&&l(Date.now())})),l()(i()(a),"_renderEmptyTimeline",(function(){return c.createElement(Et,{onImpression:a._handleEmptyHtlImpression})})),l()(i()(a),"_handleEmptyHtlImpression",(function(){var e=a.props,t=e.scribeAction,n=e.scribeNamespace,i=e.scribeData;t(Object.assign({},n,{component:"empty_message",action:"impression"}),i)})),a._shouldRecordTTFT=!0,a._latestTimelineSwitchEnabled=y.a.isTrue("home_timeline_latest_timeline_switch_enabled"),a._checkIsAutoSwitchRequired(),a}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._requiresAutoSwitch&&(this._performAutoSwitch(),this._requiresAutoSwitch=!1)},n.render=function(){if(this._requiresAutoSwitch)return null;var e=this.props,t=e.useLatest,n=e.timelineRef,a=this._latestTimelineSwitchEnabled&&t?It.a:It.b;return c.createElement(Ct.a,{entryConfiguration:vt,fetchTopOptions:Mt,module:a,onEntriesUpdate:this._handleEntriesUpdate,refreshControl:xt.a,renderEmptyState:this._renderEmptyTimeline,timelineRef:n,title:At,withNewTweetsPill:!0})},n._performAutoSwitch=function(){var e=this.props,t=e.updateBehavior,n=e.addToast,a=e.scribeAction,i=e.scribeNamespace,r=e.updateAutoSwitchTimestamp,o=e.lastActiveOnLatestTimestamp,s=e.inactivityThresholdMs,l=e.lastFrustrationEventTimestamp,c=Object(St.a)(o)?function(e){var t=e.lastActiveOnLatestTimestamp,n=e.inactivityThresholdMs,a=e.lastFrustrationEventTimestamp;return{duration_ms:Date.now()-t,event_value:w({inactivityThresholdMs:n,lastFrustrationEventTimestamp:a})}}({lastActiveOnLatestTimestamp:o,inactivityThresholdMs:s,lastFrustrationEventTimestamp:l}):void 0;a(Object.assign({},i,{action:"automatic_switch_to_home"}),c),r({autoSwitchTimestamp:Date.now()}),t({useLatest:!1}).then((function(){n({text:Lt})}))},n._checkIsAutoSwitchRequired=function(){var e=this.props,t=e.useLatest,n=e.lastActiveOnLatestTimestamp,a=e.inactivityThresholdMs,i=e.lastFrustrationEventTimestamp;this._requiresAutoSwitch=!!Object(St.a)(n)&&x({useLatest:t,lastActiveOnLatestTimestamp:n,inactivityThresholdMs:a,lastFrustrationEventTimestamp:i})},t}(c.Component);l()(Ot,"defaultProps",{recordTTFT:We.e});var jt=Object(Ke.d)()(Qe(Ot)),Rt=n("VS6U"),kt=n("LsPn"),Ft=n("zJgq"),Pt=n("jCKl"),zt=n.n(Pt),Dt=n("YrLI"),Gt=n.n(Dt);n.d(t,"HomeTimeline",(function(){return Wt}));var Nt=R.a.b747cc48,Bt=R.a.d3efb777,Ht=R.a.bacb0ed2,qt={page:"home"},Vt={page:"home_latest"},Wt=function(e){function t(t){var n;return n=e.call(this,t)||this,l()(i()(n),"_unmounted",!1),l()(i()(n),"_renderTimeline",(function(){var e=n.props,t=e.useLatest,a=e.isInitialScreen;return c.createElement(b.a,null,c.createElement(jt,{isInitialScreen:a,timelineRef:n._setTimelineRef,useLatest:t}))})),l()(i()(n),"_renderPrimaryContent",(function(e){var t=e.isWide,a=n.props,i=a.history,r=a.location,o=a.configurationFetchStatus,s=c.createElement(T.a,{history:i});return c.createElement(c.Fragment,null,t?y.a.isTrue("responsive_web_inline_composer_enabled")?c.createElement(c.Fragment,null,c.createElement(Be,{history:i,location:r}),c.createElement(Gt.a,null)):c.createElement(He.a,{withBorder:!0}):null,c.createElement(_.a,{component:zt.a,fab:s},Ft.a.isKaiOS()?c.createElement(kt.a,{leftText:Nt,onLeftClick:n._handleSoftLeftClick}):null,c.createElement(g.a,{fetchStatus:o,render:n._renderTimeline})))})),l()(i()(n),"_handleSoftLeftClick",(function(){n.props.history.push("/account")})),l()(i()(n),"_handleTabRefresh",(function(){n._timeline&&n._timeline.refreshToTop()})),l()(i()(n),"_handleWindowFocus",(function(){n._timeline&&n._timeline.fetchTop({onlyIfStale:!0})})),l()(i()(n),"_setTimelineRef",(function(e){n._timeline=e})),n._latestTimelineSwitchEnabled=y.a.isTrue("home_timeline_latest_timeline_switch_enabled"),n}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.addEventListener("focus",this._handleWindowFocus),y.a.isTrue("responsive_web_framerate_tracking_home_enabled")&&(qe()?n.e(303).then(n.bind(null,"Iid0")).then((function(e){return e.default})):Promise.resolve(void 0)).then((function(t){!e._unmounted&&t&&(e._fpsTracking=t({reportNamespace:"home"}))}))},a.componentWillUnmount=function(){this._unmounted=!0,window.removeEventListener("focus",this._handleWindowFocus),this._fpsTracking&&this._fpsTracking.stop()},a.render=function(){var e=this.props,t=e.useLatest,n=e.location,a=e.history,i=this._latestTimelineSwitchEnabled?c.createElement(pe,{scribeNamespace:this._getScribeNamespace(),useLatest:t}):null,r=this._latestTimelineSwitchEnabled&&t?Bt:Ht;return c.createElement(Ke.c,{namespace:this._getScribeNamespace()},c.createElement(Ve.a,null,c.createElement(Rt.a,{history:a,location:n,onTabRefresh:this._handleTabRefresh,primaryContent:this._renderPrimaryContent,rightControl:i,sidebarContent:c.createElement(u.a,{withWelcomePrompt:!1}),title:r,withPillControl:!0,withPrimaryHeader:this._latestTimelineSwitchEnabled})))},a._getScribeNamespace=function(){return this.props.useLatest?Vt:qt},t}(c.Component);t.default=v(Wt)},cjOy:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("91GP");var a=o(n("RvyH")),i=o(n("q1tI")),r=o(n("G04Q"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[r.default.root,e.style],viewBox:"0 0 24 24"}),i.default.createElement("g",null,i.default.createElement("path",{d:"M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"})))};s.metadata={height:24,width:24};var l=s;t.default=l},tZmz:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("91GP");var a=o(n("RvyH")),i=o(n("q1tI")),r=o(n("G04Q"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[r.default.root,e.style],viewBox:"0 0 36 36"}),i.default.createElement("g",null,i.default.createElement("path",{fill:"#71C9F8",d:"M27.325 20.595c0 7.333-5.913 13.278-13.206 13.278S.912 27.928.912 20.595 6.825 7.317 14.12 7.317s13.205 5.944 13.205 13.278"}),i.default.createElement("path",{fill:"#97E3FF",d:"M24.576 20.682c0 5.802-4.678 10.506-10.45 10.506-5.77 0-10.448-4.704-10.448-10.506s4.678-10.506 10.45-10.506c5.77 0 10.448 4.704 10.448 10.506"}),i.default.createElement("path",{fill:"#005FD1",d:"M18.98 20.94l-3.86-.583v-6.215c0-.552-.45-1-1-1s-1 .448-1 1v7.076c0 .06.023.112.033.17.007.042.012.082.025.123.026.084.063.158.11.23.022.038.044.075.072.11.05.06.11.11.173.158.042.03.08.06.128.086.065.034.133.055.204.074.04.01.072.035.114.04l4.704.71c.05.01.1.012.15.012.487 0 .914-.355.988-.85.08-.548-.295-1.058-.84-1.14z"}),i.default.createElement("path",{fill:"#1DA1F2",d:"M24.553 20.682c0 5.79-4.68 10.5-10.434 10.5S3.683 26.47 3.683 20.68c0-2.953 1.227-5.707 3.31-7.665l.674 1.127c.38.635 1.227.668 1.524.06l1.153-2.36 1.312-2.687c.24-.49-.104-1.067-.65-1.088l-2.988-.116-2.625-.1c-.678-.027-1.05.735-.67 1.37l.804 1.344C2.613 13.065.883 16.736.883 20.683c0 7.333 5.937 13.298 13.234 13.298s13.234-5.964 13.234-13.297h-2.8z"}),i.default.createElement("path",{fill:"#FFAD1F",d:"M35 13.36h-1.467v-1.34c0-.552-.448-1-1-1s-1 .448-1 1v1.34h-1.467c-.552 0-1 .45-1 1s.448 1 1 1h1.467v1.342c0 .552.448 1 1 1s1-.448 1-1v-1.34H35c.552 0 1-.45 1-1s-.448-1-1-1z"}),i.default.createElement("path",{fill:"#F6809A",d:"M28.646 4.138h-2.01v-2.01c0-.552-.448-1-1-1s-1 .448-1 1v2.01h-2.01c-.552 0-1 .448-1 1s.448 1 1 1h2.01v2.01c0 .552.448 1 1 1s1-.448 1-1v-2.01h2.01c.552 0 1-.448 1-1s-.447-1-1-1z"})))};s.metadata={height:36,width:36};var l=s;t.default=l},wNSO:function(e,t,n){"use strict";n("84bF"),n("tUrg"),n("91GP");var a=n("PJYZ"),i=n.n(a),r=n("VbXa"),o=n.n(r),s=n("lSNA"),l=n.n(s),c=n("q1tI"),u=(n("f3/d"),n("oEGd")),m=n("peh1"),d=n("zh9S"),p=n("QK5w"),h=Object(m.createSelector)(p.b,(function(e){return{userAvatarURI:e&&e.profile_image_url_https,userName:e&&e.name}})),f={scribeAction:d.c},v=Object(u.f)(h,f),b=n("7JQg"),_=n("YryT"),y=n.n(_),g=n("vJGI"),T=n.n(g),w=n("jKRl"),E=n.n(w),S=n("iqZy"),x=n.n(S),C=n("Epja"),I=n.n(C),A=n("k5dz"),L=n.n(A),M=n("DhGr"),O=n.n(M),j=n("A559"),R=n.n(j),k=n("xqLD"),F=n.n(k),P=y.a.jcfbdafa,z=y.a.b973c93e,D=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,l()(i()(t),"_handleClick",(function(e){var n=t.props,a=n.onClick,i=n.scribeAction,r=n.scribeNamespace;a&&a(e),i(Object.assign({},r,{component:"inline_compose_prompt",action:"click"}))})),t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,n=e.userAvatarURI,a=e.isDisabled,i=e.userName,r=e.promptLabel,o=e.withBorder,s=e.withComposeIcons;return c.createElement(O.a,{accessibilityLabel:P,interactiveStyles:null,link:a?void 0:t,onClick:a?void 0:this._handleClick,style:[G.root,o&&G.borderBottom]},c.createElement(F.a,{accessibilityLabel:i,size:"xLarge",style:G.avatar,uri:n}),c.createElement(I.a,{style:[G.column,G.bodyColumn]},c.createElement(I.a,{style:[G.fakeInput,a&&G.disabled]},c.createElement(L.a,{color:"deepGray",numberOfLines:1},r)),s?c.createElement(c.Fragment,null,c.createElement(E.a,{style:G.icon}),c.createElement(T.a,{style:G.icon}),c.createElement(x.a,{style:G.icon})):null))},t}(c.Component);l()(D,"defaultProps",{link:"/compose/tweet",promptLabel:z,withBorder:!1,withComposeIcons:!0});var G=R.a.create((function(e){return{root:{backgroundColor:e.colors.cellBackground,flexDirection:"row",paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical,zIndex:1},borderBottom:{borderBottomWidth:e.borderWidths.small,borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid"},column:{alignItems:"center",flexBasis:0,flexDirection:"row",flexShrink:1,minWidth:0},avatar:{marginLeft:e.spaces.xSmall},bodyColumn:{flexGrow:7,justifyContent:"space-between",marginLeft:e.spaces.xSmall},fakeInput:{backgroundColor:e.colors.fadedGray,borderRadius:e.borderRadii.infinite,flexGrow:1,flexShrink:1,paddingHorizontal:e.spaces.small,paddingVertical:e.spaces.xSmall},disabled:{opacity:.8},icon:{color:e.colors.primary,height:"calc("+e.spaces.medium+" + "+e.spaces.xxSmall+")",marginLeft:e.spaces.xSmall,width:"calc("+e.spaces.medium+" + "+e.spaces.xxSmall+")"}}}));t.a=Object(b.d)()(v(D))},x8kz:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("91GP");var a=o(n("RvyH")),i=o(n("q1tI")),r=o(n("G04Q"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[r.default.root,e.style],viewBox:"0 0 36 36"}),i.default.createElement("g",null,i.default.createElement("path",{fill:"#61BCF6",d:"M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z"}),i.default.createElement("path",{fill:"#F16888",d:"M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z"}),i.default.createElement("path",{fill:"#FD9E1A",d:"M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z"})))};s.metadata={height:36,width:36};var l=s;t.default=l}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/bundle.HomeTimeline.1927f5b4.js.map