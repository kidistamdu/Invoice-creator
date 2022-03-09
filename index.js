const invoiceForm = document.querySelector('.invoice-form');
const taskList = document.querySelector('.task-list');
const serviceBtns = document.querySelectorAll('.service-btn');
const removeBtns = document.querySelectorAll('.remove-btn');
const totalCost = document.querySelector('#total');

let selectedTask = [];
let total = 0;

function displayTask(){
    const html = selectedTask.map(service=> {
        return `<li class="task-item grid">
        <span class="task-item-name">
        ${service.name}
        <button id="${service.cost}"class="remove-btn">Remove</button>
        </span>
        <span class="task-item-cost">$${service.cost}</span>
      </li>
        `
    }).joint('');

    taskList.innerHTML = html;
  const removeBtns = document.querySelectorAll('.remove-btn');
  addRemoveBtnListener(removeBtns);
}

function addRemoveBtnListner(removeBtn){
    removeBtns.forEach(btn => {
        btn.addEventListener('click', removeTask);
      })
    
}
    function removeTask(e) {
        // filter out task that's being deleted
        selectedTasks = selectedTasks.filter(task => task.cost !== e.target.id);
        // remove the task from the DOM
        e.target.parentElement.parentElement.remove();
        // update total
        total -= (e.target.id);
        totalCost.textContent = total;
      }
 
 function addService(e){
    const service = {
        name: e.target.name,
        cost: e.target.value,
        id: e.target.id
      }
 }    
 for (let item of selectedTasks) {
    if (item.id === service.id) {
      alert(`You've already selected the ${service.name} service.`)
      return;
    }
  } 
   // push selected service to selectedTasks array
   selectedTasks.push(service); // use this to calculate total
   displayTask(); // call displayTask to add to DOM
   // add service cost to total
   total += parseInt(service.cost);
   // update total on DOM
   totalCost.textContent = total;
 
 
 function clearInvoice() {
   total = 0;
   selectedTasks = [];
   taskList.innerHTML = ''
   totalCost.textContent = '0';
 }
 
 // add event listener to service buttons
 serviceBtns.forEach(btn => {
   btn.addEventListener('click', addService);
 });
 
 invoiceForm.addEventListener('submit', function(e) {
   e.preventDefault();
   if (!total) {
     alert('Please add a service.');
     return;
   }
   alert('Invoice submitted!');
   clearInvoice();
 });