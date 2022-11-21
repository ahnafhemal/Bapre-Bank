
//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    //get the ammount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmunt = depositInput.value;

    // addd deposit input value into totaldeposit
    const depositTotal = document.getElementById('deposit-total');
    const PreviousdepositAmmount = depositTotal.innerText;

    //PreviousdepositAmmount + newdeposit
    const newdepositTotal = parseFloat(PreviousdepositAmmount) + parseFloat(newDepositAmunt);
    depositTotal.innerText = newdepositTotal;

    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText) + parseFloat(newDepositAmunt);

    balanceTotal.innerText = previousBalanceTotal;

    // clear thd depsoit
    depositInput.value = ''
})




