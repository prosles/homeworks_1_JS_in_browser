const fontSize = Array.from(document.querySelectorAll('.font-size'));
const bookContent = document.querySelector('.book__content');

fontSize.forEach(item => item.addEventListener('click', (e) => {
    fontSize.forEach(item => item.classList.remove('font-size_active'));
    e.target.classList.add('font-size_active');
    const {size} = item.dataset;
    bookContent.classList.remove('book_fs-small', 'book_fs-big');
    if(size) {
        bookContent.classList.add('book_fs-' + size);
    }
    e.preventDefault();
  }));


  /* Второй вариант с повышенной сложностью
  const book = document.getElementsByClassName("book")[0];
const settings = book.getElementsByClassName("book__controls")[0].children;

[...settings].forEach(setting => {
	let settingName = setting.classList[1];
	let options = setting.querySelectorAll("a");
	let optionsName = options[0].classList[0];

	const getActiveOptionIndex = () => {
		let index = 0;
		while (!options[index].classList.contains(optionsName + "_active")) index++;
		return index;
	};

	const click = e => {
		e.preventDefault();
		let activeIndex = getActiveOptionIndex();
		options[activeIndex].classList.remove(optionsName + "_active");
		e.target.classList.add(optionsName + "_active");
		activeIndex = getActiveOptionIndex();

		switch (settingName) {
			case "book__control_font-size":
				book.classList.remove("book_fs-big");
				book.classList.remove("book_fs-small");
				switch (activeIndex) {
					case 0:
						book.classList.add("book_fs-small");
						break;
					case 2:
						book.classList.add("book_fs-big");
						break;
				}
				break;

			case "book__control_color":
				book.classList.remove("book_color-gray");
				book.classList.remove("book_color-whitesmoke");
				switch (activeIndex) {
					case 1:
						book.classList.add("book_color-gray");
						break;
					case 2:
						book.classList.add("book_color-whitesmoke");
						break;
				}
				break;

			case "book__control_background":
				book.classList.remove("book_bg-black");
				book.classList.remove("book_bg-gray");
				switch (activeIndex) {
					case 0:
						book.classList.add("book_bg-black");
						break;
					case 1:
						book.classList.add("book_bg-gray");
						break;
				}
				break;
		}
	};

  [...options].forEach(option => {
		option.addEventListener("click", click, false);
	});
});