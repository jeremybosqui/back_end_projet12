import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../Utils/Header";
import Home from "./Home_User";
import Error from "./Error_404";
import User from "./User_Dashboard";
import PerformPage from "./Perform_Page_User";
import Profiles from "./Profiles";




function Router() {

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

export default Router

