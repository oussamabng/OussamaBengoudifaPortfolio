import "./Certificate.css";
import moment from 'moment';
import { ReactComponent as EducationSVG } from "../../assets/icons/education.svg";
import { ReactComponent as ExperienceSVG } from "../../assets/icons/work.svg";



const Certificate = (props)=>{
  const{ data,exp} = props;
  return (
    <div className="ceritificate">
        <div className="certificate-svg">
          <div className="svg bg-secondary">
            {exp ? <ExperienceSVG /> :<EducationSVG />}
          </div>
          <div class="vl"></div>
        </div>
        <div className="certificate-detail flex flex-col">
          <div className="certificate-date">
            <span>{ moment(data.date).format("MMM YYYY") }</span>
          </div>
          <div className="certificate-title">
            <h1> {data.title}    { !exp && <span> {`${data.subtitle.length>0?(`(${data.subtitle})`):''}`} </span> }  </h1>
          </div>
          <div className="certificate-place">
            <span>{data.place}</span>
          </div>
          <div className="certificate-desc">
            <p>{data.desc}</p>
          </div>
          {
            !exp && <div className="certificate-button">
            <a href={data.pdf} target='_blank' rel='noopener noreferrer'>
            <p>View Certification</p>
            </a>
            </div>
          }
        </div>
    </div>
  );
}
export default Certificate;