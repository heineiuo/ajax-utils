/*! lib-ajax v0.1.0 UTC:2016-03-01 06:31:18 */
!function(b,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.createAjax=a():b.createAjax=a()}(this,function(){return function(c){function a(d){if(b[d])return b[d].exports;var e=b[d]={exports:{},id:d,loaded:!1};return c[d].call(e.exports,e,e.exports,a),e.loaded=!0,e.exports}var b={};return a.m=c,a.c=b,a.p="",a(0)}([function(a,d,b){var c=b(1);a.exports=function(a){return function(b,e,f){function d(b){return{_url:a[b][2],_data:{},_param:null,param:function(a){return this._url+="/",this._url+=a,this},query:function(a){return this._url+=this._url.indexOf("?")>0?"&":"?",this._url+=c(a),this},data:function(a){return this._data=_.extend(this._data,a),this},exec:function(c){if(!_.has(a,b))return c(b+"不存在");if("function"==typeof a.__autoData&&("GET"==a[b][1]?this.query(a.__autoData()):this.data(a.__autoData())),this.query({"_timestamp=":(new Date).getTime()}),console.info("请求数据: 名称",b,"数据",this._data),a.__development||0==a[b][0]){if(!_.has(a,"__mock"))return console.log("不支持mock");if(!_.has(a.__mock,b))return console.log("mock数据未定义");var e=a.__mock[b](this._data);return console.info("返回数据(模拟): 名称",b,"数据",e),c(null,e)}var d=a[b][3]||"json",f={url:this._url,type:a[b][1],data:this._data,dataType:d};"jsonp"==d&&(f.jsonp="callback"),$.ajax(f).done(function(a){"json"==d?a.error?(console.info("请求真实接口报错"),c(a.error,a)):(console.info("返回真实接口正常: 名称",b,"数据",a),c(null,a)):(console.info("返回非json数据"),c(null,a))}).fail(function(a,b,d){console.info("接口异常"),c("接口异常")}),this._param=null,this._data={}}}}return"undefined"==typeof a[b]?console.warn("ajax方法未找到: "+b):1==arguments.length?d(b):void d(b).data(e).exec(f)}}},function(a,c){function b(a){var b=[];for(var c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")}a.exports=b}])});