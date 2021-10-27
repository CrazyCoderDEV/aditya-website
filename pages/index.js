import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Link,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import Section from '../components/section'
import styled from '@emotion/styled'
import Layout from '../components/layout/article'
import { GridItem } from '../components/grid-item.js'
import netflix from '../public/netflixImage.jpg'
import jarvis from '../public/jarvis.jpg'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io5'

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 10px;
`

const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" p={3} align="center" mb={6}>
        </Box>
        <Box
          borderRadius="lg"
          bg="teal.600"
          p={3}
          align="center"
          mb={6}
        >
          Hello! I&apos;m an software developer based on Bangladesh.
        </Box>

        <Box display={{ md: `flex` }}>
          <Box flexGrow={1} paddingTop="20px">
            <Heading as="h2" variant="page-title">
              Aditya Bhattacharjee
            </Heading>
            <p>Software developer</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          />
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>

          <BioSection>
            <BioYear>2008</BioYear>
            Born in Chattogram, Bangladesh
          </BioSection>

          <BioSection>
            <BioYear>2011</BioYear>
            Moved to Dhaka, Bangladesh
          </BioSection>

          <BioSection>
            <BioYear>2012 to present</BioYear>
            Educational journey
          </BioSection>

          <BioSection>
            <BioYear>2019 to present</BioYear>
            In love with software development
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <p>
            I am a small software developer in Dhaka. Just doing my 7th grades!
            In 2008 at the age of 10 I found out how to code and I imiedietly
            fell in love with it.I see myself in a nice comfortable spot in the
            college in the next 5 years. When not online I like to read books
            and play video games with my friends. I also like to play chess!
          </p>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <p>Art, Music, Recitation, Chess</p>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>{' '}
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://github.com/CrazyCoderDEV/netflix-clone"
              title="Netflix clone"
              thumbnail={netflix}
            >
              I cloned Netflix!
            </GridItem>
            <GridItem title="Jarvis" thumbnail={jarvis}>
              It's iron man's jarvis!
            </GridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.5}>
          <Heading>Find me on social media!</Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/CrazyCoderDEV" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  CrazyCoderDEV
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/DoritosAdidas" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @DoritosAdidas
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://instagram.com/im_aditya_bhattacharjee"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Aditya Bhattacharjee
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
