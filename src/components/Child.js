import React,{useState} from 'react'

const Child = ({setIsLoggedIn,isLoggedIn}) => {

const [user,setUser]=useState({
    name:"",
    password:""
});

function handleuser(e){
e.preventDefault();
// console.log(user);
if(user.name && user.password){
    setIsLoggedIn(true);

}


}

  return (
    <div>
     
     {
        isLoggedIn ? (<p>You are Logged in!</p>) : (<form>
        username:<input type="text" onChange={(e)=>{
           setUser({...user,name:e.target.value}) 
        }} name="username"/><br/>
        password:<input type="password" onChange={(e)=>{
           setUser({...user,password:e.target.value}) 
        }} name="password"  /> <br/>
        <button onClick={handleuser}>Login</button>
     </form> )
     }
    </div>
  )
}

export default Child