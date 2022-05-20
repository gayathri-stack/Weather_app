let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';


});



const getWeather=async (city)=>
{
    try{

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=796710a083ead7807d8dd7900d46a35c`,
   
            {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id<300 && id>200)
        {
            tempicon.src="file:///C:/Users/gayathri/Dropbox/PC/Downloads/icons/thunderstrom.svg.svg"
        }
        else if(id<600&& id>500)
        {
            tempicon.src="file:///C:/Users/gayathri/Dropbox/PC/Downloads/icons/rain.svg.svg"
        }
        else  if(id<700 && id>600)
        {
            tempicon.src="file:///C:/Users/gayathri/Dropbox/PC/Downloads/icons/snow.svg.svg"
        }
        else  if(id<800 && id>700)
        {
            tempicon.src="file:///C:/Users/gayathri/Dropbox/PC/Downloads/icons/clouds.svg.svg"
        }
        else if(id==800)
        {
            tempicon.src="file:///C:/Users/gayathri/Dropbox/PC/Downloads/icons/clouds-and-sun.svg.svg"
        }



   
    }
catch(error)
{
    alert('city not found');
}





};














window.addEventListener("load" ,()=>{

let long;
let lat;

if(navigator.geolocation)
{

    navigator.geolocation.getCurrentPosition((position)=>
    {

   
    
    long=position.coords.longitude;
    lat=position.coords.latitude;
    const proxy="https://cors-anywhere.herokuapp.com/";

        const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=796710a083ead7807d8dd7900d46a35c     `

        fetch(api).then((response)=>{

            return response.json();


        })

        .then (data =>
            {

                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];


                    loc.textContent=name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273);
                    if(id<300 && id>200)
                    {
                        tempicon.src="./icons/thunderstorm.svg"
                    }
                    else if(id<600&& id>500)
                    {
                        tempicon.src="./icons/rain.svg"
                    }
                    else  if(id<700 && id>600)
                    {
                        tempicon.src="./icons/snow.svg"
                    }
                    else  if(id<800 && id>700)
                    {
                        tempicon.src="./icons/clouds.svg"
                    }
                    else if(id==800)
                    {
                        tempicon.src="./icons/clouds-and-sun.svg"
                    }





                    console.log(data);


            })



}
    
    
    
    )}


})












