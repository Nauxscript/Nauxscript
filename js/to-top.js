let view = document.getElementsByClassName('post-detail-container')[0]
let toTopBtn = document.getElementById('to-top')
toTopBtn && toTopBtn.addEventListener('click', () => {
  window.bindScroll && window.bindScroll(0, view)
})

window.addLoadEvent(() => {
  let btnP = toTopBtn.parentNode
  view.addEventListener("scroll", window.debounce(() => {
    if (view.scrollTop === 0) {
      btnP.classList.replace('opacity-100', 'opacity-0')
      setTimeout(() => {
        btnP.classList.replace('xl:flex', 'xl:hidden')
      }, 150);
    } else {
      btnP.classList.replace('opacity-0', 'opacity-100')
      setTimeout(() => {
        btnP.classList.replace('xl:hidden', 'xl:flex')
      }, 150);
    }
  }))
}) 