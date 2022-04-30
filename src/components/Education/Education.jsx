import "../Skills/Skills.css";
import Shape from "../Shape/Shape";
import Certificate from "../Certificate/Certificate";
import API from "../../API.json";

const Education = (props)=>{
  const { exp } = props;
  const education_list = API["educations"]
  const exp_list = API["experience"]
  const data_chosen = exp ? exp_list : education_list;
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
      data_chosen.length>=2 
      ? <div className="skills-list education">
      <div>
      {
        data_chosen.slice(0,data_chosen.length/2).map(
          (data)=>
            <Certificate data={data} exp={exp} />
        )
      }
      </div>
      <div>
      {
        data_chosen.slice(0,data_chosen.length/2).map(
          (data)=> 
            <Certificate data={data} exp={exp} />
        )
      }
      </div>
    </div>
    :
    <div className="skills-list education">
      
      <div>
      {
        data_chosen.slice(data_chosen.length/2,data_chosen.length).map(
          (data)=> 
            <Certificate data={data} exp={exp} />
        )
      }
      </div>
    </div>
    }
  </div>
  );
}

export default Education;