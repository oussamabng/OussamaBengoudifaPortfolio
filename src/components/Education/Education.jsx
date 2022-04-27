import "../Skills/Skills.css";
import Shape from "../Shape/Shape";
import Certificate from "../Certificate/Certificate";
import Pdf from "../../assets/certificate.pdf";

const Education = (props)=>{
  const { exp } = props;
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
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id leo eget risus sagittis efficitur eu a nisl. Proin porttitor euismod ex, lobortis eleifend mauris rhoncus vel. Aliquam auctor finibus sodales. Ut vel nunc cursus, commodo dui id, sagittis massa. Nulla nec rhoncus lacus. Maecenas dictum ex mi, id convallis nisi feugiat eget. Ut gravida nunc lectus, sed dignissim est aliquet et. Proin vel mauris non lacus pulvinar laoreet in non urna. Ut id pretium nisl, a hendrerit felis.',
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
  const exp_list = [
    {
      date : 'Thu Jan 27 2022 04:46:05 GMT-0800 (Pacific Standard Time)',
      title : 'platform name',
      place : 'front-end devloper',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing '
    },
    {
      date : 'Thu Jan 27 2022 04:46:05 GMT-0800 (Pacific Standard Time)',
      title : 'platform name',
      place : 'front-end devloper',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing '
    },
    {
      date : 'Thu Jan 27 2022 04:46:05 GMT-0800 (Pacific Standard Time)',
      title : 'platform name',
      place : 'front-end devloper',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing '
    },
    {
      date : 'Thu Jan 27 2022 04:46:05 GMT-0800 (Pacific Standard Time)',
      title : 'platform name',
      place : 'front-end devloper',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing '
    },
  ]
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
    <div className="skills-list education">
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
        data_chosen.slice(data_chosen.length/2,data_chosen.length).map(
          (data)=> 
            <Certificate data={data} exp={exp} />
        )
      }
      </div>
    </div>
  </div>
  );
}

export default Education;