let tasks = document.querySelectorAll('.task-btn');
for(const task of tasks){
    task.addEventListener('click',function(){
        alert('Board Update Successfully')
        
        let taskComplete = document.getElementById('task-complete').innerText
        let convertedTask = parseInt(taskComplete)
        let completeNumber = document.getElementById('task-complete-number').innerText
        let convertedCompleteNumber = parseInt(completeNumber)
         
    })
}