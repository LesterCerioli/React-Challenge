import React from 'react';

function Login(){
    return(
        <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
        <div className="text-center">
            
            <h1 className="h3 mb-3 font-weight-normal">Login</h1> 
        </div>
        

        <div className="form-label-group">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            
        </div>
    
        <div className="form-label-group">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            
        </div>

        
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2021–Lucas Technology Services</p>
        
        </form>
        </div>
    )
}
export default Login;