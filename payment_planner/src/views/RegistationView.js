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
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <ChakraProvider>
      <MainBackground />

      <Center>
        <Heading mb={4}>Registation</Heading>
      </Center>
      <Center>
        <Box bg="white" borderRadius="5px" w="40%" p={4}>
          <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your name"
            colorScheme="teal"
            focusBorderColor="teal"
            color="gray"
            value={name}
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="example@address.com"
            colorScheme="teal"
            focusBorderColor="teal"
            color="gray"
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputGroup size="md" my={6}>
            <Input
              pr="4.5rem"
              type={showBtnFirst ? "text" : "password"}
              placeholder="Enter password"
              colorScheme="teal"
              focusBorderColor="teal"
              color="gray"
              onChange={(e) => setPass(e.target.value)}
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
              onChange={(e) => setPass(e.target.value)}
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
            <Button colorScheme="pink" px={8} m={4} borderRadius="0px" type="submit">
              Save
            </Button>
          </Flex>
          </form>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default RegistationView;
