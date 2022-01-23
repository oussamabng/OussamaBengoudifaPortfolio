import "./Home.css";
import Picture from "../../assets/portfolio.jpeg";
import V from "../../assets/icons/v.svg";

const Home = ()=>{
  const handleGetCv = ()=>{};
  return(
    <div className="homepage">
      <div className="portfolio-image mx-4">
        <div className="flex flex-col items-center">
          <div className="border2"></div>
          <img src={Picture} alt="oussama bengoudifa" />
          <span>Hi there ! I am</span>
          <pre><span>[</span>         Full stack developer        <span>]</span></pre>
        </div>
        <h3> <div></div> I’m available for a freelance job. Hire me</h3>
      </div>
      <div className="portfolio-description">
        <h1><h2>OUSSAMA</h2> <span>BENGOUDIFA</span></h1>
        <p>I'm an Algerian based Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="action-button" onClick={handleGetCv} >
          <p>DOWNLOAD MY CV</p>
          <span></span>
          <div><img src={V} alt="icon" /></div>
        </div>
      </div>
    </div>
  )
}

export default Home;