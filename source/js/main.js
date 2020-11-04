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
function menuToggle() {
	const element = document.getElementById("body");
	element.classList.toggle("open-bar");
}

$(document).ready(function () {
	$("#body").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1200);
	});
});