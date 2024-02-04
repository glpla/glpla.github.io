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
let msgs = fetch('../../data/data2023/msg.json')
  .then(res => res.json())
  .then(res => {
    console.log(res);
    msgBox.innerHTML = res.map(item =>
      `
      <div class="msg-item">
        <div class="msg-title">${item.name}</div>
        <div class="msg-mail">${item.mail}</div>
        <div class="msg-cont">${item.msg}</div>
      </div>
      `
    ).join('')
  })
// countdown
let time = document.querySelector('#time')
let inter = setInterval(ticking, 1000)
let y, m, d, hh, mm, ss
function ticking() {
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
function digit2(num) {
  return num > 9 ? num : '0' + num
}