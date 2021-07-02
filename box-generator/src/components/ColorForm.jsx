import React, {useState} from 'react';
import styled from 'styled-components';

/*
  let nombre = 'joaquin'
  console.log(nombre+' maurtua') 
  console.log(`${nombre} maurtua`)
 */


const Box = styled.div`
  background-color: ${props => props.color}; 
  width: 150px;
  height: 150px;
`


export default function ColorForm() {

  const [state,setState] = useState({
    color:"",
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
    setState({
      color:"",
      boxes:[...state.boxes,{Color:state.color}] //traer las cajitas anteriores y la actual
    })
  }

  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="color">Color </label>
        <input type="text" name="color" value={state.color} onChange = {onChange} />
        <input type="submit" value="Add" />
      </form>

      <div>
        {state.boxes.map((item,index)=>( <Box key={index} color={item.Color}/>))} 
      </div>
      
      
    </div>
  )
}


