import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase-init";



export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true) 
 
    // signup er jonno 

    const createUser = (email,password) => {
        setLoading(true)  //jokn create kora shesh tokon loading hobe ektu
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    
    // login er jonno
      const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

      
      const signOutUser = () => {
        return signOut(auth);
      }



      useEffect(() => {
        onAuthStateChanged(auth,(currentUser) => {
            if(currentUser){
                console.log('currently logged',currentUser)
                setUser(currentUser);
                setLoading(false)
            }
            else{
               console.log('no user login')
               setUser(null)
            }
        })
        
         return () => {
            unSubscribe()
         }
        
      })


    const authInfo ={
       createUser,
       loginUser,
       signOutUser,
       user,
       loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;