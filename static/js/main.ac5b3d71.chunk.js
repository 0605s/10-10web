(this["webpackJsonp10-10web"]=this["webpackJsonp10-10web"]||[]).push([[0],{152:function(e,t,n){},154:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var r,a,c,i,s,o=n(0),l=n.n(o),u=n(42),p=n.n(u),j=(n(152),n(16)),d=n.n(j),b=n(19),x=n(15),m=(n(154),n(14)),f=n(17),h=f.a.div(r||(r=Object(m.a)(["\n\twidth: 100vw;\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tpadding: 10px max(calc((100vw - 1200px) / 2), 5vw);\n\t/* ","; */\n\tbackground-image: url(",");\n"])),window.screen.width>1100?Math.floor((window.screen.width-1100)/2):"5vw",(function(e){return e.backgroundImg})),O=f.a.div(a||(a=Object(m.a)(["\n\tfont-family: 'YoonGothic';\n\tfont-weight: 500;\n\tfont-size: 3rem;\n\tpadding: 2rem 0px;\n\t/* border-bottom: 3px solid black; */\n"]))),g=f.a.div(c||(c=Object(m.a)(["\n\tfont-family: 'YoonGothic';\n\tfont-weight: 400;\n\tfont-size: 2rem;\n"]))),v=f.a.div(i||(i=Object(m.a)(["\n\tfont-family: 'YoonGothic';\n\tfont-weight: 400;\n\tfont-size: 1.5rem;\n"]))),w=f.a.div(s||(s=Object(m.a)(["\n\tfont-family: 'YoonGothic';\n\tfont-weight: 300;\n\tfont-size: 1rem;\n"]))),k=n(1),y=function(){return Object(k.jsxs)(h,{children:[Object(k.jsx)(O,{children:"\uc11c\uc6b8\ub300\ud559\uad50 \uc5b8\uc5b4\ud559\uacfc"}),Object(k.jsx)("div",{children:"\ud648\ud398\uc774\uc9c0 \uc81c\uc791\uc911\uc785\ub2c8\ub2e4. - team 0605s"})]})},S=n(12),E=n(23),C=n(67),L=n.n(C),T="https://jinh0park.pythonanywhere.com/api/",U="#0f0f70",M="#f8f7ef",I="#666666",P=["korean","english","japanese","chinese","french","spanish"],A=[{name:"In Progress",value:"P"},{name:"Unpublished",value:"U"},{name:"Closed",value:"C"}],_=P.map((function(e){return{name:e,value:e}})),z=[{name:"Online",value:"ON"},{name:"Offline",value:"OFF"}],D=n(77),F=n(78),N=function(){function e(){Object(D.a)(this,e)}return Object(F.a)(e,null,[{key:"setAccessToken",value:function(e){var t=!1;try{this.accessToken=e,t=!0}catch(n){console.error(n)}return t}},{key:"getHeader",value:function(e){return{headers:{Authorization:""===this.accessToken?void 0:"Token ".concat(this.accessToken)},params:e}}}]),e}();N.accessToken="";var q,B,H,G,W,K,Y,R,J,Z,V,$,Q,X,ee,te,ne,re,ae,ce,ie,se,oe,le,ue,pe,je,de,be,xe,me,fe=N,he=function(e,t){return L.a.get("".concat(T).concat(e),fe.getHeader(t))},Oe=function(e,t){return L.a.post("".concat(T).concat(e),t,fe.getHeader())},ge=n(18),ve=Object(ge.m)({accessToken:"",setAccessToken:function(e){this.accessToken=e},saveAccessToken:function(e){try{window.localStorage.setItem("ACCESS_TOKEN",e)}catch(t){console.error("========= setAccessToken Error ========="),console.error(t)}},getAccessToken:function(){var e=this;return Object(b.a)(d.a.mark((function t(){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,window.localStorage.getItem("ACCESS_TOKEN");case 4:(r=t.sent)&&null!==r&&e.setAccessToken(r),n=!0,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("========= getAccessToken Error ========="),console.error(t.t0);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},clear:function(){var e=this;return Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,window.localStorage.clear();case 4:e.setAccessToken(""),n=!0,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("========= clear Error ========="),console.error(t.t0);case 12:return t.abrupt("return",n);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}),we=Object(ge.m)({user:null,setUser:function(e){this.user=e},signUp:function(e,t){return Object(b.a)(d.a.mark((function n(){var r,a,c,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,a=200,c="",n.prev=3,n.next=6,Oe("signup/",{email:e,pw:t});case 6:i=n.sent,c=i.data.Token,a=i.status,r=!0,n.next=17;break;case 12:n.prev=12,n.t0=n.catch(3),console.error("========= SignUp Error ========="),a=n.t0.response.status,console.error(n.t0);case 17:return n.abrupt("return",{success:r,code:a,token:c});case 18:case"end":return n.stop()}}),n,null,[[3,12]])})))()},login:function(e,t){var n=this;return Object(b.a)(d.a.mark((function r(){var a,c,i,s;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=!1,c=200,i="",r.prev=3,r.next=6,Oe("login/",{email:e,pw:t});case 6:if(200!==(s=r.sent).status){r.next=19;break}return i=s.data.Token,c=s.status,a=!0,r.next=13,ve.setAccessToken(s.data.Token);case 13:return r.next=15,ve.saveAccessToken(s.data.Token);case 15:return r.next=17,fe.setAccessToken(s.data.Token);case 17:r.sent&&n.getUserInfo();case 19:r.next=26;break;case 21:r.prev=21,r.t0=r.catch(3),console.error("========= login Error ========="),c=r.t0.response.status,console.error(r.t0);case 26:return r.abrupt("return",{success:a,code:c,token:i});case 27:case"end":return r.stop()}}),r,null,[[3,21]])})))()},getUserInfo:function(){var e=this;return Object(b.a)(d.a.mark((function t(){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,he("mypage/");case 4:r=t.sent,e.setUser(r.data),n=!0,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("========= getUserInfo Error ========="),console.error(t.t0);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},postUserInfo:function(e,t,n){var r=this;return Object(b.a)(d.a.mark((function a(){var c,i;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=!1,a.prev=1,a.next=4,Oe("mypage/",{favor:e,subscribe:t,lingual:n});case 4:i=a.sent,r.setUser(i.data),c=!0,a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),console.error("========= postUserInfo Error ========="),console.error(a.t0);case 13:return a.abrupt("return",c);case 14:case"end":return a.stop()}}),a,null,[[1,9]])})))()},deleteUser:function(){var e=this;return Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,r="mypage/",a=void 0,L.a.delete("".concat(T).concat(r),fe.getHeader(a));case 4:200===t.sent.status&&(e.setUser(null),ve.clear(),n=!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("========= deleteUser Error ========="),console.error(t.t0);case 12:return t.abrupt("return",n);case 13:case"end":return t.stop()}var r,a}),t,null,[[1,8]])})))()},logout:function(){var e=this;return Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1;try{e.setUser(null),ve.clear(),n=!0}catch(r){console.error("========= signOutUser Error ========="),console.error(r)}return t.abrupt("return",n);case 3:case"end":return t.stop()}}),t)})))()}}),ke=Object(ge.m)({isOpen:!1,message:{type:"error",text:""},setIsOpen:function(e){this.isOpen=e},setMessage:function(e,t){this.message.text=t,this.message.type=e,this.setIsOpen(!0)}}),ye=Object(ge.m)({experimentList:[],myExperimentList:[],experimentDetail:{},setExperimentList:function(e){this.experimentList=e},setMyExperimentList:function(e){this.myExperimentList=e},setExperimentDetail:function(e){this.experimentDetail=e},getExperimentList:function(e,t,n,r){var a=this;return Object(b.a)(d.a.mark((function c(){var i,s;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=!1,c.prev=1,a.setExperimentList([]),c.next=5,he("experiments/",{lingual:e&&e.length>0?e:void 0,status:t,is_full:n?"no":void 0,exp_type:r});case 5:s=c.sent,a.setExperimentList(s.data),i=!0,c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),console.error("========= getExperimentList Error ========="),console.error(c.t0);case 14:return c.abrupt("return",i);case 15:case"end":return c.stop()}}),c,null,[[1,10]])})))()},getExperimentDetail:function(e){var t=this;return Object(b.a)(d.a.mark((function n(){var r,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,n.prev=1,t.setExperimentDetail(void 0),n.next=5,he("experiments/".concat(e,"/"));case 5:a=n.sent,t.setExperimentDetail(a.data),r=!0,n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.error("========= getExperimentDetail Error ========="),console.error(n.t0);case 14:return n.abrupt("return",r);case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()},getMyExperimentList:function(){var e=this;return Object(b.a)(d.a.mark((function t(){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,he("experiments/my/");case 4:r=t.sent,e.setMyExperimentList(r.data),n=!0,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("========= getMyExperimentDetail Error ========="),console.log(t.t0);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},putExperimentDetail:function(e){return Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,r="experiments/".concat(e,"/"),a=void 0,c=void 0,L.a.put("".concat(T).concat(r),a,fe.getHeader(c));case 4:200===t.sent.data&&(n=!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("========= putExperimentDetail Error ========="),console.error(t.t0);case 12:return t.abrupt("return",n);case 13:case"end":return t.stop()}var r,a,c}),t,null,[[1,8]])})))()}}),Se=Object(ge.m)({loading:!0,setLoading:function(e){this.loading=e}}),Ee=function(){return{UserStore:we,TokenStore:ve,ToastStore:ke,ExperimentStore:ye,LoadingStore:Se}},Ce=n(244),Le=n(239),Te=n(245),Ue=n(231),Me=n(247),Ie=n(83),Pe=n.n(Ie),Ae=function(e){return/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(e)},_e=Object(f.a)(h)(q||(q=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]))),ze=f.a.div(B||(B=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 50%;\n"]))),De=Object(E.a)((function(){var e=Ee(),t=e.UserStore,n=e.ToastStore,r=(e.TokenStore,Object(x.g)()),a=Object(Ce.a)().t,c=Object(o.useState)(""),i=Object(S.a)(c,2),s=i[0],l=i[1],u=Object(o.useState)(!1),p=Object(S.a)(u,2),j=p[0],m=p[1],f=Object(o.useState)(""),h=Object(S.a)(f,2),O=h[0],g=h[1],v=Object(o.useState)(!1),w=Object(S.a)(v,2),y=w[0],E=w[1],C=function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==s.trim().length){e.next=5;break}n.setMessage("warning","\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),m(!0),e.next=19;break;case 5:if(Ae(s.trim())){e.next=10;break}n.setMessage("warning","\uc62c\ubc14\ub978 \ud615\uc2dd\uc758 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),m(!0),e.next=19;break;case 10:if(0!==O.trim().length){e.next=15;break}n.setMessage("warning","\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694"),E(!0),e.next=19;break;case 15:return e.next=17,t.login(s,O);case 17:!(a=e.sent)||a.code>=500?n.setMessage("error","\uc11c\ubc84 \uc624\ub958"):a&&a.code>=401&&a?(n.setMessage("error","\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacc4\uc815\uc774\uac70\ub098 \ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub9bd\ub2c8\ub2e4"),m(!0),E(!0)):(n.setMessage("success","".concat(s,"\ub85c \ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),r.goBack());case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(_e,{children:[Object(k.jsx)(Le.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(k.jsx)(Pe.a,{})}),Object(k.jsx)(Te.a,{component:"h1",variant:"h5",children:a("login")}),Object(k.jsxs)(ze,{children:[Object(k.jsx)(Ue.a,{margin:"normal",required:!0,id:"email",label:a("Email Address"),name:"email",autoComplete:"email",fullWidth:!0,autoFocus:!0,onChange:function(e){return l(e.target.value)},error:j}),Object(k.jsx)(Ue.a,{margin:"normal",required:!0,name:"password",label:a("Password"),type:"password",id:"password",fullWidth:!0,autoComplete:"current-password",onChange:function(e){return g(e.target.value)},error:y,onKeyPress:function(e){"Enter"===e.key&&C()}})]}),Object(k.jsx)(Me.a,{variant:"text",size:"medium",onClick:function(){return r.push("/signup")},children:"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"}),Object(k.jsx)(Me.a,{type:"submit",size:"medium",variant:"contained",onClick:C,children:a("login")})]})})),Fe=De,Ne=n(249),qe=n(229),Be=n(248),He=n(236),Ge=function(e){var t=e.name,n=e.isSelected,r=e.onClick,a=Object(Ce.a)().t;return Object(k.jsx)(Me.a,{variant:n?"contained":"outlined",onClick:r,children:a(t)})},We=f.a.div(H||(H=Object(m.a)(["\n\tpadding: 20px 0px;\n"]))),Ke=Object(f.a)(w)(G||(G=Object(m.a)(["\n\twidth: 100px;\n\ttext-align: center;\n"]))),Ye=Object(f.a)(qe.a)(W||(W=Object(m.a)(["\n\tmargin: 20px 0px;\n"]))),Re=Object(E.a)((function(){var e=Ee(),t=e.ExperimentStore,n=e.LoadingStore,r=Object(Ce.a)().t,a=Object(o.useState)(void 0),c=Object(S.a)(a,2),i=c[0],s=c[1],l=Object(o.useState)(!1),u=Object(S.a)(l,2),p=u[0],j=u[1],x=Object(o.useState)(void 0),m=Object(S.a)(x,2),f=m[0],h=m[1],O=Object(o.useState)([]),g=Object(S.a)(O,2),v=g[0],w=g[1],y=function(){var e=Object(b.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),s(i===r?void 0:r),e.next=4,t.getExperimentList(v.join(","),i===r?void 0:r,p,f);case 4:e.sent&&n.setLoading(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),j(r),e.next=4,t.getExperimentList(v.join(","),i,r,f);case 4:e.sent&&n.setLoading(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),h(f===r?void 0:r),e.next=4,t.getExperimentList(v.join(","),i,p,f===r?void 0:r);case 4:e.sent&&n.setLoading(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),w(v.includes(r)?v.filter((function(e){return e!==r})):v.concat(r)),e.next=4,t.getExperimentList(v.includes(r)?v.filter((function(e){return e!==r})).join(","):v.concat(r).join(","),i,p,f);case 4:e.sent&&n.setLoading(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)(We,{children:[Object(k.jsxs)(Ye,{spacing:2,direction:"row",alignItems:"center",children:[Object(k.jsx)(Ke,{children:r("status")}),A.map((function(e){return Object(k.jsx)(Ge,{name:e.name,isSelected:i===e.value,onClick:function(){return y(e.value)}},e.name)}))]}),Object(k.jsxs)(Ye,{spacing:2,direction:"row",alignItems:"center",children:[Object(k.jsx)(Ke,{children:r("language")}),_.map((function(e){return Object(k.jsx)(Ge,{name:e.name,isSelected:v.includes(e.value),onClick:function(){return L(e.value)}},e.name)}))]}),Object(k.jsxs)(Ye,{spacing:2,direction:"row",alignItems:"center",children:[Object(k.jsx)(Ke,{children:r("experiment type")}),z.map((function(e){return Object(k.jsx)(Ge,{name:e.name,isSelected:f===e.value,onClick:function(){return C(e.value)}},e.name)}))]}),Object(k.jsx)(Be.a,{control:Object(k.jsx)(He.a,{checked:!0===p,onClick:function(){return E(!p)}}),label:r("seeOnlyAvailable")})]})})),Je=Re,Ze=n(241),Ve=n(240),$e=n(125),Qe=n.n($e),Xe=n(126),et=n.n(Xe),tt=f.a.div(K||(K=Object(m.a)(["\n\twidth: 100%;\n\theight: 350px;\n\tborder-radius: 10px;\n\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\t:hover {\n\t\topacity: 0.7;\n\t\tcursor: pointer;\n\t}\n"]))),nt=Object(f.a)(Ve.a)(Y||(Y=Object(m.a)(["\n\tfont-size: 1rem;\n\tfont-weight: 400;\n\tposition: absolute;\n\ttop: 5%;\n\tright: 5%;\n\tz-index: 2;\n"]))),rt=Object(f.a)(Ve.a)(R||(R=Object(m.a)([""]))),at=f.a.div(J||(J=Object(m.a)(["\n\tposition: absolute;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 0px 0px 10px 10px;\n\tbackground-color: ",";\n\tcolor: white;\n\tfont-size: 1.3 rem;\n\tfont-weight: 500;\n"])),(function(e){return e.isFull?I:"green"})),ct=function(e){var t=e.item,n=Object(x.g)(),r=Object(o.useCallback)((function(){n.push("/experiment/".concat(t.id)),window.scrollTo({top:0,behavior:"smooth"})}),[]);return Object(k.jsxs)(tt,{onClick:r,children:[Object(k.jsx)(g,{children:t.title}),"ON"===t.exp_type?Object(k.jsx)(nt,{icon:Object(k.jsx)(Qe.a,{}),label:"ONLINE"}):Object(k.jsx)(nt,{icon:Object(k.jsx)(et.a,{}),label:"OFFLINE"}),Object(k.jsx)(qe.a,{direction:"row",spacing:2,style:{marginTop:20},children:t.lingual&&t.lingual.split(",").map((function(e){return Object(k.jsx)(rt,{label:"# ".concat(e),variant:"outlined",size:"small"},e)}))}),Object(k.jsx)(at,{isFull:t.is_full,children:t.is_full?"\ubaa8\uc9d1 \uc644\ub8cc":"\ubaa8\uc9d1\uc911 ".concat(t.count_participants,"\uba85 / ").concat(t.max_participants,"\uba85\n")})]})},it=Object(E.a)((function(){var e=Ee().ExperimentStore;return Object(k.jsx)(Ze.a,{container:!0,rowSpacing:2,columnSpacing:3,alignItems:"center",children:e.experimentList.map((function(e){return Object(k.jsx)(Ze.a,{item:!0,xs:12,md:6,children:Object(k.jsx)(ct,{item:e},e.title)},e.title)}))})})),st=Object(E.a)((function(){var e=Ee(),t=e.ExperimentStore,n=e.LoadingStore,r=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),e.next=3,t.getExperimentList();case 3:e.sent&&n.setLoading(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){r()}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Je,{}),n.loading?Object(k.jsx)(Ne.a,{}):t.experimentList.length?Object(k.jsx)(it,{}):Object(k.jsx)(v,{children:"\uc870\uac74\uc5d0 \ub9de\ub294 \uc2e4\ud5d8\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]})})),ot=st,lt=n(232),ut=n(250),pt=Object(f.a)(lt.a)(Z||(Z=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),jt=Object(f.a)(ut.a)(V||(V=Object(m.a)(["\n\twidth: 200px;\n\tfont-size: 20px;\n\theight: 50px;\n"]))),dt=function(e){var t=e.menu,n=Object(x.h)(),r=Object(x.g)(),a=Object(Ce.a)().t;return Object(k.jsx)(pt,{value:function(){var e=n.pathname;return!!t.map((function(e){return e.domain})).includes(e)&&"".concat(e)}(),orientation:"vertical",children:t.map((function(e){return Object(k.jsx)(jt,{label:a(e.title),value:e.domain,onClick:function(){return r.push("".concat(e.domain))}},e.title)}))})},bt=f.a.div($||($=Object(m.a)(["\n\tflex: 1;\n\twidth: 100vw;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-sizing: border-box;\n\tbackground-color: '#B0B0B0';\n\tpadding: 50px max(calc((100vw - 1000px) / 2), 5vw);\n"]))),xt=f.a.div(Q||(Q=Object(m.a)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]))),mt=Object(f.a)(g)(X||(X=Object(m.a)(["\n\theight: 70px;\n\tmargin-bottom: 30px;\n\tborder-bottom: 5px solid ",";\n\tborder-radius: 2px;\n\ttext-align: center;\n"])),U),ft=function(e){var t=e.title,n=e.menu,r=e.children,a=Object(Ce.a)().t;return Object(k.jsxs)(bt,{children:[n&&Object(k.jsx)(dt,{menu:n}),Object(k.jsxs)(xt,{children:[t&&Object(k.jsx)(mt,{children:a(t)}),r&&r]})]})},ht=[{title:"lists",domain:"/experiment"},{title:"my experiments",domain:"/experiment/my"}],Ot=[{title:"schedule",domain:"/event/schedule"},{title:"colloquium",domain:"/event/colloquium"},{title:"seminar",domain:"/event/seminar"},{title:"news",domain:"/event/news"}],gt=[{title:"themes",domain:"/research/themes"},{title:"labs",domain:"/research/labs"},{title:"affiliated projects",domain:"/research/affiliated"}],vt=function(){return Object(k.jsx)(ft,{title:"Experiments",menu:ht,children:Object(k.jsx)(ot,{})})},wt=f.a.div(ee||(ee=Object(m.a)(["\n\twidth: 100vw;\n\theight: 100px;\n\tbox-sizing: border-box;\n\tpadding: 10px max(calc((100vw - 1000px) / 2), 5vw);\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: white;\n"]))),kt=f.a.img(te||(te=Object(m.a)(["\n\twidth: 200px;\n\theight: auto;\n\topacity: 1;\n\t:hover {\n\t\topacity: 0.8;\n\t\tcursor: pointer;\n\t}\n"]))),yt=Object(f.a)(Me.a)(ne||(ne=Object(m.a)([""]))),St=Object(E.a)((function(){var e,t=Object(x.g)(),n=Object(Ce.a)(),r=n.i18n,a=n.t,c=Ee().UserStore;return Object(k.jsxs)(wt,{children:[Object(k.jsx)(kt,{src:"".concat("/10-10web","/img/snuling_logo.png"),alt:"",onClick:function(){return t.push("/")}}),Object(k.jsxs)(qe.a,{spacing:2,direction:"row",alignItems:"center",children:[Object(k.jsx)(Me.a,{variant:"text",onClick:function(){"ko"===r.language?r.changeLanguage("en"):"en"===r.language&&r.changeLanguage("ko")},children:"ko"===r.language?"English":"\ud55c\uad6d\uc5b4"}),null!==c.user?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w,{children:null===(e=c.user)||void 0===e?void 0:e.username}),Object(k.jsx)(yt,{variant:"text",onClick:function(){return t.push("/mypage")},children:a("My Page")})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(yt,{variant:"outlined",onClick:function(){return t.push("/login")},children:a("login")}),Object(k.jsx)(yt,{variant:"text",onClick:function(){return t.push("/signup")},children:a("Sign Up")})]})]})]})})),Et=n(29),Ct=n(243),Lt=n(230),Tt=n(252),Ut=n(237),Mt=n(234),It=n(133),Pt=function(){return Object(k.jsx)(ft,{title:"People"})},At=function(){var e=Object(x.i)().type;return Object(k.jsx)(ft,{title:e,menu:gt})},_t=Object(f.a)(h)(re||(re=Object(m.a)(["\n\tbackground-color: ",";\n\theight: 200px;\n\tpadding: 0px 10vw;\n\tdisplay: flex;\n\tflex-direction: row;\n"])),U),zt=f.a.div(ae||(ae=Object(m.a)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: ",";\n"])),(function(e){return"right"===e.type&&"flex-end"})),Dt=f.a.img(ce||(ce=Object(m.a)(["\n\twidth: 200px;\n\theight: auto;\n\topacity: 1;\n\tmargin-bottom: 20px;\n\t:hover {\n\t\tcursor: pointer;\n\t}\n"]))),Ft=Object(f.a)(w)(ie||(ie=Object(m.a)(["\n\tcolor: white;\n\ttext-align: left;\n\tline-height: 25px;\n\ttext-decoration: none;\n"]))),Nt=[{name:"\uc5b8\uc5b4\ud559\uacfc \ud648\ud398\uc774\uc9c0",url:"http://hosting01.snu.ac.kr/~linguist/"},{name:"\uc11c\uc6b8\ub300\ud559\uad50 \uc778\ubb38\ub300\ud559",url:"http://humanities.snu.ac.kr"}],qt=function(){var e=Object(Ce.a)().t;return Object(k.jsxs)(_t,{children:[Object(k.jsxs)(zt,{type:"left",children:[Object(k.jsx)(Dt,{src:"".concat("/10-10web","/img/snuling_logo.png"),alt:"snuling_logo"}),Object(k.jsx)(Ft,{children:e("address")})]}),Object(k.jsxs)(zt,{type:"right",children:[Object(k.jsx)(Ft,{children:"\uad00\ub828 \uc0ac\uc774\ud2b8"}),Nt.map((function(e){return Object(k.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(k.jsx)(Ft,{children:e.name})},e.name)}))]})]})},Bt=n(129),Ht=n.n(Bt),Gt=n(128),Wt=n.n(Gt),Kt=n(127),Yt=n.n(Kt),Rt=f.a.div(se||(se=Object(m.a)(["\n\twidth: 70%;\n\tpadding: 10px;\n\tborder-radius: 10px;\n\tbackground-color: ",";\n\tmargin: 10px 0px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n"])),M),Jt=Object(f.a)(w)(oe||(oe=Object(m.a)(["\n\tmargin: 5px 0px;\n\tdisplay: flex;\n\talign-items: center;\n"]))),Zt=function(e){var t=e.experiment;Object(Ce.a)().t;return Object(k.jsxs)(Rt,{children:[Object(k.jsxs)(Jt,{children:[Object(k.jsx)(Yt.a,{fontSize:"small"}),"\uc8fc\uc758\uc0ac\ud56d"]}),Object(k.jsx)(Jt,{children:"ON"===t.exp_type?"\ubcf8 \uc2e4\ud5d8\uc740 \uc628\ub77c\uc778\uc73c\ub85c \uc9c4\ud589\ub429\ub2c8\ub2e4.":"\ubcf8 \uc2e4\ud5d8\uc740 ".concat(t.location,"\uc5d0\uc11c \uc624\ud504\ub77c\uc778\uc73c\ub85c \uc9c4\ud589\ub429\ub2c8\ub2e4.")}),Object(k.jsxs)(Jt,{children:["\ubcf8 \uc2e4\ud5d8\uc5d0 \ucc38\uc5ec\ud574 \uc8fc\uc2dc\uba74"," ","CASH"===t.reward_type?"".concat(t.reward_price,"\uc6d0\uc744 \ud604\uae08\uc73c\ub85c \uc9c0\uae09\ud574 \ub4dc\ub9bd\ub2c8\ub2e4."):"".concat(t.reward,"\ub97c \ub4dc\ub9bd\ub2c8\ub2e4.")]})]})},Vt=Object(E.a)((function(){var e=Object(x.i)().id,t=(Object(x.g)(),Ee()),n=t.ExperimentStore,r=t.UserStore,a=t.ToastStore;t.LoadingStore;return n.experimentDetail?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(g,{children:n.experimentDetail.title}),Object(k.jsx)(v,{dangerouslySetInnerHTML:{__html:"".concat(n.experimentDetail.content)}}),Object(k.jsx)(Me.a,{disabled:n.experimentDetail.is_full,onClick:function(){var t;null===r.user?a.setMessage("info","\uc2e4\ud5d8\uc5d0 \ucc38\uc5ec\ud558\uc2dc\ub824\uba74 \uba3c\uc800 \ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694"):"ON"===(null===(t=n.experimentDetail)||void 0===t?void 0:t.exp_type)&&(n.putExperimentDetail(parseInt(e,10)),a.setMessage("success","\uc2e4\ud5d8\uc5d0 \ucc38\uc5ec\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),window.open(n.experimentDetail.link,"_blank"))},endIcon:Object(k.jsx)(Wt.a,{}),variant:"contained",children:n.experimentDetail.is_full?"\ubaa8\uc9d1 \ub9c8\uac10":"\uc2e4\ud5d8 \ucc38\uc5ec\ud558\uae30"}),Object(k.jsx)(Zt,{experiment:n.experimentDetail})]}):null})),$t=Object(f.a)(Me.a)(le||(le=Object(m.a)(["\n\talign-self: flex-start;\n"]))),Qt=Object(E.a)((function(){var e=Object(x.i)().id,t=Object(x.g)(),n=Ee(),r=n.ExperimentStore,a=n.LoadingStore,c=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setLoading(!0),t.next=3,r.getExperimentDetail(parseInt(e,10));case 3:t.sent&&a.setLoading(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){c()}),[]),Object(k.jsxs)(ft,{menu:ht,children:[Object(k.jsx)($t,{onClick:function(){return t.goBack()},startIcon:Object(k.jsx)(Ht.a,{}),children:"\ubaa9\ub85d\uc73c\ub85c \uac00\uae30"}),a.loading?Object(k.jsx)(Ne.a,{}):Object(k.jsx)(Vt,{})]})})),Xt=Qt,en=Object(f.a)(lt.a)(ue||(ue=Object(m.a)(["\n\twidth: 100vw;\n\tbox-sizing: border-box;\n\tpadding: 0px max(calc((100vw - 1000px) / 2), 5vw);\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbox-shadow: rgba(33, 35, 38, 0.3) 0px 10px 10px -10px;\n\tcolor: '#666666';\n\tz-index: 10;\n\tbackground-color: white;\n"]))),tn=Object(f.a)(ut.a)(pe||(pe=Object(m.a)([""]))),nn=[{title:"People",url:"/people"},{title:"Events & News",url:"/event"},{title:"Research & Projects",url:"/research"},{title:"Experiments",url:"/experiment"}],rn=function(){var e=Object(x.h)(),t=Object(x.g)(),n=Object(Ce.a)().t;return Object(k.jsx)(en,{value:function(){var t=e.pathname.split("/")[1];return!!["people","event","research","experiment"].includes(t)&&"/".concat(t)}(),centered:!0,variant:"fullWidth",textColor:"inherit",indicatorColor:"secondary",children:nn.map((function(e){return Object(k.jsx)(tn,{label:n(e.title),value:e.url,onClick:function(){return t.push("".concat(e.url))},sx:{fontSize:16}},e.title)}))})},an=n(57),cn=function(){var e=Ee(),t=e.UserStore,n=e.ToastStore,r=e.ExperimentStore,a=Object(x.g)();return Object(o.useEffect)((function(){null===t.user&&(n.setMessage("warning","\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."),a.push("/experiment"))}),[]),Object(k.jsx)(ft,{title:"my experiments",menu:ht,children:r.myExperimentList.length>0?Object(k.jsx)(Ze.a,{container:!0,rowSpacing:2,columnSpacing:3,alignItems:"center",children:r.myExperimentList.map((function(e){return Object(k.jsx)(Ze.a,{item:!0,xs:12,md:6,children:Object(k.jsx)(ct,{item:e},e.title)},e.title)}))}):Object(k.jsx)("div",{children:"\uc544\uc9c1 \ucc38\uc5ec\ud55c \uc2e4\ud5d8\uc774 \uc5c6\uad70\uc694 ! \uc9c0\uae08 \ucc38\uc5ec\ud574\ubcf4\uc138\uc694"})})},sn=Object(f.a)(h)(je||(je=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]))),on=f.a.div(de||(de=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 50%;\n"]))),ln=Object(E.a)((function(){var e=Ee(),t=e.UserStore,n=e.ToastStore,r=Object(x.g)(),a=Object(Ce.a)().t,c=Object(o.useState)(""),i=Object(S.a)(c,2),s=i[0],l=i[1],u=Object(o.useState)(!1),p=Object(S.a)(u,2),j=p[0],m=p[1],f=Object(o.useState)(""),h=Object(S.a)(f,2),O=h[0],g=h[1],v=Object(o.useState)(!1),w=Object(S.a)(v,2),y=w[0],E=w[1],C=Object(o.useState)(""),L=Object(S.a)(C,2),T=L[0],U=L[1],M=Object(o.useState)(!1),I=Object(S.a)(M,2),P=I[0],A=I[1],_=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==s.trim().length){e.next=5;break}n.setMessage("warning","\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),m(!0),e.next=30;break;case 5:if(Ae(s.trim())){e.next=10;break}n.setMessage("warning","\uc62c\ubc14\ub978 \ud615\uc2dd\uc758 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),m(!0),e.next=30;break;case 10:if(0!==O.trim().length){e.next=15;break}n.setMessage("warning","\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694"),E(!0),e.next=30;break;case 15:if(0!==T.trim().length){e.next=20;break}n.setMessage("warning","\ube44\ubc00\ubc88\ud638 \ud655\uc778\uc744 \uc785\ub825\ud558\uc138\uc694"),A(!0),e.next=30;break;case 20:if(T===O){e.next=25;break}n.setMessage("warning","\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),A(!0),e.next=30;break;case 25:return e.next=27,t.signUp(s,O);case 27:t.login(s,O),r.push("/"),n.setMessage("success","\ud68c\uc6d0\uac00\uc785 \uc131\uacf5");case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(sn,{children:[Object(k.jsx)(Le.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(k.jsx)(Pe.a,{})}),Object(k.jsx)(Te.a,{component:"h1",variant:"h5",children:a("Sign Up")}),Object(k.jsxs)(on,{children:[Object(k.jsx)(Ue.a,{margin:"normal",required:!0,id:"email",label:a("Email Address"),name:"email",autoComplete:"email",fullWidth:!0,autoFocus:!0,onChange:function(e){return l(e.target.value)},error:j}),Object(k.jsx)(Ue.a,{margin:"normal",required:!0,name:"password",label:a("Password"),type:"password",id:"password",fullWidth:!0,autoComplete:"current-password",onChange:function(e){return g(e.target.value)},error:y}),Object(k.jsx)(Ue.a,{margin:"normal",required:!0,name:"password",label:a("Password"),type:"password",id:"password",fullWidth:!0,autoComplete:"current-password",onChange:function(e){return U(e.target.value)},error:P})]}),Object(k.jsx)(Me.a,{type:"submit",size:"medium",variant:"contained",onClick:_,children:a("Sign Up")})]})})),un=ln,pn=function(){var e=Object(x.i)().type;return Object(k.jsx)(ft,{title:e,menu:Ot})},jn=n(251),dn=n(131),bn=n.n(dn),xn=n(130),mn=n.n(xn),fn=f.a.div(be||(be=Object(m.a)(["\n\twidth: 60%;\n\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n\tmargin: 10px 0px;\n"]))),hn=Object(f.a)(g)(xe||(xe=Object(m.a)(["\n\tdisplay: flex;\n\tpadding: 10px;\n\tbackground-color: ",";\n\tcolor: white;\n\tjustify-content: space-between;\n"])),I),On=f.a.div(me||(me=Object(m.a)(["\n\tmin-height: 100px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]))),gn=function(e){var t=e.title,n=e.children,r=e.editMode,a=e.onPressEditButton,c=e.onPressSaveButton;return Object(k.jsxs)(fn,{children:[Object(k.jsxs)(hn,{children:[t,r?Object(k.jsx)(jn.a,{onClick:c,children:Object(k.jsx)(mn.a,{})}):Object(k.jsx)(jn.a,{onClick:a,children:Object(k.jsx)(bn.a,{})})]}),Object(k.jsx)(On,{children:n})]})},vn=function(){var e,t=Ee().UserStore;return null===t.user?null:Object(k.jsx)(gn,{title:"Account Settings",children:Object(k.jsxs)("div",{children:["Email: ",null===(e=t.user)||void 0===e?void 0:e.username]})})},wn=n(242),kn=n(235),yn=Object(E.a)((function(){var e,t,n=Ee().UserStore,r=Object(o.useState)((null===(e=n.user)||void 0===e?void 0:e.profile.lingual)?null===(t=n.user)||void 0===t?void 0:t.profile.lingual.split(","):[]),a=Object(S.a)(r,2),c=a[0],i=a[1],s=Object(o.useState)(!1),l=Object(S.a)(s,2),u=l[0],p=l[1];return null===n.user?null:Object(k.jsxs)(gn,{title:"Lingual Settings",editMode:u,onPressEditButton:function(){return p(!u)},onPressSaveButton:function(){p(!u)},children:[Object(k.jsxs)("div",{children:["Languages: ",c.join(", ")||"\uc120\ud638 \uc5b8\uc5b4 \uc5c6\uc74c"]}),Object(k.jsx)(wn.a,{children:P.map((function(e){return Object(k.jsx)(Be.a,{value:e,control:Object(k.jsx)(kn.a,{checked:c.includes(e),disabled:!u,onClick:function(){c.includes(e)?i(c.filter((function(t){return t!==e}))):i(c.concat(e))}}),label:e},e)}))})]})})),Sn=function(){var e,t=Ee().UserStore;return null===t.user?null:Object(k.jsx)(gn,{title:"Email Settings",children:Object(k.jsxs)("div",{children:["Email \uc218\uc2e0 : ",(null===(e=t.user)||void 0===e?void 0:e.profile.subscribe)?"\ub3d9\uc758 ":"\ube44\ub3d9\uc758"]})})},En=Object(E.a)((function(){var e=Ee(),t=e.UserStore,n=e.ToastStore,r=e.TokenStore,a=Object(x.g)(),c=Object(Ce.a)().t;Object(o.useEffect)((function(){null===t.user&&a.replace("/")}),[]);var i=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.logout();case 2:e.sent&&(r.clear(),a.push("/"),n.setMessage("success","\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteUser();case 2:e.sent&&(r.clear(),a.push("/"),n.setMessage("success","\ud68c\uc6d0\ud0c8\ud1f4 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)(ft,{title:"My Info",children:[Object(k.jsx)(Me.a,{variant:"contained",onClick:i,children:c("logout")}),Object(k.jsx)(Me.a,{variant:"text",onClick:s,children:c("quit")}),Object(k.jsx)(vn,{}),Object(k.jsx)(yn,{}),Object(k.jsx)(Sn,{})]})})),Cn=En,Ln=Object(It.a)({palette:{primary:{light:"#8787b7",main:U},secondary:{light:M,main:"#dcdab2"},background:{default:"#f3f3f3"}},typography:{fontFamily:"YoonGothic"}}),Tn=Object(E.a)((function(){var e=Ee(),t=e.ToastStore,n=e.TokenStore,r=e.UserStore,a=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getAccessToken();case 2:e.sent&&(fe.setAccessToken(n.accessToken),r.getUserInfo());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){a()}),[]),Object(Et.d)((function(){return Object(k.jsx)(an.a,{basename:"/10-10web",children:Object(k.jsxs)(Ct.a,{theme:Ln,children:[Object(k.jsx)(Lt.a,{}),Object(k.jsx)(St,{}),Object(k.jsx)(rn,{}),Object(k.jsx)(Tt.a,{sx:{flex:1,minHeight:"100vh"},children:Object(k.jsxs)(x.d,{children:[Object(k.jsx)(x.b,{path:"/",exact:!0,component:y}),Object(k.jsx)(x.b,{path:"/experiment",exact:!0,component:vt}),Object(k.jsx)(x.b,{path:"/experiment/my",exact:!0,component:cn}),Object(k.jsx)(x.b,{path:"/experiment/:id",exact:!0,component:Xt}),Object(k.jsx)(x.b,{path:"/people",exact:!0,component:Pt}),Object(k.jsx)(x.b,{path:"/event",exact:!0,children:Object(k.jsx)(x.a,{to:"/event/schedule"})}),Object(k.jsx)(x.b,{path:"/event/:type",exact:!0,component:pn}),Object(k.jsx)(x.b,{path:"/research",exact:!0,children:Object(k.jsx)(x.a,{to:"/research/themes"})}),Object(k.jsx)(x.b,{path:"/research/:type",exact:!0,component:At}),Object(k.jsx)(x.b,{path:"/login",exact:!0,component:Fe}),Object(k.jsx)(x.b,{path:"/signup",exact:!0,component:un}),Object(k.jsx)(x.b,{path:"/mypage",exact:!0,component:Cn}),Object(k.jsx)(x.a,{to:"/"})]})}),Object(k.jsx)(qt,{}),Object(k.jsx)(Ut.a,{autoHideDuration:4e3,open:t.isOpen,onClose:function(){return t.setIsOpen(!1)},children:Object(k.jsx)(Mt.a,{severity:t.message.type,children:t.message.text})})]})})}))})),Un=Tn,Mn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,253)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},In=n(98),Pn=n(68),An={en:{translation:{login:"login","Sign Up":"Sign Up","Email Address":"Email Address",Password:"Password",logout:"logout",quit:"withdrawal",Experiments:"Experiments",seeOnlyAvailable:"Show available experiments only",status:"Status",language:"Language",lists:"Lists","my experiments":"My Experiments","experiment type":"Experiment Type","In Progress":"In Progress",Unpublished:"Unpublished",Closed:"Closed",korean:"Korean",english:"English",japanese:"Japanese",chinese:"Chinese",french:"French",spanish:"Spanish",Online:"Online",Offline:"Offline",People:"People","Events & News":"Events & News",schedule:"Schedule",colloquium:"Colloquium",seminar:"Seminar",news:"News","Research & Projects":"Research & Projects","My Page":"My Page",address:"Department of Linguistics, Seoul National University, Gwanak_1 Gwanak-ro, Seoul 151-745, Korea \n Tel:+82-2-880-6164, Fax:+82-2-882-2451."}},ko:{translation:{login:"\ub85c\uadf8\uc778","Sign Up":"\ud68c\uc6d0\uac00\uc785","Email Address":"\uc774\uba54\uc77c",Password:"\ud328\uc2a4\uc6cc\ub4dc",logout:"\ub85c\uadf8\uc544\uc6c3",quit:"\ud68c\uc6d0 \ud0c8\ud1f4",Experiments:"\uc2e4\ud5d8 \ucc38\uc5ec",seeOnlyAvailable:"\ucc38\uc5ec \uac00\ub2a5\ud55c \uc2e4\ud5d8\ub9cc \ubcf4\uae30",status:"\uc2e4\ud5d8 \uc0c1\ud0dc",language:"\uc5b8\uc5b4",lists:"\uc2e4\ud5d8 \ubaa9\ub85d","my experiments":"\ub0b4\uac00 \ucc38\uc5ec\ud55c \uc2e4\ud5d8\ub4e4","experiment type":"\uc2e4\ud5d8 \uc9c4\ud589 \ubc29\ubc95","In Progress":"\uc9c4\ud589\uc911",Unpublished:"\uc2dc\uc791 \uc804",Closed:"\uc885\ub8cc\ub428",korean:"\ud55c\uad6d\uc5b4",english:"\uc601\uc5b4",japanese:"\uc77c\ubcf8\uc5b4",chinese:"\uc911\uad6d\uc5b4",french:"\ud504\ub791\uc2a4\uc5b4",spanish:"\uc2a4\ud398\uc778\uc5b4",Online:"\uc628\ub77c\uc778",Offline:"\uc624\ud504\ub77c\uc778",People:"\uc0ac\ub78c\ub4e4","Events & News":"\uc774\ubca4\ud2b8 & \ub274\uc2a4",schedule:"\uc2a4\ucf00\uc904",colloquium:"\ucf5c\ub85c\ud034\uc5c4",seminar:"\uc138\ubbf8\ub098",news:"\ub274\uc2a4","Research & Projects":"\uc5f0\uad6c & \ud504\ub85c\uc81d\ud2b8","My Page":"\ub9c8\uc774\ud398\uc774\uc9c0",address:"\uc11c\uc6b8\ub300\ud559\uad50 \uc5b8\uc5b4\ud559\uacfc, \uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uad00\uc545\uad6c \uad00\uc545\ub85c 1, 2\ub3d9 108\ud638 (151-745). linguist@snu.ac.kr \n \uc804\ud654:(02)880-6164, \ud329\uc2a4:(02)882-2451."}}};In.a.use(Pn.e).init({resources:An,lng:"ko",fallbackLng:{en:["en"],default:["ko"]},debug:!0,defaultNS:"translation",ns:"translation",keySeparator:!1,interpolation:{escapeValue:!1},react:{useSuspense:!1}});In.a;p.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(Un,{})}),document.getElementById("root")),Mn()}},[[186,1,2]]]);
//# sourceMappingURL=main.ac5b3d71.chunk.js.map