import React from 'react'
import "./Result.css"
const Result = ({temp,description,icon,setTemp}) => {

    const handleClick=()=>{
        setTemp("")
    }
  return (
    <div className='result'>
        <div className='resultBox'>
            <h1>Temp:{temp}°C</h1>
            <h4>{description}</h4>
            <img src={icon} />
            <br/>
            <button onClick={handleClick} style={{width:"150px"}} className='btn btn-light'>back</button>
        </div>
    </div>
  )
}

export default Result