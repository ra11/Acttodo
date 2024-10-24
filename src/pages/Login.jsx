import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){
    const navigate=useNavigate()
    const[eusername,setEusername]=useState()
    const[epassword,setpassword]=useState()
    const[ruser,setRuser]=useState(true)

    
    const users=props.users
    function checkuser()
    {
        var userfound=false
        console.log(users)
        users.forEach(function(item)
        {
            if(item.username===eusername && item.password === epassword)
                {
                console.log("Login sucess")
                userfound=true
                navigate('/landing',{state:{user:eusername}})
            }
            
            if(userfound===false){
                console.log("Login failed")
                setRuser(false)
            }
        })
    }
    function handleUInput(evt){
        setEusername(evt.target.value)
    }
    function handlePInput(evt){
        setpassword(evt.target.value)
    }
    return(
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {ruser?<p>I will help you to manage your activities after Login :)</p>:<p className="text-red-500">Please Sign Up before you Login!</p>}
        
        <div className="flex flex-col gap-2 my-2">
            <input type="text"  onChange={handleUInput} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="UserName"></input>
            <input type="text"  onChange={handlePInput} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password"></input>
            <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
            <p>Dont have account kindly Signup?<Link to={"/signup"} className="underline">Sign Up</Link> </p>

        </div>
        </div>
    </div>
    )
}
export default Login