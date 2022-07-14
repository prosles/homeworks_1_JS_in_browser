const value = document.querySelector('.dropdown__value'); // dropDownValue
const list = document.querySelector('.dropdown__list'); //dropDownList
const allLinks = Array.from(document.querySelectorAll('.dropdown__item')); // dropDownLink


const drop = () => {
   list.classList.contains('dropdown__list_active') ? list.classList.remove('dropdown__list_active') : 
    list.classList.add('dropdown__list_active');
    return false;
  }

  for(let i = 0; i < allLinks.length; i++) {
    allLinks[i].onclick = () => {
      value.textContent = allLinks[i].textContent;
      list.classList.remove('dropdown__list_active');
      return false;
    }
  }

  value.addEventListener('click', drop);
