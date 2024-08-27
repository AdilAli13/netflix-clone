import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100%]"
          src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224740-3441109.png"
        />
      </div>
      <form className=" w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <button className="p-4 my-6 w-full bg-red-600 rounded-lg cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          New to Netlfix? Sign Up now
        </p>
      </form>
    </div>
  );
};

export default Login;
