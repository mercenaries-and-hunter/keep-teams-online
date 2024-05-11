setInterval(() => {
  document.dispatchEvent(new MouseEvent('mousemove',{bubbles:true}))
}, 4 * 60 * 1000)