import React from 'react';
import './login.css';

function Login(){
    return(
        <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
        <div className="text-center">
            
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold ">Login</h1> 
        </div>
        
           
        
        <input type="email" class="form-control my-2" id="floatingInput" placeholder="name@example.com" />
        <input type="password" id="inputPassword" class="form-control my-2"  placeholder="Password" />
           
        <di className="msg-login text-white text-center my-5">
            <span><strong>WoW</strong>You're connected!!</span>    
        </di>        
        <button className="w-100 btn btn-lg btn-block btn-login" type="submit">Sign in</button>
        <div className="login-options mt-5">
            <a href="#" className="mx-2">Forgot Password</a>
            <span className="text-white">&#9733;</span>
            <a href="#" className="mx-2">Sign Up</a>
        </div>
        
        </form>
        </div>
    )
}
export default Login;