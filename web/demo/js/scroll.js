let lis = document.querySelectorAll('li');
let html = document.documentElement;
document.addEventListener('scroll', () => {
  let per = html.scrollTop / (html.scrollHeight - html.clientHeight);

  let total = 1 / lis.length;
  for (let [index, li] of lis.entries()) {
    let start = total * index;
    let end = total * (index + 1);
    let pro = (per - start) / (end - start);
    if (pro >= 1) pro = 1;
    if (pro <= 0) pro = 0;
    li.style.setProperty('--per', pro);
  }
})