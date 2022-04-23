document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navList = document.querySelector('.navbar-collapse')
	const toTheTopBtn = document.querySelector('.to-the-top')

	document.onclick = function (e) {
		if (e.target.id !== 'navbar') {
			navList.classList.remove('show')
		}
	}

	const hideBtn = () => {
		if (window.scrollY > 300) {
			toTheTopBtn.style.display = 'flex'
			toTheTopBtn.classList.add('btnEntrance')
		} else {
			toTheTopBtn.style.display = 'none'
		}
	}
	window.addEventListener('scroll', hideBtn)
})
