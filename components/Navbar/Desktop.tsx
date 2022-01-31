import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Flex } from '@chakra-ui/react'

import useHashLink from 'hooks/useHashLink'
import Link from './Link'

interface IProps {
  bgColor: string
  links: { name: string; path: string }[]
}

const DesktopNavbar: FC<IProps> = ({ links, bgColor }) => {
  const router = useRouter()
  const { activeHash } = useHashLink(router)

  const getActiveLink = (path: string) => {
    if (activeHash) {
      if (router.pathname + '#' + activeHash === path) {
        return true
      }
    } else {
      if (router.pathname === path) {
        return true
      }
    }
    return false
  }

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
        <Link
          href="/"
          _focus={{ outline: 'none' }}
          _hover={{ outline: 'none' }}
        >
          <Box
            bgImage="url('./images/logo.png')"
            bgRepeat="no-repeat"
            bgSize="contain"
            w={40}
            h={8}
          />
        </Link>

        <Flex align="center">
          {links.map((item, idx) => (
            <Fragment key={item.name}>
              <Link
                href={item.path}
                fontWeight={400}
                fontSize={{ base: 'sm', xl: 'md' }}
                _hover={{ hover: 'none' }}
                _focus={{ outline: 'none' }}
                rel="noreferrer"
                {...(getActiveLink(item.path)
                  ? {
                      color: 'brand.purple.200',
                      fontWeight: 700
                    }
                  : '')}
              >
                {item.name}
              </Link>
              {links.length !== idx + 1 && <Box mx={4} />}
            </Fragment>
          ))}
        </Flex>
      </Container>
    </Flex>
  )
}

export default DesktopNavbar
