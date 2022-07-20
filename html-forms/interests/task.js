/* Первый вариант без уровня вложенности
const interests = Array.from(document.querySelectorAll('.interest__check'));

interests.forEach(item => item.addEventListener('change', (e) => {
    e.preventDefault(); 
    const parent = e.currentTarget.closest('.interest');
    const child = Array.from(parent.querySelectorAll('.interests > .interest'));
    const childFunc = (bool) => {
        child.forEach(i => {
            const childCheck = i.querySelector('.interest__check');
            childCheck.checked = bool;
        });
    }
    if(e.currentTarget.checked) {
        childFunc(true);
    } else if(e.currentTarget.checked === false) {
        childFunc(false);
    }
})); */


const checkboxOnClick = e => {
	Array.from(
		e.target.closest("li").getElementsByClassName("interest__check")
	).forEach(element => {
		element.checked = e.target.checked;
		element.indeterminate = false;
	});

	const changeParents = element => {
		let parent = element.parentElement.closest("li");
		let elementCheckbox =
			element.parentElement.firstElementChild.firstElementChild
			.firstElementChild;

		if (parent) {
			let checked = elementCheckbox.checked;
			let flagIndeterminate = elementCheckbox.indeterminate;

			Array.from(element.parentElement.children).forEach(el => {
				let elCheckbox = el.firstElementChild.firstElementChild;
				if (elCheckbox.checked != checked || elCheckbox.indeterminate) {
					flagIndeterminate = true;
				}
			});

			let parentCheckbox = parent.firstElementChild.firstElementChild;

			if (flagIndeterminate) {
				parentCheckbox.indeterminate = true;
			} else {
				parentCheckbox.indeterminate = false;
				parentCheckbox.checked = checked;
			}

			changeParents(parent);
		}
	};

	changeParents(e.target.closest("li"));
};

Array.from(document.getElementsByClassName("interest__check")).forEach(
	element => {
		element.addEventListener("click", checkboxOnClick, false);
	}
);