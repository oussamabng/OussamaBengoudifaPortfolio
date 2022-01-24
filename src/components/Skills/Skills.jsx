import "./Skills.css";
import Shape from "../Shape/Shape";
import PercentageBar from "../PercentageBar/PercentageBar";

const Skills = ()=>{
  const skill_list = [
    {
      name:"HTML5",
      percentage:97
    },
    {
      name:"Javascript (ES6 +)",
      percentage:97
    },
    {
      name:"CSS3",
      percentage:97
    },
    {
      name:"PHP",
      percentage:97
    },
    {
      name:"ReactJs",
      percentage:97
    },
    {
      name:"NodeJs",
      percentage:97
    },
    {
      name:"Django",
      percentage:97
    },
    {
      name:"PYTHON",
      percentage:97
    },
  ]
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
            <PercentageBar name={skill.name} percentage={skill.percentage} />
        )
      }
      </div>
      <div>
      {
        skill_list.slice(skill_list.length/2,skill_list.length).map(
          (skill)=>
            <PercentageBar name={skill.name} percentage={skill.percentage} />
        )
      }
      </div>
    </div>
  </div>
  );
}

export default Skills;