const button = document.getElementById('test');
let count = 1;
button.addEventListener('click', () => {
  count++;
  button.textContent = 'test: ' + count;
});
