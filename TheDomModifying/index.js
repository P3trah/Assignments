const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";

const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}