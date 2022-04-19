let bannerBtn = document.getElementById('banner')
let listBtn = document.getElementById('article-list')
let postListBtn = document.getElementById('post-list')
// let projectBtn = document.getElementById('project')

bannerBtn && bannerBtn.addEventListener('click', () => window.bindScroll && window.bindScroll(0))
listBtn && listBtn.addEventListener('click', () => window.bindScroll && window.bindScroll(document.documentElement.clientHeight))
postListBtn && postListBtn.addEventListener('click', () => {
  localStorage.postList = 1
  window.location.href = '/'
})
// projectBtn.addEventListener('click', () => bindScroll(2 * clientH))

// darkmode
// window.onload = function() {
//   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.querySelector('html').classList.add('dark')
//   } else {
//     document.querySelector('html').classList.remove('dark')
//   }
// }

function darkAndLight(e) {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
}

const darkModeBtn = document.getElementById('toggleDarkMode')
darkModeBtn && darkModeBtn.addEventListener('click', darkAndLight)