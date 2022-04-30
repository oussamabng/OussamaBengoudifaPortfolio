import "./Skills.css";
import Shape from "../Shape/Shape";
import PercentageBar from "../PercentageBar/PercentageBar";
import API from "../../API.json";

const Skills = ()=>{
  const skill_list = API["skills"]
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
      margin:'2rem 0'
    }} >
      MY SKILLS
    </h1>
    </div>
    <div className="skills-list">
      <div>
      {
        skill_list.slice(0,skill_list.length/2).map(
          (skill)=>
            <PercentageBar id={skill.id} name={skill.name} percentage={skill.pourcentage*100} />
        )
      }
      </div>
      <div>
      {
        skill_list.slice(skill_list.length/2,skill_list.length).map(
          (skill)=>
            <PercentageBar id={skill.id} name={skill.name} percentage={skill.pourcentage*100} />
        )
      }
      </div>
    </div>
  </div>
  );
}

export default Skills;