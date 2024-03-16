import React, { useEffect, useRef, useState } from "react";

function Auth({ children }) {
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(()=>{
    let val  = localStorage.getItem("isUserAuthenticated");
    if(val){
        setAuthCheck(true);
    }
  },[])

  function handleLoginCheck(){
    setAuthCheck(true);
  }
  return <>{authCheck ? children : <Login onLogin={handleLoginCheck} />}</>;
}

function Login({onLogin}) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    let userName = usernameRef.current.value;
    let password = passwordRef.current.value;

    if (userName === "admin" && password === "admin") {
      console.log("Logged In");
      onLogin();
      localStorage.setItem("isUserAuthenticated", true);
    } else {
      alert("Invalid Username or Password");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center">Please Log In</h2>
        <div className="text-center border-2 border-black w-fit p-2">
          <form onSubmit={handleSubmit}>
            Username:
            <br />
            <input
              className="bg-slate-100"
              ref={usernameRef}
              type="text"
              name="username"
              placeholder="admin"
            />
            <br />
            Password:
            <br />
            <input
              className="bg-slate-100"
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="admin"
            />
            <br />
            <button type="submit" className="bg-black text-white p-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Auth;
