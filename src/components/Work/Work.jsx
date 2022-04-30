/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Work.css";
import React,{useState} from "react";
import API from "../../API.json";

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Work = ()=>{
  const [activeItem,setActiveItem] = useState("all");
  const handleActiveItem = (e) =>{
    setActiveItem(e.currentTarget.attributes.data.value);
  }
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };
  const work_list = API["projects"]
  const [isBlurred,setIsBlurred] = useState(false);
  const [images,setImages] = useState([])

  const showProject = (work)=>{
    setIsBlurred(true)
    setImages({name:work.name,images:work.images})
  }
  return (
    <>
    <div className={isBlurred?"about work blurred":"about work"} >
      
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
      <div className="work-platform" onClick={()=>showProject({images:work.images,name:work.name})} >
      <img  src={require('../../assets/'+work.images[0])} alt="work" />
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

    {
      isBlurred && 
      <div className="modal-project">
         <div>
        <div className="flex justify-between items-center">
        <h2>{images.name}</h2>
        <a className="close" onClick={()=>{
          setIsBlurred(false)
        }} >&times;</a>
        </div>
        <Slider {...settings}>
          {
            images.images.map((image)=>
              {
                return (
                  <div className="project">
                    <img src={require('../../assets/'+image)} alt="work" />
                  </div>
                )
              }
            )
          }
        </Slider>
      </div>
      </div>
    }
    </>
    
  );
}

export default Work;