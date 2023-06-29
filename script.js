var foodButton = document.getElementById('foodButton');
var shockButton = document.getElementById('shockButton');
var food = document.getElementById('food');
var rat = document.getElementById('rat');
var box = document.querySelector('.box');

var foodCount = 0;

var foodEmojis = ['&#129385;', '&#129472;', '&#129372;', '&#129472;', '&#129360;', '&#129472;', '&#127829;', '&#129472;']; // Lista de emojis de comida

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

foodButton.addEventListener('click', function() {
  foodCount++;

  if (foodCount === 4) {
    var randomIndex = Math.floor(Math.random() * foodEmojis.length);
    var randomFoodEmoji = foodEmojis[randomIndex];
    food.innerHTML = randomFoodEmoji;
    var position = getRandomPosition();
    food.style.top = position.y + 'px';
    food.style.left = position.x + 'px';
    food.style.display = 'block';
    foodCount = 0;
  }
});

shockButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'rgba(192, 45, 45, 0.5)';
  setTimeout(function() {
    document.body.style.backgroundColor = '';
  }, 3000);
  foodCount = 0;
});
