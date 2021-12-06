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
} from "@chakra-ui/react";

export default function Index() {
  return (
    <Flex direction="column" align="center">
      <Box>
        <Heading color="orange.500">Form</Heading>
        <VStack spacing={4}>
          <Box>
            <FormControl id="first-name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="first-name" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last Name" />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="country">
              <FormLabel>Country</FormLabel>
              <Select placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl id="first-name" isRequired>
              <FormLabel>Demo</FormLabel>
              <Input placeholder="Demo" />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="first-name" isRequired>
              <FormLabel>Demo</FormLabel>
              <Input placeholder="Demo" />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="first-name" isRequired>
              <FormLabel>Demo</FormLabel>
              <Input placeholder="Demo" />
            </FormControl>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}
