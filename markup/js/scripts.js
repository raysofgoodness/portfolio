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