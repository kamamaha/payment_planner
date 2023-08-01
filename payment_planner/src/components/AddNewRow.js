import React, { useRef } from "react";
import { Input, Button, Text } from "@chakra-ui/react";

const AddNewRow = ({addNewRowCallBack}) => {

 const dateRef = useRef(null)
 const nameOfPaymentRef = useRef(null)
const onButtonClick = () => {
    addNewRowCallBack(dateRef.current.value, nameOfPaymentRef.current.value)
}

  return (
    <>
      <Text fontSize="lg">Add new payment due</Text>
      <Input
        type="text"
        placeholder="data of payment"
        colorScheme="teal"
        focusBorderColor="teal"
        color="gray"
        ref={dateRef}
      />
      <Input
        type="text"
        placeholder="name of payment"
        colorScheme="teal"
        focusBorderColor="teal"
        color="gray"
        ref={nameOfPaymentRef}
      />
      <Button colorScheme="pink" px={8} m={4} borderRadius="0px" onClick={onButtonClick}>
        Save
      </Button>
    </>
  );
};

export default AddNewRow;
