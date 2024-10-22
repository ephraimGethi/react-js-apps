import { Link } from "react-router-dom"

let getDate = (note)=>{
    return new Date(note.created_at).toLocaleDateString()
}

let getTitle = (note)=>{
    const title = note.content.split('\n')[0]
    if (title.length > 45){
        return title.slice(0,45)
    }
    return title
}
const ListItem = ({note})=>{


    return(
        <div>
            <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
            <p>{note.title}</p>
            <p>{getTitle(note)}</p>
            <p>{getDate(note)}</p>
            </div>
            </Link>
        </div>
    )
}
export default ListItem