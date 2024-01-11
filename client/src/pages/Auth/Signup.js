import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Signup = ({setProgress}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //google login functionality
  const onLoginSuccess=(res)=>{
    const user=jwtDecode(res.credential)
    localStorage.setItem('user', JSON.stringify(user));
    setTimeout(() => {
      navigate('/')
    }, 1000);
    console.log(user);
    
  }
  //error login functionality
  const onLoginError=(err)=>{
    console.log(err);
  }
  useEffect((() =>{
    setProgress(40);
    setTimeout(()=>{
      setProgress(100)
    },200)
    
  }),[setProgress,dispatch])
  
  return (
    <>
      <div className='loginContainer'>
        <div className='loginBox'>
          <h1>Create Your Account</h1>
          <p>Already have an Account? <span><Link to='/login'>Sign in</Link></span></p>
          <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={onLoginError}
          />
          <p>Continue without sign up? <span><Link to='signup?'>Explore</Link></span></p>
          </div>
  
      </div>
    </>
  )
}

export default Signup