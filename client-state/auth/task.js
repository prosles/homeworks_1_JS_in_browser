const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');

const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

const signoutButton = document.getElementById('signout__btn');

signinForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(signinForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php'); 
  
  xhr.addEventListener('readystatechange', function() {     
    if (this.readyState == 4 && this.status == 200) {
      const answer = JSON.parse(this.responseText);
      if (!answer.success) {
        alert('Неверный логин/пароль');
        return;
      }
    
      localStorage.userId = answer.user_id;
      userId.innerText = localStorage.userId;
      signin.classList.remove('signin_active');
      welcome.classList.add('welcome_active');          
        
    }   
  });  
  xhr.send(formData);
  
  for (const input of signinForm.querySelectorAll('input')) {
    input.value = '';
  }
});

signoutButton.addEventListener('click', () => {
  delete localStorage.userId;
  welcome.classList.remove('welcome_active'); 
  signin.classList.add('signin_active');  
});

if (localStorage.userId !== undefined) {  
  welcome.classList.add('welcome_active');
  userId.innerText = localStorage.userId;  
} else {
  signin.classList.add('signin_active');
}