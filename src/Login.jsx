import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Contexts/AuthProvider";


const Login = () => {


    const {loginUser} = useContext(AuthContext) // context theke eibhabe data ante hoe
    
    const navigate = useNavigate() 




    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)

        // signin/ login
        loginUser(email,password)
        .then((result) => {
            console.log(result)

            navigate('/')   // amar jokhon e login kora shesh sathe sathe ami home page e chole jabo //ami chaile onno kothao jete pari just path change korlei hobe
        })
        .catch(error => {
            console.log("Error ashce ", error.message)
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-7 py-7">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New to this to website? Please <Link className="underline" to="/signup">SignUp</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;