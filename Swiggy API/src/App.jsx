import { useEffect, useState } from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import {Provider}  from 'react-redux';
import appStore from './utils/appStore';
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
    <Provider store={appStore}>
       <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo}}>
     <Header />
     <Outlet />
    </UserContext.Provider>
  
    </Provider>
   
  );
};



export default App
