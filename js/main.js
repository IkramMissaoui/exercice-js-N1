document.body.classList.add(localStorage.getItem('pageColor') || 'red');
var el = document.querySelectorAll('.color-switcher li');
var classesList = [];
// loop on elements
for (var i = 0; i < el.length; i++) {
	// get classes list
	classesList.push(el[i].getAttribute('data-color'));
	el[i].addEventListener(
		'click',
		function() {
			// remove all old classes
			document.body.classList.remove(...classesList);
			// add current class from li data attribute
			document.body.classList.add(this.getAttribute('data-color'));
			// add data to local storage
			localStorage.setItem('pageColor', this.getAttribute('data-color'));
		},
		false
	);
}
