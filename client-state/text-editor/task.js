
const editor = document.getElementById('editor');
const clear = document.getElementById('clear');
editor.value = localStorage.getItem('text');

editor.onkeyup = ((e) => {
  localStorage.setItem('text', editor.value);
});

clear.onclick = ((e) => {
  localStorage.removeItem('text');
  editor.value='';
});

