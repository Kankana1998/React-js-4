import { useEffect, useState } from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
//import './App.css'

function App() {

  const [resList, setresList] = useState("");
  
  //Authentication
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    //Make an API call and send username ana password
    const data = {
      name: "Kankana Nath",
    };
    setUserInfo(data.name);
  }, []);

  const styleCard = {
    backgroundColor: "#f0f0f0",
  }
  


  return (
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo}}>
     <Header />
     <Outlet />
    </UserContext.Provider>
  
  );
};



export default App
