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

// challenge part mark
function formatDate(dateString) {
  const date = new Date(dateString);
  
  const formatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric'
  });

  return formatter.format(date).replace(',', '');
}
document.getElementById('date').textContent = formatDate(new Date())

//  button -designs

function myFunction1() {
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.opacity='0.2'
    let child = document.getElementById('title1')
    let childName = child.innerText
    let parent = document.getElementById('history')
    let now = new Date();
    let formattedTime = now.toLocaleString('en-us', {
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      hour12: true
    })
   let p = document.createElement('p')
   p.innerText = `You have complete the task ${childName}at ${formattedTime} `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p);      
  }

function myFunction2() {
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.opacity='0.2'
    let child = document.getElementById('title2')
    let childName = child.innerText
    let parent = document.getElementById('history')
    let now = new Date();
    let formattedTime = now.toLocaleString('en-us', {
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      hour12: true
    })
    let p = document.createElement('p')
   p.innerText = `You have complete the task ${childName} at ${formattedTime} `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)    
  }

  function myFunction3() {
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn3").style.opacity='0.2'
    let child = document.getElementById('title3')
    let childName = child.innerText;
    let parent = document.getElementById('history')
    let now = new Date();
    let formattedTime = now.toLocaleString('en-us', {
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      hour12: true
    })
   let p = document.createElement('p')
   p.innerText = `You have complete the ${childName} at ${formattedTime}`
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)
         
  }

  function myFunction4() {
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn4").style.opacity='0.2'
    let child = document.getElementById('title4')
    let childName = child.innerText
    let parent = document.getElementById('history')
    let now = new Date();
    let formattedTime = now.toLocaleString('en-us', {
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      hour12: true
    })
   let p = document.createElement('p')
   p.innerText = `You have complete the task ${childName} at ${formattedTime} `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)     
  }

  function myFunction5() {
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn5").style.opacity='0.2'
    let child = document.getElementById('title5')
    let childName = child.innerText;
    let parent = document.getElementById('history')
    let now = new Date();
    let formattedTime = now.toLocaleString('en-us', {
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      hour12: true
    })
   let p = document.createElement('p')
   p.innerText = `You have complete the task ${childName} at ${formattedTime} `
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)   
  }
  function myFunction6() {
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn6").style.opacity='0.2'
    let child = document.getElementById('title6')
    let childName = child.innerText
    let parent = document.getElementById('history')
    let now = new Date();
    let formattedTime = now.toLocaleString('en-us', {
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      hour12: true
    })
  let p = document.createElement('p')
   p.innerText = `You have complete the task ${childName} at ${formattedTime}`
   p.classList.add('bg-color')
   p.style.marginTop='12px'
   p.style.paddingInline = '12px'
   parent.appendChild(p)
         
  }