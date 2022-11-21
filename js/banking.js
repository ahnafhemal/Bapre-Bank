
//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    //get the ammount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmunt = depositInput.value;

    if (newDepositAmunt == '') {
        alert('plese input a number')
    } else {
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

        // clear the depsoit
        depositInput.value = ''
    }
})

/// handle withdram event handler

document.getElementById('withdraw-button').addEventListener('click', function () {

    //get the ammount of withdrae

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrwAmount = withdrawInput.value;
    if (newWithdrwAmount == '') {
        alert('plese input a number')
    } else {
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmmount = withdrawTotal.innerText;
        const newWithdrwTotal = parseFloat(previousWithdrawAmmount) + parseFloat(newWithdrwAmount);
        withdrawTotal.innerText = newWithdrwTotal

        //update account balance

        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText) - parseFloat(newWithdrwAmount);

        balanceTotal.innerText = previousBalanceTotal;

        // clear thd depsoit
        withdrawInput.value = ''
    }
})





