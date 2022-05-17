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
  Stack,
} from '@chakra-ui/react';
import { FaPlus, FaTimes, FaHamburger, FaMoon, FaSun } from 'react-icons/fa';
import css from '../styles/Home.module.css';

const Links = ['Dashboard', 'Gallery', 'Settings', 'Profile', 'Changelog'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={2}
    rounded={'md'}
    color={'white'}
    _hover={{
      textDecoration: 'none',
      bg: "#545454"
    }}
    fontFamily="Inter"
    _active={{ fontWeight: 600 }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#151515', 'gray.900')} px={{ base: 4, md: "10rem" }} borderBottom="2px solid" className={css.border}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <FaTimes /> : <FaHamburger />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box maxW="50px">
              <Image src="./favicon.ico" />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button>
              Log out
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}