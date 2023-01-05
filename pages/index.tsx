import React, {useEffect} from "react"
import Chat from "../components/Chat";
import Router from "next/router";
import { auth } from '../util/firebase';

export default function Home() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // User is logged in, redirect to desired page
        Router.push('/login');
      }
    });
    return () => unsubscribe();
  }, []);

  return (    
    <>
      <Chat />
    </>
  )
}
