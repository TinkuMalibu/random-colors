const button = document.querySelector('button');
const color = document.getElementById('color');

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

button.addEventListener('click', generateColor);
generateColor();
