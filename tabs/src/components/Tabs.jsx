import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 15px;
  width: 150px;
  padding: 15px;
  margin-right: 10px;
  background-color: #e9e9e9;
  font-weight: bold;

  :hover{
    background-color: black;
    color: #e9e9e9;
  }
`
const DivStyle = styled.div`
  width: 610px;
  height: 180px;
  border: 2px solid #e9e9e9;
  font-size: 20px;
  font-weight: bold;
  padding-top: 50px;
  margin: 0 auto;
  margin-top: 50px;
`

export default function Tabs(props) {

  const tabs = [1,2,3,4];

  const [state,setState] = useState({initialTab:1});

  const changeValues = (event,value) =>{
    setState({initialTab:value});
  }

  const onAlert = (event,value) => {
    alert(`You click the tab number ${value}`);
  }

  const buttonList = tabs.map((item,index) => {return(<Button key={index} onClick={(event) => changeValues(event,item)}>Tab {item}</Button>)});

  const {initialTab} = state;

  return (
    <div className="Container">
        <div className="buttons">
          
          {buttonList}

        </div>

        <DivStyle>
          <h3 onClick={e => onAlert()}>This is the tab {initialTab}</h3>
        </DivStyle>
    </div>
  )
}





