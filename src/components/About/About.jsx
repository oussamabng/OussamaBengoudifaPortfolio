import "./About.css";
import Shape from "../Shape/Shape";
import ActionButton from "../ActionButton/ActionButton";
import Pdf from "../../assets/CV.pdf";
import API from "../../API.json";

const About = ()=>{
  const date_of_birth = new Date(API["portfolio"]["date_of_birth"])
  var languages = "";

  const diff_years = (dt2, dt1)=>{
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff/365.25));
  }
  API["languages"].map((language,index)=>
    languages += index+1 === API["languages"].length ? `${language.name}` : `${language.name} ,`
  )


  return (
  <div className="about mw homepage">
    <div><h1>INFORMATIONS</h1> <h3>ABOUT <span>ME</span></h3></div>
    <div className="personal">
      <h4>Personal infos</h4>
      <div className="mobile">
          <h4>Personal infos</h4>
          <p><span>First Name: </span>{API["name"].split(" ")[1]}</p>
          <p><span>Last Name: </span>{API["name"].split(" ")[0]}</p>
          <p><span>Age: </span>{diff_years(new Date(),date_of_birth)}
          <p><span>Mail: </span>{API["email"]}</p></p>
          <p><span>Address:: </span>{API["portfolio"]["city"]}</p>
          <p><span>Phone: </span>{API["phone"]}</p>
          <p><span>Nationality: </span>{API["portfolio"]["nationality"]}</p>
          <p><span>Languages: </span>{languages}</p>
        </div>
      <div className="flex justify-between items-center">
        <div className="mr-2">
        <div>
          <p><span>First Name: </span>{API["name"].split(" ")[1]}</p>
        </div>
        <div>
          <p><span>Age: </span>{diff_years(new Date(),date_of_birth)}</p>
        </div>
        <div>
          <p><span>Address:: </span>{API["portfolio"]["city"]}</p>
        </div>
        <div>
          <p><span>Phone: </span>{API["phone"]}</p>
        </div>
        </div>
        <div className="mr-2">
        <div>
          <p><span>Last Name: </span>{API["name"].split(" ")[0]}</p>
        </div>
        <div>
          <p><span>Nationality: </span>{API["portfolio"]["nationality"]}</p>
        </div>
        <div>
          <p><span>Languages: </span>{languages}</p>
        </div>
        <div>
          <p><span>Mail: </span>{API["email"]}</p>
        </div>
        </div>
        <div className="mr-2 special-box">
          <h6>{API["nb_exp"]} <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <h2>
            years of
            <br />
            <p>experience</p>
          </h2>
        </div>
        <div className="mr-2 special-box">
          <h6>{API["nb_projects"]} <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <h2>
            projects
            <br />
            <p style={{opacity:0}} >experience</p>
          </h2>
        </div>
      </div>
      <ActionButton isPdf pdf={Pdf}  content="DOWNLOAD MY CV" />
      <div className="mobile flex flex-col items-center">
        <div className="mr-2 special-box">
          <h6>{API["nb_exp"]} <div>+</div> </h6>
          <Shape width={33} height={0} color={"#FF9900"} type="line" degree={0} relative />  
          <h2>
            years of
            <br />
            <p>experience</p>
          </h2>
        </div>
        <div className="mr-2 special-box">
          <h6>{API["nb_projects"]} <div>+</div> </h6>
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