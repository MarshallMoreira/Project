const button = document.getElementById('test');
const suggestionsTable = document.getElementById('suggestionsOutput');
let loadedSuggestions = [];
loadedSuggestions.push({"title":"Fix AC","suggestion":"Example text aaaaaaaa","votes":2,"author":"John","date":"5/10/26","id":123456});
loadedSuggestions.push({"title":"Example","suggestion":"Example","votes":-1000,"author":"Someone","date":"1/2/23","id":654321});
console.log(loadedSuggestions);
let count = 0;
let a = "<li>test:</li>";
button.addEventListener('click', () => {
  count++;
  a = a + "<li>" + count + " clicks</li>"
  button.innerHTML = "<ul>" + a + "</ul>" + loadedSuggestions[0];
});

suggestionsTable.innerHTML = createTable(loadedSuggestions);

function createTable(data) {
  let output = "<tr><th>Title</th><th>Suggestion</th><th>Votes</th><th>Info</th></tr>";
  let next = "";
  for (let i = 0; i < data.length; i++) {
    let row = data[i];
    let voteSign = "+";
    if  (row.votes < 0) {
      voteSign = "";
    }
    next = "<tr><td>" + row.title + "<br><span class=\"id-text\">ID: " + row.id + "</span></td><td>" + row.suggestion + "</td><td>" + voteSign + row.votes + "</td><td>Posted by: <em>" + row.author + "</em><br>Date: <em>" + row.date + "</em></td></tr>";
    output = output + next;
  }
  return output;
}