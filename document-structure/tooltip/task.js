const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

hasTooltip.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
  const { top, left } = item.getBoundingClientRect() 
  //Координаты рассчитываются относительного видимой части страницы без учета прокрутки 
  if(tooltip.textContent === e.currentTarget.title) { //определяет текущий элемент DOM, в котором в настоящий момент обрабатывается событие.
    tooltip.classList.toggle('tooltip_active');
  } else {
    tooltip.textContent = e.currentTarget.title;
    tooltip.style.top = (top + 20 + 'px');
    tooltip.style.left = (left + 'px');
    tooltip.classList.add('tooltip_active');
  }
}));