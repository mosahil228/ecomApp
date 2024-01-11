import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';


const Login = ({setProgress}) => {
 
  useEffect((() =>{
    setProgress(40);
    setTimeout(()=>{
      setProgress(100)
    },200)
    
  }),[setProgress])
  


  return (
    <>
      <div className='loginContainer'>
        <div className='loginBox'>
          <h1>Sign In To Your Account</h1>
          <p>Don't have an Account? <span><Link to='/signup'>Sign Up</Link></span></p>
          
          <p>Continue without sign in? <span><Link to='signup?'>Explore</Link></span></p>
          </div>
  
      </div>
    </>
  )
}

export default Login