(function(e){function t(t){for(var o,s,l=t[0],i=t[1],c=t[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-toolbar-title",[e._v(" Whatsapp Sender ")])],1)],1),n("q-page-container",[n("zap")],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{},[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"q-col-gutter-md row"},[n("div",{staticClass:"col-12 col-md-4 offset-md-4"},[n("q-card",[n("q-card-section",[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Envio de mensagens em massa meio manual")]),n("div",{staticClass:"text-subtitle2"},[e._v("by DouraSoft")])])],1),n("q-card-section",[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"q-col-gutter-md row"},[n("div",{staticClass:"col-12"},[n("q-input",{attrs:{filled:"",label:"Telefone"},model:{value:e.numero.telefone,callback:function(t){e.$set(e.numero,"telefone",t)},expression:"numero.telefone"}})],1),n("div",{staticClass:"col-12"},[n("q-input",{attrs:{filled:"",autogrow:"",counter:"",label:"Conteúdo da mensagem"},model:{value:e.numero.msg,callback:function(t){e.$set(e.numero,"msg",t)},expression:"numero.msg"}})],1)])])]),n("q-card-actions",{staticStyle:{position:"absolute",right:"0"}},[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"q-col-gutter-md row"},[n("div",{staticClass:"col-12"},[n("q-btn",{staticStyle:{"margin-right":"10px"},attrs:{label:"+5567",cliclable:""},on:{click:function(t){return e.preenche(1)}}}),n("q-btn",{staticStyle:{"margin-right":"10px"},attrs:{label:"+55",cliclable:""},on:{click:function(t){return e.preenche(2)}}}),n("q-btn",{attrs:{label:"Tudo certo",cliclable:"",color:"green","icon-right":"send"},on:{click:e.enviar}})],1)])])])],1)],1)])])])},l=[],i=(n("5319"),{name:"HelloWorld",data:function(){return{numero:{msg:"Boa tarde. recebi seu contato pelo facebook, em relação a vaga de trabalho aqui na DouraSoft. Gostaria de saber se já acessou o link e preencheu seu currículo online. https://jobs.solides.com/dourasoft",telefone:"",enviadoem:""}}},methods:{enviar:function(){window.open("https://api.whatsapp.com/send?phone="+this.numero.telefone+"&text="+this.numero.msg.replace(/\ /g,"%20"),"_blank"),this.numero.telefone="",this.numero.msg="Boa tarde. recebi seu contato pelo facebook, em relação a vaga de trabalho aqui na DouraSoft. Gostaria de saber se já acessou o link e preencheu seu currículo online. https://jobs.solides.com/dourasoft"},preenche:function(e){1===e&&(this.numero.telefone="+5567"+this.numero.telefone),2===e&&(this.numero.telefone="+55"+this.numero.telefone),this.enviar()}}}),c=i,u=n("2877"),d=n("fe09"),p=Object(u["a"])(c,s,l,!1,null,null,null),f=p.exports;p.options.components=Object.assign({QPage:d["h"],QCard:d["b"],QCardSection:d["d"],QInput:d["f"],QCardActions:d["c"],QBtn:d["a"]},p.options.components||{});var m={name:"LayoutDefault",components:{zap:f},data:function(){return{leftDrawerOpen:!1}}},b=m,h=Object(u["a"])(b,a,r,!1,null,null,null),v=h.exports;h.options.components=Object.assign({QLayout:d["g"],QHeader:d["e"],QToolbar:d["j"],QBtn:d["a"],QToolbarTitle:d["k"],QPageContainer:d["i"]},h.options.components||{});n("c867"),n("5c7d");var g=n("f476"),q=(n("7d6e"),n("e54f"),n("a4b7"),n("05bc"),n("0d0e"),n("573e"),n("b05d"));o["a"].use(q["a"],{config:{},components:{},directives:{},plugins:{},lang:g["a"]}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(v)}}).$mount("#app")},c867:function(e,t,n){}});
//# sourceMappingURL=app.4e1a9a7d.js.map