let navItems = document.querySelectorAll('.nav-item')
let navConts = document.querySelectorAll('.nav-cont')
let navWrap = document.querySelector('.nav-wrap')
let ham = document.querySelector('.ham')
navItems.forEach((item, ind) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    navConts[ind].scrollIntoView()
    navItems.forEach(item => {
      item.classList.remove('active')
    })
    item.classList.add('active');
    ham.classList.toggle('active')
    navWrap.classList.toggle('active')
    document.body.classList.toggle('lock')
  })
})
ham.addEventListener('click', () => {
  ham.classList.toggle('active')
  navWrap.classList.toggle('active')
  document.body.classList.toggle('lock')
})