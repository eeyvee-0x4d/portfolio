import '../custom-styles.css'

import {
  Box,
  Button,
  Flex,
  Link,
  Text
} from '@chakra-ui/react'

import {
  ArrowDownIcon
} from '@chakra-ui/icons'

const Hero = () => {
  return(
    <Box 
      as='section'
      id='#hero'
      px='2rem'
      pt='8rem'
      pb='6rem'
    >
      <Text
        as='p'
        color='brand.accent'
        pb='1rem'
        fontSize='lg'
      >
        Hey there! I am
      </Text>
      <Text
      as='h1'
        color='white'
        fontWeight='700'
        fontSize='4xl'
      >Al Vincent Musa</Text>
      <Text
      as='h2'
      fontWeight='700'
      fontSize='2xl'
      pb='1rem'
      >An artisan for the web. I build websites.</Text>
      <Text
        as='p'
        pb='2rem'
      >
        I'm a web developer and a highly motivated individual ready to tackle real world challenges by building accessible and robust web solutions.
      </Text>
      <Link href='#projects'
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
          rightIcon={<ArrowDownIcon className="bounce-it-beybe"/>}
        >
          Check out my projects!
        </Button>
      </Link>
      
    </Box>
  )
}

export default Hero