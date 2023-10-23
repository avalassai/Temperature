let temp;
document.getElementById("submit").onclick = function(){
    if(document.getElementById("celcius").checked)
    {
    temp = document.getElementById("temp").value;
    temp = Number(temp);
    temp = ToCelcius(temp);
    document.getElementById("answer").innerHTML = "Temperature is:" + temp;
    }
    else if(document.getElementById("farenheit").checked)
    {
    temp = document.getElementById("temp").value;
    temp = Number(temp);
    temp = ToFarenheit(temp);
    document.getElementById("answer").innerHTML = "Temperature is:" + temp + "°F";
    }
    else{
        document.getElementById("answer").innerHTML = "Kindly select the check box";
    }
}

function ToCelcius(temp){

    return (temp-32) * (5/9);

}

function ToFarenheit(temp){

    return temp *(9/5) + 32;

}