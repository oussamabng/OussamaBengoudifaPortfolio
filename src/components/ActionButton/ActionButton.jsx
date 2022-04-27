import React from 'react';
import "./ActionButton.css";
import V from "../../assets/icons/v.svg";

const ActionButton = (props)=>{
  const { content } = props;
  return (
    <div className="action-button" onClick={()=>{}} >
          <p>{content}</p>
          <span></span>
          <div><img src={V} alt="icon" /></div>
        </div>
  )
}

export default ActionButton;