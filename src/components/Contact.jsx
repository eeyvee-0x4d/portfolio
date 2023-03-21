import {
  Box,
  Button,
  Heading,
  Flex,
  Link,
  Text
} from '@chakra-ui/react'

const Contact = () => {
  return(
    <Flex
      id='contact'
      direction='column'
      justify='center'
      align='center'
      gap='1rem'
      px={{sm: '2rem', md: '10%'}}
      py='100px'
      textAlign='center'
    >
      <Flex
        direction='column'
        gap='1rem'
        mx='auto'
        py='40px'
        maxWidth='500px'
      >
        <Heading
          as='h2'
          color='white'
          fontSize={{sm: '3xl'}}
          transition='color 0.3s ease-in-out'
          _hover={{
            color: 'brand.accent'
          }}
        >Connect with Me</Heading>
        <Text
        >
          I'm currently looking for opportunities to jumpstart my career in Web Development. Feel free to say Hello!
        </Text>
        <Link
          href='mailto:a.v.musa2017@gmail.com'
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Button
            bg='brand.accent2'
            borderColor='brand.accent'
            color='brand.accent'
            variant='outline'
            _hover={{
              bg: 'brand.accent',
              color: 'white',
            }}
          >Say Hello</Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Contact