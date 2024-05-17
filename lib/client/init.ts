class Setting {
  private mockJob?:  NodeJS.Timeout;
  private config: any;
  private mocking: boolean;

  constructor() {
    this.mocking = false;
    chrome.runtime.onMessage.addListener((r) => {
      if ( r?.type === 'on' ) {
        this.initMock()
      }
      if ( r?.type === 'off' ) {
        this.cancelMock()
      }
    })
    chrome.runtime.sendMessage(process.env.EXTENSION_NAME, {args: 'get-config'}, res => {
      this.config = res;
      if(res.flag){
        this.initCheck();
      }else {
        this.cancelMock();
      }
    });
  }
  initCheck(){
    if(this.mocking === false){
      this.initMock();
    }
  }
  initMock() {
    if(this.mockJob){
      this.cancelMock();
    }
    this.mockJob = setInterval(() => {
      // for teams
      document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
      // for slack
      document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    }, 4 * 60 * 1000);
    this.mocking = true;
  }

  cancelMock() {
    if ( this.mockJob ) {
      clearInterval(this.mockJob);
      this.mockJob = undefined;
    }
    this.mocking = false;
  }
}

new Setting();
