new class{constructor(){this.mocking=!1,chrome.runtime.onMessage.addListener((i=>{"on"===(null==i?void 0:i.type)&&this.initMock(),"off"===(null==i?void 0:i.type)&&this.cancelMock()})),chrome.runtime.sendMessage("ajgfeknmppbopbbebobgeipecjgclbge",{args:"get-config"},(i=>{this.config=i,i.flag?this.initCheck():this.cancelMock()}))}initCheck(){!1===this.mocking&&this.initMock()}initMock(){this.mockJob&&this.cancelMock(),this.mockJob=setInterval((()=>{document.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0}))}),24e4),this.mocking=!0}cancelMock(){this.mockJob&&(clearInterval(this.mockJob),this.mockJob=void 0),this.mocking=!1}};