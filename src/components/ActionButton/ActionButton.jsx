import React from 'react';
import "./ActionButton.css";
import V from "../../assets/icons/v.svg";

const ActionButton = (props)=>{
  const { content,pdf,isPdf,sendMail,message } = props;
  const handleClick = ()=>{
    if (isPdf){
      window.open(pdf);
    }
    else if (message){
      sendMail();
    }
  }
  return (
    <div className="action-button" onClick={handleClick} >
          <p>{content}</p>
          <span></span>
          <div><img src={V} alt="icon" /></div>
        </div>
  )
}

export default ActionButton;