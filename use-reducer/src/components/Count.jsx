import React, {useReducer} from 'react';


const initialState = {
  count:0
}

const reducer = (state,action) =>{
  switch(action.type){
    case "aumentar": return{count:state.count+1}

    case "disminuir": return{count:state.count-1}

    default: return state
  }

}

export default function Count() {


  const [state,dispatch] = useReducer(reducer,initialState);

  const aumentar = ()=>{
    dispatch({
      type:"aumentar"
    })
  }

  const disminuir = ()=>{
    dispatch({
      type:"disminuir"
    })
  } 

  return (
    <div>
      <button onClick={disminuir} >Reducir</button>
        {state.count}
      <button onClick={aumentar}>Aumentar</button>
    </div>
  )
}
