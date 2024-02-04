const head = document.querySelector("header");
const back = document.querySelector(".back");
window.addEventListener("scroll", () => {
  let h = head.getBoundingClientRect().height;
  if (window.pageYOffset - h > 200) {
    if (!head.classList.contains("sticky")) {
      head.classList.add("sticky");
    }
  } else {
    head.classList.remove("sticky");
  }
  if (window.pageYOffset > 1000) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
});
const glide = new Glide(".glide");
const captionEl = document.querySelectorAll(".glide-caption");
glide.on(["mount.after", "run.after"], () => {
  console.log(glide.index);
  const caption = captionEl[glide.index];
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 400,
    easing: "linear",
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger(40, 10), 0],
  });
});
glide.on("run.before", () => {
  document.querySelectorAll(".glide-caption>*").forEach((el) => {
    el.style.opacity = 0;
  });
});
glide.mount();

// isotope

const isotope = new Isotope(".item-wrap", {
  layoutMode: "fitRows",
  itemSelector: ".item",
});
const btns = document.querySelector(".btns-wrap");
btns.addEventListener("click", (e) => {
  // keep the name same
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
const revealOption = {
  delay: 300,
  distance: "50px",
  duration: 500,
  easing: "ease-in-out",
  origin: "bottom",
};
ScrollReveal().reveal(".feature", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".service-item", { ...revealOption, interval: 350 });
ScrollReveal().reveal(".data-wrap", {
  beforeReveal: () => {
    anime: ({
      targets: '.data-item .num',
      innerHTML: el => {
        return [0, el.innerHTML]
      },
      duration: 2000,
      round: 1,
      easing: 'easeInExpo'
    })
  }
});

const scroll = new SmoothScroll('nav a[href*="#"], .back a[href*="#"]', {
  header: 'header',
  offset: 80
})
document.addEventListener('scrollStart', () => {
  if (head.classList.contains('open')) {
    head.classList.remove('open')
  }
})
const burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
  head.classList.toggle('open')
})
