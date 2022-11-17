 //the function called when Calculate button is clicked.
{
    /*calling a function calculateTip
    which will calculate the tip for the bill.*/
    document.getElementById('calculate').onclick = calculateTip;
}

function calculateTip() {

let billAmount = document.getElementById('billAmount').value;
let peopleAmount = document.getElementById('peopleAmount').value;
let service = document.getElementById('services').value;

console.log(service);

//display an alert box and return.
if (billAmount === '' && service === 'Select') {
    alert("Please enter valid values");
    return;NM
}

//now we are checking number of people
if (peopleAmount === '1')
//if there is only one person then we do not need to display each.
    document.querySelector('#each').style.display = 'none';
else
//if there are more than one person we will display each. 
    document.querySelector('#each').style.display = 'block';

/*calculating the tip by multiplying total-bill and type of
service; then dividing it by number of persons.*/
//fixing the total amount upto 2 digits of decimal
let total = (billAmount * service) / peopleAmount;
total = total.toFixed(2);

//finally displaying the tip value
document.querySelector('.tip').style.display = 'block';
document.querySelector('#total').innerHTML = total;
}