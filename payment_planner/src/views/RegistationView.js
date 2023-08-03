import React, { useState } from "react";
import MainBackground from "../components/img/Mainbackgroud";
import {
  ChakraProvider,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Center,
  Heading,
  Box,
} from "@chakra-ui/react";

const RegistationView = () => {
  const [showBtnFirst, setShow1] = useState(false);
  const handleClick1 = () => setShow1(!showBtnFirst);

  const [showBtnSecound, setShow2] = useState(false);
  const handleClick2 = () => setShow2(!showBtnSecound);

  return (
    <ChakraProvider>
      <MainBackground />

      <Center>
        <Heading mb={4}>Registation</Heading>
      </Center>
      <Center>
        <Box bg="white" borderRadius="5px" w="40%" p={4}>
          <Input
            type="email"
            placeholder="example@address.com"
            colorScheme="teal"
            focusBorderColor="teal"
            color="gray"
          />

          <InputGroup size="md" my={6}>
            <Input
              pr="4.5rem"
              type={showBtnFirst ? "text" : "password"}
              placeholder="Enter password"
              colorScheme="teal"
              focusBorderColor="teal"
              color="gray"
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme="teal"
                borderStartRadius="2px"
                onClick={handleClick1}
              >
                {showBtnFirst ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <InputGroup size="md" my={6}>
            <Input
              pr="4.5rem"
              type={showBtnSecound ? "text" : "password"}
              placeholder="Repeat password"
              colorScheme="teal"
              focusBorderColor="teal"
              color="gray"
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme="teal"
                borderStartRadius="2px"
                onClick={handleClick2}
              >
                {showBtnSecound ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Flex justifyContent="end">
            <Button colorScheme="pink" px={8} m={4} borderRadius="0px">
              Save
            </Button>
          </Flex>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default RegistationView;
