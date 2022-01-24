import "./PercentageBar.css";
import React,{useState,useEffect} from "react";

const PercentageBar = (props)=>{
  const { name,percentage } = props;
  const [width,setWidth] = useState(0);
  useEffect(()=>{
    setWidth(percentage)
  },[percentage]) 
  return (
    <div className="percentage">
      <div className="layer" style={{
        width:`${width}%`
      }} ></div>
      <p className="p-text">{name}</p>
      <span className="p-text">{percentage} %</span>
    </div>
  )
}
export default PercentageBar;