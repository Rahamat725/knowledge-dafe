import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import { useEffect, useState } from 'react'

function App() {
const [blogs, setBlogs] = useState([]);

useEffect(()=>{
  fetch('blogs.json')
  .then(res=>res.json())
  .then(data=>setBlogs(data))
},[])

  return (
    <>
     <h2>Data: {blogs.length}</h2>
      <Header></Header>
      <Blogs></Blogs>
      
    </>
  )
}

export default App
