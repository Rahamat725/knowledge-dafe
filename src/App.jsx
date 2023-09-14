import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
// import { useEffect, useState } from 'react'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {


  return (
    <>
     {/* <h2>Data: {blogs.length}</h2> */}
      <Header></Header>
     <div className='md:flex justify-between'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
      
    </>
  )
}

export default App
