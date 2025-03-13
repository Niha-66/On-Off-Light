
function switchOff() {
  document.getElementById("bulbImage").src =
    "https://res.cloudinary.com/dwuh8f0pv/image/upload/v1741884637/bulb2-removebg-preview_gw4tqf.png";
  document.getElementById("catImage").src =
    "https://res.cloudinary.com/dwuh8f0pv/image/upload/v1741885071/gettyimages-1130757918-612x612-removebg-preview_wdctb4.png";
  document.getElementById("switchStatus").textContent = "Switched Off";
  document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
  document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
  document.getElementById("bulbImage").src =
    "https://res.cloudinary.com/dwuh8f0pv/image/upload/v1741884594/bulb1-removebg-preview_p0ukq7.png";
  document.getElementById("catImage").src =
    "https://res.cloudinary.com/dwuh8f0pv/image/upload/v1741879839/cat-removebg-preview_burj6e.png";
  document.getElementById("switchStatus").textContent = "Switched On";
  document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
  document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}