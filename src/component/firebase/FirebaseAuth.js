import React from 'react'
import { useState } from 'react'
import {auth} from './Firebase'

const FirebaseAuth = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [user, setUser] = useState('')

  let create = async() => {
    let res = await auth.createUserWithEmailAndPassword(email, password)
    console.log(res)
  }


  return (
    <>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={create}>Create</button>
      </div>
    </>
  )
}

export default FirebaseAuth


