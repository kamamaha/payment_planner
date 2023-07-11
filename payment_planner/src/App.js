import React from "react";
import styled from "styled-components";
import { SettingsIcon } from '@chakra-ui/icons'
import { ChakraProvider, Checkbox, Button, Flex } from '@chakra-ui/react'
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
    <TableContainer>
    <Flex justifyContent="end">
    <Button colorScheme='blue'>Login<SettingsIcon/></Button>
  </Flex>
  <Table variant='striped' colorScheme='teal'>
    
    <Thead>
      <Tr>
        <Th>Date to pay due bills</Th>
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
        <Td>10</Td>
        <Td>Czynsz</Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
        <Td ><Checkbox isInvalid/></Td>
      </Tr>
    </Tbody>
  </Table>
  <Flex justifyContent="end">
    <Button colorScheme='blue'>Save</Button>
  </Flex>
</TableContainer>
</ChakraProvider>
    
  );
}

export default App;
