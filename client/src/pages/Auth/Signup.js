import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = ({ setProgress }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "", lastName: "", email: "", password: "", phone: "", address: "",answer:""
  })

  useEffect((() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100)
    }, 200)

  }), [setProgress])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/signup`, {
        first_name:userData.firstName,
        last_name:userData.lastName,
        email:userData.email,
        password:userData.password,
        phone:userData.phone,
        address:userData.address,
        answer:userData.answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
     
      <div className='loginContainer'>
        <div className='loginBox'>
          <div className="container">
            <div className="title">Registration</div>
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">First Name</span>
                    <input type="text" placeholder="Enter your first name" name="firstName" value={userData.firstName} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">last name</span>
                    <input type="text" placeholder="Enter your last name" name="lastName" value={userData.lastName} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="email" placeholder="Enter your email" name="email" value={userData.email} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="password" placeholder="Enter your password" name="password" value={userData.password} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input type="phone" placeholder="Enter your number" name="phone" value={userData.phone} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Address</span>
                    <input type="text" placeholder="Enter your Address" name="address" value={userData.address} onChange={handleInput} required />
                  </div>
                  <div className="input-box">
                    <span className="details">What is your favourite game?</span>
                    <input type="text" placeholder="Enter your answer" name="answer" value={userData.answer} onChange={handleInput} required />
                  </div>

                </div>

                <div className="button">
                  <input type="submit" value="Register" />
                </div>
              </form>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default Signup

