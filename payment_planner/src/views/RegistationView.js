import React, { useState } from "react";
import MainBackground from "../components/img/Mainbackgroud";
import { ChakraProvider, Input, InputGroup, InputRightElement, Button, Flex } from '@chakra-ui/react'


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
            <label>
               Repeat password
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
            <Flex justifyContent="end">
             <Button colorScheme='teal' px={8} m={4} borderRadius='0px'>Save</Button>
            </Flex>
            </ChakraProvider>

        </MainBackground>
    )
}

export default RegistationView