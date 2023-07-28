import React,{useState} from 'react'
import Input from './component/Input'
import axios from "axios"
import Result from './component/Result';

const App = () => {
  const [input,setInput]=useState("");
  const [temp,setTemp]=useState("");
  const[description,setDescription]=useState("");
  const[icon,setIcon]=useState("")
  const  findWeather=async()=>{
    const apiKey="25ae3df4e81984fee5d655e8b9f29101";
    const unit ="metric";
    const url ="https://api.openweathermap.org/data/2.5/weather?q=" + input +"&appid=" +apiKey +"&units=" +unit;
    const response=await axios.get(url);
    console.log(response);
    const temp=await response.data.main.temp;
    const weatherDescription= await response.data.weather[0].description;
    const icon= await response.data.weather[0].icon;
    const imageURL="https://openweathermap.org/img/wn/"+icon+ "@2x.png"
    console.log(temp,imageURL,weatherDescription);
    setTemp(temp);
    setDescription(weatherDescription);
    setIcon(imageURL);
    setInput("")
    
  }
  console.log(icon,"bcjsb")
  return (

    <div>
     {temp==="" ? (<Input input={input}  setInput={setInput} findWeather={findWeather}/>): <Result temp={temp} icon={icon} setTemp={setTemp}  description={description}/> } 
   
    </div>
  )
}

export default App