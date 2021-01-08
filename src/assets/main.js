var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	spaceBetween: 50,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

let sortBtn = document.querySelector('#filter-menu').children;
let sortItem = document.querySelector('#product-list').children;

for (let i = 0; i < sortBtn.length; i++) {
	sortBtn[i].addEventListener('click', function () {
		for (let j = 0; j < sortBtn.length; j++) {
			sortBtn[j].classList.remove('active');
		}

		this.classList.add('active');

		let targetData = this.getAttribute('data-filter');

		for (let k = 0; k < sortItem.length; k++) {
			sortItem[k].classList.remove('active');
			if (sortItem[k].getAttribute('data-filter') == targetData) {
				sortItem[k].classList.add('active');
			}
		}
	});
}

lightbox.option({
	'resizeDuration': 200,
	'wrapAround': true
})