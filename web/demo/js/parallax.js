let h1 = document.querySelector('h1')
let tree0 = document.querySelector('.tree0')
let tree1 = document.querySelector('.tree1')
let tree2 = document.querySelector('.tree2')
let tree3 = document.querySelector('.tree3')
window.addEventListener('scroll', () => {
  let val = window.scrollY;
  tree0.style.left = -val * 0.25 + 'px';
  tree1.style.left = -val * 0.5 + 'px';
  tree2.style.right = -val * 0.25 + 'px';
  tree3.style.marginLeft = -val * 0.5 + 'px';
  h1.style.marginTop = val + 'px';
})