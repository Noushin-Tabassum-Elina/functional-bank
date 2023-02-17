

document.getElementById('btn-deposit').addEventListener('click', function(){
 
    const newDepositAmount = getInputFieldValueById('deposit-field');
    
    // get previous deposit total by id
    const previousDepositTotal = getTextElementValueByID('deposit-total');
    
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    

    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    
})