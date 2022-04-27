import "./Message.css";

import { ReactComponent as Adr } from "../../assets/icons/adr.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail2.svg";

import ActionButton from "../ActionButton/ActionButton";

const Message = ()=>{
  return(
    <div className="about work message">
      <div><h1>CONTACTS</h1><h3>GET IN<span>TOUCH</span></h3></div>
      <div className="message-row">
        <div className="message-details">
          <h1>TEXT ME <span>ANYTIME</span> ! </h1>
          <p>
              Feel free to get in touch with me. I am 
              always open to discussing new projects, 
              creative ideas or opportunities to be 
              part of your visions.
          </p>
          <div className="flex flex-col">
            
          <span> <Adr /> Cite 1 , Rue 07 ,Mosteghanem </span>
          <span> <Phone /> +213 541 66 99 99 </span>
          <span> <Mail /> Oussamabengoudifaperso@gmail.com </span>
          </div>
        </div>
        <div className="message-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" id="name"/>
            <input type="text" placeholder="Your Email" id="email"/>
          </div>
          <div className="input-group">
            <input type="text" placeholder="Subject" id="subject"/>
          </div>
          <div className="input-group">
            <textarea  name="Message" id="Message" placeholder="Message ..." cols="30" rows="10"></textarea>
          </div>
          <ActionButton content="SEND" />
        </div>
      </div>
    </div>
  );
}
export default Message