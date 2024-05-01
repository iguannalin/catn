let advs = []
fetch("https://iguannalin.github.io/catn/final/dictionary/advs.txt").then((tt) => tt.text()).then((rr) => advs = rr.split("\n"));
let adjs = []
fetch("https://iguannalin.github.io/catn/final/dictionary/adjs.txt").then((tt) => tt.text()).then((rr) => adjs = rr.split("\n"));
let verbs = []
fetch("https://iguannalin.github.io/catn/final/dictionary/verbs.txt").then((tt) => tt.text()).then((rr) => verbs = rr.split("\n"));
let nouns = []
fetch("https://iguannalin.github.io/catn/final/dictionary/nouns.txt").then((tt) => tt.text()).then((rr) => nouns = rr.split("\n"));
let locations = []
fetch("https://iguannalin.github.io/catn/final/dictionary/locations.txt").then((tt) => tt.text()).then((rr) => locations = rr.split("\n"));
let people = []
fetch("https://iguannalin.github.io/catn/final/dictionary/people.txt").then((tt) => tt.text()).then((rr) => people = rr.split("\n"));
let times = {};
fetch("https://iguannalin.github.io/catn/final/dictionary/hours.json").then((tt) => tt.text()).then((rr) => times = rr);
let prepositions = [];
fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/prepositions.json").then((tt) => tt.json()).then((rr) => prepositions = rr.prepositions);

window.addEventListener("load", () => {
  console.log(times);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");

  // MANY YEARS LATER as he faced the firing squad, Colonel Aureliano
  // Buendía was to remember that distant afternoon when his father took him to
  // discover ice
  let person = people[getRandomInt(0,people.length)];
  let location = locations[getRandomInt(0,locations.length)];
  let preposition = prepositions[getRandomInt(0,prepositions.length)];

  function writeSentence() {
    let sentence = "";

    sentence += times[getRandomInt(0,times.length)];
    sentence += ", ";
    sentence += person;
    
    // if (Math.random() > 0.2) {
      //   sentence += ", ";
      //   sentence += locations[getRandomInt(0,locations.length)];
      //   sentence += " is ";
      //   sentence += adjs[getRandomInt(0,adjs.length)];
      //   sentence += ", like the ";
      //   sentence += nouns[getRandomInt(0,nouns.length)];
      //   sentence += ". ";
      // }
      if (Math.random() > 0.5) {
        sentence += ", ";
      sentence += times[getRandomInt(0,times.length)];
      sentence += " as ";
      sentence += people[getRandomInt(0,people.length)];
      sentence += " ";
      sentence += advs[getRandomInt(0,advs.length)];
      sentence += " ";
      sentence += verbs[getRandomInt(0,verbs.length)];
      sentence += " the ";
      sentence += nouns[getRandomInt(0,nouns.length)];
      sentence += ", ";
    }
    // sentence += people[getRandomInt(0,people.length)];
    // sentence += " ";
    // sentence += verbs[getRandomInt(0,verbs.length)];
    // sentence += " that ";
    // sentence += times[getRandomInt(0,times.length)];
    // sentence += " when ";
    // sentence += people[getRandomInt(0,people.length)];
    // sentence += " ";
    // sentence += verbs[getRandomInt(0,verbs.length)];
    // sentence += " to ";
    // sentence += verbs[getRandomInt(0,verbs.length)];
    // sentence += " ";
    // sentence += nouns[getRandomInt(0,nouns.length)];
    return sentence;
  }

  function makeP(sentence) {
    const p = document.createElement("p");
    p.innerHTML = sentence;
    container.appendChild(p);
  }

  function makeA(sentence) {
    const button = document.createElement("button");
    button.innerHTML = sentence;
    // button.href = ".";
    button.onclick = () => {window.location.reload()};
    container.appendChild(button);
  }

  function openPopup() {
    const text = `<!DOCTYPE html><html> <head> <title>marquez</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://iguannalin.github.io/catn/final/index.css"/>
    <script src="https://iguannalin.github.io/catn/final/index.js"></script>
    </body></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank', `popup,location,status,scrollbars,resizable,width=100,height=100,top=${y},left=${x}`);
    window.URL.revokeObjectURL(blobUrl);
  }

  for (let i = 0; i < getRandomInt(1,1); i++) {
    makeP(writeSentence());
  }
  for (let i = 0; i < getRandomInt(1,3); i++) {
    makeA(writeSentence());
  }

});