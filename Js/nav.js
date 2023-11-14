var hamburger = document.querySelector(".hamburger")
var navMenu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
  })
)
