import React, {useState,useEffect} from 'react';

//LLEVANDO ALGO DEL EXTERIOR(EN ESTE CASO EL MOUSE) AL RENDER

export default function ExampleThree() {

  const [mostrar,setMostrar] = useState(true);

  return (
    <div>
      <button onClick={()=>setMostrar(false)}>Dejar de mostrar</button>
      {
        mostrar ? <MouseColor/>:null
      }
      
    </div>
  )
}

function MouseColor(){
  const [color,setColor] = useState('orange');

  useEffect(()=>{
    function onMouseMove(event){
      if(event.clientX < window.innerWidth/2){
        setColor("orange");
      }else{
        setColor("blue");
      }
    }

    window.addEventListener("mousemove",onMouseMove);

    //SIN UN SEGUNDO PARAMETRO [], SE ACTIVARA EL USEEFFECT CON NACA RENDER LO QUE CREARA UN EVENT LISTENNER UNA Y OTRA VEZ OCUPANDO MUCHA MEMORIA EN EL DOM

  },[]); //useEffect solo se ejecuta una vez

  console.log('Ocurrio el render');

  return <div style={{height:"100vh", background:color}}/>
}
