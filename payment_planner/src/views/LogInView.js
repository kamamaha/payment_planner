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

const LogInView = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  const handleClick = () => setShow(!show);
  return (
    <ChakraProvider>
      <MainBackground />

      <Center>
        <Heading mb={4}>Login</Heading>
      </Center>
      <Center>
        <Box bg="white" borderRadius="5px" w="40%" p={4}>
          <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="your@address.com"
            colorScheme="teal"
            focusBorderColor="teal"
            color="gray"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputGroup size="md" my={6}>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              colorScheme="teal"
              focusBorderColor="teal"
              color="gray"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme="teal"
                borderStartRadius="2px"
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Flex justifyContent="end">
            <Button colorScheme="pink" px={8} m={4} borderRadius="0px" type="submit">
              Log in
            </Button>
          </Flex>
          </form>
          <button>Don't have an account? Register below this link.</button>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default LogInView;
