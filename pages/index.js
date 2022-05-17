import { Container, Text, Box, Image, SimpleGrid, Flex, Button, Stack, Heading, Icon } from '@chakra-ui/react';
import { FaLock, FaCloud } from 'react-icons/fa';
import Head from 'next/head';
import { ReactElement } from 'react';
import styles from '../styles/Home.module.css';


const Feature = ({ title, text, icon }, FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'#242424'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} fontFamily={"Inter"} color="white">{title}</Text>
      <Text color={'gray.400'} fontFamily={"Inter"}>{text}</Text>
    </Stack>
  );
};




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>loady.host</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
      px="5rem"
      backgroundColor={"#0093E9"}
      backgroundImage={"radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2% );"}
      py="10rem"
      minH="100vh"
      justifyContent="center"
      >
        <Box display={"block"} textAlign="center">
          <Heading color="#fff" fontFamily={"Inter"} size="2xl">Screen.&nbsp;&nbsp;Upload.&nbsp;&nbsp;Share.</Heading>

          <Flex
          py={6}
          
          alignContent="center"
          >
            <Image src="./test.png" borderRadius={"15px"} maxW="50%" display={"block"} ml="auto" mr="auto" />
          </Flex>

          <Text color="#fff" fontFamily={"Inter"} fontWeight="500" fontSize={"1.2rem"}>With loady.host you can upload anything in few seconds.</Text>

          <Button
          mt={3}
          w="200px"
          className={styles.btngrad}
          fontFamily={"Inter"}
          >
            Try it out!
          </Button>
        </Box>

      </Flex>
      <Box
      px="25rem"
      py="3rem"
      minH="80vh"
      justifyContent={"center"}
      >

        <Heading size="xl" fontFamily={"Inter"} color="#fff" textAlign={"center"} display="block">Features</Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2} mt={3}>

        <Feature
          icon={<Icon as={FaCloud} w={10} h={10} />}
          title={'Fast Upload Speed'}
          text={
            'asdadsadsadas'
          }
        />

        <Feature
          icon={<Icon as={FaCloud} w={10} h={10} />}
          title={'Fast Upload Speed'}
          text={
            'asdadsadsadas'
          }
        />

        <Feature
          icon={<Icon as={FaCloud} w={10} h={10} />}
          title={'Fast Upload Speed'}
          text={
            'asdadsadsadas'
          }
        />
          
          
        </SimpleGrid>

      </Box>

    </div>
  )
}
