import React,{useEffect,useState} from "react";
import Home from "./components/Home/Home";
import Logo from "./components/Logo/Logo";
import Shape from "./components/Shape/Shape";
import Sidebar from "./components/Sidebar/Sidebar";


const App = ()=>{
  const [logoClass,setLogoClass] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setLogoClass(true);
    }, 2000);
  
  }, [logoClass]);
  
  return (
    <div className={logoClass?'portfolio move':'portfolio'}>
      <Logo animation={logoClass} />
      <div className={logoClass?'home opacity-1':'home opacity-0'}>
        <Shape width={62} height={62} color={"#585858"} type="circle" degree={0} top={-10} right={400} animation  />
        <Shape width={37} height={37} color={"#585858"} type="circle" degree={0} top={550} right={500}  animation />
        <Shape width={150} height={0} color={"#585858"} type="line" degree={0} top={120} right={-10} animation />
        <Shape width={150} height={0} color={"#FF9900"} type="line" degree={0} top={650} right={500} />
        <Shape width={40} height={40} color={"#585858"} type="square" degree={45 } top={390} right={960} animation />
        <Shape width={23} height={23} color={"#585858"} type="square-turn" degree={45} top={730} right={1240} animation  />
        <Shape width={78} height={78} color={"#585858"} type="square-turn" degree={45} top={800} right={1240} animation />
        <div className="flex justify-between mt-10 items-center">
          <Home />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
