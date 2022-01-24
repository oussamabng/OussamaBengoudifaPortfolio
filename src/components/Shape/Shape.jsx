import React from "react";

const Shape = (props)=>{
  const { width,height,color,type,degree,top,left,right,bottom,relative,animation } = props;
  return (
    <div className={animation?type==='circle'?'shape circle':type==='square'?'shape square':type==='square-turn'?'shape square-turn':'':''} style={{
      width,
      height,
      border:`1px solid ${color}`,borderRadius:type==='circle'?'50%':'0',
      transform:(type==='circle')|| (type==='square')|| (type==='square-turn')?`rotate(${degree}deg)`:'translateX(0)',
      position:relative?'relative':'fixed',
      top:top?top:'auto',
      bottom:bottom?bottom:'auto',
      left:left?left:'auto',
      right:right?right:'auto',
  }}></div>
  )
};

export default Shape;