import React from "react";
import styled from "styled-components";
import background from "./background.jpg"

const Background = styled.div`
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
 z-index: -1;
`

const MainBackground = () => (
    <Background></Background>
)

export default MainBackground