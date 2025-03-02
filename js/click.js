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

//  button -designs

function myFunction1() {
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.opacity='0.2'
    let child = document.getElementById('title1')
    let parent = document.getElementById('history')

  let p = document.createElement('p')
   p.innerHTML = `<p class=" text-black">You have complete the task Fix Mobile Button Issue at 12:48:15 PM </p>
      
   `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p);
         
  }



function myFunction2() {
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.opacity='0.2'
    let child = document.getElementById('title1')
    let parent = document.getElementById('history')

  let p = document.createElement('p')
   p.innerHTML = `<p class=" text-black">You have complete the task Add Dark Mode at 12:48:15 PM </p>
        
   `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)
         
  }

  function myFunction3() {
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn3").style.opacity='0.2'
    let child = document.getElementById('title1')
    let parent = document.getElementById('history')

  let p = document.createElement('p')
   p.innerHTML = `<p class=" text-black">You have complete the task Optimize Home page at 12:48:15 PM </p>
        
   `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)
         
  }
  function myFunction4() {
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn4").style.opacity='0.2'
    let child = document.getElementById('title1')
    let parent = document.getElementById('history')

  let p = document.createElement('p')
   p.innerHTML = `<p class=" text-black">You have complete the task Add new emoji 🤲 at 12:48:15 PM </p>
        
   `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)
         
  }
  function myFunction5() {
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn5").style.opacity='0.2'
    let child = document.getElementById('title1')
    let parent = document.getElementById('history')

  let p = document.createElement('p')
   p.innerHTML = `<p class=" text-black">You have complete the task Integrate OpenAI API at 12:48:15 PM </p>
        
   `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)
         
  }
  function myFunction6() {
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn6").style.opacity='0.2'
    let child = document.getElementById('title1')
    let parent = document.getElementById('history')

  let p = document.createElement('p')
   p.innerHTML = `<p class=" text-black">You have complete the task Improve Job searching at 12:48:15 PM </p>
        
   `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)
         
  }