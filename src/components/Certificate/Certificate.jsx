import "./Certificate.css";
import moment from 'moment';
import { ReactComponent as EducationSVG } from "../../assets/icons/education.svg";
import { ReactComponent as ExperienceSVG } from "../../assets/icons/work.svg";



const Certificate = (props)=>{
  const{ data,exp} = props;
  return (
   <>
   {
     Object.keys(data).length > 0 && 
     <div className="ceritificate">
     <div className="certificate-svg">
       <div className="svg bg-secondary">
         {exp ? <ExperienceSVG /> :<EducationSVG />}
       </div>
       <div className="vl"></div>
     </div>
     <div className="certificate-detail flex flex-col">
       <div className="certificate-date">
         <span>{ moment(new Date(data.date_start)).format("DD MMM YYYY")} {data.date_end.length>0? " - " + moment(new Date(data.date_end)).format("DD MMM YYYY") :""} {  }</span>
       </div>
       <div className="certificate-title">
         <h1> {data.name}    { !exp && <span> {`${data.type.length>0?(`(${data.type})`):''}`} </span> }  </h1>
       </div>
       <div className="certificate-place">
         <span>{exp?data.work_type:data.place}</span>
       </div>
       <div className="certificate-desc">
         <p>{data.description}</p>
       </div>
       {
         !exp && <div className="certificate-button">
         <a href={data.certificate}  target='_blank' rel='noopener noreferrer'>
         <p>View Certification</p>
         </a>
         </div>
       }
     </div>
 </div>
   }
   </>
  );
}
export default Certificate;