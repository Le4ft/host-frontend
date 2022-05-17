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
    useColorMode,
    IconButton
  } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import css from '../styles/Home.module.css';
  
export default function Login() {

  const { colorMode, toggleColorMode } = useColorMode();

<<<<<<< HEAD
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={colorMode === "light" ? "radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2% );" : "radial-gradient( circle farthest-corner at 83.7% 4.3%,  rgba(173,0,171,1) 0%, rgba(15,51,92,1) 90% );"}>
        <Stack spacing={8} mx={'auto'} maxW="5xl" py={12} px={6}>
          <Stack align={'center'}>
            <Image transitionDuration="200ms" cursor={"pointer"} onClick={toggleColorMode} src={colorMode === "light" ? "./favicon.ico" : "./favicondark.ico"} maxW="10%" />
          </Stack>
          <Box
            rounded={'15px'}
            transitionDuration="200ms"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Heading transitionDuration="200ms" mb={3} fontFamily="Inter">imagename.png</Heading>
            <Image src="./test.png" rounded={"7.5px"} />
            <Stack direction={"row"} mt={3}>
              <Box w="75%">
                <Text transitionDuration="200ms" color={useColorModeValue('#545454', 'white')} fontFamily={"Inter"} fontWeight="600">Uploaded by: user</Text>
                <Text transitionDuration="200ms" color={useColorModeValue('#545454', 'white')} fontFamily={"Inter"}>167.35 KB @ 24th March 2022</Text>
              </Box>
              <Box w="25%">
                <Flex
                justify={"right"}
                >
                  <Stack spacing={1} direction="row">
                    <Button
                    transitionDuration="200ms"
                    fontFamily={"Inter"}
                    fontWeight={"500"}
                    >
                      Report
                    </Button>
                    <Button
                    transitionDuration="200ms"
                    fontFamily={"Inter"}
                    fontWeight={"500"}
                    >
                      Download
                    </Button>
                  </Stack>
                </Flex>
              </Box>
            </Stack>
          </Box>
=======
  return (
    <>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={colorMode === "light" ? "radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2% );" : "radial-gradient( circle farthest-corner at 83.7% 4.3%,  rgba(173,0,171,1) 0%, rgba(15,51,92,1) 90% );"}>
      <Stack spacing={8} mx={'auto'} maxW="5xl" py={12} px={6}>
        <Stack align={'center'}>
          <Image transitionDuration="200ms" cursor={"pointer"} onClick={toggleColorMode} src={colorMode === "light" ? "./favicon.ico" : "./favicondark.ico"} maxW="10%" />
>>>>>>> 061602741f831b7dba7162314ebdd5e696ab7399
        </Stack>
        <Box
          rounded={'15px'}
          transitionDuration="200ms"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Heading transitionDuration="200ms" mb={3} fontFamily="Inter">imagename.png</Heading>
          <Image src="./test.png" rounded={"7.5px"} />
          <Stack direction={"row"} mt={3}>
            <Box w="75%">
              <Text transitionDuration="200ms" color={useColorModeValue('#545454', 'white')} fontFamily={"Inter"} fontWeight="600">Uploaded by: user</Text>
              <Text transitionDuration="200ms" color={useColorModeValue('#545454', 'white')} fontFamily={"Inter"}>167.35 KB</Text>
            </Box>
            <Box w="25%">
              <Flex
              justify={"right"}
              >
                <Stack spacing={1} direction="row">
                  <Button
                  transitionDuration="200ms"
                  fontFamily={"Inter"}
                  fontWeight={"500"}
                  >
                    Report
                  </Button>
                  <Button
                  transitionDuration="200ms"
                  fontFamily={"Inter"}
                  fontWeight={"500"}
                  >
                    Download
                  </Button>
                </Stack>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}