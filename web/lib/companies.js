const head = document.querySelector("header");
const back = document.querySelector(".back");
const burger = document.querySelector('.burger')

document.addEventListener('scrollStart', () => {
  if (head.classList.contains('open')) {
    head.classList.remove('open')
  }
})

burger.addEventListener('click', () => {
  head.classList.toggle('open')
})

// window.addEventListener("scroll", () => {
//   let h = head.getBoundingClientRect().height;
//   if (window.pageYOffset - h > 200) {
//     if (!head.classList.contains("sticky")) {
//       head.classList.add("sticky");
//     }
//   } else {
//     head.classList.remove("sticky");
//   }
//   if (window.pageYOffset > 1000) {
//     back.style.display = "block";
//   } else {
//     back.style.display = "none";
//   }
// });

// scrollReveal option
const revealOption = {
  delay: 300,
  distance: "50px",
  duration: 500,
  easing: "ease-in-out",
  origin: "bottom",
};

// swiper
const swiperInfo = document.querySelectorAll('.swiper-info')
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.on('slideChange', () => {
  console.log('改变了，realIndex为' + swiper.realIndex);
  anime({
    targets: swiperInfo[swiper.realIndex].children,
    opacity: [0, 1],
    duration: 400,
    easing: "linear",
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger(40, 10), 0],
  })
}
)

// isotope
const isotope = new Isotope(".item-wrap", {
  itemSelector: ".item",
  layoutMode: 'fitRows',
  percentPosition: true,
  fitRows: {
    gutter: '.gutter-sizer'
  },
});
const btns = document.querySelector(".btns-wrap");
btns.addEventListener("click", (e) => {
  let { target } = e;
  let ind = target.getAttribute("data-filter");
  console.log(ind);
  if (ind) {
    document.querySelectorAll(".btn.active").forEach((btn) => {
      btn.classList.remove("active");
      target.classList.add("active");
      isotope.arrange({ filter: ind });
    });
  }
});

// scrollReveal
ScrollReveal().reveal(".feature-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".service-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".team-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".news-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".data-item", {
  afterReveal: (el) => {
    let ipt = el.querySelector('.num');
    console.log('ipt', ipt);
    anime({
      targets: ipt,
      value: [0, ipt.value],
      duration: 2000,
      round: 1,
      easing: 'easeInExpo',
    })
  }
});
const animeIpt = () => {
  anime: ({
    targets: '.data-item .num',
    value: [0, 234],
    duration: 2000,
    round: 1,
    easing: 'easeInExpo'
  })
}

// const scroll = new SmoothScroll('nav a[href*="#"], .back a[href*="#"]', {
//   header: 'header',
//   offset: 80
// })
