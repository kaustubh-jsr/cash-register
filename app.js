let billAmount = document.querySelector('#bill-amount');
let cashPaid = document.querySelector('#cash-paid');
let btnCheck = document.querySelector('#btn-check');
let cashPaidSection = document.querySelector('.cash-paid-input');
let table = document.querySelector('.change-table');
let errorMsg = document.querySelector('.error-msg');
let errorMsgTwo = document.querySelector('.error-msg-two');
const notesArr = [2000,500,100,20,10,5,1];
table.style.display = "none";
cashPaidSection.style.display = "none";



let validateBillAmount = () => {
    billAmountValue = billAmount.value;
    if(billAmountValue <=0 ){
        cashPaidSection.style.display = "none";
        errorMsg.style.display = "block";
        table.style.display = "none";
    }else{
    cashPaidSection.style.display = "flex";
    errorMsg.style.display = "none";
    }
}

let calculateNotes = () => {
    billAmountValue = billAmount.value;
    cashPaidValue = cashPaid.value;

    if(cashPaidValue-billAmountValue<0){
        errorMsgTwo.style.display = "block";
        table.style.display = "none";
    }else{
        errorMsgTwo.style.display = "none";
        table.style.display = "block";
        changeAmount = cashPaidValue-billAmountValue;
        console.log(changeAmount);
        notesArr.map(note => {
            numNotes = Math.trunc(changeAmount/note);
            changeAmount = changeAmount - numNotes*note;
            return [note,numNotes];
        }).forEach(val => {
            let tdInput = document.getElementById(`${val[0]}`);
            tdInput.innerText = val[1] !== 0 ? val[1] : '';
        });
    }
    console.log('bill amount',billAmountValue);
    console.log('cash paid',cashPaidValue);
}

btnCheck.addEventListener('click',calculateNotes);

billAmount.addEventListener('input',validateBillAmount);

