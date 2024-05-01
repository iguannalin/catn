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
fetch("https://iguannalin.github.io/catn/final/dictionary/hours.json").then((tt) => tt.json()).then((rr) => times = rr);
let prepositions = [];
fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/prepositions.json").then((tt) => tt.json()).then((rr) => prepositions = rr.prepositions);

window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const center = document.getElementById("center");

  // MANY YEARS LATER as he faced the firing squad, Colonel Aureliano
  // Buendía was to remember that distant afternoon when his father took him to
  // discover ice
  let person = people[getRandomInt(0,people.length)];
  let location = locations[getRandomInt(0,locations.length)];
  let preposition = prepositions[getRandomInt(0,prepositions.length)];

  function writeSentence(index = 0) {
    let sentence = "";
    let hour = times[Object.keys(times)[index]];
    sentence += hour[getRandomInt(0,hour.length)];
    sentence += ", ";
    sentence += person;
    if (Math.random() > 0.1) {
      sentence += " ";
      sentence += advs[getRandomInt(0,advs.length)];
      sentence += " ";
      sentence += verbs[getRandomInt(0,verbs.length)];
    }
    if (Math.random() > 0.4) {
      sentence += " ";
      sentence += prepositions[getRandomInt(0,prepositions.length)];
      sentence += " ";
      sentence += location;
    }
    
    //   if (Math.random() > 0.5) {
    //     sentence += ", ";
    //   sentence += times[getRandomInt(0,times.length)];
    //   sentence += " as ";
    //   sentence += people[getRandomInt(0,people.length)];
    //   sentence += " ";
    //   sentence += advs[getRandomInt(0,advs.length)];
    //   sentence += " ";
    //   sentence += verbs[getRandomInt(0,verbs.length)];
    //   sentence += " the ";
    //   sentence += nouns[getRandomInt(0,nouns.length)];
    //   sentence += ", ";
    // }
    return sentence;
  }
  
  function getNewText(elem, index) {
    let sent = writeSentence(index);
    while (sent === elem.innerHTML) {
      sent = writeSentence(index);
    }
    elem.innerHTML = sent;
  }

  function makeP(sentence) {
    const p = document.createElement("p");
    p.innerHTML = sentence;
    container.appendChild(p);
  }

  function makeA(sentence, index = 0) {
    console.log(index)
    const button = document.createElement("button");
    button.innerHTML = sentence;
    // button.href = ".";
    button.onclick = () => { getNewText(button, index); };
    container.appendChild(button);
  }

  for (let i = 1; i < 13; i++) {
    if (i == 12)
      makeA(writeSentence(0), 0);
    else 
      makeA(writeSentence(i), i);
  }

});