const gb_used = 815
const left = document.getElementById("left")
const gb_used_indicator = document.querySelector(".gb_used")
const indicator = document.querySelector(".indicator")

gb_used_indicator.textContent = gb_used
left.textContent = 1000 - gb_used

indicator.style.width = gb_used / 10 + "%"
