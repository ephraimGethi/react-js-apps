import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
  return (
    <div>
        <form onSubmit={loginUser}>
            <input type='text' name='username' placeholder='enter your username here'/>
            <input type='password' name='password' placeholder='enter your password here'/>
            <input type='submit'/>
        </form>
    </div>
  )
}
export default LoginPage