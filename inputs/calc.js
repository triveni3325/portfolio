function number(value) {
    
    document.getElementById('result').value += value;
    
}
function operator(value) {
    document.getElementById('result').value += ' ' + value + ' ';
}
 
function calc() {
    result.value = eval(result.value);
}

function clearResult() {
    document.getElementById('result').value = ' ';
}