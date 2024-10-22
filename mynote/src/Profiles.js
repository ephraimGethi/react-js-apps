import { Link,Outlet } from "react-router-dom";

let Profiles = ()=>{
    const profiles =[1,2,3,4,5,6,7];
    return(
        <div>
            {profiles.map((profile)=>
            <Link key={profile} to={`/profiles/${profile}/`}>profile {profile}</Link>
            )}
            <Outlet/>
        </div>
        
    )
}
export default Profiles