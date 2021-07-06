import React, { useState } from 'react';
//import styled from 'styled-components';

export default function Tabs() {

  const tabs = [1,2,3];

  const [state,setState] = useState({initialTab:1});

  const changeValues = (event,value) =>{
    setState({initialTab:value});
  }

  const buttonList = tabs.map((item,index) => {return(<button key={index} onClick={(event) => changeValues(event,item)}>Tab {item}</button>)});

  const {initialTab} = state;

  return (
    <div className="Container">
        <div className="buttons">
          {/* <button>Tab {item}</button>
          <button>Tab {item}</button>
          <button>Tab {item}</button> */}
          {buttonList}

        </div>
        <div className="results">
          {initialTab}
        </div>
    </div>
  )
}

