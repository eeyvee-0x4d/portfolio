import {
  Badge,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'

import {
  createIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons'

import loopstudios from '../assets/loopstudios.png'
import newsHomepage from '../assets/news-homepage.png'
import tipCalculator from '../assets/tip-calculator.png'

import { v4 as uuidv4} from 'uuid'

const Projects = () => {

  const projects = [
    {
      name: 'Loopstudios landing page',
      description: 'Aesthetic landing page design from FrontendMentor.',
      image: loopstudios,
      sourceCodeURL: 'https://github.com/eeyvee-0x4d/fmentor-loopstudios-landing-page',
      previewURL: 'https://profound-puppy-4b1cd7.netlify.app/',
      techStack: ['reactjs', 'tailwindcss']
    },
    {
      name: 'News homepage',
      description: 'A new site landing page design from FrontendMentor.',
      image: newsHomepage,
      sourceCodeURL: 'https://github.com/eeyvee-0x4d/fmentor-news-homepage',
      previewURL: 'https://majestic-starship-732163.netlify.app/',
      techStack: ['reactjs', 'tailwindcss']
    },
    {
      name: 'Tip Calculator',
      description: 'A tip calculator app design from FrontendMentor.',
      image: tipCalculator,
      sourceCodeURL: 'https://github.com/eeyvee-0x4d/fmentor-tip-calculator',
      previewURL: 'https://bespoke-froyo-3a029c.netlify.app/',
      techStack: ['reactjs', 'tailwindcss']
    }
  ]

  const GithubIcon = createIcon({
    displayName: 'GithubIcon',
    viewBox: '0 0 496 512',
    path: (
      <path fill='currentColor' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
    )
  })

  return(
    <Box
      as='section'
      id='projects'
      px={{sm: '2rem', md: '10%'}}
      py='4.5rem'
    >
      <Heading
        as='h2'
        color='white'
        fontSize='2xl'
        fontWeight='700'
        mb='2rem'
      >
        Projects
      </Heading>
      <Flex
        direction={{sm: 'column', md: 'row'}}
        justify='center'
        align='center'
        flexWrap='wrap'
        gap='2rem'
      >
        {
          projects.map(project => {
            const uniqueId = uuidv4()

            return(
              <Card
                key={uniqueId}
                bg='brand.neutral1'
                color='brand.fg'
                overflow='hidden'
                variant='elevated'
                maxWidth={{sm: '768px', md: '400px'}}
              >
                <Image
                  src={project.image}
                  objectFit='cover'
                />
                <CardHeader>
                  <Heading 
                    color='white' 
                    as='h3' 
                    fontSize='xl'
                    fontWeight='400'
                    transition='color 0.2s ease-in-out'
                    _hover={{
                      color: 'brand.accent'
                    }}
                    >
                      {project.name}
                  </Heading>
                </CardHeader>
                <Stack>
                  <Flex px='1rem' gap='1rem'>
                    {
                      project.techStack.map(item => {
                      return(
                        <Badge colorScheme='cyan' variant='outline'>{item}</Badge>
                      )})
                    }
                  </Flex>
                  <CardBody>
                    <Text>
                      {project.description}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Flex>
                      <Link
                        href={project.sourceCodeURL}
                        transition='all 0.2s ease-in-out'
                        _hover={{
                          color: 'brand.accent'
                        }}
                        isExternal
                      >
                        <GithubIcon mx='0.5rem' boxSize='1.5rem' />
                      </Link>
                      <Link
                        href={project.previewURL}
                        transition='all 0.2s ease-in-out'
                        _hover={{
                          color: 'brand.accent'
                        }}
                        isExternal
                      >
                        <ExternalLinkIcon mx='0.5rem' boxSize='1.5rem' />
                      </Link>
                    </Flex>
                  </CardFooter>
                </Stack>
              </Card>
            )
          })
        }
      </Flex>
    </Box>
  )
}

export default Projects