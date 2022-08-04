const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function (){
    if (xhr.status != 200) return;
    if (xhr.readyState == 4) {
        response = JSON.parse(xhr.responseText);

        const pollTitle = document.getElementById('poll__title');
        const pollAnswers = document.getElementById('poll__answers');

        pollTitle.textContent = response.data.title;
        let idAnswer = 0;
        response.data.answers.forEach((e) => {
          pollAnswers.innerHTML +=`
          <button class="poll__answer" data-id="${response.id},${idAnswer}">${e}</button>
          `;
          idAnswer++;
        });
    };
};

document.onclick = function(e) {
  let target = e.target;
  if (!target.classList.contains('poll__answer')) return;
  const id = target.dataset.id.split(',');

  const xhr = new XMLHttpRequest;
  xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
  xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
  xhr.send( `vote=${id[0]}&answer=${id[1]}` );

  xhr.onreadystatechange = function (){
    if (xhr.status != 200) return;
    if (xhr.readyState == 4) {
      response = JSON.parse(xhr.responseText);
      alert('Спасибо, ваш голос засчитан!');
    };
  };
}

