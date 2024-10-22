import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom';

const NotePage = ()=>{
    const navigate = useNavigate()
    let {id} = useParams()
    // let note = notes.find(note=>note.id === Number(id))

    let [note,setNote] = useState(null)
    useEffect(()=>{
        getNote()
    },[id])

    let getNote = async () =>{
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }
    let updateNote = async ()=>{
        await fetch(`http://127.0.0.1:8000/api/notes/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(note)
        }
        )
    }

    let createNote = async ()=>{
        await fetch(`http://127.0.0.1:8000/api/notes/`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(note)
        }
        )
    }

    let deleteNote = async ()=>{
        await fetch(`http://127.0.0.1:8000/api/notes/delete/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
            }
            )
           navigate('/') 
    }

    let handleSubmit = ()=>{
        if (id !== 'new' && !note.content){
            deleteNote()
        }else if(id === 'new' && note !== null){
            createNote()
        }else{
            updateNote() 
    }}
    return(
        <div className="note">
            <div className="note-header">
            <h3>
                <Link to={'/'}>
                <ArrowLeft onClick={handleSubmit}/>
                </Link>
            </h3>
            {id !== 'new' ? (<button onClick={deleteNote}>Delete</button>):
             (<button onClick={handleSubmit}>Done</button>)}
           
            </div>
            <textarea value={note?.content} onChange={(e)=>{setNote({...note,'content':e.target.value})}}></textarea>
        </div>
    )
}
export default NotePage