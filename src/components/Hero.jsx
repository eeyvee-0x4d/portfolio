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
    <Flex 
      as='section'
      id='#hero'
      direction='column'
      justify='center'
      px={{sm: '2rem', md: '10%', xl: '15%'}}
      py={{sm: '5rem', md: '0'}}
      minHeight='100vh'
    >
      <Text
        as='p'
        color='brand.accent'
        pb={{sm: '0'}}
        fontSize='lg'
      >
        Hey there! I am
      </Text>
      <Text
      as='h1'
        color='white'
        fontWeight='700'
        fontSize={{sm: '3xl', md:'5xl'}}
      >Al Vincent Musa</Text>
      <Text
      as='h2'
      fontWeight='700'
      fontSize={{sm: 'xl', md: '3xl'}}
      pb='1rem'
      >An artisan for the web. I build websites.</Text>
      <Text
        as='p'
        pb='2rem'
        maxWidth='60ch'
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
      
    </Flex>
  )
}

export default Hero