import { FC } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Icon,
  Link,
  Text,
  Flex,
  Grid,
  Divider,
  GridItem,
  Container
} from '@chakra-ui/react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import Menu from './Menu'

const Footer: FC = () => {
  const menus = [
    {
      title: 'Services',
      links: [
        {
          title: 'Overnight care',
          link: '/#'
        },
        {
          title: 'Flexi care/Hourly care',
          link: '/#'
        },
        {
          title: 'Video companionship',
          link: '/#'
        },
        {
          title: '24-hour live in care',
          link: '/#'
        },
        {
          title: 'Permanent staff',
          link: '/#'
        }
      ]
    },
    {
      title: 'Resources',
      links: [
        {
          title: 'Guides',
          link: '/#'
        },
        {
          title: 'Carer training',
          link: '/#'
        },
        {
          title: 'Help & support',
          link: '/#'
        }
      ]
    },
    {
      title: 'Company',
      links: [
        {
          title: 'About',
          link: '/#'
        },
        {
          title: 'Contact',
          link: '/#'
        }
      ]
    }
  ]
  return (
    <Box w="full" pb={5} pt={{ base: 5, xl: 20 }} bgColor="brand.purple.700">
      <Container
        color="white"
        textAlign="center"
        fontSize={{ base: 'sm', xl: 'md' }}
        minW={{ lg: '7xl', '4xl': '8xl' }}
      >
        <Grid templateColumns={{ xl: '40% 20% 20% 20%' }} gap={6} mb={12}>
          <GridItem textAlign="left">
            <NextLink href="/#" passHref>
              <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
                <Box
                  bgImage="url('./images/logo-2.png')"
                  bgRepeat="no-repeat"
                  bgSize="contain"
                  w={40}
                  h={8}
                />
              </Link>
            </NextLink>
            <Flex
              mt={4}
              align={{ base: 'center', lg: 'flex-end' }}
              color="rgba(255, 255, 255, 0.8)"
            >
              <Box w={10} h={10}>
                <Icon as={FaFacebookF} boxSize={5} />
              </Box>
              <Box w={10} h={10}>
                <Icon as={FaTwitter} boxSize={5} />
              </Box>
              <Box w={10} h={10}>
                <Icon as={AiFillInstagram} boxSize={5} />
              </Box>
              <Box w={10} h={10}>
                <Icon as={FaYoutube} boxSize={5} />
              </Box>
            </Flex>
          </GridItem>

          {menus.map((e, i) => (
            <Menu key={i} title={e.title} links={e.links} />
          ))}
        </Grid>
        <Divider borderColor="white" />
        <Flex
          mt={4}
          align="center"
          color="rgba(255, 255, 255, 0.7)"
          justifyContent="space-between"
          direction={{ base: 'column-reverse', xl: 'row' }}
        >
          <Flex align="center">
            <Text>© 2021 Herocare</Text>
          </Flex>
          <Flex w={80} justify="space-around">
            <NextLink href="/#" passHref>
              <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
                Privacy policy
              </Link>
            </NextLink>

            <NextLink href="/#" passHref>
              <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
                Terms of use
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
