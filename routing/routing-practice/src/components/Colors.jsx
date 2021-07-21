import React from 'react'
import { useParams } from 'react-router-dom'

export default function Colors() {

  const {id,color1,color2} = useParams();

  return (
    <div>
      <h1 style={{color:color1,background:color2,padding:"18px 28px"}}>{id}</h1>
    </div>
  )
}
