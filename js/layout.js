// let toBanner = document.getElementById('toBanner')

// let avatar = document.getElementById('avatar')
// b.addEventListener('click', function () {
//   // smoothScroll(window, 0, 20000)
//   // setTimeout(() => {
//   //   smoothScroll(window, 1009, 5000)
//   // }, 5000);
  
// })
// toBanner.addEventListener('click', () => bindScroll(0))
// avatar.addEventListener('click', () => bindScroll(1200))

window.bindScroll = (to, elem, cb) => {
  if (typeof elem === 'function' && !cb) {
    cb = elem
    elem = null
  }
  if (!elem) {
    elem = window
  }
  elem.scrollTo({
    top: to,
    behavior: "smooth"
  })
  const fn = () => {
    let currentScrollOffset = elem.scrollTop || window.pageYOffset
    //滚动到达目标
    if (currentScrollOffset === to) {
      cb && cb()
      elem.removeEventListener('scroll', fn)
    }
  }
  elem.addEventListener('scroll', fn)
}

window.debounce = (fn, delay = 200) => {
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay);
  }
}

window.addLoadEvent = (func) => {
  let oldLoad = window.onload
  if (typeof oldLoad !== 'function') {
    window.onload = func
  } else {
    window.onload = () => {
      oldLoad()
      func()
    }
  }
}

addLoadEvent(() => {
  console.log('layout load')
  setTimeout(() => {
    document.getElementsByTagName('body')[0].style.opacity = 100
  }, 300);
})

// document.addEventListener('DOMContentLoaded',function(){
// })