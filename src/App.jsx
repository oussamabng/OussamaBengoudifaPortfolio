/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from "react";
import Home from "./components/Home/Home";
import Logo from "./components/Logo/Logo";
import Shape from "./components/Shape/Shape";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import Message from "./components/Message/Message";

import { db, storage,  getPortfolio, 
  getPortfolioImage, getPortfolioCV, getSkills,
  getProjects, getEducations,getExperiences   } from "./config"

const App = ()=>{
  const [dataHome,setDataHome] = useState({});
  const [dataAbout,setDataAbout] = useState({});
  const [dataSkills,setDataSkills] = useState({});
  const [dataEducation,setDataEducation] = useState(null);
  const [dataExperience,setDataExperience] = useState(null);
  const [dataProjects,setDataProjects] = useState({});
  const [dataMessage,setDataMessage] = useState({});

  const [activeItem,setActiveItem] = useState('home');
  const [logoClass,setLogoClass] = useState(false);
  useEffect(async() => {
    const portfolio = await getPortfolio(db);
    const skills = await getSkills(db);
    const projects = await getProjects(db);
    const educations = await getEducations(db);
    const experiences = await getExperiences(db);
    const portfolioImage = await getPortfolioImage(storage);
    const portfolioCV = await getPortfolioCV(storage);
    await setInterval(() => {
      setLogoClass(true);
    }, 2000);
    
    setDataHome(
      {
        "fullname":portfolio.fullname,
        "job_titles":portfolio.job_titles,
        "portfolioImage":portfolioImage,
        "portfolioCV":portfolioCV,
      }
    );
    setDataAbout(
      {
        "portfolio":portfolio,
        "dev_start":portfolio["dev_start"],
        "nb_projects":projects.length,
        "portfolioCV":portfolioCV,
      }
    );
    setDataSkills(
        {
          "skills":skills
        }
    );
    setDataEducation({
      "educations":educations
    })
    setDataExperience(
      {
        "experiences":experiences
      }
    );
    setDataProjects(
      {
        "projects":projects
      }
    );
    setDataMessage(
      {
        "adr":portfolio.adr,
        "phone":portfolio.phone,
        "email":portfolio.email
      }
    )
    
  }, []);
  return (
    <div className={logoClass?'portfolio move':'portfolio'}>
      <Logo setActiveItem={setActiveItem} animation={logoClass} />
      {
        logoClass && 
        <div className={logoClass?'home opacity-1':'home opacity-0'}>
       { activeItem === 'home' &&
        (
        <>
         <Shape width={62} height={62} color={"#585858"} type="circle" degree={0} top={-10} right={400} animation  />
        <Shape width={37} height={37} color={"#585858"} type="circle" degree={0} top={550} right={500}  animation />
        <Shape width={150} height={0} color={"#585858"} type="line" degree={0} top={120} right={-10} animation />
        <Shape width={150} height={0} color={"#FF9900"} type="line" degree={0} top={650} right={500} />
        <Shape width={40} height={40} color={"#585858"} type="square" degree={45 } top={330} right={960} animation />
        <Shape width={23} height={23} color={"#585858"} type="square-turn" degree={45} top={730} right={1240} animation  />
        <Shape width={78} height={78} color={"#585858"} type="square-turn" degree={45} top={800} right={1240} animation />
        </>
        )
       }
        <div className="mt-10 mw">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

          { activeItem === 'home' && <Home dataHome={dataHome} /> }
          { activeItem === 'user' && <About dataAbout={dataAbout} /> }
          { activeItem === 'user' && <Skills dataSkills={dataSkills} /> }
          { activeItem === 'user' && <Education exp={false} dataEducation={dataEducation} /> }
          { activeItem === 'user' && <Education dataExperience={dataExperience} exp /> }
          { activeItem === 'bag' && <Work dataProjects={dataProjects} /> }
          { activeItem === 'mail' && <Message dataMessage={dataMessage} /> }
        </div>
      </div>
      }
    </div>
  );
}

export default App;
