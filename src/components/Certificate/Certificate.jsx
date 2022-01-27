import "./Certificate.css";
import moment from 'moment';
import { ReactComponent as EducationSVG } from "../../assets/icons/education.svg";



const Certificate = (props)=>{
  const{ education } = props;
  const handleSeeCertificate = ()=>{

  }
  return (
    <div className="ceritificate">
        <div className="certificate-svg">
          <div className="svg bg-secondary">
            <EducationSVG />
          </div>
          <div class="vl"></div>
        </div>
        <div className="certificate-detail flex flex-col">
          <div className="certificate-date">
            <span>{ moment(education.date).format("MMM YYYY") }</span>
          </div>
          <div className="certificate-title">
            <h1> {education.title}    <span> {`${education.subtitle.length>0?(`(${education.subtitle})`):''}`} </span>  </h1>
          </div>
          <div className="certificate-place">
            <span>{education.place}</span>
          </div>
          <div className="certificate-desc">
            <p>{education.desc}</p>
          </div>
          <div className="certificate-button">
          <a href={education.pdf} target='_blank' rel='noopener noreferrer'>
          <p>View Certification</p>
          </a>
          </div>
        </div>
    </div>
  );
}
export default Certificate;