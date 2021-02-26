const zehn = document.getElementById('zehn')
const fünf = document.getElementById('fünf')
const fünfzehn = document.getElementById('fünfzehn')
const zwanzig = document.getElementById('zwanzig')
const versuch = document.getElementById('versuch')
const versuchLimit = document.getElementById('versuchLimit')
const userScore = document.getElementById('userScore')
const compScore = document.getElementById('compScore')
const resultParagraph = document.getElementById('resultParag')
const rock = document.getElementById('rck')
const paper = document.getElementById('ppr')
const scissors = document.getElementById('scrs')
const format = document.getElementById('form')
const h2 = document.getElementById('h2')
let count = 0;
let compRandom = ['rock', 'paper', 'scissors']
let uScore = 0;
let cScore = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let play = (event) => {
  form.style.display = 'none'
  if (fünf.checked) {
    versuchLimit.innerHTML = fünf.value;
    count++;
    versuch.innerHTML = count;
    h2.style.display = 'block'
    console.log(event.target.id);
    let comp = compRandom[getRandomInt(3)]
    console.log(comp);
    if (count < fünf.value) {
      if (comp === event.target.id) {
        uScore += 1
        cScore += 1
        userScore.innerHTML = uScore;
        compScore.innerHTML = cScore;
        resultParagraph.innerHTML = `It was a draw. You both chose ${event.target.id.toUpperCase()}`
      } else if (event.target.id === 'rock' && comp === 'paper') {
        cScore += 1
        compScore.innerHTML = cScore;
        resultParagraph.innerHTML = `${comp.toUpperCase()} (comp) beats ${event.target.id.toUpperCase()} (user). Computer wins.`
      } else if (event.target.id === 'rock' && comp === 'scissors') {
        uScore += 1
        userScore.innerHTML = uScore;
        resultParagraph.innerHTML = `${event.target.id.toUpperCase()} (user) beats  ${comp.toUpperCase()}(comp). User wins.`
      } else if (event.target.id === 'paper' && comp === 'rock') {
        uScore += 1
        userScore.innerHTML = uScore;
        resultParagraph.innerHTML = `${event.target.id.toUpperCase()} (user) beats  ${comp.toUpperCase()}(comp). User wins.`
      }
      else if (event.target.id === 'paper' && comp === 'scissors') {
        cScore += 1
        compScore.innerHTML = cScore;
        resultParagraph.innerHTML = `${comp.toUpperCase()} (comp) beats ${event.target.id.toUpperCase()} (user). Computer wins.`
      } else if (event.target.id === 'scissors' && comp === 'rock') {
        cScore += 1
        compScore.innerHTML = cScore;
        resultParagraph.innerHTML = `${comp.toUpperCase()} (comp) beats ${event.target.id.toUpperCase()} (user). Computer wins.`
      } else if (event.target.id === 'scissors' && comp === 'paper') {
        uScore += 1
        userScore.innerHTML = uScore;
        resultParagraph.innerHTML = `${event.target.id.toUpperCase()} (user) beats  ${comp.toUpperCase()}(comp). User wins.`
      }
    } else if (count == fünf.value) {
      versuch.innerHTML = fünf.value;
      if (uScore > cScore) {
        resultParagraph.innerHTML = `User wins.`
      }
    }
  }
}
