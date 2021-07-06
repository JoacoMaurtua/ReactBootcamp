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
  width: 465px;
  height: 180px;
  border: 2px solid #e9e9e9;
  margin-top: 20px;
  margin-left: 273px;
  font-size: 20px;
  font-weight: bold;
  padding-top: 50px;
`

export default function Tabs() {

  const tabs = [1,2,3];

  const [state,setState] = useState({initialTab:1});

  const changeValues = (event,value) =>{
    setState({initialTab:value});
  }

  const buttonList = tabs.map((item,index) => {return(<Button key={index} onClick={(event) => changeValues(event,item)}>Tab {item}</Button>)});

  const {initialTab} = state;

  return (
    <div className="Container">
        <div className="buttons">
          {/* <button>Tab {item}</button>
          <button>Tab {item}</button>
          <button>Tab {item}</button> */}
          {buttonList}

        </div>
        <DivStyle>
          Tab {initialTab} content here!
        </DivStyle>
    </div>
  )
}



