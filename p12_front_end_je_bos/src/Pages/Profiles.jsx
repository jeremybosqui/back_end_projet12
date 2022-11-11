import React from "react";
import { NavLink } from "react-router-dom";
import { Main, Title, DivLink } from "../Style/homeStyle";
import avatarboy from "../Assets/AvatarBoy.png"
import avatargirl from "../Assets/AvatarGirl.png"

export default function Profiles (){

    return (
        <Main>
            <Title>Select USER</Title>
            <DivLink>
                <NavLink to={"user/12"}><img src={avatarboy} style={{width : "155px", marginRight:"-35px"}} alt={"avatar_karl"} className={"avatar"}/></NavLink> <NavLink to="user/12"> Karl </NavLink>
            </DivLink>
            <DivLink>
                <NavLink to={"user/18"}><img src={avatargirl} style={{width : "110px", marginLeft:"50px"}} alt={"avatar_cecilia"} className={"avatar"}/></NavLink>
                <NavLink to="user/18"> Cecilia </NavLink>
            </DivLink>
        </Main>
    )
}

