var header = document.querySelector('.hero')

function animateHeader() {
	if (header) {
		if (window.pageYOffset > 0) {
			header.classList.add('_active')
			return
		}
		header.classList.remove('_active')
	}
}
window.addEventListener('scroll', animateHeader)

var scroll = document.querySelector('.scrolldown')

function animateScroll() {
	if (scroll) {
		if (window.pageYOffset > 0) {
			scroll.classList.add('_active-scroll')
			return
		}
		scroll.classList.remove('_active-scroll')
	}
}
window.addEventListener('scroll', animateScroll)

AOS.init();

