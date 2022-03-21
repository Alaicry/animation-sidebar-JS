window.onload = function () {
	let icon = document.querySelector('.sidebar__icons');
	let mainContent = document.querySelector('.main');
	let mainContentWrapper = document.querySelector('.main > .main__wrapper')

	icon.onclick = function () {
		this.classList.toggle('change-icon');
		mainContent.classList.toggle('main_bg');
		mainContentWrapper.classList.toggle('main__wrapper_bg');
	};

	const closeMenu = (event) => {
		let target = event.target;
		if (target.classList.contains('main_bg')) {
			icon.classList.remove('change-icon');
			mainContent.classList.remove('main_bg');
			mainContentWrapper.classList.remove('main__wrapper_bg');
		}
	};

	mainContent.addEventListener('click', closeMenu);
}