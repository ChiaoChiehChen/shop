(function(t){function e(e){for(var r,c,u=e[0],i=e[1],d=e[2],s=0,p=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function c(t){return u.p+"js/"+({about:"about",cart:"cart",notfound:"notfound",products:"products"}[t]||t)+"."+{about:"2ab56f56",cart:"b554ba58",notfound:"2c2bd446",products:"caeb43d1"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(t);var d=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("購物商城")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/products"}},[n("font-awesome-icon",{attrs:{icon:["fas","shopping-bag"]}}),t._v("  商品")],1),n("b-nav-item",{attrs:{to:"/cart"}},[n("font-awesome-icon",{attrs:{icon:["fas","shopping-cart"]}}),t._v("  購物車")],1),n("b-nav-item",{attrs:{to:"/about"}},[n("font-awesome-icon",{attrs:{icon:["fas","info-circle"]}}),t._v("  關於")],1)],1)],1)],1)],1),n("router-view")],1)},c=[],u=n("2877"),i={},d=Object(u["a"])(i,o,c,!1,null,null,null),s=d.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center"},[t._v("熱門商品")])]),t._l(t.products,(function(t){return n("b-col",{key:t.id,attrs:{cols:"12",md:"6",lg:"3"}},[n("ProductCard",{attrs:{product:t}})],1)}))],2)],1)],1)},f=[],b=(n("fb6a"),n("e915")),m={components:{ProductCard:b["a"]},computed:{products:function(){return this.$store.state.products.slice(0,4)}}},v=m,g=Object(u["a"])(v,p,f,!1,null,null,null),h=g.exports;r["default"].use(l["a"]);var j=[{path:"/",name:"Home",component:h,meta:{title:"購物商城"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{title:"購物商城 | 關於"}},{path:"/products",name:"Products",component:function(){return n.e("products").then(n.bind(null,"e6dc"))},meta:{title:"購物商城 | 商品"}},{path:"/cart",name:"Cart",component:function(){return n.e("cart").then(n.bind(null,"b789"))},meta:{title:"購物商城 | 購物車"}},{path:"/404",name:"NotFound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))},meta:{title:"購物商城 | 找不到頁面"}},{path:"*",redirect:"/404"}],w=new l["a"]({routes:j});w.afterEach((function(t,e){document.title=t.meta.title}));var y=w,_=n("5530"),O=(n("c740"),n("a434"),n("2f62")),x=n("0e44");r["default"].use(O["a"]);var C=new O["a"].Store({state:{products:[{id:1,name:"白玉歐蕾",price:60,image:"https://d1ralsognjng37.cloudfront.net/767546d7-e2ba-4f79-b11a-d3da64a1e0e2.jpeg"},{id:2,name:"胭脂紅茶",price:45,image:"https://d1ralsognjng37.cloudfront.net/99e3e994-2be8-48c7-b053-6c7397303ea3.jpeg"},{id:3,name:"春梅冰茶",price:45,image:"https://d1ralsognjng37.cloudfront.net/e2700522-53af-4ec2-aed9-5fdfa68c802a.jpeg"},{id:4,name:"麗春紅茶",price:35,image:"https://d1ralsognjng37.cloudfront.net/3cdbb722-db4f-40ca-9685-a0f58973be55.jpeg"},{id:5,name:"熟成歐蕾",price:50,image:"https://d1ralsognjng37.cloudfront.net/2b8e503b-7867-43d6-9dba-1bf2657addd5.jpeg"},{id:6,name:"紅寶歐酪",price:75,image:"https://d1ralsognjng37.cloudfront.net/afc95173-dc87-4915-9f01-d7d9a1eb4110.jpeg"}],cart:[]},mutations:{addCart:function(t,e){var n=t.cart.findIndex((function(t){return t.id===e}));if(n>-1)t.cart[n].count++;else{var r=t.products.findIndex((function(t){return t.id===e}));t.cart.push(Object(_["a"])(Object(_["a"])({},t.products[r]),{},{count:1}))}},delCart:function(t,e){var n=t.cart.findIndex((function(t){return t.id===e}));t.cart.splice(n,1)}},actions:{},modules:{},plugins:[Object(x["a"])({key:"shop-practice",paths:["cart"]})]}),P=n("f9d5"),k=n.n(P),E=(n("4413"),n("ecee")),$=n("ad3d"),S=n("c074");r["default"].use(k.a),E["c"].add(S["c"],S["d"],S["b"],S["a"],S["e"]),r["default"].component("font-awesome-icon",$["a"]),r["default"].config.productionTip=!1,new r["default"]({router:y,store:C,render:function(t){return t(s)}}).$mount("#app")},e915:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"card-product",attrs:{title:t.product.name,"img-src":t.product.image}},[n("b-card-text",[t._v(t._s(t.product.price)+" 元")]),n("b-button",{attrs:{variant:"primary"},on:{click:t.addCart}},[t._v("加入購物車"),n("font-awesome-icon",{attrs:{icon:["fas","cart-arrow-down"]}})],1)],1)},a=[],o={props:{product:{type:Object,default:function(){return{id:0,name:"",price:0,image:""}}}},methods:{addCart:function(){this.$store.commit("addCart",this.product.id),this.$swal({icon:"success",title:"成功",text:"加入購物車"})}}},c=o,u=n("2877"),i=Object(u["a"])(c,r,a,!1,null,null,null);e["a"]=i.exports}});
//# sourceMappingURL=app.1ffa8282.js.map