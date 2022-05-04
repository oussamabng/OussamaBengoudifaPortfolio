import React,{useState,useEffect} from "react"
import "./Skills.css";
import Shape from "../Shape/Shape";
import PercentageBar from "../PercentageBar/PercentageBar";

const Skills = (props)=>{
  const { dataSkills } = props;
  const [data,setData] = useState([]);
  useEffect(()=>{
    setData(dataSkills["skills"])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    {
      data.length > 0 &&
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
      margin:'2rem 0'
    }} >
      MY SKILLS
    </h1>
    </div>
    <div className="skills-list">
      
      {
        data.slice(0,data.length/2).map(
          (skill,index)=>
          <div key={index.toString()}>
            <PercentageBar  name={skill.name} percentage={skill.pourcentage*100} />
          </div>
        )
      }
      {
        data.slice(data.length/2,data.length).map(
          (skill,index)=>
          <div key={index.toString()}>
            <PercentageBar  name={skill.name} percentage={skill.pourcentage*100} />
        </div>
        )
      }
    </div>
  </div>
    }
    </>
  );
}

export default Skills;