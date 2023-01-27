import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [hotels, setHotels] = useState(data)
  const [showText, setShowText] = useState(false)
  
  const removeHotel = (id) => {

let newHotels = hotels.filter(hotel => hotel.id !== id)

setHotels(newHotels)
  }
const showTextClick = (element) => {
  element.showMore = !element.showMore;
  setShowText(!showText)
}
  
  return (
    <div>
     <div className='container'>
      <h1>NYC TOP {hotels.length}  HOTELS</h1>
      </div>
      {hotels.map((element => {
        const {id, hotelName, description, img, source, showMore} = element;

        return(
      <div  key={id}>
      <div className='container'>
        <h2>{id} - {hotelName}</h2>
      </div>
      <div className='container'>
      
        <p> {showMore ? description : description.substring(0, 190) + "..."} 
        <button onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
        </p>
        
      </div>
      <div className='container'>
        <img src={img} width="500px" alt="Hotel in NYC"/>
      </div>
      <div className='container'>
        <p>Source: {source}</p>
        
      </div>
      <div className='container'>
        <button className='btn' onClick={() => removeHotel(id)}>Remove</button>
      </div>  
    </div>
    )
  }))}
  </div>
  )
}

export default App;
