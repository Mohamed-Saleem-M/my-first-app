import React, { useEffect, useState } from 'react'
import FavCar from './FavCar';

function Timer(props) {
  const [count, setCount] = useState(0);

  // useEffect(<function>, <dependency> optional)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  }, [])           // [] used as dependency to stop call at first time, so return statement executes only one time
  return (
    <div>
      <h1> Count Down {props.course} Starts - {count} !!!</h1>
      {/* passing data value to FavCar component */}
      <FavCar data={props.course}></FavCar>    
    </div>
  )
}

export default Timer