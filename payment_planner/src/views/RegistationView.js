import React, { useState } from "react";
import styled from "styled-components";
import background from "./components/img/background.jpg"
import { ChakraProvider, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const MainBackground = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  background-image: url(${background});
`

const RegistationView = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
      
    return(
        <MainBackground>
            <ChakraProvider>
                <label>
                Email address
                <Input type="email" placeholder='example@address.com' />
                </label>
            <label>
                Password
            <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

            </label>
            
            </ChakraProvider>

        </MainBackground>
    )
}

export default RegistationView