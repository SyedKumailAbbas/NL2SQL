import React, { useState } from 'react';
import SignIn from '../Components/Signin';
import SignUp from '../Components/Signup';

export const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
    setShowSignUp(false);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowSignIn(false);
  };

  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-400 to-indigo-400 overflow-hidden">
          <div className="py-20">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-8 text-shadow">English to SQL</h1>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto text-shadow">
                Translate English phrases into SQL queries with ease! This tool allows you to effortlessly convert natural language queries into structured SQL statements. Say goodbye to manual translation and hello to simplified database interactions. Whether you're a seasoned developer or just starting out, our intuitive interface makes database querying a breeze.
              </p>
              <div className="mt-10 flex justify-center">
                <button className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-3 px-8 rounded-full mr-4 transition duration-300 shadow-md" onClick={toggleSignIn}>Sign In</button>
                <button className="bg-indigo-600 text-white hover:bg-purple-700 font-bold py-3 px-8 rounded-full transition duration-300 shadow-md" onClick={toggleSignUp}>Sign Up</button>
              </div>
            </div>
            {showSignIn && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <SignIn onClose={() => setShowSignIn(false)} />
              </div>
            )}
            {showSignUp && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <SignUp onClose={() => setShowSignUp(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

