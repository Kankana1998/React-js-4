import { useState } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import './App.css'
import { Outlet } from 'react-router-dom';



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
