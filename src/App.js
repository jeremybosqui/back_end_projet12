import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Utils/Header";
import Home from "./Pages/Home_User";
import Error from "./Pages/Error_404";
import User from "./Pages/User_Dashboard";
import PerformPage from "./Pages/Perform_Page_User";
import Profiles from "./Pages/Profiles";




export default function App() {

  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route exact={true} path="/profil" element={<Profiles />} />
        <Route exact={true} path="/profil/user/:id/" element={<User />} />
        <Route exact={true} path="/user/:id/" element={<User />} />
        <Route exact={true} path="user/:id/performance" element={<PerformPage />} />
        <Route exact={true} path="/profil/user/:id/performance" element={<PerformPage />} />
        <Route path="*" element={<Error />} />


    </Routes>
  </BrowserRouter>
  )
}


