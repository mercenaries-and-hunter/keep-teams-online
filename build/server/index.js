(()=>{"use strict";const o=(o,e="string")=>new Promise((e=>{var n,t;null===(t=null===(n=chrome.storage)||void 0===n?void 0:n.local)||void 0===t||t.get(o,(function(n){console.log(o,null==n?void 0:n[o]),e(null==n?void 0:n[o])}))})),e=o=>{var e;null===(e=null===chrome||void 0===chrome?void 0:chrome.tabs)||void 0===e||e.query({},(function(e){null==e||e.forEach((e=>{null===chrome||void 0===chrome||chrome.tabs.sendMessage(null==e?void 0:e.id,o).catch((o=>{console.log(o)}))}))}))},n=function(n,t,i){return"on"===n.args?(e({type:"on"}),void i({data:!0})):"off"===n.args?(e({type:"off"}),void i({data:!1})):"get-config"!==n.args||void i({flag:o("flag")})};var t,i=function(o,e,n,t){return new(n||(n=Promise))((function(i,l){function c(o){try{r(t.next(o))}catch(o){l(o)}}function d(o){try{r(t.throw(o))}catch(o){l(o)}}function r(o){var e;o.done?i(o.value):(e=o.value,e instanceof n?e:new n((function(o){o(e)}))).then(c,d)}r((t=t.apply(o,e||[])).next())}))};chrome.runtime.onMessage.addListener(n),chrome.runtime.onMessageExternal.addListener(n),chrome.runtime.onInstalled.addListener((()=>i(void 0,void 0,void 0,(function*(){const e=(yield o("flag"))?"on":"off";yield chrome.action.setBadgeText({text:e})})))),null===(t=chrome.action)||void 0===t||t.onClicked.addListener((()=>i(void 0,void 0,void 0,(function*(){const n=(yield o("flag"))?"off":"on";((o,e)=>{var n,t;null===(t=null===(n=null===chrome||void 0===chrome?void 0:chrome.storage)||void 0===n?void 0:n.local)||void 0===t||t.set({[o]:e})})("flag",!(yield o("flag"))),e({type:n}),yield chrome.action.setBadgeText({text:n})}))))})();