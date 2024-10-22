import { createContext,useEffect,useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) =>{

    // localStorage.getItem('authtokens')
    let [user,setUser] = useState(()=>localStorage.getItem('authtokens') ? jwtDecode(localStorage.getItem('authtokens')):null)
    let [authTokens,setAuthTokens] = useState(()=>localStorage.getItem('authtokens') ? JSON.parse(localStorage.getItem('authtokens')):null)
    let [loading,setLoading] = useState(true)
    const navigate = useNavigate()

    let loginUser = async (e)=>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
        })
        let data = await response.json()
        console.log(jwtDecode(data.access))
        if (data.access){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authtokens',JSON.stringify(data))
            navigate('/')
        }else{
            alert('something went wrong')
        }
       
    }

    let updateToken = async ()=>{
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens.refresh})
        })
        let data = await response.json()
        if (data.access){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authtokens',JSON.stringify(data))
        }else{
            logoutUser()
        }
}

    let logoutUser =()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authtokens')
            navigate('/login')
    }
    let contextData = {
        loginUser:loginUser,
        user:user,
        logoutUser:logoutUser,
        authTokens:authTokens
    }
    useEffect(()=>{
        let fourminutes = 1000*60*4
        let interval = setInterval(() => {
            if(authTokens){
                updateToken()
            }
        }, fourminutes);
        return ()=>clearInterval(interval)
    },[authTokens,loading])
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}