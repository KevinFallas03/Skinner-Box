var foodButton = document.getElementById('foodButton');
var shockButton = document.getElementById('shockButton');
var food = document.getElementById('food');
var rat = document.getElementById('rat');
var box = document.querySelector('.box');
var light = document.getElementById('light');

var foodCount = 0;
var foodShownCount = 0;
var lightCount = 0;
var foodClickCount = 0;
var foodEmojis = ['&#129385;', '&#129472;', '&#129372;', '&#129472;', '&#129360;', '&#129472;', '&#127829;', '&#129472;'];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPosition() {
  var boxWidth = box.offsetWidth;
  var boxHeight = box.offsetHeight;
  var foodSize = 80;
  var x = Math.random() * (boxWidth - foodSize);
  var y = Math.random() * (boxHeight - foodSize);
  return { x: x, y: y };
}

foodButton.style.backgroundColor = getRandomColor();
shockButton.style.backgroundColor = getRandomColor();

foodButton.addEventListener('click', function () {
  foodCount++;

  if (foodCount === 4) {
    foodCount = 0;
    foodShownCount++;
    if (foodShownCount <= 2) {
      var randomIndex = Math.floor(Math.random() * foodEmojis.length);
      var randomFoodEmoji = foodEmojis[randomIndex];
      food.innerHTML = randomFoodEmoji;
      var position = getRandomPosition();
      food.style.top = position.y + 'px';
      food.style.left = position.x + 'px';
      food.style.display = 'block';

      setTimeout(function () {
        food.style.display = 'none';
      }, 800);
    }
  }

  foodClickCount++;
});

shockButton.addEventListener('click', function () {
  document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
  setTimeout(function () {
    document.body.style.backgroundColor = '';
  }, 3000);
  foodCount = 0;
});

setInterval(function () {
  if (foodClickCount >= 8) {
    lightCount = 0;
    light.style.display = 'block';
    light.style.backgroundColor = 'yellow';
    setTimeout(function () {
      light.style.backgroundColor = '';
      light.style.display = 'none';
    }, 3000);
  }
}, 7000);

foodButton.addEventListener('click', function () {
  if (light.style.backgroundColor === 'yellow') {
    lightCount++;
    if (lightCount === 4) {
      var randomIndex = Math.floor(Math.random() * foodEmojis.length);
      var randomFoodEmoji = foodEmojis[randomIndex];
      food.innerHTML = randomFoodEmoji;
      var position = getRandomPosition();
      food.style.top = position.y + 'px';
      food.style.left = position.x + 'px';
      food.style.display = 'block';

      setTimeout(function () {
        food.style.display = 'none';
      }, 1000);
    }
  }
});
