// localStorage.clear();
// let form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   new FormData(form);
// })
// form.addEventListener('formdata', (e) => {
//   const data = e.formData;
//   localStorage.setItem('user', data.get('name'));
//   localStorage.setItem('email', data.get('email'));
//   localStorage.setItem('msg', data.get('msg'));
//   form.reset();
//   alert('data added');
// })

// function FormData2JSON(formdata) {
//   var json = {};
//   var entries = formdata.entries();
//   var item = entries.next();
//   while (!item.done) {
//     json[item.value[0]] = item.value[1];
//     item = entries.next();
//   }
//   return json;
// }


// msg
let msgBox = document.querySelector('.msg-box')
let msgs = fetch('/utils/data/data2023/msg.json')
  .then(res => res.json())
  .then(res => {
    msgBox.innerHTML = res.map((item, ind) =>
      `
      <div class="msg-item">
        <div class="msg-title"><img src="https://glpla.github.io/utils/avatar/avatar${ind}.png" alt=""> ${item.name}</div>
        <div class="msg-mail">${item.mail}</div>
        <div class="msg-cont">${item.msg}</div>
      </div>
      `
    ).join('')
  })

// countdown
let time = document.querySelector('#time')
let y, m, d, hh, mm, ss
const digit2 = (num) => {
  return num > 9 ? num : '0' + num
}
const ticking = () => {
  date = new Date();
  y = date.getFullYear();
  m = date.getMonth() + 1;
  d = date.getDate();
  hh = date.getHours();
  mm = date.getMinutes();
  ss = date.getSeconds();
  time.innerHTML = `${y}年${digit2(m)}月${digit2(d)}日 ${digit2(hh)}:${digit2(mm)}:${digit2(ss)}`
}
ticking()

let inter = setInterval(ticking, 1000)

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: true,
  grabCursor: true,
  speed: 1000,
  slidesPerView: 5,
  spaceBetween: 10,
  // centeredSlides: true,
  mousewheel: true,
  // effect: 'coverflow',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // on: {
  //   click: (e) => {
  //     console.log('hi', e.activeIndex, e.realIndex, e.autoplay);
  //     e.autoplay = false
  //   },
  // },
});

// 定义媒体查询
var mediaQuery = window.matchMedia("(max-width: 768px)");

// 监听媒体查询的变化
mediaQuery.addListener(handleMediaChange);

// 初始化处理函数
handleMediaChange(mediaQuery);

function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    // 当屏幕宽度小于或等于768px时执行的代码
    console.log("屏幕宽度小于或等于768px，执行相应的JS代码...");
    // 这里可以调用特定的函数或者改变DOM等
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
    })
    clearInterval(inter);
  } else {
    // 当屏幕宽度大于768px时执行的代码
    console.log("屏幕宽度大于768px，执行其他的JS代码...");
    // 执行其他逻辑
  }
}
// const revealOption = {
//   delay: 300,
//   distance: "50px",
//   duration: 500,
//   easing: "ease-in-out",
//   interval: 350
// };
// ScrollReveal().reveal("h3", { ...revealOption, origin: "bottom" });
// ScrollReveal().reveal("figcaption", { ...revealOption, origin: "top" });
// ScrollReveal().reveal(".msg-item", { ...revealOption, origin: "top" });
// ScrollReveal().reveal(".help .help-item", { ...revealOption, origin: "top" });
