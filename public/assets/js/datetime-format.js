!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r={year:["YYYY","YYY","YY","Y"],month:["MM","M"],date:["DD","D"],hour:["HH24","HH12","HH","H24","H12","H"],minute:["mm","mi","m"],second:["ss","s"],week:["WW","W"],APM:["APM"]},o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.checkOptions(e)}return function(t,e,r){e&&n(t.prototype,e)}(t,[{key:"checkOptions",value:function(t){this.options=t?{datetime:t.datetime||new Date,format:t.format||"YYYY-MM-DD HH24:mm:ss"}:{datetime:new Date,format:"YYYY-MM-DD HH24:mm:ss"}}},{key:"getDateObject",value:function(){var t;this.options.datetime instanceof Date?t=this.options.datetime:this.options.datetime instanceof Number&&(t=new Date(this.datetime));var e=12<t.getHours()?t.getHours()-12:t.getHours();return{year:t.getFullYear(),year2:t.getFullYear().toString().substring(2),month:t.getMonth()+1,month2:1<(t.getMonth()+1+"").length?t.getMonth()+1+"":"0"+(t.getMonth()+1),date:t.getDate(),date2:1<t.getDate().toString().length?t.getDate().toString():"0"+t.getDate().toString(),week:t.getDay(),week2:1<t.getDay().toString().length?t.getDay().toString():"0"+t.getDay().toString(),hour:t.getHours(),hour12:e,hour2:1<t.getHours().toString().length?t.getHours().toString():"0"+t.getHours().toString(),hour122:1<e.toString().length?e.toString():"0"+e.toString(),minute:t.getMinutes(),minute2:1<t.getMinutes().toString().length?t.getMinutes().toString():"0"+t.getMinutes().toString(),second:t.getSeconds(),second2:1<t.getSeconds().toString().length?t.getSeconds().toString():"0"+t.getSeconds().toString(),APM:12<=t.getHours()?"PM":"AM",time:t.getTime(),dateObject:t}}},{key:"getDate",value:function(t){return this.formatDate(t)}},{key:"formatDate",value:function(t){t&&(this.options.format=t);var e=this.getDateObject();for(var n in this.formatDateTime=this.options.format,r){var o=!0,i=!1,a=void 0;try{for(var u,g=r[n][Symbol.iterator]();!(o=(u=g.next()).done);o=!0){var s=u.value,f=new RegExp(s,"g");if(this.options.format.match(f)){this.formatDateTime="HH12"==s||"H12"==s?this.formatDateTime.replace(f,e[n+(4==s.length?"122":"12")]):this.formatDateTime.replace(f,e[n+(2==s.length?"2":"")]);break}}}catch(t){i=!0,a=t}finally{try{o||null==g.return||g.return()}finally{if(i)throw a}}}return this.formatDateTime}}]),t}();try{window.DateTimeFormat=o}catch(t){}t.exports=o}]);