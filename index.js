document.querySelector('main#main').remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

document.body.appendChild(newHeader);
