webpackJsonp([1],{"+skl":function(e,t){},"3Kth":function(e,t){},DC1z:function(e,t){},Fpz5:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=r("VU/8")({name:"App"},i,!1,function(e){r("OijI")},null,null).exports,o=r("/ocq"),a={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};r("VU/8")({},a,!1,function(e){r("wAup")},"data-v-766812c8",null).exports;var c=r("Dd8w"),u=r.n(c),l=r("NYxO"),d={methods:u()({},Object(l.c)(["updateUser"]),{menuSelect:function(e){this.$router.push(e)},siginOut:function(){this.updateUser({}),this.$router.push("/login")}}),computed:u()({},Object(l.b)(["grtUser"]))},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Header",[r("Menu",{attrs:{mode:"horizontal",theme:"dark"},on:{"on-select":e.menuSelect}},[r("div",{staticClass:"layout-logo"}),e._v(" "),r("div",{staticClass:"layout-nav"},[r("MenuItem",{attrs:{name:"/"}},[e._v("\n                管理首页\n            ")]),e._v(" "),r("span",{staticClass:"ivu-menu-item"},[e._v("欢迎："+e._s(e.grtUser.email))]),e._v(" "),e.grtUser.email?e._e():r("MenuItem",{attrs:{name:"/login"}},[e._v("\n                登录\n            ")]),e._v(" "),e.grtUser.email?e._e():r("MenuItem",{attrs:{name:"/reg"}},[e._v("\n                注册\n            ")]),e._v(" "),r("span",{staticClass:"ivu-menu-item",on:{click:e.siginOut}},[e._v("退出登录")])],1)])],1)},staticRenderFns:[]};var f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Sider",[t("Menu",{attrs:{theme:"light","active-name":"/"},on:{"on-select":this.menuSelect}},[t("MenuGroup",{attrs:{title:"用户管理"}},[t("MenuItem",{attrs:{name:"/"}},[t("Icon",{attrs:{type:"md-document"}}),this._v("\n                 报表管理\n             ")],1),this._v(" "),t("MenuItem",{attrs:{name:"/users"}},[t("Icon",{attrs:{type:"md-document"}}),this._v("\n                 查询用户\n             ")],1),this._v(" "),t("MenuItem",{attrs:{name:"/info"}},[t("Icon",{attrs:{type:"md-document"}}),this._v("\n                 状态管理\n             ")],1)],1)],1)],1)},staticRenderFns:[]};var m={components:{Header:r("VU/8")(d,v,!1,function(e){r("DC1z")},"data-v-cc1186c6",null).exports,Sider:r("VU/8")({methods:{menuSelect:function(e){this.$router.push(e)}}},f,!1,function(e){r("PdSV")},"data-v-df01e838",null).exports}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"layout"},[t("Header"),this._v(" "),t("Layout",[t("Sider"),this._v(" "),t("Content",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var h=r("VU/8")(m,p,!1,function(e){r("tS4Y")},null,null).exports,y=r("mtWM"),_=r.n(y),g={data:function(){return{verificationUrl:"/genimage/verifiycode.gif",verifyLoadState:!1,errors:{},user:{email:"2411509324@qq.com",password:"admin123456789",verify:""}}},methods:u()({},Object(l.c)(["updateUser"]),{verificationcode:function(e){if(this.verifyLoadState){this.verifyLoadState=!1;this.verificationUrl="/genimage/verifiycode.gif?"+e.timeStamp}},login:function(){var e=this;return this.errors={},this.user.email||this.user.password||this.user.verify?this.user.email||this.user.password?this.user.password||this.user.verify?this.user.email||this.user.verify?void(this.user.email?this.user.password?this.user.verify?-1!==this.user.email.indexOf("@")?this.user.password.length<=8?this.errors.password="密码不符合规范，请重新填写！":4==this.user.verify.length?_.a.post("/apis?action=login",this.user).then(function(t){var r=t.data;0!==r.code?1===r.code&&(e.updateUser(r.user),e.$router.push("/")):e.errors=r.errors}).catch(function(e){console.log(e)}):this.errors.verify="验证码不符合规范，请重新填写！":this.errors.email="邮箱不符合规范，请重新填写！":this.errors.verify="验证码不能为空！":this.errors.password="密码不能为空！":this.errors.email="邮箱不能为空！"):(this.errors.email="邮箱不能为空！",void(this.errors.verify="验证码不能为空！")):(this.errors.password="密码不能为空！",void(this.errors.verify="验证码不能为空！")):(this.errors.email="邮箱不能为空！",void(this.errors.password="密码不能为空！")):(this.errors.email="邮箱不能为空！",this.errors.password="密码不能为空！",void(this.errors.verify="验证码不能为空！"))}})},w={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Content",{staticClass:"content"},[r("div",{staticClass:"form",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.login(t):null}}},[r("Form",{staticClass:"from-wrap",nativeOn:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"logo"},[r("div",{staticClass:"logo-item"})]),e._v(" "),r("h3",[e._v("账户登录")]),e._v(" "),r("FormItem",{staticClass:"inp"},[r("Input",{attrs:{prefix:"ios-mail-outline",type:"text",placeholder:"邮箱",size:"large"},on:{input:function(t){e.errors.email=""}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email","string"==typeof t?t.trim():t)},expression:"user.email"}})],1),e._v(" "),e.errors.email?r("Alert",{attrs:{type:"error","show-icon":""}},[e._v(e._s(e.errors.email))]):e._e(),e._v(" "),r("FormItem",{staticClass:"inp"},[r("Input",{attrs:{prefix:"ios-lock-outline",type:"password",placeholder:"密码",size:"large"},on:{input:function(t){e.errors.password=""}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password","string"==typeof t?t.trim():t)},expression:"user.password"}})],1),e._v(" "),e.errors.password?r("Alert",{attrs:{type:"error","show-icon":""}},[e._v(e._s(e.errors.password))]):e._e(),e._v(" "),r("FormItem",{staticClass:"inp clearfix"},[r("Input",{staticClass:"ver",attrs:{prefix:"ios-barcode-outline",type:"text",placeholder:"验证码",size:"large"},on:{input:function(t){e.errors.verify=""}},model:{value:e.user.verify,callback:function(t){e.$set(e.user,"verify","string"==typeof t?t.trim():t)},expression:"user.verify"}}),e._v(" "),r("div",{staticClass:"verifiycode"},[r("img",{attrs:{src:e.verificationUrl,alt:"验证码"},on:{load:function(t){e.verifyLoadState=!0},click:e.verificationcode}})])],1),e._v(" "),e.errors.verify?r("Alert",{attrs:{type:"error","show-icon":""}},[e._v(e._s(e.errors.verify))]):e._e(),e._v(" "),r("FormItem",{staticClass:"inp"},[r("Button",{attrs:{type:"primary",long:"",size:"large"},on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var C=r("VU/8")(g,w,!1,function(e){r("Os8U")},"data-v-35c7ef3e",null).exports,I={data:function(){return{verificationUrl:"/genimage/verifiycode.gif",verifyLoadState:!1,errors:{email:"",password:"",verify:""},user:{email:"",password:"",verify:""}}},methods:{verificationcode:function(e){if(this.verifyLoadState){this.verifyLoadState=!1;this.verificationUrl="/genimage/verifiycode.gif?"+e.timeStamp}},register:function(){var e=this;return this.errors={},this.user.email||this.user.password||this.user.verify?this.user.email||this.user.password?this.user.password||this.user.verify?this.user.email||this.user.verify?void(this.user.email?this.user.password?this.user.verify?-1!==this.user.email.indexOf("@")?this.user.password.length<=8?this.errors.password="密码不符合规范，请重新填写！":4==this.user.verify.length?_.a.post("/apis?action=register",this.user).then(function(t){var r=t.data;0!==r.code?1===r.code&&e.$router.push("/login"):e.errors=r.errors}).catch(function(e){console.log(e)}):this.errors.verify="验证码不符合规范，请重新填写！":this.errors.email="邮箱不符合规范，请重新填写！":this.errors.verify="验证码不能为空！":this.errors.password="密码不能为空！":this.errors.email="邮箱不能为空！"):(this.errors.email="邮箱不能为空！",void(this.errors.verify="验证码不能为空！")):(this.errors.password="密码不能为空！",void(this.errors.verify="验证码不能为空！")):(this.errors.email="邮箱不能为空！",void(this.errors.password="密码不能为空！")):(this.errors.email="邮箱不能为空！",this.errors.password="密码不能为空！",void(this.errors.verify="验证码不能为空！"))}}},b={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Content",{staticClass:"content"},[r("div",{staticClass:"form",on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.register(t):null}}},[r("Form",{staticClass:"from-wrap",nativeOn:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"logo"},[r("div",{staticClass:"logo-item"})]),e._v(" "),r("h3",[e._v("账户注册")]),e._v(" "),r("FormItem",{staticClass:"inp"},[r("Input",{attrs:{prefix:"ios-mail-outline",type:"text",placeholder:"邮箱",size:"large"},on:{input:function(t){e.errors.email=""}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email","string"==typeof t?t.trim():t)},expression:"user.email"}})],1),e._v(" "),e.errors.email?r("Alert",{attrs:{type:"error","show-icon":""}},[e._v(e._s(e.errors.email))]):e._e(),e._v(" "),r("FormItem",{staticClass:"inp"},[r("Input",{attrs:{prefix:"ios-lock-outline",type:"password",placeholder:"密码",size:"large"},on:{input:function(t){e.errors.password=""}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password","string"==typeof t?t.trim():t)},expression:"user.password"}})],1),e._v(" "),e.errors.password?r("Alert",{attrs:{type:"error","show-icon":""}},[e._v(e._s(e.errors.password))]):e._e(),e._v(" "),r("FormItem",{staticClass:"inp clearfix"},[r("Input",{staticClass:"ver",attrs:{prefix:"ios-barcode-outline",type:"text",placeholder:"验证码",size:"large"},on:{input:function(t){e.errors.verify=""}},model:{value:e.user.verify,callback:function(t){e.$set(e.user,"verify","string"==typeof t?t.trim():t)},expression:"user.verify"}}),e._v(" "),r("div",{staticClass:"verifiycode"},[r("img",{attrs:{src:e.verificationUrl,alt:"验证码"},on:{load:function(t){e.verifyLoadState=!0},click:e.verificationcode}})])],1),e._v(" "),e.errors.verify?r("Alert",{attrs:{type:"error","show-icon":""}},[e._v(e._s(e.errors.verify))]):e._e(),e._v(" "),r("FormItem",{staticClass:"inp"},[r("Button",{attrs:{type:"success",long:"",size:"large"},on:{click:function(t){return t.preventDefault(),e.register(t)}}},[e._v("注册")])],1)],1)],1)])},staticRenderFns:[]};var k=r("VU/8")(I,b,!1,function(e){r("tLJ3")},"data-v-09d5b9a5",null).exports,x={data:function(){return{columns:[{title:"ID",key:"id"},{title:"头像",width:100,render:function(e){return e("Avatar",{props:{src:"https://www.thenewstnp.com/img/IMG_0020.JPG"}})}},{title:"Name",key:"name"},{title:"Email",key:"email"},{title:"Phone",key:"phone"},{title:"Website",key:"website"},{title:"管理",render:function(e,t){return e("Button",{props:{size:"small",type:"warning"},on:{click:function(e){console.log(e)}}},"删除")}}],data:[],current:1,search:""}},created:function(){var e=this;_.a.get("/apis/users.json").then(function(t){var r=t.data;for(var s in console.log(r),r)r.hasOwnProperty(s)&&e.data.push(r[s])}).catch(function(e){console.log(e)})},watch:{current:function(e){var t=this;this.data=[],_.a.get("/apis/users.json").then(function(e){var r=e.data;for(var s in r)r.hasOwnProperty(s)&&t.data.push(r[s])}).catch(function(e){console.log(e)})}},computed:{fUsers:function(){var e=this;return this.data.filter(function(t){return t.name.indexOf(e.search)>-1})}}},U={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Content",{staticClass:"content"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/"}},[e._v("首页")]),e._v(" "),r("BreadcrumbItem",{attrs:{to:"/users"}},[e._v("用户列表")])],1),e._v(" "),r("Content",{staticClass:"content content-item"},[r("Input",{attrs:{search:"","enter-button":"搜索",placeholder:"搜索用户"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("Content",{staticClass:"table-users content"},[r("Table",{attrs:{border:"",stripe:"",columns:e.columns,data:e.fUsers}})],1),e._v(" "),r("Content",{staticClass:"content page"},[r("Page",{attrs:{total:10,"page-size":10,current:e.current},on:{"update:current":function(t){e.current=t}}})],1)],1)},staticRenderFns:[]};var S=r("VU/8")(x,U,!1,function(e){r("Fpz5")},"data-v-f1d103e4",null).exports,F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Content",{staticClass:"content"},[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:"/"}},[this._v("首页")]),this._v(" "),t("BreadcrumbItem",{attrs:{to:"/info"}},[this._v("状态管理")])],1)],1)},staticRenderFns:[]};var $=r("VU/8")({},F,!1,function(e){r("3Kth")},"data-v-fe26529e",null).exports;s.default.use(o.a);var L=new o.a({mode:"history",routes:[{path:"/",name:"Admin",component:h,redirect:"/users",meta:{isLogin:!0},children:[{path:"/users",name:"Users",component:S,meta:{isLogin:!0}},{path:"/info",name:"UserInfo",component:$,meta:{isLogin:!0}}]},{path:"/login",name:"Login",component:C,meta:{notLogin:!0}},{path:"/reg",name:"Register",component:k,meta:{notLogin:!0}}]}),O=r("BTaQ"),z=r.n(O),A=(r("+skl"),localStorage.getItem("user"));A&&(A=JSON.parse(A));var E={user:A||{}},M={grtUser:function(e){return e.user}},V=r("mvHQ"),B=r.n(V),R={updateUser:function(e,t){e.user=t,localStorage.setItem("user",B()(t))}};s.default.use(l.a);var j=new l.a.Store({state:E,getters:M,mutations:R});s.default.use(z.a),L.beforeEach(function(e,t,r){e.meta.isLogin?j.state.user.email?r():r("/login"):e.meta.notLogin?j.state.user.email?r("/"):r():r(!0)}),s.default.config.productionTip=!1,new s.default({el:"#app",router:L,store:j,components:{App:n},template:"<App/>"})},OijI:function(e,t){},Os8U:function(e,t){},PdSV:function(e,t){},tLJ3:function(e,t){},tS4Y:function(e,t){},wAup:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.caaa691ca211c458f774.js.map