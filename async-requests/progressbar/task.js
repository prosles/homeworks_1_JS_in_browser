const form = document.getElementById('form');

form.addEventListener( 'submit', (e) => {
    let formData = new FormData(form);
    const progress = document.getElementById( 'progress' );
    const xhr = new XMLHttpRequest();

    e.preventDefault();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    xhr.onprogress = function(event){
        progress.value = event.loaded/ 10000000;
        }
        
    xhr.send(formData);
})
