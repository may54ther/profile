const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	spaceBetween: 25,
});

const $headerMenuBtn = document.querySelector('.header-btn');
const $headerNav = document.querySelector('.header-navigation');
$headerMenuBtn.addEventListener('click', function () {
	document.getElementById('header').classList.toggle('active');
});
$headerNav.addEventListener('click', function (e) {
	console.log(e.target);
	document.getElementById('header').classList.toggle('active');
});
