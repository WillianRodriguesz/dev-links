function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  if (html.classList.toggle("light")) {
    img.setAttribute("src", "./assets/AvatarClaro.png")
  } else {
    img.setAttribute("src", "./assets/AvatarEscuro.png")
  }
}
