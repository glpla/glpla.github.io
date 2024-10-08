const mask = document.querySelector(".mask")
// window.addEventListener("load", function () {
//     mask.classList.add("fade-in")
//     mask.addEventListener("animationend", function () {
//         mask.classList.remove("fade-in")
//     })
// })
const links = document.querySelectorAll(".fade-link")
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault()
        let target = e.currentTarget.href

        mask.classList.add("fade-out")
        mask.addEventListener("animationend", function () {
            window.location.href = target
        })
    })
})