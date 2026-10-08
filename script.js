const button = document.getElementById('test');
let count = 0;
button.addEventListener('click', () => {
  count++;
  button.textContent = 'times clicked: ' + count;
});
