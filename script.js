const button = document.getElementById('test');
let count = 0;
let a = "<li>hi</li>";
button.addEventListener('click', () => {
  count++;
  a = a + "<li>" + count + " clicks</li>"
  button.innerHTML = "<ol>" + a + "</ol>";
});
