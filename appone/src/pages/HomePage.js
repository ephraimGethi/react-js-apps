import React from 'react'
import { useEffect,useState,useContext } from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
  let [note,setNote] = useState([])
  let {authTokens,logoutUser} = useContext(AuthContext)
  useEffect(()=>{
    getNotes()
  },[])
  let getNotes = async ()=>{
    let response = await fetch('http://127.0.0.1:8000/api/notes/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + String(authTokens.access)
      }
    })
    let data =await response.json()
    if (response.status===200){
      setNote(data)
    }else if(response.statusText ==='Unauthorized'){
      logoutUser()
    }
    console.log(response)
  }
  return (
    <div><p>You are Logged in to the HomePage</p>
    <ul>
      {note.map(notes=>(
        <li key={notes.id}>{notes.body}</li>
      ))}
    </ul>
    </div>
  )
}

export default HomePage