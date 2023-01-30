let currentAmount1 = 0;
let currentCost1 = 0;
let amount = document.querySelector(".amount");
let price1 = document.querySelector("#price1");
let amount1 = document.querySelector("#amount1");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let priceVal1 = 89;

function firstinc(){
    
        currentAmount1++;
        currentCost1 += priceVal1;
        amount.textContent = currentAmount1;
        price1.textContent = "$" + currentCost1;
    
    }

document.getElementById("button1").addEventListener("click", firstinc());


function firstdec(){
if(currentAmount1 > 1){
    currentAmount1--;
    currentCost1 -= priceVal1;
    amount.textContent = currentAmount1;
    price1.textContent = "$" + currentCost1;
}
}

document.getElementById("button2").addEventListener("click", firstdec());

let currentAmount2 = 0;
let currentCostFirst = 0;
let amountFirst = document.querySelector(".amount");
let priceFirst = document.querySelector("#dressPrice1");
let currentAmountFirst = document.querySelector("#dressAmount1");
let buttonFirst1 = document.querySelector("#buttonFirst1");
let buttonFirst2 = document.querySelector("#buttonFirst2");
let priceValFirst = 89;

function priceinc1(){
    
    currentAmount2++;
    currentCostFirst += priceVal1;
    amountFirst.textContent = currentAmount2;
    priceFirst.textContent = "$" + currentCostFirst;
    
    }

document.getElementById("buttonFirst1").addEventListener("click", priceinc1());


function pricedec1(){
if(currentAmount2 > 1){
    currentAmount2--;
    currentCostFirst -= priceValFirst;
    amountFirst.textContent = currentAmount1;
    priceFirst.textContent = "$" + currentCostFirst;
}
}

document.getElementById("buttonFirst2").addEventListener("click", pricedec1());

let currentAmount3 = 0;
let currentCost3 = 0;
let amount3 = document.querySelector(".amount");
let price3 = document.querySelector("#price1");
let amountThird3 = document.querySelector("#amount1");
let button3 = document.querySelector("#button1");
let button4 = document.querySelector("#button2");
let priceVal3 = 89;

function firstinc(){
    
        currentAmount3++;
        currentCost3 += priceVal3;
        amount3.textContent = currentAmount3;
        price3.textContent = "$" + currentCost3;
    
    }

document.getElementById("button3").addEventListener("click", firstinc());


function firstdec(){
if(currentAmount3 > 1){
    currentAmount3--;
    currentCost3 -= priceVal3;
    amount3.textContent = currentAmount3;
    price3.textContent = "$" + currentCost3;
}
}

document.getElementById("button4").addEventListener("click", firstdec());

//Contact box
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });