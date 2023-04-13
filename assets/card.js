const card = document.querySelector('.card');

function tiltCard(event) {
	const cardHalfWidth = card.offsetWidth / 2;
	const cardHalfHeight = card.offsetHeight / 2;
	const mouseX = event.clientX - card.offsetLeft - cardHalfWidth;
	const mouseY = cardHalfHeight - (event.clientY - card.offsetTop);

	card.style.transform = `perspective(1000px) rotateY(${
		mouseX / 10
	}deg) rotateX(${mouseY / 10}deg)`;
}

card.addEventListener('mousemove', tiltCard);
