;[].slice.call(document.querySelectorAll('path')).forEach(function (p) {
	function color() {
		p.style.fill = '#' + ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6)
	}
	var hasMoused = false
	function mouseColor() {
		hasMoused = true
		color()
	}

	p.addEventListener('mouseover', mouseColor)
	p.addEventListener('click', mouseColor)

	setTimeout(function () {
		setInterval(function () {
			if (!hasMoused && Math.random() > 0.95) color()
		}, 500)
	}, 4000)
})
