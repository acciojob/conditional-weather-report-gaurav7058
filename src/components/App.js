
import React, { useEffect ,useState} from "react";
import './../styles/App.css';

const App = () => {
  const def = {tempreture : 0, condition : "Cool"}
  const [data, setData] = useState(def);
  useEffect(()=>{
    setTimeout(()=>{
      setData({tempreture:25,condition:"sunney"})
    },1000)
  },[])
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

export default App
