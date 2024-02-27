import './registration.css'
import { useRef, useState } from 'react'
import 



function Registration() {
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, setError] = useState('');
    function handleClick(e) {
        e.preventDefault();

        const user = {
            username: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        fetch("https://auth-rg69.onrender.com/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  .then((response) => response.json())
  .then((data) => {
    if(data.message === "Failed! Username is already in use!"){
        setError('username', data.message);
    }else if(data.message === "Failed! Email is already in use!") {
        setError('email', data.message);
    }else if (data.message === "User registered successfully!") {

    }
  })
  .catch((error) => console.log(error))
    }
  return (
    <div className="container">
    <form className="form">
      <h1 className="title">Registration</h1>
      <div className="input-control">
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          ref={userNameRef}
        />
        <div className="error"></div>
      </div>
      <div className="input-control">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          ref={emailRef}
        />
        <div className ="error"></div>
      </div>
      <div className="input-control">
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          name="password"
          placeholder="Password must be at least 6 characters"
          ref={passwordRef}
        />
        <div className="error"></div>
      </div>
      <div className="input-control">
        <label htmlFor="password2">Confirm password*</label>
        <input
          type="password"
          name="password2"
          placeholder="Confirm your password"
        />
        <div className="error"></div>
      </div>
      <button onClick={handleClick} className="btn">Sign Up</button>
      <a href="./login.html">Login</a>
    </form>
    
  </div>
  )
}

export default Registration