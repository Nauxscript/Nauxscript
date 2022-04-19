window.addLoadEvent(() => {
  if (localStorage.postList == 1) {
    window.bindScroll(document.documentElement.clientHeight)
    localStorage.postList = 0
  }
})