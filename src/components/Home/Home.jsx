import React,{useState,useEffect} from "react";
import "./Home.css";
import Typed from "react-typed";
import ActionButton from "../ActionButton/ActionButton";
import { Image } from "react-image-and-background-image-fade";

const Home = (props)=>{
  const [textLines,setTextLines] = useState([])
  const { dataHome } = props;
  useEffect(()=>{
    setTextLines(dataHome.job_titles)
  },[]) // eslint-disable-line react-hooks/exhaustive-deps
  return(
    <>
    {
      
      <div className="homepage">
      <div className="portfolio-image mx-4">  
        <div className="flex flex-col items-center">
          <div className="border2"></div>
          <Image wrapperClassName="img-home" src={dataHome.portfolioImage} alt={dataHome.fullname} />
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
      </div>
      <div className="portfolio-description">
        <div><h2>{dataHome.fullname.split(" ")[1]}</h2> <span>{dataHome.fullname.split(" ")[0]}</span></div>
        <p>
        I am a full-stack developer.
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
        <ActionButton pdf={dataHome.portfolioCV} isPdf content="DOWNLOAD MY CV" />
      </div>
    </div>
    }
    </>
  )
}

export default Home;