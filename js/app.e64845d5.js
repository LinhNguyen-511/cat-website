(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cat-website/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"034f":function(e,t,r){"use strict";r("85ec")},"0613":function(e,t,r){"use strict";r("4de4"),r("7db0"),r("fb6a"),r("96cf");var n=r("c973");Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;var i=r("9ab4"),a=i.__importDefault(r("2b0e")),s=i.__importDefault(r("2f62")),o=i.__importDefault(r("2106")),c=i.__importDefault(r("bc3a"));a.default.use(s.default),a.default.use(o.default,c.default);var l=new s.default.Store({state:{breeds:Array(),relatedPics:Array(),categories:Array(),selectedCategoryPictures:Array(),randomPic:Array()},getters:{breed:function(e){return function(t){return e.breeds.find((function(e){return e.id==t}))}}},mutations:{setCategories:function(e,t){e.categories=t},setBreeds:function(e,t){e.breeds=t},sortBreeds:function(e,t){"affectionASC"===t?e.breeds.sort((function(e,t){return e.affection_level-t.affection_level})):"affectionDESC"===t&&e.breeds.sort((function(e,t){return t.affection_level-e.affection_level}))},setRelatedPics:function(e,t){var r=e.breeds.filter((function(e){return e.id!=t}));r.filter((function(e){return void 0!=e.image}));for(var n=r.length-1;n>0;n--){var i=Math.floor(Math.random()*n),a=r[n];r[n]=r[i],r[i]=a}e.relatedPics=r.slice(0,3)},setSelectedCatPics:function(e,t){e.selectedCategoryPictures=t},setRandomPic:function(e,t){e.randomPic=t}},actions:{getCategories:function(e){return n(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,console.log("getting the categories"),n="https://api.thecatapi.com/v1/categories/",t.prev=3,t.next=6,c.default.get(n,{headers:{"x-api-key":"a8c4e83f-8094-47a5-be11-0b4f9cf386cd"}}).then((function(e){return r("setCategories",e.data)}));case 6:t.next=11;break;case 8:throw t.prev=8,t.t0=t["catch"](3),new Error("API ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[3,8]])})))()},getBreeds:function(e){return n(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,console.log("getting the breeds"),n="https://api.thecatapi.com/v1/breeds/",t.prev=3,t.next=6,c.default.get(n,{headers:{"x-api-key":"a8c4e83f-8094-47a5-be11-0b4f9cf386cd"}}).then((function(e){return r("setBreeds",e.data)}));case 6:t.next=11;break;case 8:throw t.prev=8,t.t0=t["catch"](3),new Error("API ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[3,8]])})))()},sortBreeds:function(e,t){var r=e.commit;r("sortBreeds",t)},getRelatedPics:function(e,t){var r=e.commit;r("setRelatedPics",t)},getSelectedCategoryPictures:function(e,t){return n(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,console.log(t),i="https://api.thecatapi.com/v1/images/search?",r.prev=3,r.next=6,c.default.get(i,{headers:{"x-api-key":"a8c4e83f-8094-47a5-be11-0b4f9cf386cd"},params:{limit:10,category_ids:t}}).then((function(e){return n("setSelectedCatPics",e.data)}));case 6:r.next=11;break;case 8:throw r.prev=8,r.t0=r["catch"](3),new Error("API ".concat(r.t0));case 11:case"end":return r.stop()}}),r,null,[[3,8]])})))()},getRandomPic:function(e){return n(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n="https://api.thecatapi.com/v1/images/search?",t.prev=2,t.next=5,c.default.get(n,{headers:{"x-api-key":"a8c4e83f-8094-47a5-be11-0b4f9cf386cd"},params:{limit:1}}).then((function(e){return r("setRandomPic",e.data)}));case 5:t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](2),new Error("API ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[2,7]])})))()}},modules:{}});t.store=l},"0670":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("9ab4"),i=n.__importDefault(r("2b0e")),a=n.__importDefault(r("bb71"));i.default.use(a.default),t.default=new a.default({})},"08e0":function(e,t,r){},"136f":function(e,t,r){"use strict";r("fb6a");var n=r("970b"),i=r("5bc3"),a=r("ed6d"),s=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var o=r("9ab4"),c=r("60a3"),l=o.__importDefault(r("ce5b"));r("bf40"),c.Vue.use(l.default);var u=function(e){a(r,e);var t=s(r);function r(){var e;return n(this,r),e=t.apply(this,arguments),e.itemsShown=10,e.visibility=!0,e.loading=!1,e}return i(r,[{key:"mounted",value:function(){this.$store.dispatch("getBreeds")}},{key:"sortBreeds",value:function(e){this.$store.dispatch("sortBreeds",e)}},{key:"loadMore",value:function(){2*this.itemsShown<this.$store.state.breeds.length?this.itemsShown*=2:(this.itemsShown=this.$store.state.breeds.length,this.visibility=!1)}},{key:"breeds",get:function(){var e=this.$store.state.breeds;return e.slice(0,this.itemsShown)}}]),r}(c.Vue);u=o.__decorate([c.Component],u),t.default=u},1402:function(e,t,r){},"3d48":function(e,t,r){"use strict";r.r(t);var n=r("136f"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"3d77":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"main"},[e.breeds.length>=10?n("v-menu",{attrs:{"open-on-hover":"",top:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"sort",attrs:{text:""}},"v-btn",i,!1),r),[e._v(" Sort ")])]}}],null,!1,2559268644)},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.sortBreeds("affectionASC")}}},[e._v("Affection: low - high ")]),n("v-list-item",{on:{click:function(t){return e.sortBreeds("affectionDESC")}}},[e._v("Affection: high - low ")])],1)],1):e._e(),n("div",{staticClass:"images-wrapper"},e._l(e.breeds,(function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:{name:"Detail",params:{id:t.id}}}},[t.image?n("div",[n("img",{attrs:{src:t.image.url}})]):n("div",[n("img",{attrs:{src:r("cf05"),alt:""}})]),n("p",{staticStyle:{color:"black"}},[e._v(e._s(t.name))])])],1)})),0),e.visibility&&e.breeds.length>=10?n("button",{staticClass:"load",on:{click:e.loadMore}},[e._v(" More cats!!! ")]):e._e()],1)])},i=[]},"3dfd":function(e,t,r){"use strict";r.r(t);var n=r("f910"),i=r("6f68");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("034f");var s=r("2877"),o=r("6544"),c=r.n(o),l=r("7496"),u=r("8336"),d=r("8860"),f=r("da13"),v=r("5d23"),m=r("e449"),p=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=p.exports,c()(p,{VApp:l["a"],VBtn:u["a"],VList:d["a"],VListItem:f["a"],VListItemTitle:v["k"],VMenu:m["a"]})},"42de":function(e,t,r){"use strict";r.r(t);var n=r("79f2"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},4886:function(e,t,r){"use strict";r.r(t);var n=r("f301"),i=r("915a");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);var s=r("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},"4b9b":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("button",{staticClass:"another",on:{click:e.getAnotherPic}},[e._v("Get Another Picture")]),r("div",{staticClass:"random-pic"},[e.randomPic?r("div",[r("img",{attrs:{src:e.randomPic[0].url,alt:""}})]):e._e()])])},i=[]},"6f68":function(e,t,r){"use strict";r.r(t);var n=r("78c7"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"78c7":function(e,t,r){"use strict";var n=r("970b"),i=r("5bc3"),a=r("ed6d"),s=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var o=r("9ab4"),c=r("60a3"),l=o.__importDefault(r("bb71"));r("bf40"),c.Vue.use(l.default);var u=function(e){a(r,e);var t=s(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"mounted",value:function(){this.$store.dispatch("getCategories")}},{key:"categories",get:function(){return this.$store.state.categories}}]),r}(c.Vue);u=o.__decorate([c.Component],u),t.default=u},"79f2":function(e,t,r){"use strict";var n=r("970b"),i=r("5bc3"),a=r("ed6d"),s=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var o=r("9ab4"),c=r("60a3"),l=function(e){a(r,e);var t=s(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"mounted",value:function(){this.$store.dispatch("getRandomPic")}},{key:"getAnotherPic",value:function(){this.$store.dispatch("getRandomPic")}},{key:"randomPic",get:function(){return this.$store.state.randomPic}}]),r}(c.Vue);l=o.__decorate([c.Component],l),t.default=l},"7bd5":function(e,t,r){"use strict";var n=r("970b"),i=r("5bc3"),a=r("ed6d"),s=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var o=r("9ab4"),c=r("60a3"),l=o.__importDefault(r("ce5b"));r("bf40"),c.Vue.use(l.default);var u=function(e){a(r,e);var t=s(r);function r(){var e;return n(this,r),e=t.apply(this,arguments),e.selectedBreed=e.$store.getters.breed(e.$route.params.id),e}return i(r,[{key:"mounted",value:function(){this.$store.dispatch("getRelatedPics",this.selectedBreed.id)}},{key:"relatedPics",get:function(){return this.$store.state.relatedPics}},{key:"countryFlagURL",get:function(){return console.log(this.selectedBreed.country_code.toLowerCase()),"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/".concat(this.selectedBreed.country_code.toLowerCase(),".svg")}}]),r}(c.Vue);u=o.__decorate([c.Component],u),t.default=u},"85ec":function(e,t,r){},"915a":function(e,t,r){"use strict";r.r(t);var n=r("c34f"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},9325:function(e,t,r){"use strict";r.r(t);var n=r("7bd5"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},afbc:function(e,t,r){"use strict";r("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var n=r("9ab4"),i=n.__importDefault(r("2b0e")),a=n.__importDefault(r("8c4f"));i.default.use(a.default),t.routes=[{path:"/",name:"Home",component:function(){return Promise.resolve().then((function(){return n.__importStar(r("bb51"))}))}},{path:"/detail/:id",name:"Detail",component:function(){return Promise.resolve().then((function(){return n.__importStar(r("c84b"))}))}},{path:"/category/:id",name:"Category",component:function(){return Promise.resolve().then((function(){return n.__importStar(r("4886"))}))}},{path:"/random",name:"Random",component:function(){return Promise.resolve().then((function(){return n.__importStar(r("f2b4"))}))}}];var s=new a.default({routes:t.routes,scrollBehavior:function(e,t,r){return{x:0,y:0}}});t.default=s},bb51:function(e,t,r){"use strict";r.r(t);var n=r("3d77"),i=r("3d48");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("c503");var s=r("2877"),o=r("6544"),c=r.n(o),l=r("8336"),u=r("8860"),d=r("da13"),f=r("e449"),v=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"2e59f8d3",null);t["default"]=v.exports,c()(v,{VBtn:l["a"],VList:u["a"],VListItem:d["a"],VMenu:f["a"]})},c34f:function(e,t,r){"use strict";var n=r("970b"),i=r("5bc3"),a=r("ed6d"),s=r("2d0d");Object.defineProperty(t,"__esModule",{value:!0});var o=r("9ab4"),c=r("60a3"),l=function(e){a(r,e);var t=s(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"mounted",value:function(){this.$store.dispatch("getSelectedCategoryPictures",this.$route.params.id)}},{key:"catPics",get:function(){return this.$store.state.selectedCategoryPictures}}]),r}(c.Vue);l=o.__decorate([c.Component],l),t.default=l},c503:function(e,t,r){"use strict";r("08e0")},c84b:function(e,t,r){"use strict";r.r(t);var n=r("d34a"),i=r("9325");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);var s=r("2877"),o=r("6544"),c=r.n(o),l=r("8212"),u=r("cc20"),d=r("8860"),f=r("da13"),v=r("1800"),m=r("5d23"),p=r("1d4d"),_=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=_.exports,c()(_,{VAvatar:l["a"],VChip:u["a"],VList:d["a"],VListItem:f["a"],VListItemAction:v["a"],VListItemContent:m["g"],VRating:p["a"]})},cd49:function(e,t,r){"use strict";r("e260"),r("e6cf"),r("cca6"),r("a79d"),Object.defineProperty(t,"__esModule",{value:!0});var n=r("9ab4"),i=n.__importDefault(r("2b0e")),a=n.__importDefault(r("3dfd")),s=n.__importDefault(r("afbc")),o=r("0613"),c=n.__importDefault(r("0670"));i.default.config.productionTip=!1,new i.default({router:s.default,store:o.store,vuetify:c.default,render:function(e){return e(a.default)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.8148ce82.png"},d34a:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("div",{staticClass:"breed-image"},[r("img",{attrs:{src:e.selectedBreed.image.url}})]),r("div",[r("v-chip",[r("v-avatar",[r("img",{attrs:{src:e.countryFlagURL,alt:e.selectedBreed.country_code}})]),e._v(" "+e._s(e.selectedBreed.origin))],1),1==e.selectedBreed.experimental?r("v-chip",[e._v("Experimental")]):e._e(),1==e.selectedBreed.rex?r("v-chip",[e._v("Rex")]):e._e(),1==e.selectedBreed.natural?r("v-chip",[e._v("Natural")]):e._e(),1==e.selectedBreed.rare?r("v-chip",[e._v("Rare")]):e._e(),1==e.selectedBreed.hairless?r("v-chip",[e._v("Hairless")]):e._e(),1==e.selectedBreed.suppressed_tail?r("v-chip",[e._v("Suppressed Tail")]):e._e(),1==e.selectedBreed.short_legs?r("v-chip",[e._v("Short Legs")]):e._e(),1==e.selectedBreed.hypoallergenic?r("v-chip",[e._v("Hypoallergenic")]):e._e()],1),r("div",{staticClass:"breed-description"},[r("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.selectedBreed.name))]),r("div",[e._v(e._s(e.selectedBreed.description))]),r("div",[e._v("---")]),r("div",[r("i",[e._v(e._s(e.selectedBreed.temperament))])])]),r("v-list",[r("v-list-item",[r("v-list-item-content",[e._v(" Affection Level ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.affection_level,callback:function(t){e.$set(e.selectedBreed,"affection_level",t)},expression:"selectedBreed.affection_level"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Adaptability ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.adaptability,callback:function(t){e.$set(e.selectedBreed,"adaptability",t)},expression:"selectedBreed.adaptability"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Child Friendly ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.child_friendly,callback:function(t){e.$set(e.selectedBreed,"child_friendly",t)},expression:"selectedBreed.child_friendly"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Dog Friendly ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.dog_friendly,callback:function(t){e.$set(e.selectedBreed,"dog_friendly",t)},expression:"selectedBreed.dog_friendly"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Energy Level ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.energy_level,callback:function(t){e.$set(e.selectedBreed,"energy_level",t)},expression:"selectedBreed.energy_level"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Grooming ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.grooming,callback:function(t){e.$set(e.selectedBreed,"grooming",t)},expression:"selectedBreed.grooming"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Health Issues ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.health_issues,callback:function(t){e.$set(e.selectedBreed,"health_issues",t)},expression:"selectedBreed.health_issues"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Intelligence ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.intelligence,callback:function(t){e.$set(e.selectedBreed,"intelligence",t)},expression:"selectedBreed.intelligence"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Shedding Level ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.shedding_level,callback:function(t){e.$set(e.selectedBreed,"shedding_level",t)},expression:"selectedBreed.shedding_level"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Social Needs ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.social_needs,callback:function(t){e.$set(e.selectedBreed,"social_needs",t)},expression:"selectedBreed.social_needs"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Stranger Friendly ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.stranger_friendly,callback:function(t){e.$set(e.selectedBreed,"stranger_friendly",t)},expression:"selectedBreed.stranger_friendly"}})],1)],1),r("v-list-item",[r("v-list-item-content",[e._v(" Vocalisation ")]),r("v-list-item-action",[r("v-rating",{attrs:{readonly:"",size:"18"},model:{value:e.selectedBreed.vocalisation,callback:function(t){e.$set(e.selectedBreed,"vocalisation",t)},expression:"selectedBreed.vocalisation"}})],1)],1)],1),r("div",{staticClass:"other-breeds"},[r("h1",[e._v("Other breeds")]),r("div",{staticClass:"images-wrapper"},e._l(e.relatedPics,(function(e){return r("li",{key:e.id},[r("router-link",{attrs:{to:{name:"Detail",params:{id:e.id}}}},[r("img",{attrs:{src:e.image.url,alt:""}})])],1)})),0)])],1)},i=[]},ee59:function(e,t,r){"use strict";r("1402")},f2b4:function(e,t,r){"use strict";r.r(t);var n=r("4b9b"),i=r("42de");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("ee59");var s=r("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"ed1733cc",null);t["default"]=o.exports},f301:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("div",{staticClass:"images-wrapper"},e._l(e.catPics,(function(t){return r("li",{key:t.id},[t?r("div",[r("img",{attrs:{src:t.url,alt:""}})]):e._e()])})),0)])},i=[]},f910:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("ul",{attrs:{id:"nav"}},[n("li",[n("v-btn",{staticClass:"text-none",attrs:{text:""}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1)],1),n("li",[n("v-menu",{attrs:{"open-on-hover":"",top:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"text-none",attrs:{text:""}},"v-btn",i,!1),r),[e._v(" Categories ")])]}}])},[n("v-list",[e._v(" Cats in ... "),e._l(e.categories,(function(t,r){return n("v-list-item",{key:r},[n("router-link",{attrs:{to:{name:"Category",params:{id:t.id}}}},[n("v-list-item-title",[e._v(e._s(t.name))])],1)],1)}))],2)],1)],1),n("li",[n("v-btn",{staticClass:"text-none",attrs:{text:""}},[n("router-link",{attrs:{to:"/random"}},[e._v("Random")])],1)],1),n("li",[n("img",{staticStyle:{height:"10vh",width:"10vh"},attrs:{src:r("cf05"),alt:""}})])]),n("keep-alive",[n("router-view",{key:e.$route.fullPath})],1),n("footer",[n("em",[e._v("Cats are adopted from "),n("a",{attrs:{href:"https://thecatapi.com/"}},[e._v("TheCatAPI.com")])]),e._v(" | "),n("em",[n("a",{attrs:{href:"map.xml"}},[e._v("Sitemap")])])])],1)},i=[]}});
//# sourceMappingURL=app.e64845d5.js.map