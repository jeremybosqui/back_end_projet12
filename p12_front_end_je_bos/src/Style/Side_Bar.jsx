import styled from "styled-components";

const Container = styled.div`
  margin: 0;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 117px;
  height: 860px;
  background: #020203;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.25);
`;
const Wrapper = styled.div`
  display: flex;
  margin: 200px 25px 25px 25px ;
  flex-direction: column;
  a {
    display: flex;
    box-shadow: 2px 2px 2px 1px red;
    border-radius: 7px;
    height: 64px;
    width: 64px;
    margin-bottom: 20px;
  }
`;

const NavText = styled.p`
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
  font-weight: 500;
  margin: 55px;
  font-size: 15px;
  color: white;
`;

export {Container, Nav, Wrapper, NavText }