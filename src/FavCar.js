import React, { useState } from 'react'

function FavCar(props) {
  // const[state,setState] = useState[initialState];
  const[car, setCar] = useState("Ford");       //initial value of car is Ford
  return (
    <div>
      <h1>My Favourite Car is {car} !!! {props.data}</h1>    
      <button type="button" onClick={() => setCar("Hyundai")}>Hyundai</button><br/>
      <button type="button" onClick={() => setCar("Toyota")}>Toyota</button><br/>
      <button type="button" onClick={() => setCar("Maruthi Suzuki")}>Maruthi Suzuki</button><br/>
    </div>
  )
}

export default FavCar