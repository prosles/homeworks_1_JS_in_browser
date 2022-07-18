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