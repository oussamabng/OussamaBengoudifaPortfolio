import "./Home.css";
import Picture from "../../assets/portfolio.jpeg";
import Typed from "react-typed";
import ActionButton from "../ActionButton/ActionButton";
import Pdf from "../../assets/CV.pdf";
import API from "../../API.json";

const Home = ()=>{
  const textLines = []
  API["job_titles"].map((title)=>textLines.push(title.title))
  return(
    <div className="homepage">
      <div className="portfolio-image mx-4">
        <div className="flex flex-col items-center">
          <div className="border2"></div>
          <img src={Picture} alt="oussama bengoudifa" />
          <pre>
          <span>
          [</span>         
          <Typed strings={textLines} typeSpeed={60}
          backSpeed={0}
          fadeOut={true}
          loop={true} 
          />        
          <span>]
          </span>
          </pre>
        </div>
        <h3> <div></div> I’m available for a freelance job. Hire me</h3>
      </div>
      <div className="portfolio-description">
        <div><h2>{API["name"].split(" ")[1]}</h2> <span>{API["name"].split(" ")[0]}</span></div>
        <p>
        I am an full-stack developer.
        <br />
        And an automation engineer with python.
        <br />
        Check out my certificates and my experiences.
        <br />
        Feel free to take a look at my latest projects.
        <br />
        Remotely available UTC−1 to UTC+8.
        <br />
        </p>
        <ActionButton pdf={Pdf} isPdf content="DOWNLOAD MY CV" />
      </div>
    </div>
  )
}

export default Home;