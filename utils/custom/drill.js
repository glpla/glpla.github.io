fetch('/common/drill.html')
    .then(res => res.text())
    .then(res => {
        document.getElementById('drill').innerHTML = res;
    })