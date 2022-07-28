import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState,useRef } from "react";
import Images from './Components/Images';
import "./Components/styel.css";

function App() {
  const [selectedDate, setselectedDate] = useState('')
  const [imagesArray, setImagesArray] = useState([]);

  const datepicker = useRef();

  async function sendApiRequest(input_date){
    let API_KEY = "bOUolWlWfgeKcEulISPn0g4WagO1DnU3NVJCCEy7";
    console.log(input_date)
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&earth_date=${input_date}`);
    let data= await response.json();
    setImagesArray(data);
   
  }
  function handleSubmit(e) {
    e.preventDefault();
    sendApiRequest(selectedDate)
  
 
  }
  return (
    <div className="App">
      <header>
<h2 class="module_title">
Explore the Moon
</h2>
</header>
     <h1> <input onChange={event => setselectedDate(event.target.value)} type="date" id="text" />
     <button onClick={handleSubmit}>Check</button>
     </h1>
     <div className='photoblock'>
      {
      imagesArray.photos ? <Images image={imagesArray}/> :<h1></h1>
      }
          
     </div>
    </div>
  );
}

export default App;
