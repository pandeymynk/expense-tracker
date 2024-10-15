const expenseForm = document.getElementById('expenseForm')
const expenseList = document.getElementById('expenseList')


expenseForm.addEventListener('submit',function(event){

    event.preventDefault();

    const description = document.getElementById('Tracker').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if(category && !isNaN (amount)){
        const newRow =document.createElement('tr')

        newRow.innerHTML = `<td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>`;

    
        expenseList.appendChild(newRow);
        document.getElementById('Tracker').value='';
        document.getElementById('category').value='';
        document.getElementById('amount').value ='';
    }
});
