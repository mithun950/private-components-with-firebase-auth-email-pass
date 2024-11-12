import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Contexts/AuthProvider";


const SignUP = () => {

    const {createUser} = useContext(AuthContext); // ei bhabe context theke value anlam
    // const [user, setUser] = useState();


    const navigate = useNavigate();

     const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    

        createUser(email,password)
        .then((result) => {
            console.log(result.user)
            navigate('/')  // amar signup success holei ami sathe sathe home page a chole ashbo tar jonno use kora hoise
        })
        .catch(error => {
            console.log("Error ashce", error)
        })

     }



    return (
        <div className="hero bg-base-200 ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">SignUp now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-6 px-7">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" name="name" required />
              </div>
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p>New to this to website? Please <Link className="underline" to="/Login">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUP;