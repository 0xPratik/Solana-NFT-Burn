import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { TOKEN_PROGRAM_ID, Token, u64 } from "@solana/spl-token";
import { supabase } from "../../index";

export default function Index() {
  const toast = useToast();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [demo, setDemo] = useState("");

  const Submit = async () => {
    const { data, error } = await supabase
      .from("BURN NFT FORM")
      .insert([{ First_Name: first, Last_Name: last, Demo: demo }]);
    if (error == null) {
      toast({
        title: "Data Submited",
        description: "Hurray you will be Notified Soon",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }

    if (error !== null) {
      toast({
        title: "Error",
        description: "Sorry there was an Errror",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    console.log("DATA", data, error);
  };

  return (
    <Flex direction="column" align="center">
      <Box>
        <Heading color="orange.500">Form</Heading>
        <VStack spacing={4}>
          <Box>
            <FormControl id="first-name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name"
                onChange={(e) => setFirst(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="first-name" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                placeholder="Last Name"
                onChange={(e) => setLast(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="first-name" isRequired>
              <FormLabel>Demo</FormLabel>
              <Input
                placeholder="Demo"
                onChange={(e) => setDemo(e.target.value)}
              />
            </FormControl>
          </Box>
          <Button colorScheme="pink" onClick={Submit}>
            Submit
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}
