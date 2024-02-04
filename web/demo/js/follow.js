let body = document.querySelector('body');
window.addEventListener('mousemove', (e) => {
  let heart = document.createElement('span');
  heart.style.left = e.offsetX + 'px';
  heart.style.top = e.offsetY + 'px';
  heart.style.transform = `rotate(${Math.random() * 360}deg)`
  let size = Math.random() * 32;
  heart.style.width = size + 32 + 'px';
  heart.style.height = size + 32 + 'px';
  body.appendChild(heart);
  heart.addEventListener('animationend', () => {
    body.removeChild(heart);
  })
  // setTimeout(() => {
  //   body.removeChild(heart);
  // }, 1100)
})