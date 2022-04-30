import "./Certificate.css";
import moment from 'moment';
import { ReactComponent as EducationSVG } from "../../assets/icons/education.svg";
import { ReactComponent as ExperienceSVG } from "../../assets/icons/work.svg";
import Pdf from "../../assets/certificates/test.pdf"



const Certificate = (props)=>{
  const{ data,exp} = props;
  return (
    <div className="ceritificate">
        <div className="certificate-svg">
          <div className="svg bg-secondary">
            {exp ? <ExperienceSVG /> :<EducationSVG />}
          </div>
          <div className="vl"></div>
        </div>
        <div className="certificate-detail flex flex-col">
          <div className="certificate-date">
            <span>{ moment( Date(data.date_start)).format("MMM YYYY")} - { moment( Date(data.date_end)).format("MMM YYYY") }</span>
          </div>
          <div className="certificate-title">
            <h1> {data.name}    { !exp && <span> {`${data.type.length>0?(`(${data.type})`):''}`} </span> }  </h1>
          </div>
          <div className="certificate-place">
            <span>{exp?data.place:data.place}</span>
          </div>
          <div className="certificate-desc">
            <p>{data.description}</p>
          </div>
          {
            !exp && <div className="certificate-button">
            <a href={Pdf} target='_blank' rel='noopener noreferrer'>
            <p>View Certification</p>
            </a>
            </div>
          }
        </div>
    </div>
  );
}
export default Certificate;