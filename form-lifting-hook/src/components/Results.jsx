import React from 'react'

export default function Results({data}) {

  const {firstName,lastName,email,password,confirPassword} = data

  return (
    <div>
      <h2>Your form data</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password:{password}</p>
      <p>Confirm password: {confirPassword}</p>

    </div>
  )
}
