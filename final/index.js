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

  // for (let i = 0)
  function writeSentence() {
    let sentence = "";
    sentence += times[getRandomInt(0,times.length)];
    sentence += " as he ";
    sentence += verbs[getRandomInt(0,verbs.length)];
    sentence += " the ";
    sentence += nouns[getRandomInt(0,nouns.length)];
    sentence += ", ";
    sentence += people[getRandomInt(0,people.length)];
    return sentence;
  }

  console.log(writeSentence())
});