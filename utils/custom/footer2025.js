fetch('/common/footer2025.html')
  .then(res => res.text())
  .then(res => {
    document.getElementById('footer').innerHTML = res;
  })