import React from "react"
import "./Skills.css";
import Shape from "../Shape/Shape";
import PercentageBar from "../PercentageBar/PercentageBar";

const Skills = (props)=>{
  const { dataSkills } = props;
  return (
    <>
    {
      dataSkills.length > 0 &&
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
        dataSkills.slice(0,dataSkills.length/2).map(
          (skill,index)=>
          <div key={index.toString()}>
            <PercentageBar  name={skill.name} percentage={skill.pourcentage*100} />
          </div>
        )
      }
      {
        dataSkills.slice(dataSkills.length/2,dataSkills.length).map(
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