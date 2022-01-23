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
    </div>
  );
}

export default App;
