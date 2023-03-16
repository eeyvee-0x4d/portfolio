import { 
  ChakraProvider,
  extendTheme ,
  Box
} from '@chakra-ui/react'

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

  return (
    <ChakraProvider theme={theme} resetCCSS={true}>
      <Box bg="brand.bg" color="brand.fg">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
