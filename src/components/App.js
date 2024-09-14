
import React, { useEffect ,useState} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

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
          <WeatherDisplay data={data}></WeatherDisplay>
    </div>
  )
}

export default App
