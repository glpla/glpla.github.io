const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('header nav a')
window.addEventListener('scroll', () => {

  sections.forEach(section => {
    const top = window.scrollY
    const offset = section.offsetTop - 100
    const height = section.offsetHeight
    const id = section.getAttribute('id')

    if (top >= offset && top < offset + height) {
      links.forEach(link => {
        link.classList.remove('active')
        document.querySelector(`a[href*=${id}]`).classList.add('active')
      })
    }
  })

  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 100)
})