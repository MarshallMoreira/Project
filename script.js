const form = document.querySelector('.createForm');
const suggestionsTable = document.querySelector('#suggestionsOutput');

const test = document.getElementById("test");

test.addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem("suggestions","[]");
  console.log("cleared");
});

let loadedSuggestions = [];
loadedSuggestions.push({"title":"Fix AC","suggestion":"Example text aaaaaaaa","votes":2,"author":"John","date":"5/10/26","id":0});
loadedSuggestions.push({"title":"Example","suggestion":"Example","votes":-1000,"author":"Someone","date":"1/2/23","id":1});

loadedSuggestions = getSuggestions();



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

function createTable(data) { // I am NOT changing this to use the DOM stuff like document.createELement and document.appendChild because that is like 300% more work when this works perfectly fine
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
  let data = [];
  try {
    data = JSON.parse(localStorage.getItem("suggestions"));
  } catch (error) {
    console.log("error :(");
    console.error(":( ",error);
    data = [];
    localStorage.setItem("suggestions","[]");
  }
  return data;
} 

function addSuggestion(item) {
  let saved = getSuggestions();
  saved.push(item);
  localStorage.setItem("suggestions",JSON.stringify(saved));
}