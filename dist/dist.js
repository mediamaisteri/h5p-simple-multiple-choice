!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";H5P.SimpleMultiChoice=n(1)["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(2),s=r(u),l=0,p=function(e){function t(e){arguments.length<=1||void 0===arguments[1]?null:arguments[1];i(this,t);var n=a(this,Object.getPrototypeOf(t).call(this));return n.params=e,n.uniqueName="h5p-simple-multiple-choice-"+l,l+=1,n.state=n.params.alternatives.map(function(e,t){return{id:t,text:e,checked:!1}}),n.xapiGenerator=new s["default"](e),n.attach=function(e){var t=document.createElement("div");t.className="h5p-simple-multiple-choice";var n=this.createQuestion();n.className="h5p-simple-multiple-choice-question",t.appendChild(n);var r=this.createAlternativesList(this.params.alternatives);t.appendChild(r),e.get(0).appendChild(t)},n.createQuestion=function(){var e=document.createElement("div");return e.textContent=this.params.question,e},n.handleInputChange=function(e){var t=this;this.state=this.state.map(function(n,r){var i=r===e;return"radio"!==t.params.inputType&&(i=r===e?!n.checked:n.checked),c({},n,{checked:i})});var n=this.createXAPIEventTemplate("interacted"),r=this.xapiGenerator.generateXApi(n,this.state);this.trigger("xAPIchanged",r)},n.createAlternativesList=function(e){var t=this,n=document.createElement("ul");return n.className="h5p-simple-multiple-choice-alternatives",e.forEach(function(e,r){var i=document.createElement("li"),a=document.createElement("label"),o=document.createElement("input");o.type=t.params.inputType||"checkbox",o.name=t.uniqueName,a.addEventListener("change",t.handleInputChange.bind(t,r)),a.appendChild(o),a.innerHTML+=e,i.appendChild(a),n.appendChild(i)}),n},n}return o(t,e),t}(H5P.EventDispatcher);t["default"]=p},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){n(this,e);var r=t.question,i=t.alternatives,a=i.map(function(e,t){return{id:t,description:{"en-US":e}}});this.event={description:{"en-US":r},type:"http://adlnet.gov/expapi/activities/cmi.interaction",interactionType:"choice",choices:a}}return i(e,[{key:"generateXApi",value:function(e,t){var n=t.reduce(function(e,t,n){return t.checked&&(e+=(e.length?"[,]":"")+n),e},""),i=e.data.statement;if(r(i,{result:{response:n}}),i.object){var a=i.object.definition;r(a,this.event)}return e}}]),e}();t["default"]=a}]);
//# sourceMappingURL=dist.js.map