const signin = document.getElementById('signin'); 
const signinForm = document.getElementById('signin__form'); 
const welcome = document.getElementById('welcome'); 
const userId = document.getElementById('user_id'); 
const signinButton =  document.getElementById('signin__btn'); 


const signoutButton = document.createElement('button');
signoutButton.className = 'btn';
signoutButton.textContent = 'Очистка';
signoutButton.style.display = 'block';
signoutButton.style.marginLeft = 'auto';
signoutButton.style.marginRight = 'auto';
signoutButton.style.marginTop = '2em';

function input(id) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userId.textContent = id;
  welcome.append(signoutButton);
}
if (localStorage.id) {
  input(localStorage.id);
}

signinButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = new FormData(signinForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php'); 
  xhr.responseType = 'json';
  xhr.send(formData);
  xhr.onreadystatechange = () => {     
    if (xhr.readyState ===  xhr.DONE && xhr.status == 200) {
      if (xhr.response.success) {
        localStorage.setItem('id', xhr.response.user_id);
        input(localStorage.id);
      } else {
        alert('Неверный логин/пароль');
      }
      signinForm.reset();
    }   
  };  
});

signoutButton.addEventListener('click', e => {
  e.preventDefault();
  localStorage.removeItem('id');
  welcome.classList.remove('welcome_active'); 
  signin.classList.add('signin_active');  
});

