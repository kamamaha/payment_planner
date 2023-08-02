import React, { useRef, useState } from "react";
import { Input, Button, Text, Container } from "@chakra-ui/react";

const AddNewRow = ({ addNewRowCallBack }) => {
  const dateRef = useRef(null);
  const nameOfPaymentRef = useRef(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const onButtonClick = () => {
    addNewRowCallBack(dateRef.current.value, nameOfPaymentRef.current.value);

    dateRef.current.value = "";
    nameOfPaymentRef.current.value = "";
    setIsButtonDisabled(true)
  };

  return (
    <Container maxW="30%" px="10" bgColor="cyan.100">
      <Text fontSize="lg" as="b">
        Add new payment due
      </Text>
    
        <Input
          mb="2"
          type="text"
          placeholder="data of payment"
          colorScheme="teal"
          focusBorderColor="teal"
          color="gray"
          borderColor="teal"
          ref={dateRef}
        />

        <Input
          type="text"
          placeholder="name of payment"
          colorScheme="teal"
          focusBorderColor="teal"
          color="gray"
          borderColor="teal"
          ref={nameOfPaymentRef}
          onChange={() => setIsButtonDisabled(false)}
        />
     
       <Button
        colorScheme="teal"
        my={4}
        borderRadius="0px"
        onClick={onButtonClick}
        isDisabled={isButtonDisabled}
      >
        Save new payment due
      </Button>
    </Container>
  );
};

export default AddNewRow;
