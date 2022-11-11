import styled from "styled-components";

const Main = styled.main`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15rem;
  a {
    margin-top: 1rem;
    display: block;
    font-size: 30px;
    color: red;
  }
`;

const DivLink = styled.div`
  display: flex;
  align-items: center;`

const Title = styled.h2`
  margin: 80px 0 50px 50px;
`;

export {Main, Title, DivLink}