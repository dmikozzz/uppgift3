let alertMessage = false;

function savePlayerBtn() {
  event.preventDefault();

  let playerXName = document.getElementById('userNameX').value;
  let playerOName = document.getElementById('userNameO').value;

  if (!playerXName || !playerOName) {
    if (!alertMessage) {
      alert('Du måste skriva in båda namnen!');
    }
    return;
  }

  if (playerXName.length > 10 || playerOName.length > 10) {
    if (!alertMessage) {
      alert("Namnet får inte vara längre än 10 tecken!");
    }
    return;
  }

  playerXName = playerXName.toUpperCase().trim();
  playerOName = playerOName.toUpperCase().trim();

  let existingData = localStorage.getItem('users');

  if (!existingData) {
    existingData = {};
  } else {
    existingData = JSON.parse(existingData);
  }

  if (!existingData[playerXName]) {
    existingData[playerXName] = { name: playerXName, score: 0 };
  }

  if (!existingData[playerOName]) {
    existingData[playerOName] = { name: playerOName, score: 0 };
  }

  localStorage.setItem('users', JSON.stringify(existingData));

  console.log('Data saved successfully:', existingData);

  localStorage.setItem('playerXName', playerXName);
  localStorage.setItem('playerOName', playerOName);

  window.location.href = './spelet.html';
}

document.getElementById('jsonbtn').addEventListener('click', savePlayerBtn);

savePlayerBtn();
