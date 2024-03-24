let cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (ev) => {
  cursor.style.left = ev.pageX - 15 + 'px';
  cursor.style.top = ev.pageY - 30 + 'px';
})

// rating
let rate = ['很差', '差', '一般', '好', '很好'];
let wrap = document.querySelector('.rating');
let imgs = wrap.querySelectorAll('span');
let txt = document.querySelector('#txt');
imgs.forEach((img, ind) => {
  img.addEventListener('click', () => {
    imgs.forEach(img => {
      img.classList.remove('active');
    })
    for (let i = 0; i <= ind; i++) {
      imgs[i].classList.add('active');
    }
    txt.innerHTML = rate[ind];
  })
})

let move = document.querySelector('.move');
move.addEventListener('mousedown', fmd);
move.addEventListener('mouseup', fmu);
// move.onmousedown = function (e) {
//   let left = e.clientX - move.offsetLeft;
//   let top = e.clientY - move.offsetTop;
//   move.onmousemove = function (ev) {
//     move.style.left = ev.clientX - left + 'px';
//     move.style.top = ev.clientY - top + 'px';
//   }
//   move.onmouseup = function () {
//     move.onmousemove = null;
//   }
// }
let leftPos, topPos;
function fmd(e) {
  leftPos = e.clientX - move.offsetLeft;
  topPos = e.clientY - move.offsetTop;
  document.addEventListener('mousemove', fmm);
}
function fmm(e) {
  let disX = e.clientX - leftPos;
  let disY = e.clientY - topPos;
  if (disX < 0) {
    disX = 0;
  } else if (disX >= document.documentElement.clientWidth - move.offsetWidth) {
    disX = document.documentElement.clientWidth - move.offsetWidth;
  }
  console.log(document.documentElement.clientHeight);
  if (disY < 0) {
    disY = 0;
  } else if (disY > document.documentElement.clientHeight - move.offsetHeight) {
    disY = document.documentElement.clientHeight - move.offsetHeight;
  }
  move.style.left = disX + 'px';
  move.style.top = disY + 'px';
}
function fmu() {
  document.removeEventListener('mousemove', fmm);
}

let box = document.querySelector('.box');
let img = document.querySelector('.img');
box.addEventListener('mousemove', fn);
function fn(e) {
  let x = e.pageX - box.offsetLeft - 15;
  let y = e.pageY - box.offsetTop - 15;
  img.style.left = x + 'px';
  img.style.top = y + 'px';
}