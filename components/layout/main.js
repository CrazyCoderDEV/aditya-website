import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
const Main = ({ children }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Aditya Bhattacharjee - Homepage</title>
      </Head>

      <Navbar />

      <Container max="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
;``
