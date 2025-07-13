const btnHamb = document.getElementById("btn-hamburger")
const sideNav = document.getElementById("side-nav")

window.addEventListener('resize', (event) => {
    if(window.innerWidth > 600) {
        sideNav.style.display = "none"
    }
})

btnHamb.addEventListener('click', () => {
    if (sideNav.style.display == "none") {
        sideNav.style.display = "flex"
    } else {
        sideNav.style.display = "none"
    }
})