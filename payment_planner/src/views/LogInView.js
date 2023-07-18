import React from "react";
import styled from "styled-components";
import background from "./components/img/background.jpg"
import { ChakraProvider } from '@chakra-ui/react'

const MainBackground = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  background-image: url(${background});
`

const LogInView = () => {
    return(
        <MainBackground>
            <ChakraProvider>
                
            </ChakraProvider>

        </MainBackground>
    )
}

export default LogInView