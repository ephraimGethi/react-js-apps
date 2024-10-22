import { Link } from "react-router-dom"


function NotFoundPage(){
    return(
        <div>
            <h1>please navigate back to the home page</h1>
            <Link to={'/'}>home page</Link>
        </div>
    )
}
export default NotFoundPage