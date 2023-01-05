import React, { useState, useEffect } from "react";
import { auth } from "../util/firebase";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider, AuthProvider } from "firebase/auth"
import Router from "next/router";

import GoogleIcon from "../assets/icon/google";
import GithubIcon from "../assets/icon/github";
import TwitterIcon from "../assets/icon/twitter";

export default function Auth() {
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
		  if (user) {
			Router.push('/')
		  }
		});
		return () => unsubscribe();
	 }, []);

	const handleGoogleLogin = (provider: AuthProvider) => {
	signInWithPopup(auth, provider)
	.then((result) => {
			Router.push('/')
		})
		.catch((error) => {
			setFlag(true)
		});
    };

	 useEffect(() => {
		const timeout = setTimeout(() => {
		  setFlag(false);
		}, 10000);
  
		return () => clearTimeout(timeout);
	 }, [flag]);

    return (
		<div className="auth">
			<div className="h-full from-green-400 w-full py-16 px-4 ">
            <div className="flex flex-col items-center justify-center">
                
                <div className="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-3xl font-extrabold leading-6 text-gray-800 title-auth">
                        Login Here
                    </p>
						  <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Pick your login option below
                    </p>
                    <button aria-label="Continue with google" onClick={() => {
							handleGoogleLogin(new GoogleAuthProvider())
						  }} role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-6">
							<GoogleIcon/>
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                    <button aria-label="Continue with github" onClick={() => {
							handleGoogleLogin(new GithubAuthProvider())
						  }} role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-3">
							<GithubIcon/>
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                    </button>
                    <button aria-label="Continue with twitter" onClick={() => {
							handleGoogleLogin(new TwitterAuthProvider())
						  }} role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-3">
							<TwitterIcon/>
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
                    </button>
						  <p className={flag ? "text-sm mt-5 font-medium leading-none text-red-500" : "hidden"}>
                        Login failed, please try again.
                    </p>
                </div>
            </div>
        </div>
		</div>
    );
  }
  