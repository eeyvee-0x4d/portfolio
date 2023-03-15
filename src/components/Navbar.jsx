import logo from '../assets/logo.svg'

import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  Flex,
  IconButton,
  Image,
  Link,
  VStack,
  Spacer,
  Text
} from '@chakra-ui/react'

import {
  useDisclosure
} from '@chakra-ui/react'

import {
  HamburgerIcon
} from '@chakra-ui/icons'

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const menuLinksHover = {
    color: "brand.accent",
    textDecoration: 'none'
  }

  const menuLinksAfter = {
    "&::after": {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 0,
      height: '2px',
      opacity: 0,
      border: '1px solid',
      borderColor: 'cyan.400',
      borderRadius: 'full',
      transition: 'all 0.3s ease-in-out'
    },
    "&:hover::after": {
      width: '100%',
      opacity: 1
    }
  }

  return(
    <Flex
      position='fixed'
      w='100%'
      px='2rem'
      py='1rem'
      align='center'
      backgroundImage="linear-gradient(90deg, rgb(31, 45, 66), rgb(45, 66, 97))"
      boxShadow='rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
      zIndex="999"
    >
      <Link href='#'>
        <Image src={logo} h='2rem'/> 
      </Link>
      <Spacer />
      <IconButton
        colorScheme="brand.fg"
        _hover={{color: 'brand.accent'}}
        variant='outline'
        aria-label='Mobile Nav Button'
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent
            bg='#111927'
            color='brand.fg'
            pt='3rem'
          >
            <DrawerCloseButton
              color="brand.fg"
              _hover={{color: 'brand.accent'}}
            />
            <Box as='nav'>
              <VStack 
                as='ul'
                pl='2rem'
                align='start'
                justify='center'
                listStyleType='none'
                spacing='1rem'
                fontSize='2xl'
              >
                <Box
                  as='li'
                  position='relative'
                  __css={menuLinksAfter}
                >
                  <Link 
                    href='#'
                    _hover={menuLinksHover}
                    onClick={onClose}
                  >
                    Home
                  </Link>
                </Box>
                <Box as='li'
                  position='relative'
                  __css={menuLinksAfter}
                >
                  <Link 
                    href='#about-me'
                    position='relative'
                    _hover={menuLinksHover}
                    onClick={onClose}
                  >
                    About Me
                  </Link>
                </Box>
                <Box as='li'
                  position='relative'
                  __css={menuLinksAfter}
                >
                  <Link 
                    href='#projects'
                    position='relative' 
                    _hover={menuLinksHover}
                    onClick={onClose}
                  >
                    <Text>Projects</Text>
                  </Link>
                  </Box>
                <Box as='li'
                  position='relative'
                  __css={menuLinksAfter}
                >
                  <Link 
                    href='#'
                    position='relative' 
                    _hover={menuLinksHover}
                    onClick={onClose}
                  >
                    <Text>Contact</Text>
                  </Link>
                </Box>
              </VStack>
            </Box>
          </DrawerContent>    
        </DrawerOverlay>
      </Drawer>
    </Flex>
  )
}

export default Navbar