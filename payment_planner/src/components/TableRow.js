import React from "react";
import { Checkbox } from '@chakra-ui/react'
import {
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react'

const TableRow = ({dayOfPayment, nameOfPayment}) => {

    return(   
    <Tbody>
      <Tr>
        <Td color="gray" fontWeight='bold'>{dayOfPayment}</Td>
        <Td color="gray" fontWeight='bold'>{nameOfPayment}</Td>
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
  
    )
}

export default TableRow