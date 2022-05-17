import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
  Text,
  Heading,
  Progress,
  Tooltip,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { FaPlus, FaTimes, FaHamburger, FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '../../assets/navbar';


export default function DashboardHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Navbar />

      <Box
      minH="93.2vh"
      px={{ base: 2, md: "10rem" }}
      py={5}
      bg="#2A2A2A"
      >
        <Box
        bg="#202020"
        borderRadius={"15px"}
        p={4}
        mb={5}
        >
          <Box bg="#151515" borderRadius={"7.5px"} p={3} mb={3}>
            <Heading fontFamily={"Inter"} color="white">Welcome user,</Heading>
            <Text color="gray.200" fontFamily={"Inter"}>on loady.host dashboard! Your login streak is <span style={{color:'orange'}}>3 days</span>!</Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3}>
            <Box bg="#151515" p={2} borderRadius="7.5px">
              <Heading textAlign={"center"} color="white" fontFamily={"Inter"}>30</Heading>
              <Text color="gray.400" textAlign={"center"} fontFamily={"Inter"}>Images Uploaded</Text>
            </Box>

            <Box bg="#151515" p={2} borderRadius="7.5px">
              <Heading textAlign={"center"} color="white" fontFamily={"Inter"}>3.42 GB</Heading>
              <Text color="gray.400" textAlign={"center"} fontFamily={"Inter"}>Used Storage</Text>
            </Box>

            <Box bg="#151515" p={2} borderRadius="7.5px">
              <Heading textAlign={"center"} color="white" fontFamily={"Inter"}>1.58 GB</Heading>
              <Text color="gray.400" textAlign={"center"} fontFamily={"Inter"}>Empty Storage</Text>
            </Box>

            <Box bg="#151515" p={2} borderRadius="7.5px">
              <Heading textAlign={"center"} color="white" fontFamily={"Inter"}>30</Heading>
              <Text color="gray.400" textAlign={"center"} fontFamily={"Inter"}>Invites Left</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Stack direction={"row"} spacing={3}>
          <Box
          bg="#202020"
          borderRadius={"15px"}
          p={4}
          w="30%"
          >
            <Stack direction="column" spacing={3}>
              <Box bg="#151515" px={3} py={2} borderRadius="7.5px">
                <Text color="#C4C4C4" fontSize={14} fontWeight="600">MOTD</Text>
                <Text color="white" fontFamily={"Inter"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque pretium lectus id turpis. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</Text>
              </Box>
              <Box bg="#151515" px={3} py={2} borderRadius="7.5px">
                <Text color="#C4C4C4" fontSize={14} fontWeight="600">LOADY LEVEL <IconButton size="xs" variant="link" p={0} icon={<FaExternalLinkAlt />} /> </Text>
                <Heading color="white" fontFamily={"Inter"} size="lg">120</Heading>
                <Text color="gray.300" fontFamily={"Inter"} fontSize={13}>next reward</Text>
                <Heading color="white" fontFamily={"Inter"} size="xs">+10 Uploads Daily</Heading>
                <Text color="#C4C4C4" textAlign={"right"}>122/150</Text>
                <Progress mt={2} colorScheme={"orange"} height="4px" value={80} borderRadius="3px" />
              </Box>
              <Box bg="#151515" px={3} py={2} borderRadius="7.5px">
                <Text color="#C4C4C4" fontSize={14} fontWeight="600">MOST UPLOADS</Text>
                <Table size='sm' variant={"unstyled"}>
                  <Tbody color="white" fontFamily={"Inter"}>
                    <Tr>
                      <Td color="gold">#1</Td>
                      <Td>Le4ft</Td>
                      <Td>240 uploads</Td>
                    </Tr>
                    <Tr>
                      <Td color="silver">#2</Td>
                      <Td>Qwesdy</Td>
                      <Td>230 uploads</Td>
                    </Tr>
                    <Tr>
                      <Td color="brown">#3</Td>
                      <Td>username</Td>
                      <Td>200 uploads</Td>
                    </Tr>
                    <Tr>
                      <Td>#4</Td>
                      <Td>username</Td>
                      <Td>200 uploads</Td>
                    </Tr>
                    <Tr>
                      <Td>#5</Td>
                      <Td>username</Td>
                      <Td>200 uploads</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Stack>
          </Box>
          <Box
          bg="#202020"
          borderRadius={"15px"}
          p={4}
          w="70%"
          >
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3}>
              <Box
              bg="#151515"
              borderRadius={"7.5px"}
              >
                <Image src="./test.png" w="full" borderTopRadius={"7.5px"} mb={1} />
                <Box p={2}>
                  <Heading color="white" size="sm" fontFamily={"Inter"} textAlign="center">imagename.png</Heading>  
                  <Text color="gray.300" fontFamily={"Inter"} fontSize={13} textAlign="center">125.2 KB</Text>
                </Box>
              </Box>
              <Box
              bg="#151515"
              borderRadius={"7.5px"}
              >
                <Image src="./test.png" w="full" borderTopRadius={"7.5px"} mb={1} />
                <Box p={2}>
                  <Heading color="white" size="sm" fontFamily={"Inter"} textAlign="center">imagename.png</Heading>  
                  <Text color="gray.300" fontFamily={"Inter"} fontSize={13} textAlign="center">125.2 KB</Text>
                </Box>
              </Box>
              <Box
              bg="#151515"
              borderRadius={"7.5px"}
              >
                <Image src="./test.png" w="full" borderTopRadius={"7.5px"} mb={1} />
                <Box p={2}>
                  <Heading color="white" size="sm" fontFamily={"Inter"} textAlign="center">imagename.png</Heading>  
                  <Text color="gray.300" fontFamily={"Inter"} fontSize={13} textAlign="center">125.2 KB</Text>
                </Box>
              </Box>
              <Box
              bg="#151515"
              borderRadius={"7.5px"}
              >
                <Image src="./test.png" w="full" borderTopRadius={"7.5px"} mb={1} />
                <Box p={2}>
                  <Heading color="white" size="sm" fontFamily={"Inter"} textAlign="center">imagename.png</Heading>  
                  <Text color="gray.300" fontFamily={"Inter"} fontSize={13} textAlign="center">125.2 KB</Text>
                </Box>
              </Box>
              <Box
              bg="#151515"
              borderRadius={"7.5px"}
              >
                <Image src="./test.png" w="full" borderTopRadius={"7.5px"} mb={1} />
                <Box p={2}>
                  <Heading color="white" size="sm" fontFamily={"Inter"} textAlign="center">imagename.png</Heading>  
                  <Text color="gray.300" fontFamily={"Inter"} fontSize={13} textAlign="center">125.2 KB</Text>
                </Box>
              </Box>
              <Box
              bg="#151515"
              borderRadius={"7.5px"}
              >
                <Image src="./test.png" w="full" borderTopRadius={"7.5px"} mb={1} />
                <Box p={2}>
                  <Heading color="white" size="sm" fontFamily={"Inter"} textAlign="center">imagename.png</Heading>  
                  <Text color="gray.300" fontFamily={"Inter"} fontSize={13} textAlign="center">125.2 KB</Text>
                </Box>
              </Box>
              <Box
              bg="#151515"
              borderRadius={"7.5px"}
              >
                <Image src="./test.png" w="full" borderTopRadius={"7.5px"} mb={1} />
                <Box p={2}>
                  <Heading color="white" size="sm" fontFamily={"Inter"} textAlign="center">imagename.png</Heading>  
                  <Text color="gray.300" fontFamily={"Inter"} fontSize={13} textAlign="center">125.2 KB</Text>
                </Box>
              </Box>
              <Box
              bg="#151515"
              borderRadius={"7.5px"}
              >
                <Image src="./test.png" w="full" borderTopRadius={"7.5px"} mb={1} />
                <Box p={2}>
                  <Heading color="white" size="sm" fontFamily={"Inter"} textAlign="center">imagename.png</Heading>  
                  <Text color="gray.300" fontFamily={"Inter"} fontSize={13} textAlign="center">125.2 KB</Text>
                </Box>
              </Box>
            </SimpleGrid>
            <Box
            bg="#151515"
            p={2}
            mt={3}
            borderRadius="7.5px"
            >
              <Button isFullWidth borderRadius={"4px"} colorScheme="orange" size="xs">View All</Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}