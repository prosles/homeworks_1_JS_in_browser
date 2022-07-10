let hole = document.getElementsByClassName('hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for(let i = 0; i < hole.length; i++) {
    hole[i].onclick = () => {
      if(hole[i].className.includes('hole_has-mole')) {
        dead.textContent++;
      } else {
        lost.textContent++;
      }

      if(dead.textContent >= 10) {
        alert('Вы победили!');
        dead.textContent = 0;
        lost.textContent = 0;
      } else if(lost.textContent >= 5) {
        alert('Поражение!');
        dead.textContent = 0;
        lost.textContent = 0;
      }
      
    }
  }


  