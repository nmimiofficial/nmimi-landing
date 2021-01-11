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

AOS.init();

window.addEventListener('click', function (e) {
	if (e.target == document.querySelector('#nav-menu-wrapper')) {
		toggleMenu();
	}
});
window.addEventListener('resize', function () {
	if (window.innerWidth > 640) {
		var mainNav = document.getElementById('nav-menu');
		mainNav.classList.remove('active');
	}
});

function toggleMenu() {
	var mainNav = document.getElementById('nav-menu');
	mainNav.classList.toggle('active');
}

lightbox.option({
	resizeDuration: 200,
	wrapAround: true,
});

function setActiveProducts(type) {
	let sortItem = document.querySelector('#product-list');
	if (sortItem) {
		let sortItems = sortItem.children;
		for (let k = 0; k < sortItems.length; k++) {
			sortItems[k].classList.remove('deleted');
			if (sortItems[k].getAttribute('data-filter') != type) {
				sortItems[k].classList.add('deleted');
			}
		}
	}
}

window.onload = function () {
	let sortBtn = document.querySelector('#filter-menu');

	setActiveProducts('new-arrival');

	if (sortBtn) {
		let sortBtns = sortBtn.children;

		for (let i = 0; i < sortBtns.length; i++) {
			sortBtns[i].addEventListener('click', function () {
				for (let j = 0; j < sortBtns.length; j++) {
					sortBtns[j].classList.remove('active');
				}

				this.classList.add('active');

				let targetData = this.getAttribute('data-filter');
				setActiveProducts(targetData);
			});
		}
	}
};
