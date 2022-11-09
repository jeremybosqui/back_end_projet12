import React from "react";
import {Head, Nav}  from "../Style/headerStyle";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.svg";


export default function Header() {
    
  return (
    <Head>
        <title>Accueil</title>
      <img src={logo} alt="sportSee" aria-label="logo sportSee" />
      <Nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/profil">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </Nav>
    </Head>
  );
};

