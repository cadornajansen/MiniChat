import React, { useState, useEffect } from "react";
import { firebaseApp } from "../util/firebase";


export default function Chat() {
   return  (
   <div className="flex items-center justify-center md:h-screen lg:h-screen">
      <div className="relative chat-card h-full sm:w-full md:1/2 lg:w-1/2 bg-white shadow rounded-lg">

         <div className="chat-heading py-5 px-6 lg:rounded-lg md:rounded-lg shadow-lg bg-[#F38D18]">
            <h1 className="text-white text-2xl">Chat</h1>
         </div>

         <div className="chat-body p-4">

            <div className="chat-message text-right justify-end flex items-start mb-5">
               <div className="chat-message-inner">
                  <div className="chat-message-content bg-[#e8e8e8] py-2 px-2">
                     <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                  </div>
               </div>
               
               <div className="sm:hidden  user-avatar ml-2 sm:hidden md:block lg:block">
                  <img src="https://i.pravatar.cc/150?img=1" alt="User Avatar" className="rounded-full max-w-10 max-h-10" />
               </div>
            </div>

            <div className="chat-message justify-start flex items-start">
               <div className="user-avatar mr-2 sm:hidden md:block lg:block">
                  <img src="https://i.pravatar.cc/150?img=2" alt="User Avatar" className="rounded-full w-10 h-10" />
               </div>
               <div className="chat-message-inner">
                  <div className="chat-message-content bg-[#e8e8e8] py-2 px-2">
                     <p className="text-sm text-gray-600">hello</p>
                  </div>
               </div>
            </div>
         </div>


         <div className="absolute bottom-0 right-0 left-0 flex items-center chat-input rounded-b-lg">
            <input type="text" placeholder="Type your message..." />
            <button className="rounded-lg text-white bg-[#fa992a] text-md h-10 cursor-pointer hover:bg-[#f38d18] ease-in-out duration-300">Send</button>
         </div>

      </div>
   </div>   
   )
}
