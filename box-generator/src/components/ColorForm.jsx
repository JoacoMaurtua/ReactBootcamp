import userEvent from '@testing-library/user-event';
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
  border-radius: ${props=>props.bordeRadius};
  display: inline-block;
  margin-top: 50px;
  margin-right: 25px;
`


export default function ColorForm() {

  //useRef se usa para eliminar la info de las input una vez se haya hecho submit

  const inputColor = useRef(null);
  const inputWidth = useRef(null);
  const inputHeight = useRef(null);
  const inputRadius = useRef(null);

  const [state,setState] = useState({
    width: 0,
    height: 0,
    color: "",
    bordeRadius: 0,
    boxes: []
  })

  const onChange = (e) =>{
      const {name,value} = e.target;
      setState({
        ...state,
        [name]:value
      });
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    setState({
        boxes:[...state.boxes,
                {color:state.color,
                width:state.width,
                height:state.height,
                bordeRadius: state.bordeRadius}
              ]
    });

    inputColor.current.value = '';
    inputWidth.current.value = '';
    inputHeight.current.value = '';
    inputRadius.current.value = '';
  }
  
  return (
    <div>
      <h3>BOX GENERATOR WHITH REACT</h3>
      <StyleForm onSubmit={onSubmit}>
        <div className="inputContainer">
          <label htmlFor="color">Color: </label>
          <input type="text" ref={inputColor} name="color" value={state.color} onChange={onChange}/>
        </div>

        <div className="inputContainer">
          <label htmlFor="width">Width: </label>
          <input type="text" ref={inputWidth} name="width" value={state.width} onChange={onChange}/>
        </div>

        <div className="inputContainer">
          <label htmlFor="height">Height: </label>
          <input type="text" ref={inputHeight} name="height" value={state.height} onChange={onChange} />
        </div>

        <div className="inputContainer">
          <label htmlFor="radius">Radius: </label>
          <input type="text" ref={inputRadius} name="bordeRadius" value={state.bordeRadius} onChange={onChange}  />
        </div>

        <input className="boton" type="submit" value="Add" />
    
    
      </StyleForm>

      <div>
        {state.boxes.map((figure,index)=> 
                    (<Box key={index} 
                         color={figure.color}
                         width={figure.width}
                         height={figure.height}
                         bordeRadius={figure.bordeRadius}
                    />)
                  )
        }
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


