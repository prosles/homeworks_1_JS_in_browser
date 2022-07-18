// const rotator = Array.from(document.querySelectorAll('.rotator__case'));
// let index = 0;
// let interval = 1000;

// let rotatorTimeout = setTimeout(function timeout() {
//     rotator.forEach(item => item.classList.remove('rotator__case_active'));
//     if(index >= rotator.length - 1) {
//         index = 0;
//     } else {
//         index++;
//     }

//     rotator[index].classList.add('rotator__case_active');

//     const {speed, color} = (rotator[index].dataset);

//     rotator[index].style.color = color;
//     interval = speed;
//     rotatorTimeout = setTimeout(timeout, interval);
//     }, interval);

/* Второй вариант

const rotators = document.getElementsByClassName("rotator");

[...rotators].forEach(rotator => {
	const rotatorList = rotator.getElementsByClassName("rotator__case");

	const tick = index => {
    [...rotatorList].forEach(element => {
			element.classList.remove("rotator__case_active");
		});

		index = rotatorList[index].nextElementSibling ? index + 1 : 0;

		let speed = rotatorList[index].getAttribute("data-speed");
		let color = rotatorList[index].getAttribute("data-color");

		rotatorList[index].setAttribute("style", `color: ${color}`);
		rotatorList[index].classList.add("rotator__case_active");

		setTimeout(tick, speed, index);
	};

	setTimeout(tick, 0, 0);
});
*/