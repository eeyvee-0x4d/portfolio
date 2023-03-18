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
      position={{sm: 'fixed'}}
      top='0'
      w='100vw'
      px={{sm: '2rem', md: '10%', xl:'15%'}}
      py='1rem'
      align='center'
      backgroundImage="linear-gradient(90deg, rgb(31, 45, 66), rgb(45, 66, 97))"
      boxShadow='rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
      zIndex="999"
    >
      <Link 
        href='#'
        tabIndex={0}
      >
        <Image src={logo} h='1.8rem' alt='logo'/> 
      </Link>
      <Spacer />
      <Box
        as='nav'
      >
        <Flex 
          as='ul'
          display={{sm: 'none', md: 'flex'}}
          listStyleType='none'
          justify='center'
          align='center'
          gap='2rem'
        >
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
              href='#contact'
              position='relative' 
              _hover={menuLinksHover}
              onClick={onClose}
            >
              <Text>Contact</Text>
            </Link>
          </Box>
          <Box as='li'
          >
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
          </Box>
        </Flex>
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
                      href='#contact'
                      position='relative' 
                      _hover={menuLinksHover}
                      onClick={onClose}
                    >
                      <Text>Contact</Text>
                    </Link>
                  </Box>
                  <Box 
                    as='li'
                  >
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
                  </Box>
                </VStack>
              </Box>
            </DrawerContent>    
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  )
}

export default Navbar