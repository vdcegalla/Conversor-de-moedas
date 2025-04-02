
function converter(){
    let won = 0.0040;

    let typedValue  = document.getElementById("amount").value;

    if (typedValue === "" || isNaN(typedValue)){
        alert("Please, type a valid value");
        return;
    }

    let convertedValue = typedValue * won;

    document.getElementById("converted").value = convertedValue;

};
