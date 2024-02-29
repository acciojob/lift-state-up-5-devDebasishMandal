import React,{useState} from 'react';
import Child from './Child';
const Parent = () => {


const[isLoggedIn,setIsLoggedIn]=useState(false);



  return (
    <div>
<Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default Parent