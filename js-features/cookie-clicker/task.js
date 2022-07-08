const count = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');

const speedClick = document.getElementById("clicker__speed");
let afterClick = new Date();


image.onclick = () => {
    const countTime = new Date();
    image.width = ++count.textContent % 2 ? 250 : 200;
    speedClick.textContent = (
        1000 / 
        (countTime.getTime() - afterClick)
        ).toFixed(2);
   afterClick = countTime;
}


