const form = document.querySelector('.createForm');
console.log(form);
const suggestionsTable = document.querySelector('#suggestionsOutput');

const test = document.getElementById("test");

test.addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem("suggestions","[]");
  consle.log("cleared");
});

let loadedSuggestions = [];
loadedSuggestions.push({"title":"Fix AC","suggestion":"Example text aaaaaaaa","votes":2,"author":"John","date":"5/10/26","id":0});
loadedSuggestions.push({"title":"Example","suggestion":"Example","votes":-1000,"author":"Someone","date":"1/2/23","id":1});
loadedSuggestions = getSuggestions();
if (loadedSuggestions.length == 0) {
  localStorage.setItem("suggestions","[]");
  console.log("i guess");
  loadedSuggestions = [];
  console.log(loadedSuggestions);
}

console.log(loadedSuggestions);

form.addEventListener('submit', () => {
  event.preventDefault();
  const data = new FormData(event.target);
  let title = data.get("post_title");
  let message = data.get("post_msg");
  loadedSuggestions.push({"title":title,"suggestion":message,"votes":0,"author":"N/A","date":Date.now(),"id":loadedSuggestions.length});
  addSuggestion(loadedSuggestions[loadedSuggestions.length-1]);
  suggestionsTable.innerHTML = createTable(loadedSuggestions);
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

function getSuggestions() {
  return JSON.parse(localStorage.getItem("suggestions")) ?? [];
} 

function addSuggestion(item) {
  let saved = getSuggestions();
  if (saved.length == 0) {
    saved = [];
    console.log("i don't even know");
  }
  saved.push(item);
  localStorage.setItem("suggestions",JSON.stringify(saved));
}