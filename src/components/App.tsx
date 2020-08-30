import React from 'react';
import Navbar from "./smallComponents/Navbar"
import Header from "./smallComponents/Header"
import QuizMain from "./smallComponents/QuizMain"
import {requestPermission} from "../firebaseService/firebaseService"
function App() {

  return (

    <div>

      <Navbar />
      <button onClick={requestPermission}>Get Notification</button>
      <Header />
      <QuizMain />
    </div>
  );
}

export default App;
