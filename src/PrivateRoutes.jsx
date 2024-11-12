import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthProvider";
import { NavLink } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)
      if(user){
        return children;
      }

      if(loading){
        return <span className="loading loading-spinner text-success  mt-10"></span>
      }

    return (
        <div>
           <NavLink to="/login"></NavLink> //kichu na thakle login page e chole jabe
        </div>
    );
};

export default PrivateRoutes;