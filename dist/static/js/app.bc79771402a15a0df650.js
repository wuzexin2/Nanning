webpackJsonp([1],{"0oGw":function(t,i){},"2bBT":function(t,i){},Kqxz:function(t,i){},NBNB:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},a,!1,function(t){e("2bBT")},null,null).exports,r=e("/ocq"),l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header"},[t._m(0),t._v(" "),e("div",{staticClass:"nav"},[e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"1"}},[e("a",{attrs:{href:""}},[t._v("网站首页")])]),t._v(" "),e("el-menu-item",{attrs:{index:"2"}},[e("a",{attrs:{href:""}},[t._v("历史")])]),t._v(" "),e("el-menu-item",{attrs:{index:"3"}},[e("a",{attrs:{href:""}},[t._v("风景")])]),t._v(" "),e("el-menu-item",{attrs:{index:"4"}},[e("a",{attrs:{href:""}},[t._v("旅游")])]),t._v(" "),e("el-menu-item",{attrs:{index:"5"}},[e("a",{attrs:{href:""}},[t._v("美食")])]),t._v(" "),e("el-menu-item",{attrs:{index:"6"}},[e("a",{attrs:{href:""}},[t._v("动态")])]),t._v(" "),e("el-menu-item",{attrs:{index:"7"}},[e("a",{attrs:{href:""}},[t._v("留言")])]),t._v(" "),e("el-menu-item",{attrs:{index:"8"}},[e("a",{attrs:{href:""}},[t._v("团队介绍")])]),t._v(" "),e("el-menu-item",{attrs:{index:"9"}},[e("a",{attrs:{href:""}},[t._v("联系我们")])])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:e("wyn4")}})])}]};var c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("p",{staticClass:"title"},[t._v("走进南宁")]),t._v(" "),e("ul",{staticClass:"container"},t._l(t.nnList,function(i){return e("li",{key:i.id,staticClass:"item"},[e("a",{staticClass:"item-img"},[e("img",{staticClass:"item-img-content",attrs:{src:i.imgUrl}})]),t._v(" "),e("div",{staticClass:"item-info"},[e("p",{staticClass:"item-title"},[t._v(t._s(i.title))]),t._v(" "),e("p",[t._v(t._s(i.desc))])])])}),0)])},staticRenderFns:[]};var m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrap"},[e("p",{staticClass:"title"},[t._v("南宁名景")]),t._v(" "),e("div",{staticClass:"nnfj"},[e("ul",{staticClass:"first"},t._l(t.firstList,function(i){return e("li",{key:i.id,staticClass:"item"},[e("div",{staticClass:"item-img"},[e("img",{staticClass:"item-img-content",attrs:{src:i.imgUrl}}),t._v(" "),e("p",{staticClass:"item-title"},[t._v(t._s(i.title))])])])}),0)])])},staticRenderFns:[]};var d={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"xlnn"},[i("p",{staticClass:"title"},[this._v("秀丽南宁")]),this._v(" "),i("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},this._l(this.xlnnList,function(t){return i("el-carousel-item",{key:t.id},[i("img",{staticClass:"medium",attrs:{src:t.imgUrl}})])}),1)],1)},staticRenderFns:[]};var u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"footer"},[e("div",{staticClass:"jz"},t._l(t.ljList,function(i){return e("p",{key:i.id,staticClass:"lianjie"},[e("span",[t._v(t._s(i.nav))]),t._v(" "),e("el-divider",{attrs:{direction:"vertical"}})],1)}),0),t._v(" "),e("p",[t._v("Copyright © 2015－2016 All Rights Reserved 版权所有 XXXXXXXXXXXXXXXXXX")]),t._v(" "),e("p",[t._v("地址：XXXXXXXXXXXXXXXXXX")])])},staticRenderFns:[]};var v={name:"Home",components:{VHeader:e("VU/8")({name:"Header"},l,!1,function(t){e("pO9x")},null,null).exports,VZjnn:e("VU/8")({name:"Zjnn",data:function(){return{nnList:[{id:"1",imgUrl:"/static/images/pic_1.jpg",title:"南宁简介",desc:"南宁，简称“邕”，是广西壮族自治区首府，全区政治、经济、交通、科教文卫、金融和信息中心，是中国面向东盟开放合作的前沿城市、中国—东盟博览会永久举办地、北部湾经济区核心城市、国家“一带一路”有机衔接的重要门户城市。"},{id:"2",imgUrl:"/static/images/pic_2.jpg",title:"南宁文化",desc:"南宁别称绿城、凤凰城、五象城。旅游资源丰富，北连桂林，南接北海，构成了广西的黄金旅游带。壮丽的边关风采、浪漫的海滩风貌、迷人的异国情调，星罗棋布的灵山秀水，古朴悠远的古迹故址，山、水、人、情构成南宁多层次的旅游景观。"},{id:"3",imgUrl:"/static/images/pic_3.jpg",title:"南宁历史",desc:"南宁历史悠久，在古代，南宁属于百越领地。秦始皇统一岭南地区后，南宁属于桂林郡。西汉时期，汉武帝又将它置于玉林郡管辖。东晋大兴元年（公元318年），置大兴郡，以南宁为郡治所在地，南宁建制从此开始，至今已有1600多年。"}]}}},c,!1,function(t){e("Qu71")},null,null).exports,VNnfj:e("VU/8")({name:"Nnfj",data:function(){return{firstList:[{id:"1",imgUrl:"/static/images/pic_4.jpg",title:"人民公园"},{id:"2",imgUrl:"/static/images/pic_5.jpg",title:"南宁海底世界"},{id:"3",imgUrl:"/static/images/pic_6.jpg",title:"金花茶公园"},{id:"4",imgUrl:"/static/images/pic_7.jpg",title:"五象广场"},{id:"5",imgUrl:"/static/images/pic_8.jpg",title:"地王云顶"},{id:"6",imgUrl:"/static/images/pic_9.jpg",title:"南宁民歌湖游船"}]}}},m,!1,function(t){e("Kqxz")},"data-v-7ccb7ed4",null).exports,VXlnn:e("VU/8")({name:"Xlnn",data:function(){return{xlnnList:[{id:"1",imgUrl:"/static/images/201410301619396038.jpg"},{id:"2",imgUrl:"/static/images/201410301618110413.jpg"},{id:"3",imgUrl:"/static/images/201410301611286194.jpg"},{id:"4",imgUrl:"/static/images/201410301613498694.jpg"},{id:"5",imgUrl:"/static/images/201410301614494319.jpg"},{id:"6",imgUrl:"/static/images/201410301615449632.jpg"}]}}},d,!1,function(t){e("0oGw")},null,null).exports,VFooter:e("VU/8")({name:"Footer",data:function(){return{ljList:[{id:"1",nav:"首页"},{id:"2",nav:"历史"},{id:"3",nav:"风景"},{id:"4",nav:"旅游"},{id:"5",nav:"美食"},{id:"6",nav:"动态"},{id:"7",nav:"联系我们"}]}}},u,!1,function(t){e("hsUz")},null,null).exports},data:function(){return{imgList:[{id:"1",image:"/static/images/banner_2.jpg"},{id:"2",image:"/static/images/banner_4.jpg"}]}}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"body"},[i("v-header"),this._v(" "),i("el-carousel",{attrs:{interval:5e3,arrow:"always"}},this._l(this.imgList,function(t){return i("el-carousel-item",{key:t.id},[i("img",{staticClass:"banner_img",attrs:{src:t.image}})])}),1),this._v(" "),i("v-Zjnn"),this._v(" "),i("v-nnfj"),this._v(" "),i("v-xlnn"),this._v(" "),i("v-footer")],1)},staticRenderFns:[]};var _=e("VU/8")(v,o,!1,function(t){e("NBNB")},"data-v-125858e4",null).exports;s.default.use(r.a);var g=new r.a({routes:[{path:"/",name:"Home",component:_}]}),p=e("NxjZ"),f=e.n(p);e("zlkP");s.default.use(f.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:g,components:{App:n},template:"<App/>"})},Qu71:function(t,i){},hsUz:function(t,i){},pO9x:function(t,i){},wyn4:function(t,i,e){t.exports=e.p+"static/img/logo.f12a7a2.jpg"},zlkP:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.bc79771402a15a0df650.js.map