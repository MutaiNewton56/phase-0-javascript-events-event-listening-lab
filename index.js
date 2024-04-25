// index.js

const input = document.getElementById('button');

// Define a function to handle the event
function clickAlert() {
    alert('I was clicked!');
    
}


// Bind the event listener using addEventListener
input.addEventListener('click', clickAlert);
