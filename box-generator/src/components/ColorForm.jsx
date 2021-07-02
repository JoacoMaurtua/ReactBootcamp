import React, {useState,useRef} from 'react';
import styled from 'styled-components';

/*
  let nombre = 'joaquin'
  console.log(nombre+' maurtua') 
  console.log(`${nombre} maurtua`)
 */

const StyleForm = styled.form`
  margin-top: 25px;
`

const Box = styled.div`
  background-color: ${props => props.color};  //$ llaves es para escribir js dentro de css
  width: ${props=>props.width};
  height: ${props=>props.height};
  display: inline-block;
  margin-top: 50px;
  margin-right: 25px;
`


export default function ColorForm() {

  const inputColor = useRef(null);
  const inputWidth = useRef(null);
  const inputHeight = useRef(null);

  const [state,setState] = useState({
    color:"",
    width:0,
    height:0,
    boxes:[]
  });

  const onChange = (event) =>{
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    })
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    const {color,width,height} = state
    setState({
      color:"",
      width:0,
      height:0,
      boxes:[...state.boxes,{Color:color,
                            Width:width,
                            Height:height
            }] //traer las cajitas anteriores y la actual
    })
    inputColor.current.value = "";
    inputWidth.current.value = "";
    inputHeight.current.value = "";
  }

  

  return (
    <div>
      <StyleForm onSubmit={onSubmit}>
        <div>
          <label htmlFor="color">Color </label>
          <input type="text" ref={inputColor} name="color" onChange = {onChange} />
        </div>

        <div>
          <label htmlFor="width">Width </label>
          <input type="text" ref={inputWidth} name="width" onChange = {onChange} />
        </div>

        <div>
          <label htmlFor="height">Height </label>
          <input type="text" ref={inputHeight} name="height" onChange = {onChange} />
        </div>

        <input type="submit" value="Add" />
    
    
      </StyleForm>

      <div>
        {state.boxes.map((item,index)=>( <Box key={index} color={item.Color} width={item.Width} height={item.Height}/>))} 
      </div>

      {/* background-color: estas recibiendo un props llamado color    color={ }
      height: estas recibiendo un props llamado height    height={ }
      width: estas recibiendo un props llamado width    width={ }
      useState({ boxes: []}) que aqui una vez crees las cajitas , quedaria 
      asi useState({boxes: [{color: "red", height:100px, width: 100px}, 
      {color: "green", height:200px, width: 200px}]})
      
      
       boxes:[...state.boxes,{Color:color,
                            Width:width,
                            Height:height
            }] //traer las cajitas anteriores y la actual*/}
      
      
    </div>
  )
}


