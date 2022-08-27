import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Sidebar/>
        <Chat/>
    </div>
  );
}

export default App;
