import "./About.css";
import Shape from "../Shape/Shape";
import V from "../../assets/icons/v.svg";

const About = ()=>{
  const handleGetCv = ()=>{};
  return (
  <div className="about mw homepage">
    <div><h1>INFORMATIONS</h1> <h3>ABOUT <span>ME</span></h3></div>
    <div className="personal">
      <h4>Personal infos</h4>
      <div className="flex justify-between items-center">
        <div className="mr-2">
        <div>
          <p><span>First Name: </span>Oussama</p>
        </div>
        <div>
          <p><span>Age: </span>22 Yo</p>
        </div>
        <div>
          <p><span>Address:: </span>Mostaganem</p>
        </div>
        <div>
          <p><span>Phone: </span>+213 541 66 99 99</p>
        </div>
        </div>
        <div className="mr-2">
        <div>
          <p><span>Last Name: </span>Bengoudifa</p>
        </div>
        <div>
          <p><span>Nationality: </span>Algerian</p>
        </div>
        <div>
          <p><span>Languages: </span>French , English , Arabic</p>
        </div>
        <div>
          <p><span>Mail: </span>oussama.bengoudifa.perso@gmail.com</p>
        </div>
        </div>
        <div className="mr-2 special-box">
          <h6>5 <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <p>
            years of
            <br />
            <p>experience</p>
          </p>
        </div>
        <div className="mr-2 special-box">
          <h6>12 <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <p>
            projects
            <br />
            <p style={{opacity:0}} >experience</p>
          </p>
        </div>
      </div>
      <div className="action-button" onClick={handleGetCv} >
          <p>DOWNLOAD MY CV</p>
          <span></span>
          <div><img src={V} alt="icon" /></div>
        </div>
    </div>
    
  </div>
  );
}
export default About;