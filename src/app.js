import "./style.scss"
import "../img/SHE5459.jpg"

function topBtn() {
  let topBtn = document.querySelector('.return_button')

  topBtn.onclick = function () {
    window.scrollTo(0,0)
  }
  
  document.addEventListener('scroll', e => {
    if (window.pageYOffset > 200) {
      topBtn.style.opacity = '1'
    } else { topBtn.style.opacity = '0' }
  })
}

topBtn()