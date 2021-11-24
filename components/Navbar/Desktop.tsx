import { FC, Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Container, Flex, Button, Link } from '@chakra-ui/react'

interface IProps {
  bgColor: string
  links: { name: string; path: string }[]
}

const DesktopNavbar: FC<IProps> = ({ links, bgColor }) => {
  const router = useRouter()

  return (
    <Flex
      h={28}
      top={0}
      as="nav"
      w="full"
      zIndex={10}
      pos="fixed"
      align="center"
      bgColor={bgColor}
      d={{ base: 'none', xl: 'flex' }}
    >
      <Container
        d="flex"
        justifyContent="space-between"
        minW={{ lg: '7xl', '4xl': '8xl' }}
      >
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Box
              bgImage="url('./images/logo.png')"
              bgRepeat="no-repeat"
              bgSize="contain"
              w={40}
              h={8}
            />
          </Link>
        </NextLink>

        <Flex align="center">
          {links.map((item, idx) => (
            <Fragment key={item.name}>
              <NextLink href={item.path} passHref>
                <Link
                  fontWeight={400}
                  fontSize={{ base: 'sm', xl: 'md' }}
                  _hover={{ hover: 'none' }}
                  _focus={{ outline: 'none' }}
                  rel="noreferrer"
                  {...(router.pathname === item.path
                    ? {
                        color: 'brand.purple.200',
                        fontWeight: 700
                      }
                    : '')}
                >
                  {item.name}
                </Link>
              </NextLink>
              {links.length !== idx + 1 && <Box mx={4} />}
            </Fragment>
          ))}
        </Flex>

        <Flex align="center">
          <Link
            href={`${process.env.NEXT_APP_APP_URL || ''}/login`}
            _hover={{ hover: 'none' }}
            _focus={{ outline: 'none' }}
            rel="noreferrer"
          >
            <Button
              py={2}
              px={6}
              rounded="lg"
              variant="solid"
              fontWeight={600}
              _focus={{ outline: 'none' }}
              colorScheme="brandPurple"
              fontSize={{ base: 'sm', xl: 'sm' }}
            >
              Sign In
            </Button>
          </Link>
          <Box mx={4} />
          <Link
            href={`${process.env.NEXT_APP_APP_URL || ''}/register`}
            _hover={{ hover: 'none' }}
            _focus={{ outline: 'none' }}
            rel="noreferrer"
          >
            <Button
              py={2}
              px={6}
              rounded="lg"
              variant="outline"
              fontWeight={600}
              borderWidth={2}
              _focus={{ outline: 'none' }}
              colorScheme="brandPurple"
              fontSize={{ base: 'sm', xl: 'sm' }}
            >
              Sign Up
            </Button>
          </Link>
        </Flex>
      </Container>
    </Flex>
  )
}

export default DesktopNavbar
