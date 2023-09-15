import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
// import { useEffect, useState } from 'react'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
const [bookmarks,setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);
const handleBookmark = (blog) =>{
 const newBookmarks = [...bookmarks,blog];
 setBookmarks(newBookmarks);
}

const handleReadingTime = time =>{
 const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
}

  return (
    <>
     {/* <h2>Data: {blogs.length}</h2> */}
      <Header></Header>
     <div className='md:flex gap-4 justify-between max-w-7xl mx-auto'>
     <Blogs 
     handleReadingTime={handleReadingTime}
     handleBookmark={handleBookmark}></Blogs>
     <Bookmarks key={bookmarks.id} readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
