import logo from '../assets/logo.svg'
import resume from '../assets/resume.pdf'

import {
  Box,
  Button,
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

import {
  useRef
} from 'react'

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef()

  const menuLinksHover = {
    color: "brand.accent",
    textDecoration: 'none'
  }

  const navLinksStyle = {
    position: 'relative',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: 'white'
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      bottom: '0',
      border: '1px solid',
      borderColor: 'cyan.400',
      borderRadius: 'full',
      width: '0',
      opacity: '0',
      transition: 'all 0.3s ease-in-out'
    },
    '&:hover::before': {
      width: '100%',
      opacity: '1'
    }
  }

  return(
    <Flex
      id='nav-wrapper'
      position='absolute'
      top='0'
      left='0'
      backgroundImage="linear-gradient(90deg, rgb(31, 45, 66), rgb(45, 66, 97))"
      boxShadow='rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
      width="100%"
      height='4rem'
      zIndex='99'
    >
      <Flex
        direction='row'

        align='center'
        basis='full'
        py='1rem'
        px={{sm: '2rem', md: '10%', xl:'15%'}}
      >
        <Image
          src={logo}
          height='1.2rem'
        />
        <Spacer />
        <Box
          as='nav'
        >
          <Flex
            display={{sm: 'none', md: 'flex'}}
            gap='2rem'
            align='center'
          >
            <Link
              href='#about-me'
              sx={ navLinksStyle }
            >
              About
            </Link>
            <Link
              href='#projects'
              sx={ navLinksStyle }
            >
              Projects
            </Link>
            <Link
              href='#contact'
              sx={ navLinksStyle }
            >
              Contact
            </Link>
            <Button
              bg='brand.accent2'
              borderColor='brand.accent'
              color='brand.accent'
              variant='outline'
              _hover={{
                bg: 'brand.accent',
                color: 'white'
              }}
              onClick={() => {
                window.open(resume, '_blank')
              }}
            >
              Resume
            </Button>
          </Flex>
          <Flex
            display={{md:'none'}}
          >
            <IconButton
              display={{sm: 'block', md: 'none'}}
              colorScheme="brand.fg"
              _hover={{color: 'brand.accent'}}
              variant='outline'
              aria-label='Mobile Nav Button'
              icon={<HamburgerIcon />}
              onClick={onOpen}
            />
            <Drawer
              display={{sm: 'block', md: 'none'}} 
              placement='right' 
              onClose={onClose} 
              isOpen={isOpen}
              finalFocusRef={ finalRef }
            >
              <DrawerOverlay
                display={{sm: 'block', md: 'none'}} 
              >
                <DrawerContent
                  bg='#111927'
                  color='brand.fg'
                  pt='3rem'
                >
                  <DrawerCloseButton
                    color="brand.fg"
                    _hover={{color: 'brand.accent'}}
                  />
                  <VStack
                    p='2rem'
                    align='start'
                    fontSize='2xl'
                    gap='1rem'
                  >
                    <Link
                      href='#about-me'
                      sx={ navLinksStyle }
                      onClick={ onClose }
                    >
                      About
                    </Link>
                    <Link
                      href='#projects'
                      sx={ navLinksStyle }
                      onClick={ onClose }
                    >
                      Projects
                    </Link>
                    <Link
                      href='#contact'
                      sx={ navLinksStyle }
                      onClick={ onClose }
                    >
                      Contact
                    </Link>
                    <Button
                      bg='brand.accent2'
                      borderColor='brand.accent'
                      color='brand.accent'
                      variant='outline'
                      _hover={{
                        bg: 'brand.accent',
                        color: 'white'
                      }}
                      onClick={() => {
                        onClose()
                        window.open(resume, '_blank')
                      }}
                    >
                      Resume
                    </Button>
                  </VStack>
                </DrawerContent>    
              </DrawerOverlay>
            </Drawer>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Navbar