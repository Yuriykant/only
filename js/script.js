import { data } from './data.js';


const sectionCity = document.querySelector('.city');

data.forEach((data) => {
	const button = document.createElement('button');
	button.classList.add(data.color, 'button');

	const image = document.createElement('img');
	image.classList.add(data.color, 'img')
	image.src = '../icons/btnPlus.svg';

	const buttonText = document.createElement('span');
	buttonText.textContent = data.text;
	buttonText.classList.add('button-text')

	button.appendChild(image);
	button.appendChild(buttonText);

	button.style.left = `${data.coordinates.x}%`;
	button.style.top = `${data.coordinates.y}%`;

	sectionCity.appendChild(button);
});


const updateButtonState = (button) => {
	const isButtonOpen = button.classList.contains("open");
	const image = button.querySelector(".img");

	if (isButtonOpen) {
		image.src = "../icons/btnPlus.svg";
	} else {
		image.src = "../icons/btn.svg";
	}

	button.classList.toggle("open", !isButtonOpen);
	button.querySelector(".button-text").classList.toggle("button-text--active", !isButtonOpen);
};

const resetButtonState = (button) => {
	const image = button.querySelector(".img");
	image.src = "../icons/btnPlus.svg";
	button.classList.remove("open");
	button.querySelector(".button-text").classList.remove("button-text--active");
};


sectionCity.addEventListener('click', (event) => {
	const clickButton = event.target.closest('.button')
	const allButtons = [...sectionCity.querySelectorAll(".button")];

	if (clickButton) {
		updateButtonState(clickButton);
	} else {
		allButtons.forEach((button) => {
			resetButtonState(button);
		});
	}
});
