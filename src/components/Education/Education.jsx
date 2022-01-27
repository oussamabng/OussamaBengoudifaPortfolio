import "../Skills/Skills.css";
import Shape from "../Shape/Shape";
import Certificate from "../Certificate/Certificate";
import Pdf from "../../assets/certificate.pdf";

const Education = ()=>{
  const education_list = [
    {
        date : 'Thu Jan 27 2022 04:46:05 GMT-0800 (Pacific Standard Time)',
        title : 'engineer and master degree',
        subtitle : 'information and web system',
        place : 'Higher school of computer science (ESI) -sidi bel abbes-',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing ',
        pdf : Pdf
    },
    {
      date : 'Thu Jan 27 2022 04:46:05 GMT-0800 (Pacific Standard Time)',
      title : 'advanced python course',
      subtitle : '',
      place : 'Higher school of computer science (ESI) -sidi bel abbes-',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
      pdf : Pdf
  },
  {
    date : 'Thu Jan 27 2022 04:46:05 GMT-0800 (Pacific Standard Time)',
    title : 'advanced python course',
    subtitle : '',
    place : 'Higher school of computer science (ESI) -sidi bel abbes-',
    desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
    pdf : Pdf
},
{
  date : 'Thu Jan 27 2022 04:46:05 GMT-0800 (Pacific Standard Time)',
  title : 'advanced python course',
  subtitle : '',
  place : 'Higher school of computer science (ESI) -sidi bel abbes-',
  desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
  pdf : Pdf
},
  ];
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
      margin:'2rem 0',
      marginBottom:'6rem'
    }} >
      EDUCATION
    </h1>
    </div>
    <div className="skills-list">
      <div>
      {
        education_list.slice(0,education_list.length/2).map(
          (education)=>
            <Certificate education={education} />
        )
      }
      </div>
      <div>
      {
        education_list.slice(education_list.length/2,education_list.length).map(
          (education)=>
            <Certificate education={education} />
        )
      }
      </div>
    </div>
  </div>
  );
}

export default Education;