let topBtn = document.querySelector('.return_button')

function toTop() {
  if (window.pageYOffset > 20) {
    topBtn.style.opacity = '1'
  } else { topBtn.style.opacity = '0' }
}

topBtn.onclick = function () {
	window.scrollTo(0,0)
}

window.onscroll = toTop