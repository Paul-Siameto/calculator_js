
let resultValue = 0;
function calcNumbers(number){
    if(document.getElementById('displayResult').value == 0){
        resultValue = number;
    }else{
        resultValue += number;
    }
    
    document.getElementById('displayResult').value = resultValue;
}

 function loadDefaults()
{
    document.getElementById('displayResult').value = resultValue;
}

function clearInputs()
{
    document.getElementById('displayResult').value = 0;
}

function delInput()
{
    let existingValue = document.getElementById('displayResult').value
    newResultValue = existingValue.slice(0, -1)
    document.getElementById('displayResult').value = newResultValue
}
