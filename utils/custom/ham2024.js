let ind = 0;
let navItems = document.querySelectorAll('.nav-item')
let navConts = document.querySelectorAll('.nav-cont')
let nav = document.querySelector('.nav');
let ham = document.querySelector('.ham')

const hamToggle = () => {
  if (ind) {
    ind = 0;
    // ham.classList.remove('icon-close');
    // ham.classList.add('icon-menu');
    ham.className = 'iconfont icon-menu ham'
  } else {
    ind = 1
    // ham.classList.remove('icon-menu');
    // ham.classList.add('icon-close');
    ham.className = 'iconfont icon-close ham'
  }
}

navItems.forEach((item, ind) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()

    navConts[ind].scrollIntoView()

    navItems.forEach(item => {
      item.classList.remove('active')
    })

    item.classList.add('active')

    document.body.classList.toggle('lock')
    nav.classList.toggle('active')
    ham.classList.toggle('active')

    // hamToggle()
  })
})

ham.addEventListener('click', (e) => {
  e.stopPropagation()

  document.body.classList.toggle('lock')
  nav.classList.toggle('active')
  ham.classList.toggle('active')

  // hamToggle();
})
