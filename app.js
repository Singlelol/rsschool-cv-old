let topBtn = document.querySelector('.return_button')

topBtn.onclick = function () {
	window.scrollTo(0,0)
}

document.addEventListener('scroll', e => {
  if (window.pageYOffset > 200) {
    topBtn.style.opacity = '1'
  } else { topBtn.style.opacity = '0' }
})