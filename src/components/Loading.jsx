import logo from '../assets/logo.svg'

import {
  Flex,
  Image,
  Progress
} from '@chakra-ui/react'

const Loading = ({ isLoading }) => {  

  return(
    <Flex
      position='absolute'
      top='0'
      left='0'
      right='0'
      bottom='0'
      opacity={isLoading? 1 : 0}
      transition='opacity 0.5s ease-in-out'
      zIndex='9999'
      bg='brand.bg'
      direction='column'
      justify='center'
      align='center'
      minHeight='100vh'
      color='white'
    >
      <Image src={logo} boxSize={{sm: '4rem', md: '8rem'}}/>
      <Progress bg='brand.accent2' colorScheme='cyan' size={{sm: 'xs', md: 'sm'}} borderRadius='full' w={{sm: '150px', md: '300px'}} isIndeterminate/>
    </Flex>
  )
}

export default Loading