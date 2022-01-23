import "./Sidebar.css";
import {ReactComponent as Home} from "../../assets/icons/home.svg";
import {ReactComponent as User} from "../../assets/icons/user.svg";
import {ReactComponent as Bag} from "../../assets/icons/bag.svg";
import {ReactComponent as Mail} from "../../assets/icons/mail.svg";
import {ReactComponent as Star} from "../../assets/icons/star.svg";


const Sidebar = (props)=>{
  const {activeItem,setActiveItem} = props;
  return(
    <div className="Sidebar mx-4">
      <span onClick={()=>setActiveItem('home')} className={activeItem==='home'?'active':''}>
        <Home />
      </span>
      <span onClick={()=>setActiveItem('user')} className={activeItem==='user'?'active':''}>
        <User />
      </span>
      <span onClick={()=>setActiveItem('bag')} className={activeItem==='bag'?'active':''}>
        <Bag />
      </span>
      <span onClick={()=>setActiveItem('mail')} className={activeItem==='mail'?'active':''}>
        <Mail />
      </span>
      <span onClick={()=>setActiveItem('star')} className={activeItem==='star'?'active':''}>
        <Star />
      </span>
    </div>
  )
}

export default Sidebar;