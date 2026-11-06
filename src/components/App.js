import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import './../styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div id="main">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
