const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

for (let menuLink of menuLinks) {
	menuLink.onclick = function () {
		const parent = menuLink.parentElement;

		if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
			parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parent.querySelector('.menu_sub').className = 'menu menu_sub';
		}

		if (menuLink.closest('.menu_main')) {
			return false
		}
	}
}
