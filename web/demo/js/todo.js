let listArr;
let msg = document.querySelector('#msg');
let form = document.querySelector('form');
let subBtn = document.querySelector('#sub-btn');
let list = document.querySelector('#list');
let num = document.querySelector('#num');
let clearBtn = document.querySelector('#clear-btn');

showList();

msg.addEventListener('keyup', () => {
  if (msg.value.trim() == '') {
    subBtn.classList.remove('msg-active');
  } else {
    subBtn.classList.add('msg-active');
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let userIpt = msg.value;
  listArr = JSON.parse(localStorage.getItem('msgs')) || [];
  listArr.unshift(userIpt)
  localStorage.setItem('msgs', JSON.stringify(listArr));
  form.reset();
  subBtn.classList.remove('msg-active');
  showList();
})
clearBtn.addEventListener('click', () => {
  listArr = [];
  localStorage.clear();
  showList();
})
function del(ind) {
  listArr = JSON.parse(localStorage.getItem('msgs')) || [];
  listArr.splice(ind, 1);
  localStorage.setItem('msgs', JSON.stringify(listArr));
  showList();
}
function showList() {
  listArr = JSON.parse(localStorage.getItem('msgs')) || [];
  let cont = '';
  listArr.forEach((item, index) => {
    // +“（”+index+")"
    console.log(item, index);
    cont += `<li>${item}<span onclick="del(${index})" class="iconfont icon-trash-alt"></span></li>`;
  })
  list.innerHTML = cont;
  num.innerHTML = listArr.length;
  if (listArr.length) {
    clearBtn.classList.add('msg-active');
  } else {
    clearBtn.classList.remove('msg-active');
  }
}