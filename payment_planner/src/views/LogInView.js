import React, { useState } from "react";
import MainBackground from "../components/img/Mainbackgroud";
import { ChakraProvider, Input, InputGroup, InputRightElement, Button, Flex, Center, Heading, Box } from '@chakra-ui/react'


const LogInView = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return(
      
      <ChakraProvider>
      <MainBackground/>
       
      <Center>
    <Heading mb={4}>Login</Heading>
</Center>
      <Center>
      <Box bg='white' borderRadius="5px" w='40%' p={4}>


       <Input type="email" placeholder='your@address.com' 
       colorScheme="teal"
       focusBorderColor="teal"
       color='gray'
       
       />
     
   <InputGroup size='md' my={6}>
   <Input
     pr='4.5rem'
     type={show ? 'text' : 'password'}
     placeholder='Enter password'
     colorScheme="teal"
     focusBorderColor="teal"
     color='gray'
   />
   <InputRightElement width='4.5rem'>
     <Button colorScheme='teal' borderStartRadius='2px' onClick={handleClick}>
       {show ? 'Hide' : 'Show'}
     </Button>
   </InputRightElement>
 </InputGroup>
 
   <Flex justifyContent="end">
    <Button colorScheme='pink' px={8} m={4} borderRadius='0px'>Save</Button>
   </Flex>
   </Box>
   </Center>

   </ChakraProvider>

    )
}

export default LogInView