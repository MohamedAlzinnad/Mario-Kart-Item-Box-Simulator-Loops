// Mario Kart Item Box Simulator
'use strict'

// Global Variables
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;

// Event Listeners
document.getElementById('main-img').addEventListener('click', randomItem);
document.getElementById('plus5').addEventListener('click', plus5);
document.getElementById('until10BulletBill').addEventListener('click', Until10BulletBill);

// Event Functions
function randomItem() {
  // Generate random number
  let randNum = Math.random();

  // simulate results
  if (randNum < 0.25) {
    console.log('Banana');
    numBanana++;
    document.getElementById('Banana').innerHTML = numBanana;
    document.getElementById('results').innerHTML += '<img src="Banana_icon.png">';
  } else if (randNum < 0.5) {
    console.log('Green Shell');
    numGreenShell++;
    document.getElementById('Green Shell').innerHTML = numGreenShell;
    document.getElementById('results').innerHTML += '<img src="GreenShell_icon.png">';
  } else if (randNum < 0.65) {
    console.log('Star');
    numStar++;
    document.getElementById('Star').innerHTML = numStar;
    document.getElementById('results').innerHTML += '<img src="Star_icon.png">';
  } else if (randNum < 0.80) {
    console.log('Golden Mushroom')
    numGoldenMushroom++;
    document.getElementById('Golden Mushroom').innerHTML = numGoldenMushroom;
    document.getElementById('results').innerHTML += '<img src="GoldenMushroom_icon.png">';
  } else {
    console.log('Bullet Bill')
    numBulletBill++;
    document.getElementById('Bullet Bill').innerHTML = numBulletBill;
    document.getElementById('results').innerHTML += '<img src="BulletBill_icon.png">';
  }
}

function plus5() {
  for (let n = 0; n < 5; n++) {
    randomItem();
  }
}

function Until10BulletBill() {
  let count = 0;
  while (numBulletBill < 10) {
    randomItem();
    count++;
  }
  console.log('count' + count);
}