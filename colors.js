;[].slice.call(document.querySelectorAll('path')).forEach(function(p) {
	p.addEventListener('mouseover', function() {
		p.style.fill =
			'#' +
			('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6)
	})
})
