import React,{useEffect,useState} from "react";
import Logo from "./components/Logo/Logo";


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
        <Shape width={62} height={62} color={"#585858"} type="circle" degree={0} />
      </div>
    </div>
  );
}

export default App;
