import React from "react";
import iconMeditation from "../Assets/Yoga.svg";
import iconBike from "../Assets/Cycliste.svg";
import iconSwiming from "../Assets/iconSwiming.svg";
import iconDumbBell from "../Assets/Dumbels.svg";
import {Link} from "react-router-dom";
import { Container, Nav, Wrapper, NavText } from "../Style/sideBarStyle";

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
          <Link to={"/"}>
            <img src={iconMeditation} alt={"icon_mediation"}/>
          </Link>
          <Link to={"/user/12/performance"}>
            <img src={iconBike} alt={"icon_bike"}/>
          </Link>
          <Link to={"user/12/activity"}>
            <img src={iconSwiming} alt={"icon_swim"}/>
          </Link>
          <Link to={"user/12/session"}>
            <img src={iconDumbBell} alt={"icon_dumbbell"}/>
          </Link>
        </Wrapper>
        <NavText>Copyright, SportSee 2020</NavText>
      </Nav>
    </Container>
  )
}


