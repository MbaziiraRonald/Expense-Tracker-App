let addButton = document.getElementById('addButton');
let resetButton = document.getElementById('resetButton');

addButton.addEventListener('click', () => {
  let nameInput = document.getElementById('nameInput').value;
  let dateInput = document.getElementById('dateInput').value;
  let amountInput = document.getElementById('amountInput').value;

  let tr = document.createElement('tr');
  let tdOne = tr.appendChild(document.createElement('td'));
  let tdTwo = tr.appendChild(document.createElement('td'));
  let tdThree = tr.appendChild(document.createElement('td'));
  let tdFour = tr.appendChild(document.createElement('td'));

  tdOne.innerHTML = nameInput;
  tdTwo.innerHTML = dateInput;
  tdThree.innerHTML = amountInput;
  tdFour.innerHTML = `<button class="deleteButton">x</button><button id="editButton">Edit</button>`;

  if (nameInput === '' || dateInput === '' || amountInput === ''){
    addButton.removeEventListener();
  }
  
  document.getElementById('expenseTable').appendChild(tr);

  tdFour.addEventListener('click', () => {
    document.getElementById('expenseTable').removeChild(tr);  
  })

  document.getElementById('editButton').addEventListener('click', () => {
   addButton.textContent = 'Update';
  })
  
})

function clearFields () {
  document.getElementById('nameInput').value = '';
  document.getElementById('dateInput').value = '';
  document.getElementById('amountInput').value = '';
}


function getHalfStringLength(string1,string2) {
   return string1.slice(1) + string2.slice(1);
}
