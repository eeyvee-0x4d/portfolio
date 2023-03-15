import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text
} from '@chakra-ui/react'

import headShot from '../assets/headshot.jpg'

const About = () => {
  return(
    <Box
      as='section'
      id='about-me'
      bg='brand.neutral1'
      p='2rem'
    >
      <Text
        as='h2'
        color='white'
        fontWeight='700'
        fontSize='2xl'
        mb='2rem'
      >
        About Me
      </Text>
      <Flex
        direction='column-reverse'
        justify='center'
        align='center'
        gap='3rem'
      >
        <Box>
          <Text
            mb='1rem'
          >
            Hello! My name is Al Vincent Musa and I enjoy building awesome websites and web apps. I recently got my degree in BS Computer Science from Bicol University last September 2022. Currently I am improving my frontend skills using JavaScript and ReactJS.
          </Text>
          <Text
            mb='1rem'
          >
            Here are some of the few programming languages and technologies that I've been using:
          </Text>
          <Grid
            as='ul'
            templateColumns='repeat(2, 1fr)'
            gap='4'
            listStylePosition='inside'
          >
            <GridItem as='li'>HTML</GridItem>
            <GridItem as='li'>CSS</GridItem>
            <GridItem as='li'>TailwindCSS</GridItem>
            <GridItem as='li'>JavaScript</GridItem>
            <GridItem as='li'>ReactJS</GridItem>
            <GridItem as='li'>VueJS</GridItem>
            <GridItem as='li'>NodeJS</GridItem>
            <GridItem as='li'>Python</GridItem>
            <GridItem as='li'>Django</GridItem>
            <GridItem as='li'>MySQL</GridItem>
            <GridItem as='li'>MongoDB</GridItem>
          </Grid>
        </Box>
        <Box
          borderRadius='base'
          position='relative'
          w='fit-content'
          zIndex='1'
          __css={{
            "&::before": {
              content: '""',
              position: 'absolute',
              top: '4px',
              left: '4px',
              width: "100%",
              height: "100%"  ,
              border: '1px solid',
              borderColor: 'brand.accent',
              borderRadius: 'base',
              zIndex: -1,
              transition: 'transform 0.3s'
            },
            "&::after": {
              content: '""',
              position: 'absolute',
              top: '8px',
              left: '8px',
              width: "100%",
              height: "100%",
              border: '1px solid',
              borderColor: 'brand.accent',
              borderRadius: 'base',
              zIndex: -1,
              transition: 'transform 0.3s'
            },
            '&:hover::before': {
              transform: 'translate(8px, 8px)'
            },
            '&:hover::after': {
              transform: 'translate(16px, 16px)'
            }
          }}
        >
          <Box
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            zIndex='2'
            bg='brand.accent'
            opacity='0.2'
            transition='opacity 0.3s'
            _hover={{
              opacity: 0
            }}
           />
          <Image
            src={headShot}
            alt='head shot'
            boxSize='200'
            />
        </Box>
      </Flex>
    </Box>
  )
}

export default About