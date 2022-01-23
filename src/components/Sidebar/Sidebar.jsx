import "./Sidebar.css";
import {ReactComponent as Home} from "../../assets/icons/home.svg";
import {ReactComponent as User} from "../../assets/icons/user.svg";
import {ReactComponent as Bag} from "../../assets/icons/bag.svg";
import {ReactComponent as Mail} from "../../assets/icons/mail.svg";
import {ReactComponent as Star} from "../../assets/icons/star.svg";




const Sidebar = ()=>{
  return(
    <div className="Sidebar mx-4">
      <span className="active">
        <Home />
      </span>
      <span>
        <User />
      </span>
      <span>
        <Bag />
      </span>
      <span>
        <Mail />
      </span>
      <span>
        <Star />
      </span>
    </div>
  )
}

export default Sidebar;