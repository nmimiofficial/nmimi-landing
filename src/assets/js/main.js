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

function setActiveCollections(e, id) {
	let sortBtn = document.querySelector('#filter-menu');
	let sortBtns = sortBtn.children;
	for (let i = 0; i < sortBtns.length; i++) {
		sortBtns[i].classList.remove('active');
	}
	e.classList.add('active');
	let sortItems = document.querySelector('#collections-wrapper').children;
	for (let k = 0; k < sortItems.length; k++) {
		sortItems[k].classList.add('hidden');
		if (sortItems[k].id == id) {
			sortItems[k].classList.remove('hidden');
		}
	}
}

var myIndex = 0;

function carousel() {
	var i;
	var x = document.getElementsByClassName('banner-slide');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = 'block';
	setTimeout(carousel, 4000);
}

window.onload = function () {
	var header = document.querySelector('header');
	var pathname = window.location.pathname;
	if (pathname == '/') {
		if (window.scrollY > 100) {
			header.classList.add('scrolled');
		}
		window.addEventListener('scroll', function () {
			header.classList.toggle('scrolled', window.scrollY > 100);
		});
		carousel();
	} else {
		header.classList.add('scrolled');
	}

	setTimeout(function () {
		document.querySelector('#loading').classList.add('fade-out');
	}, 1200);
};
