import React from "react";
import MainBackground from "./components/img/Mainbackgroud";
import RegistationView from "./views/RegistationView";
import LogInView from "./views/LogInView"
import { SunIcon } from '@chakra-ui/icons'
import { ChakraProvider, Checkbox, Button, Flex, Heading, Center } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'


function App() {
  return (
    
   
     
    <ChakraProvider>
       <MainBackground/>
       <LogInView/>
       <RegistationView/>
      <Center>
    <TableContainer w='80%'>
    <Flex justifyContent="end">
    
    <Button colorScheme='teal' rightIcon={<SunIcon/>} m={4} borderRadius='0px'>Login</Button>

  </Flex>
  <Center>
    <Heading mb={4}>Monthly payment planner</Heading>
  </Center>
    
  <Center>
  <Table size="lg" variant='striped' colorScheme='cyan' w='60%'>
    
    <Thead>
      <Tr>
        <Th>Day to pay due bills</Th>
        <Th>Bills</Th>
        <Th>Jan</Th>
        <Th>Feb</Th>
        <Th>Mar</Th>
        <Th>Apr</Th>
        <Th>May</Th>
        <Th>Jun</Th>
        <Th>Jul</Th>
        <Th>Aug</Th>
        <Th>Sep</Th>
        <Th>Oct</Th>
        <Th>Nov</Th>
        <Th>Dec</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td color="gray" fontWeight='bold'>10</Td>
        <Td color="gray" fontWeight='bold'>Czynsz</Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
        <Td ><Checkbox colorScheme="teal" borderColor="teal"/></Td>
      </Tr>
    </Tbody>
  </Table>
  </Center>
  <Flex justifyContent="end">
    <Button colorScheme='teal' px={8} m={4} borderRadius='0px'>Save</Button>
  </Flex>
</TableContainer>
</Center>

</ChakraProvider>

  );
}

export default App;
