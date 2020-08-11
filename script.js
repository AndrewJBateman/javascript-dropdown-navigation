const triggers = document.querySelectorAll('.cool > li'); //all direct descendants of the class cool that are li
const background = document.querySelector('.dropdownBackground'); //only need 1 element so use querySelector
const nav = document.querySelector('.top');

// function triggered by a mouse-enter event
function handleEnter() {
	this.classList.add('trigger-enter');
	//with arrow function, value of this is inherited from parent
	setTimeout(
		() =>
			this.classList.contains('trigger-enter') &&
			this.classList.add('trigger-enter-active'),
		150
	);
	background.classList.add('open');

	const dropdown = this.querySelector('.dropdown');
	const dropdownCoords = dropdown.getBoundingClientRect(); //gets dimensions of dropdown rect
	const navCoords = nav.getBoundingClientRect(); //in case header added etc that would push the whole menu position down

	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left,
	};

	background.style.setProperty('width', `${coords.width}px`);
	background.style.setProperty('height', `${coords.height}px`);
	background.style.setProperty(
		'transform',
		`translate(${coords.left}px, ${coords.top}px)`
	); //css property
}

// function triggered by a mouse-leave event
function handleLeave() {
	this.classList.remove('trigger-enter', 'trigger-enter-active');
	background.classList.remove('open');
}
// create mouse-event triggers for handleEnter and handleLeave functions
triggers.forEach((trigger) =>
	trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
	trigger.addEventListener('mouseleave', handleLeave)
);
