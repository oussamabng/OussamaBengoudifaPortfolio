import "./Work.css";
import Img from '../../assets/work.png';
import React,{useState,useEffect} from "react";

const Work = ()=>{
  const [activeItem,setActiveItem] = useState("web");
  const handleActiveItem = (e) =>{
    setActiveItem(e.currentTarget.attributes.data.value);
  }
  const work_list = [
    {
      img:Img,
      title:"platform name",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stacks:[
        'HTML5',
        'CSS3',
        'REACT'
      ],
      author:'Mohamed doe',
      type:'web'
    },
    {
      img:Img,
      title:"platform name",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stacks:[
        'HTML5',
        'CSS3',
        'REACT'
      ],
      author:'Mohamed doe',
      type:'mobile'
    },
    {
      img:Img,
      title:"platform name",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stacks:[
        'HTML5',
        'CSS3',
        'REACT'
      ],
      author:'Mohamed doe',
      type:'mobile'
    },
    {
      img:Img,
      title:"platform name",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stacks:[
        'HTML5',
        'CSS3',
        'REACT'
      ],
      author:'Mohamed doe',
      type:'web'
    },
    {
      img:Img,
      title:"platform name",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stacks:[
        'HTML5',
        'CSS3',
        'REACT'
      ],
      author:'Mohamed doe',
      type:'others'
    },
  ];
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
      <img src={work.img} alt="work" />
      <div className="work-detail">
        <h1>{work.title}</h1>
        <p> {work.desc} </p>
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
        <h2>Client : {work.author}</h2>

      </div>
    </div>
          )
      }
    </div>
  );
}

export default Work;