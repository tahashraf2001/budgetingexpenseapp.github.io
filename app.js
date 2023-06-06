function setBudget() {
    var budgetAmount = document.getElementById('budgetAmount').value;
    var budgetSection = document.getElementById('budgetSection');
    var expenseSection = document.getElementById('expenseSection');
    
    if (budgetAmount !== '') {
      budgetSection.style.display = 'none';
      expenseSection.style.display = 'block';
    }
  }
  
  function recordExpense() {
    var expenseName = document.getElementById('expenseName').value;
    var expenseAmount = document.getElementById('expenseAmount').value;

    var expenseTableBody = document.getElementById('expenseTableBody');
    var remainingBudgetSection = document.getElementById('remainingBudgetSection');
    
    if (expenseName !== '' && expenseAmount !== '') {
      var newRow = expenseTableBody.insertRow();
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      
      
      cell1.innerHTML = expenseName;
      cell2.innerHTML = expenseAmount;
      
      document.getElementById('expenseName').value = '';
      document.getElementById('expenseAmount').value = '';
      
      calculateRemainingBudget();
      
      expenseTableBody.parentElement.parentElement.style.display = 'block';
      remainingBudgetSection.style.display = 'block';
    }
  }
  
  function calculateRemainingBudget() {
    var budgetAmount = parseFloat(document.getElementById('budgetAmount').value);
    var expenseTable = document.getElementById('expenseTable');
    var totalExpense = 0;
    
    for (var i = 1; i < expenseTable.rows.length; i++) {
      totalExpense += parseFloat(expenseTable.rows[i].cells[1].innerHTML);
    }
    
    var remainingBudget = budgetAmount - totalExpense;
    document.getElementById('remainingBudget').innerHTML = '$' + remainingBudget.toFixed(2);
  }
  