;[].slice.call(document.querySelectorAll('path')).forEach(function(p) {
	function color() {
		p.style.fill = '#' + ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6)
	}
	p.addEventListener('mouseover', color)
	p.addEventListener('click', color)
})
