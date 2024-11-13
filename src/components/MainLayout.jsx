import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase.init";
import Navbar from "./Navbar";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

const MainLayout = () => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  const handleGoogle = () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((res) => setUser(res.user))
      .catch((err) => setUser(err.message));
  };

  const handleLogut = () => {
    setLoading(true)
    signOut(auth).then((res) => setUser(res));
  };

  const handleSignUp =(email,password)=>{
    setLoading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then((res) => console.log(res.user))
    .catch((err) => setUser(err.message));
  }
  const handleSignIn =(email,password)=>{
    setLoading(true)
    signInWithEmailAndPassword(auth,email,password)
    .then((res) => console.log(res.user))
    .catch((err) => setUser(err.message));
  }

  useEffect(() => {
    console.log("userState", user);
  }, [user]);

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);

      } else {
        setUser(null)
      }
      setLoading(false)
    });
    return () => {
      unsubsribe();
    };
  }, []);

  const authData = {
    handleGoogle,
    user,
    setUser,
    handleLogut,
    handleSignUp,
    handleSignIn,
    loading
  };
  return (
    <div>
      <authContext.Provider value={authData}>
        I am MainLayout
        <Navbar></Navbar>
        <Outlet />
      </authContext.Provider>
    </div>
  );
};

export default MainLayout;
