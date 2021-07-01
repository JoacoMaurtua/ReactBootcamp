import React from 'react'

export default function MessageDisplay({displayMessage}) {
  return (
    <div>
      <h1>Current Message</h1>
      <p>{displayMessage}</p>
    </div>
  )
}
