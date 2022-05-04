import "./About.css";
import Shape from "../Shape/Shape";
import ActionButton from "../ActionButton/ActionButton";

import { ReactComponent as Instgram } from "../../assets/icons/insta.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";


const About = (props)=>{
  const { dataAbout } = props;
  const date_of_birth = new Date(dataAbout.portfolio["date_of_birth"])
  const dev_start = new Date(dataAbout.portfolio["dev_start"])
  var languages = "";

  const diff_years = (dt2, dt1)=>{
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff/365.25));
  }
  dataAbout.portfolio["languages"].map((language,index)=>
    languages += index+1 === dataAbout.portfolio["languages"].length ? `${language}` : `${language} ,`
  )


  return (
  <div className="about mw homepage">
    <div><h1>INFORMATIONS</h1> <h3>ABOUT <span>ME</span></h3></div>
    <div className="personal">
      <h4>Personal infos</h4>
      <div className="mobile">
          <h4>Personal infos</h4>
          <p><span>First Name: </span>{dataAbout.portfolio.fullname.split(" ")[1]}</p>
          <p><span>Last Name: </span>{dataAbout.portfolio.fullname.split(" ")[0]}</p>
          <p><span>Age: </span>{diff_years(new Date(),date_of_birth)}</p>
          <p><span>Mail: </span>{dataAbout.portfolio["email"]}</p>
          <p><span>Address:: </span>{dataAbout.portfolio["city"]}</p>
          <p><span>Phone: </span>{dataAbout.portfolio["phone"]}</p>
          <p><span>Nationality: </span>{dataAbout.portfolio["nationality"]}</p>
          <p><span>Languages: </span>{languages}</p>
        </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
        <div>
          <p><span>First Name: </span>{dataAbout.portfolio.fullname.split(" ")[1]}</p>
        </div>
        <div>
          <p><span>Age: </span>{diff_years(new Date(),date_of_birth)}</p>
        </div>
        <div>
          <p><span>Address:: </span>{dataAbout.portfolio["city"]}</p>
        </div>
        <div>
          <p><span>Phone: </span>{dataAbout.portfolio["phone"]}</p>
        </div>
        </div>
        <div className="mr-2">
        <div>
          <p><span>Last Name: </span>{dataAbout.portfolio.fullname.split(" ")[0]}</p>
        </div>
        <div>
          <p><span>Nationality: </span>{dataAbout.portfolio["nationality"]}</p>
        </div>
        <div>
          <p><span>Languages: </span>{languages}</p>
        </div>
        <div>
          <p><span>Mail: </span>{dataAbout.portfolio["email"]}</p>
        </div>
        </div>
        <div className="mr-2 special-box">
          <h6>{diff_years(new Date(),dev_start)} <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <h2>
            years of
            <br />
            <p>experience</p>
          </h2>
        </div>
        <div className="mr-2 special-box">
          <h6>{dataAbout["nb_projects"]} <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <h2>
            projects
            <br />
            <p style={{opacity:0}} >experience</p>
          </h2>
        </div>
      </div>
      <div className="icons">
      <ActionButton isPdf pdf={dataAbout["portfolioCV"]}  content="DOWNLOAD MY CV" />
      <div className="flex items-center mx-2">
      <Instgram onClick={()=>{
        window.open("https://www.instagram.com/swap4code/")
      }} />
      <Facebook onClick={()=>{
        window.open("https://web.facebook.com/people/Bengoudifa-Oussama/100076240370356/")
      }} />
      <Github onClick={()=>{
        window.open("https://github.com/oussamabng")
      }} />
      </div>
      </div>
      <div className="mobile flex flex-col items-center">
        <div className="mr-2 special-box">
          <h6>{diff_years(new Date(),dev_start)} <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <h2>
            years of
            <br />
            <p>experience</p>
          </h2>
        </div>
        <div className="mr-2 special-box">
          <h6>{dataAbout["nb_projects"]} <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <h2>
            projects
            <br />
            <p style={{opacity:0}} >experience</p>
          </h2>
        </div>
      </div>
    </div>
    
  </div>
  );
}
export default About;