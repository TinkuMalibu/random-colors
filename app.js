const button = document.querySelector('button');
const color = document.getElementById('color');

const generateColor = () => {
  let digits = '0123456789ABCDEF';
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    hexColor += digits[randomIndex];
  }

  return hexColor;


};

button.addEventListener('click', () => {
  let newColor = generateColor();
  color.textContent = newColor;
  document.body.style.backgroundColor = newColor;
});


