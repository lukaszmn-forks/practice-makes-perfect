(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"0JWC":function(e,t,n){"use strict";n("f3/d");var r=n("RIqP"),a=n.n(r),i=n("PJYZ"),o=n.n(i),s=n("VbXa"),c=n.n(s),l=n("lSNA"),u=n.n(l),d=n("PiaM"),p=n("q1tI"),m=n("k49u"),f=n("oEGd"),y={fetchUser:n("G6rE").e.fetchOne},h=Object(f.a)(y),b=n("QIgh"),E=n("SrtL"),g=n("+VJR"),T=n.n(g),_=n("iLlD"),w=n("yoO3"),k=n("fTQJ"),B=n("tocL"),v=function(e){function t(t){var n;n=e.call(this,t)||this,u()(o()(n),"_getApiErrorHandlerMap",(function(){var e,t=n.props,r=t.fetchUser,a=t.user.id_str;return(e={})[m.a.NotAuthorizedToViewUser]={customAction:function(){return r(a)}},e})),u()(o()(n),"_renderEmptyState",(function(){var e=n.props,t=e.timelineEmptyMessageFormatter,r=e.timelineEmptyHeaderFormatter,a=e.timelineEmptyStateButtonLabel,i=e.timelineEmptyStateButtonLink,o=e.user;return p.createElement(T.a,{buttonLink:i,buttonText:a,header:r&&r({screenName:o.screen_name}),message:t&&t({screenName:o.screen_name})})})),u()(o()(n),"_reorderPinnedTweets",Object(_.a)((function(e){var t=-1;if(e.forEach((function(e,n){d.e(e)&&e.content.socialContext&&e.content.socialContext.generalContext&&"string"==typeof e.content.socialContext.generalContext.contextType&&e.content.socialContext.generalContext.contextType===B.a.Pin&&(t=n)})),t>-1){var n=[e[t]].concat(a()(e));return n.splice(t+1,1),n}return e})));var r=t.displayBlocked,i=t.showWithheldBannerOnMyTweets;return n._entryConfiguration=Object(b.a)({displayBlocked:r,showWithheldBannerOnMyTweets:i}),n}c()(t,e);var n=t.prototype;return n.UNSAFE_componentWillUpdate=function(e){e.displayBlocked!==this.props.displayBlocked&&(this._entryConfiguration=Object(b.a)({displayBlocked:e.displayBlocked,showWithheldBannerOnMyTweets:e.showWithheldBannerOnMyTweets}))},n.render=function(){var e=this.props,t=e.user,n=e.titleFormatter,r=e.module,a=e.timelineTitleFormatter,i=e.loadingLabelFormatter,o=e.fetchOptions,s=e.onEntriesUpdate,c=t.screen_name,l=t.name,u=n({screenName:c,fullName:l}),d=a({fullName:l}),m=i({screenName:c});return p.createElement(w.a,null,p.createElement(E.a,{title:u}),p.createElement(k.a,{apiErrorHandlerMap:this._getApiErrorHandlerMap(),entryConfiguration:this._entryConfiguration,fetchOptions:o,loadingAccessibilityLabel:m,module:r,onEntriesUpdate:s,preprocessEntryList:this._reorderPinnedTweets,renderEmptyState:this._renderEmptyState,title:d}))},t}(p.PureComponent);u()(v,"defaultProps",{displayBlocked:!1,fetchOptions:{},showWithheldBannerOnMyTweets:!1});t.a=h(v)},"8KtR":function(e,t,n){"use strict";n.r(t);var r=n("PJYZ"),a=n.n(r),i=n("VbXa"),o=n.n(i),s=n("lSNA"),c=n.n(s),l=n("q1tI"),u=n("+/eP"),d=n("rKfw"),p=n.n(d),m=n("YryT"),f=n.n(m),y=n("v6aA"),h=n("0JWC"),b=n("7JQg"),E=n("SRyb"),g=f.a.g6c01ff2,T=f.a.i7dda7b6,_=f.a.cbaeb227,w=f.a.a50c2302,k=function(){return f.a.bb3062b2},B=function(){return f.a.f3aabb50},v=function(){return f.a.df87a5f7},I=f.a.abd340e1,F=f.a.e48f0286,O={section:"tweets"},L={section:"tweets_and_replies"},M=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,c()(a()(t),"_getModule",p()(a()(t),(function(e){return e.user.id_str}),(function(e){return e.withReplies}),(function(e,t){return Object(E.a)(e,t)}))),t}o()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.displayBlocked,n=e.onEntriesUpdate,r=e.user,a=e.withReplies,i=this._getModule(),o=this.context.loggedInUserId===r.id_str,s=o?v:k,c=o?B:w,u=o?I:void 0;return l.createElement(b.c,{namespace:a?L:O},l.createElement(h.a,{displayBlocked:t,loadingLabelFormatter:_,module:i,onEntriesUpdate:n,scribeNamespace:this.props.scribeNamespace,timelineEmptyHeaderFormatter:c,timelineEmptyMessageFormatter:s,timelineEmptyStateButtonLabel:u,timelineEmptyStateButtonLink:"/compose/tweet",timelineTitleFormatter:F,titleFormatter:a?T:g,user:r}))},n._isLoggedIn=function(){return!!this.context.loggedInUserId},t}(l.Component);c()(M,"contextType",y.a),c()(M,"defaultProps",{displayBlocked:!1,withReplies:!1}),t.default=Object(u.a)()(M)},YjVx:function(e,t,n){"use strict";n("91GP");var r=n("ZNT5");t.a=function(e){return Object(r.a)({timelineId:"userMedia-"+e,getEndpoint:function(e){return e.URT.fetchUserMedia},getEndpointParams:function(t){return Object.assign({userId:e},t)},context:"FETCH_MEDIA_TIMELINE",perfKey:"userMedia"})}},ivpD:function(e,t,n){"use strict";n.r(t);var r=n("VbXa"),a=n.n(r),i=n("lSNA"),o=n.n(i),s=n("q1tI"),c=n("+/eP"),l=n("YryT"),u=n.n(l),d=n("v6aA"),p=n("0JWC"),m=(n("91GP"),n("ZNT5"));n.d(t,"UserLikesScreen",(function(){return _}));var f=u.a.da91ae30,y=u.a.d9d9283a,h=u.a.f3fab749,b=function(){return u.a.ba7eb273},E=function(){return u.a.h117ca98},g=function(){return u.a.id201ddc},T=u.a.fe28c70f,_=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.displayBlocked,r=t.user,a=this.context.loggedInUserId===r.id_str,i=a?g:b,o=a?E:h;return s.createElement(p.a,{displayBlocked:n,loadingLabelFormatter:y,module:(e=r.id_str,Object(m.a)({timelineId:"favorites-"+e,getEndpoint:function(e){return e.URT.fetchLikes},getEndpointParams:function(t){return Object.assign({userId:e},t)},context:"FETCH_LIKES_TIMELINE",perfKey:"likes"})),scribeNamespace:this.props.scribeNamespace,timelineEmptyHeaderFormatter:o,timelineEmptyMessageFormatter:i,timelineTitleFormatter:T,titleFormatter:f,user:r})},t}(s.Component);o()(_,"contextType",d.a),o()(_,"defaultProps",{displayBlocked:!1});t.default=Object(c.a)({section:"likes"})(_)},ylAD:function(e,t,n){"use strict";n.r(t),n.d(t,"UserMediaScreen",(function(){return w}));var r=n("VbXa"),a=n.n(r),i=n("lSNA"),o=n.n(i),s=n("q1tI"),c=n("+/eP"),l=n("YryT"),u=n.n(l),d=n("v6aA"),p=n("0JWC"),m=n("YjVx"),f=u.a.d9897393,y=u.a.j069c5a0,h=u.a.a987a0f0,b=function(){return u.a.j12462ee},E=function(){return u.a.ccce2d35},g=function(){return u.a.i9be766b},T=u.a.ie3c5a43,_=u.a.g180f083,w=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.displayBlocked,n=e.user,r=this.context.loggedInUserId===n.id_str,a=r?g:b,i=r?E:h,o=r?T:void 0;return s.createElement(p.a,{displayBlocked:t,loadingLabelFormatter:y,module:Object(m.a)(n.id_str),scribeNamespace:this.props.scribeNamespace,timelineEmptyHeaderFormatter:i,timelineEmptyMessageFormatter:a,timelineEmptyStateButtonLabel:o,timelineEmptyStateButtonLink:"/compose/tweet",timelineTitleFormatter:_,titleFormatter:f,user:n})},t}(s.Component);o()(w,"contextType",d.a),o()(w,"defaultProps",{displayBlocked:!1}),t.default=Object(c.a)({section:"media"})(w)}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/bundle.UserProfileTimelines.3d5ec734.js.map