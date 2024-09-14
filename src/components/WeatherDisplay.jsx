import React from 'react'

export default function WeatherDisplay(props) {
    const {data}=props
  return (
    <div>
      {data.tempreture>20?<div style={{color:"red"}}>
          <p>tempreture:{data.tempreture}</p>
          <p>condition:{data.condition}</p>
        </div>:<div style={{color:"blue"}}>
        <p>tempreture:{data.tempreture}</p>  
        <p>condition:{data.condition}</p>
        </div>} 
    </div>
  )
}
