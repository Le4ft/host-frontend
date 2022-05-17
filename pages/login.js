import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Login() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={"radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2% );"}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Image src="./favicon.ico" maxW="30%" />
          </Stack>
          <Box
            rounded={'xl'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Heading mb={3} fontFamily="Inter">Login</Heading>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel fontFamily="Inter">Username</FormLabel>
                <Input type="username" />
              </FormControl>
              <FormControl id="password">
                <FormLabel fontFamily="Inter">Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox colorScheme="orange" fontFamily="Inter">Remember me</Checkbox>
                  <Link color={'orange.400'} fontFamily="Inter">Forgot password?</Link>
                </Stack>
                <Button
                  fontFamily={"Inter"}
                  bg={'orange.400'}
                  color={'white'}
                  _hover={{
                    bg: 'orange.500',
                  }}
                  _active={{
                      bg: 'orange.500'
                  }}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }