import "./Logo.css";
import { useSpring, animated } from 'react-spring';
import React,{useEffect} from "react";

const Logo = (props)=>{
  const { animation } = props;
  const [styles, api] = useSpring(() => ({
    from: { x:-45, y:60,borderRadius:'50%',height:'22px' },
    config: {
      duration: 1000,
    },
  }))

  useEffect(() => {
    api.start({
      y:75,
      x:-40,
    })
  }, [api])

  return (
    <animated.div className={animation ? 'logo move' : 'logo'}>
      <p className="text-white font-comfortoo">b<animated.span  style={{
        ...styles,
      }} className='bg-secondary'></animated.span></p>
    </animated.div>
  );
}

export default Logo;
