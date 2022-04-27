import React from 'react';
import "./ActionButton.css";
import V from "../../assets/icons/v.svg";

const ActionButton = (props)=>{
  const { content,pdf,isPdf } = props;
  return (
    <div className="action-button" onClick={()=>{
      if (isPdf){
        window.open(pdf);
      }
    }} >
          <p>{content}</p>
          <span></span>
          <div><img src={V} alt="icon" /></div>
        </div>
  )
}

export default ActionButton;