document.addEventListener("DOMContentLoaded", function () {
    const animalListElement = document.getElementById("animalList");

// Fetch data from the server
fetch('http://localhost:3000/characters')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error(error));

});