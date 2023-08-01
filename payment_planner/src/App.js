import React, { useState } from "react";
import MainBackground from "./components/img/Mainbackgroud";
import TableHeader from "./components/TableHeader";
import AddNewRow from "./components/AddNewRow";
import TableRow from "./components/TableRow";
import { SunIcon } from "@chakra-ui/icons";
import {
  ChakraProvider,
  Button,
  Flex,
  Heading,
  Center,
} from "@chakra-ui/react";
import { TableContainer, Table } from "@chakra-ui/react";

function App() {
  const [rows, setRows] = useState([
    {
      dayOfPayment: 10,
      nameOfPayment: "Czynsz",
    },
  ]);
  const addNewRow = (dayOfPayment, nameOfPayment) => {
    const newRow = {
      dayOfPayment,
      nameOfPayment,
    };
    setRows((prevState) => [...prevState, newRow]);
  };
  return (
    <ChakraProvider>
      <MainBackground />
      <Center>
        <TableContainer w="80%">
          <Flex justifyContent="end">
            <Button
              colorScheme="teal"
              rightIcon={<SunIcon />}
              m={4}
              borderRadius="0px"
            >
              Login
            </Button>
          </Flex>
          <Center>
            <Heading mb={4}>Monthly payment planner</Heading>
          </Center>

          <Center>
            <Table size="lg" variant="striped" colorScheme="cyan" w="60%">
              <TableHeader />
              {rows.map((row) => (
                <TableRow
                  key={crypto.randomUUID()}
                  dayOfPayment={row.dayOfPayment}
                  nameOfPayment={row.nameOfPayment}
                />
              ))}
            </Table>
          </Center>
          <Flex justifyContent="end">
            <Button colorScheme="teal" px={8} m={4} borderRadius="0px">
              Save
            </Button>
          </Flex>
        </TableContainer>
      </Center>
      <AddNewRow addNewRowCallBack={addNewRow}/>
    </ChakraProvider>
  );
}

export default App;
