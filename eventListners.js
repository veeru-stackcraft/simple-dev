function clickMeOne() {
  document.getElementById('hiddenOne').innerHTML = 'Inline event listner';
}
function clickMeTwo() {
  document.getElementById('hiddenTwo').innerHTML = 'Using click event listner';
}
function clickMeThree() {
  document.getElementById('hiddenThree').innerHTML =
    'Using addEventListener method';
}

const btn2 = document.getElementById('btn2');
btn2.onclick = () => clickMeTwo();

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => clickMeThree());

// ------------------------------------------------

const customUI = document.getElementById('ulelement');
customUI.addEventListener('click', reponce);

function reponce(evnt) {
  if (evnt.target.nodeName === 'LI') {
    console.log('Responding');
  } else {
    console.log('Unable to Click the element');
  }
}

for (var i = 1; i <= 10; i++) {
  const newElement = document.createElement('li');
  newElement.textContent = 'This is line ' + i;
  customUI.appendChild(newElement);
}

// function responding(evt) {
//   if (evt.target.nodeName === 'li') console.log('Responding');
// }

// for (var i = 1; i <= 10; i++) {
//   const newElement = document.createElement('li');
//   newElement.textContent = 'This is line ' + i;
//   customUI.appendChild(newElement);
// }

// customUI.addEventListener('click', responding);

function alertpopup(evnt) {
  evnt.preventDefault();
  alert('Link ha beem clicked');
}
