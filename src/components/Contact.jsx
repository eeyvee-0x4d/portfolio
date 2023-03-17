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
      py={{sm: '8rem', md: '10rem'}}
      textAlign='center'
    >
      <Heading
        as='h2'
        color='white'
        fontSize={{sm: '3xl'}}
      >Connect with Me</Heading>
      <Text
      >
        I'm currently looking for opportunities to jumpstart my career in Web Development. Feel free to say Hello!
      </Text>
      <Link
        href='mailto:a.v.musa2017@gmail.com'
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
        >Say Hello</Button>
      </Link>
    </Flex>
  )
}

export default Contact