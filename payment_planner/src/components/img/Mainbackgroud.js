import React, { useState } from "react";
import styled from "styled-components";
import background from "./components/img/background.jpg"

const Background = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  background-image: url(${background});
`

const MainBackground = () => (
    <Background/>
)

export default MainBackground