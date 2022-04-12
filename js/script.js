const nav = document.querySelector('.navbar')
const navList = document.querySelector('.navbar-collapse')

document.onclick = function (e) {
	if (e.target.id !== 'navbar') {
		navList.classList.remove('show')
	}
}
