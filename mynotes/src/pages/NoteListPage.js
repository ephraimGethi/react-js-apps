
import ListItem from "../components/ListItem"
import { useState,useEffect } from "react"
import AddButton from "../components/AddButton"


const NoteListPage = ()=>{
    let [notes,setNotes] = useState([])
    useEffect(()=>{
        getNotes()  
    },[])

    let getNotes = async () =>{
        let response = await fetch('http://127.0.0.1:8000/api/notes/')
        let data = await response.json()
        setNotes(data)
    }
    return(
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">notes app</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className="notes-list">
            {notes.map((note,index)=>(
                <ListItem key={index} note = {note}/>
            ))}
            </div>
            <AddButton/>
        </div>
    )
}
export default NoteListPage