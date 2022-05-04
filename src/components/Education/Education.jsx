import React,{useState,useEffect} from "react";
import "../Skills/Skills.css";
import Shape from "../Shape/Shape";
import Certificate from "../Certificate/Certificate";

const Education = (props)=>{
  const { exp,dataEducation,dataExperience } = props;
  const [data,setData] = useState([]);

  useEffect(()=>{
    if (exp){
      setData(dataExperience["experiences"])
    } else setData(dataEducation["educations"]) 
  },[])

  return (
    <div className="skills">
    <div style={{
      display:'flex',
      justifyContent:'center',
      margin:'1rem 0'
    }} >
    <Shape width={382} height={0} color={"#585858"} type="line" degree={0} relative  /> 
    </div>
    <div style={{
      display:'flex',
      justifyContent:'center',
    }} >
    <h1 style={{
      fontSize:"16px",
      margin:'3rem 0',
      marginBottom:'2rem'
    }} >
      {exp ? "EXPERIENCE" : "EDUCATION"}
    </h1>
    </div>
    {
       <div className="skills-list education">
      
      <div className="list">
      {
        data.map(
          (data,index)=>
          <div key={index} > 
            <Certificate data={data} exp={exp} />
          </div>
        )
      }
      </div>
      
    </div>
    }
  </div>
  );
}

export default Education;