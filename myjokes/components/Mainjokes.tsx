'use client'

import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

const Mainjokes = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
     
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?amount=20');
        console.log(response.data);
        setPosts(response.data.jokes);
      } catch (error) {
    
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (

    <div>
      <div className="flex justify-center items-center m-7">
        <h1 className="	font-style: italic; font-bold">My Jokes</h1>
      </div>

      <div>
        <div>
        <form className="max-w-md mx-auto">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Jokes..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        </div>

        <div>
        <div className="flex justify-center items-center m-4">

            <div className="p-5 max-w-sm bg-white rounded-lg shadow-md text-center">
              {posts.map((post) => {
                return (
                  <div key={post.id}>
                    <h2 className="text-lg font-semibold">{post.setup}</h2>
                    <p className="mt-2 text-gray-600">{post.delivery}</p>
                  </div>
                );
              })}
            </div>
        </div>



        </div>
      </div>
      
    </div>
  )
}

export default Mainjokes