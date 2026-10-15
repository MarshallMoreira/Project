const button = document.getElementById('test');
let count = 0;
let a = "<li>test:</li>";
button.addEventListener('click', () => {
  count++;
  a = a + "<li>" + count + " clicks</li>"
  button.innerHTML = "<ul>" + a + "</ul>";
});
