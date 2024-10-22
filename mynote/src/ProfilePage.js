import { useParams } from "react-router-dom"

function ProfilePage(){
    const params = useParams() 
    return(
        <div>
            
            <h2>Profile Page {params.profileId}</h2>
        </div>
    )
}

export default ProfilePage