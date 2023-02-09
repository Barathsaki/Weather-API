function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='7c5b55d3cb66513c6e44fd11640b46a8';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&unit=metric')
        .then(response=>response.json())
        .then(data=>{
            var t=data['main']['temp']
            var a=data['main']['minimum_temp']
            document.getElementById("output").innerHTML=t;
            document.getElementById("output").innerHTML=a;
        })
}