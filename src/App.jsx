import { 
  ChakraProvider,
  extendTheme ,
  Box
} from '@chakra-ui/react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

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

  const theme = extendTheme({ colors })

  return (
    <ChakraProvider theme={theme} resetCCSS={true}>
      <Box bg="brand.bg" color="brand.fg">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </Box>
    </ChakraProvider>
  )
}

export default App
