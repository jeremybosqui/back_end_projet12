import React from "react";
import iconMeditation from "../Assets/Yoga.svg";
import iconBike from "../Assets/Cycliste.svg";
import iconSwiming from "../Assets/iconSwiming.svg";
import iconDumbBell from "../Assets/Dumbels.svg";
import {NavLink} from "react-router-dom";
import { Container, Nav, Wrapper, NavText } from "../Style/Side_Bar";

export default function SideBar() {

  return  (
    <Container>
      <Nav>
        <Wrapper>
          {/*<div>
            <Link className="LocationLinks" to={"/user/"+props.location.id+"/performance"}>
              {iconMeditation}
            </Link>
          </div>*/}
          <NavLink to={"/profil/user/12"}>
            <img src={iconMeditation} alt={"icon_mediation"}/>
          </NavLink>
          <NavLink to={"/user/12/performance"}>
            <img src={iconBike} alt={"icon_bike"}/>
          </NavLink>
          <NavLink to={"user/12/activity"}>
            <img src={iconSwiming} alt={"icon_swim"}/>
          </NavLink>
          <NavLink to={"user/12/session"}>
            <img src={iconDumbBell} alt={"icon_dumbbell"}/>
          </NavLink>
        </Wrapper>
        <NavText>Copyright, SportSee 2020</NavText>
      </Nav>
    </Container>
  )
}


