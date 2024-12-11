const search=document.getElementById("input-box");
const button=document.getElementById("search-button");

const cityname=document.getElementById("cityname");
const citytime=document.getElementById("citytime");
const citytemp=document.getElementById("citytemp");

async function getData(CityName){
   const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=69220da574564a62bbf162912241112&q=${CityName}&aqi=no
`);
return await promise.json();
}

button.addEventListener('click', async()=>{
    const value=search.value;
    const result= await getData(value);
    cityname.innerText=`${result.location.name},${result.location.country}`
    citytime.innerText=result.location.localtime
    citytemp.innerText=result.current.temp_c

    
})
