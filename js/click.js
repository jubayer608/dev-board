// link-js
document.getElementById('click')
    .addEventListener('click',
        function(){ 
        window.location.href='main.html'
})

// bg-color-random
function randomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
function backgroundColor() {
    document.body.style.backgroundColor = randomColor();
}
document.getElementById("change-color").addEventListener("click", backgroundColor);

// date-time
function updateDate(){
       let date = new Date().toLocaleDateString();
       document.getElementById('date').textContent = date;  
}
setInterval(updateDate)