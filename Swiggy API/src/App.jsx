import { useState } from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
//import './App.css'

function App() {

  const [resList, setresList] = useState("");
  

  const styleCard = {
    backgroundColor: "#f0f0f0",
  }
  


  return (
    <>
     <Header />
     <Outlet />
    </>
   
    
  )
}



export default App
