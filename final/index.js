let advs = []
fetch("dictionary/advs.txt").then((tt) => tt.text()).then((rr) => advs = rr.split("\n"));
let adjs = []
fetch("dictionary/adjs.txt").then((tt) => tt.text()).then((rr) => adjs = rr.split("\n"));
let verbs = []
fetch("dictionary/verbs.txt").then((tt) => tt.text()).then((rr) => verbs = rr.split("\n"));
let nouns = []
fetch("dictionary/nouns.txt").then((tt) => tt.text()).then((rr) => nouns = rr.split("\n"));
let locations = []
fetch("dictionary/locations.txt").then((tt) => tt.text()).then((rr) => locations = rr.split("\n"));
let people = []
fetch("dictionary/people.txt").then((tt) => tt.text()).then((rr) => people = rr.split("\n"));
let times = []
fetch("dictionary/times.txt").then((tt) => tt.text()).then((rr) => times = rr.split("\n"));

window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");

  // MANY YEARS LATER as he faced the firing squad, Colonel Aureliano
  // Buendía was to remember that distant afternoon when his father took him to
  // discover ice
  function writeSentence() {
    let sentence = "";
    sentence += times[getRandomInt(0,times.length)];
    sentence += " as ";
    sentence += people[getRandomInt(0,people.length)];
    sentence += " ";
    sentence += verbs[getRandomInt(0,verbs.length)];
    sentence += " the ";
    sentence += nouns[getRandomInt(0,nouns.length)];
    sentence += ", ";
    sentence += people[getRandomInt(0,people.length)];
    sentence += " ";
    sentence += verbs[getRandomInt(0,verbs.length)];
    sentence += " that ";
    sentence += times[getRandomInt(0,times.length)];
    sentence += " when ";
    sentence += people[getRandomInt(0,people.length)];
    sentence += " ";
    sentence += verbs[getRandomInt(0,verbs.length)];
    sentence += " to ";
    sentence += verbs[getRandomInt(0,verbs.length)];
    sentence += " ";
    sentence += nouns[getRandomInt(0,nouns.length)];
    return sentence;
  }

  function makeP(sentence) {
    const p = document.createElement("p");
    p.innerHTML = sentence;
    container.appendChild(p);
  }

  function makeA(sentence) {
    const a = document.createElement("a");
    a.innerHTML = sentence;
    a.href = ".";
    container.appendChild(a);
  }

  for (let i = 0; i < getRandomInt(1,6); i++) {
    makeP(writeSentence());
  }
  for (let i = 0; i < getRandomInt(1,6); i++) {
    makeA(writeSentence());
  }

});