import { 
  ChakraProvider,
  extendTheme ,
  Box,
  chakra
} from '@chakra-ui/react'

import {
  motion,
  isValidMotionProp
} from 'framer-motion'


import {
  useState,
  useEffect
} from 'react'

import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  const colors = {
    brand: {
      bg: "#141d2b",
      fg: "#a4b1cd",
      accent: '#0bc5ea',
      accent2: '#111927',
      neutral1: '#1a2332'
    }
  }

  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px'
  }

  const theme = extendTheme({ colors, breakpoints })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false)
    }
  }, [])

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp || shouldForwardProp(prop)
  })

  const Content = () => {
    return(
      <Box position='relative' bg="brand.bg" color="brand.fg">
        <Loading isLoading={isLoading} />
        <motion.div
          position='absolute'
          top='0'
          left='0'
          right='0'
          bottom='0'
          opacity={isLoading ? 0 : 1}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
        >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </Box>
    )
  }

  return (
    <ChakraProvider theme={theme} resetCCSS={true}>
      <Box position='relative' bg="brand.bg" color="brand.fg">
        <Loading isLoading={isLoading} />
        <ChakraBox
          position='absolute'
          top='0'
          left='0'
          right='0'
          bottom='0'
          opacity={isLoading ? 0 : 1}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}

        >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </ChakraBox>
      </Box>
      {/*<Box bg="brand.bg" color="brand.fg">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Box>
*/}    </ChakraProvider>
  )
}

export default App
