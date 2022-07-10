const modalMain = document.querySelector('#modal_main');
const modalClose = document.querySelectorAll('div.modal__close');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.querySelector('#modal_success');

modalMain.className = 'modal modal_active';


modalClose[0].onclick = function () {
	modalMain.className = 'modal';
}
showSuccess.onclick = function () {
	modalMain.className = 'modal';
	modalSuccess.className = 'modal modal_active';
}
modalClose[1].onclick = function () {
	modalSuccess.className = 'modal';
	modalMain.className = 'modal';
}
