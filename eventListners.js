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
