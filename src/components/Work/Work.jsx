/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Work.css";
import React,{useState,useEffect} from "react";
import { Image } from "react-image-and-background-image-fade";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Work = (props)=>{
  const { dataProjects } = props;
  const [data,setData] = useState([]);
  const [activeItem,setActiveItem] = useState("all");
  const handleActiveItem = (e) =>{
    setActiveItem(e.currentTarget.attributes.data.value);
  }
  useEffect(()=>{
    setData(dataProjects["projects"])
  },[]) // eslint-disable-line react-hooks/exhaustive-deps
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };
  const [isBlurred,setIsBlurred] = useState(false);
  const [images,setImages] = useState([])

  const showProject = (work)=>{
    setIsBlurred(true)
    setImages({name:work.name,images:work.images})
  }
  return (
    <>
    {
      data.length>0 &&
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
        data.filter((work)=>
          activeItem === "all" ? work : work.type === activeItem
        ).map((work,index)=>
      <div key={index} className="work-platform"  >
      <Image wrapperClassName="work-img" src={work.images[0]} width="300px" height="100%" onClick={()=>showProject({images:work.images,name:work.name})} alt="work"  />
      <div className="work-detail">
        <h1 onClick={()=>showProject({images:work.images,name:work.name})} >{work.name}</h1>
        <p> {work.description} </p>
        <span>USED STACK :</span>
        <div className="work-stack">
          {
            work.stacks.map((stack,index)=>
              <div key={index} className="stack">
                {stack}
              </div>
              )
          }
        </div>
        <div className="work_down">
        <h2>Client : {work.client}</h2>
        { work.repository.length >0 && <a href={work.repository} target='_blank' rel='noopener noreferrer'>Git repository</a>}
        </div>
      </div>
    </div>
          )
      }
    </div>
    }

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
            images.images.map((image,index)=>
              {
                return (
                  <div key={index} className="project">
                    <img onClick={()=>window.open(image)} src={image} alt="work" />
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