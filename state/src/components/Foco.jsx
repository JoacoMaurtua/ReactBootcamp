import React, { useState } from 'react';
                       
const LightSwitch = (props) => {
    
    const [state,setState] = useState({position:"On"}); 
       
    const changeSwitch = () =>{
      if(state.position === "On"){
        setState({position:"Off"});
      }
      else{
        setState({position:"On"});
      }
    }
    
    return (
        <fieldset>
            <p>The light is currently { state.position }</p>
            <button onClick = {changeSwitch}>Flip Switch</button>
        </fieldset>
    );
    
}

export default LightSwitch;

