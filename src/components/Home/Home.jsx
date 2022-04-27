import "./Home.css";
import Picture from "../../assets/portfolio.jpeg";
import Typed from "react-typed";
import ActionButton from "../ActionButton/ActionButton"

const Home = ()=>{
  const textLines = [
    `Full stack developer`,
    `IT software engineer`
  ]
  return(
    <div className="homepage">
      <div className="portfolio-image mx-4">
        <div className="flex flex-col items-center">
          <div className="border2"></div>
          <img src={Picture} alt="oussama bengoudifa" />
          <span>Hi there ! I am</span>
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
        <div><h2>OUSSAMA</h2> <span>BENGOUDIFA</span></div>
        <p>I'm an Algerian based Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ActionButton content="DOWNLOAD MY CV" />
      </div>
    </div>
  )
}

export default Home;