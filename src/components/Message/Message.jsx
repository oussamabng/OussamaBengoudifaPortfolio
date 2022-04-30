/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";

import { ReactComponent as Adr } from "../../assets/icons/adr.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail2.svg";

import ActionButton from "../ActionButton/ActionButton";
import emailjs from 'emailjs-com';
import API from "../../API.json";

import "./Message.css";

const Message = ()=>{
  const SERVICE_ID = "service_esy496d";
  const TEMPLATE_ID = "template_5nqo98j";
  const USER_ID = "yruBn2FpQMC5U56by";

  const [name,setName] = useState("")
  const [nameError,setNameError] = useState(false)

  const [email,setEmail] = useState("")
  const [emailError,setEmailError] = useState(false)

  const [subject,setSubject] = useState("")

  const [message,setMessage] = useState("")
  const [messageError,setMessageError] = useState(false)

  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(true)

  const [loading,setLoading] = useState(false)

  const templateParams = {
    name: name,
    subject,
    message,
    email,
}


  const handleChange = (e)=>{
    if (success){
      setSuccess(false)
    }
    const value = e.target.value;
    const id = e.target.id;
    switch (id) {
      case "name":
        if (value.length === 0){
          setNameError(true)
          setError(true)
        }
        else {
          setNameError(false)
          setError(false)
        }
        setName(value)
        break;
      case "email":
        if (validateEmail(value)){
          setEmailError(false)
          setError(false)
        }
        else {
          setEmailError(true)
          setError(true)
        }
        setEmail(value)
        break;
      case "subject":
        setSubject(value)
        break;
      case "message":
        if (value.length === 0){
          setMessageError(true)
          setError(true)
        } else {
          setMessageError(false)
          setError(false)
        }
        setMessage(value)
        break;
      default:
        break;
    }
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const check_if_error = ()=>{
    if (name.length === 0){
      setNameError(true)
      return true
    }
    if (!validateEmail(email)){
      setEmailError(true)
      return true
    }
    if (message.length === 0){
      setMessageError(true)
      return true
    }
    return false
  }

  const sendMail = ()=> {
    setLoading(true)
    if (!check_if_error()){
    emailjs.send(SERVICE_ID,TEMPLATE_ID,templateParams,USER_ID)
    .then((response)=>{
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true)
      setLoading(false)
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setLoading(false)
    });
    } else {
      if (name.length === 0){
        setNameError(true)
      }
      if (!validateEmail(email)){
        setEmailError(true)
      }
      if (message.length === 0){
        setMessageError(true)
      }
      setLoading(false)
    }
  }

  return(
    <div className="about work message">
      <div><h1>CONTACTS</h1><h3>GET IN<span>TOUCH</span></h3></div>
      <div className="message-row">
        <div className="message-details">
          <h1>TEXT ME <span>ANYTIME</span> ! </h1>
          <p>
              Feel free to get in touch with me.<br/> I am 
              always open to discussing new projects, <br/>
              creative ideas or opportunities to be 
              part of your visions.
          </p>
          <div className="flex flex-col">
            
          <span> <Adr /> {API["portfolio"]["adr"]} </span>
          <span> <Phone /> {API["phone"]} </span>
          <span> <Mail /> {API["email"]} </span>
          </div>
        </div>
        <div className="message-form">
        {
          loading && <div class="lds-ripple"><div></div><div></div></div>
        }
          <div className="input-group">
            <input className={nameError?"error":""} type="text" placeholder="Your Name*" id="name" onChange={handleChange}  value={name}  />
            <input className={emailError?"error":""} type="text" placeholder="Your Email*" id="email" onChange={handleChange}  value={email}  />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Your Subject"  id="subject" onChange={handleChange} value={subject} />
          </div>
          <div className="input-group">
            <textarea  className={messageError?"error":""}  name="Message" id="message" onChange={handleChange} value={message} placeholder="Message*" cols="30" rows="10"></textarea>
          </div>
            <ActionButton message sendMail={sendMail} content="SEND" />
            <div className="alert success-alert" style={{
              opacity:!success?0:1
            }} >
            <p>You mail was sent successfully</p>
            <a className="close" onClick={()=>{
              setSuccess(false)
            }} >&times;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message