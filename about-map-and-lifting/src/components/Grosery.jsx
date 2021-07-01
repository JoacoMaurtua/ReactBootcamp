import React from 'react'

export default function Grosery(props) {

  const {groseryList} = props;
  const lista = groseryList.map((item,index) => (<li key={index}>{ item }</li>))
  
  return (
    <div>
      <ul>
        {lista} {/* groseryList.map((item,index) => (<li key={index}>{ item }</li>) */}
      </ul>   
    </div>
  )
}
