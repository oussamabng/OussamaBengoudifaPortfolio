import "./Work.css";
import Img from '../../assets/work.png';
import React,{useState} from "react";
import API from "../../API.json";

const Work = ()=>{
  const [activeItem,setActiveItem] = useState("all");
  const handleActiveItem = (e) =>{
    setActiveItem(e.currentTarget.attributes.data.value);
  }
  const work_list = API["projects"]
  return (
    <div className="about work">
      <div><h1>WORKS</h1><h3>MY<span>PORTFOLIO</span></h3></div>
      <div className="work-filter">
        <ul>
          <li className={activeItem==="all"?"active":""} onClick={handleActiveItem} data="all">ALL</li>
          <li className={activeItem==="web"?"active":""} onClick={handleActiveItem} data="web">WEB PROJECTS</li>
          <li className={activeItem==="mobile"?"active":""} onClick={handleActiveItem} data="mobile">mobile projects</li>
          <li className={activeItem==="others"?"active":""} onClick={handleActiveItem} data="others">others</li>
        </ul>
      </div>
      {
        work_list.filter((work)=>
          activeItem === "all" ? work : work.type === activeItem
        ).map(work=>
      <div className="work-platform">
      <img src={Img} alt="work" />
      <div className="work-detail">
        <h1>{work.name}</h1>
        <p> {work.description} </p>
        <span>USED STACK :</span>
        <div className="work-stack">
          {
            work.stacks.map(stack=>
              <div className="stack">
                {stack}
              </div>
              )
          }
        </div>
        <h2>Client : {work.client}</h2>

      </div>
    </div>
          )
      }
    </div>
  );
}

export default Work;