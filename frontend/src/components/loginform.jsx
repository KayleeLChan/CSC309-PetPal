import React from 'react';

function LoginForm(props) {

        function handleSubmit(event) {
          event.preventDefault();
          props.handle_login(event);
        }

  return (
      <form className="w-100 align-items-center" onSubmit={handleSubmit}>
        <h1 className="text-primary-cream">Welcome Back!</h1>
        <div className="form-group row text-primary-cream">
          <label className="row-form-label h5" htmlFor="username">Username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control bg-primary-cream font-plain" id="username" name="username" placeholder="username123" required />
          </div>
        </div> 
        <div className="form-group row text-primary-cream">
          <label className="row-form-label h5" htmlFor="password">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control bg-primary-cream font-plain" id="password" name="password" required />
          </div>
        </div>
        <p class="smallpar">{props.error}</p>
        <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Login</button>
            <div className="signupcontainer">
                  <p className="h6 font-plain text-primary-cream">Don't have an account?</p>
                  <button type="button" className="btn btn-lg btn-primary-cream m-3 shadow-sm">Sign Up</button>
            </div>
      </form> 
  );
}

export default LoginForm;



