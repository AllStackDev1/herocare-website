import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Icon, Flex, Image } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Profile', path: '/profile' },
  { name: 'Blog', path: '/blog' },
  { name: 'Privacy', path: 'privacy' },
  { name: 'Contact', path: '/contact' }
]
const active = {
  bg: 'linear-gradient(to top, rgba(0, 191, 77, 1) 0%, rgba(2, 153, 62, 1) 100%)',
  color: 'white',
  shadow:
    '0 1px 6px 0 rgba(245, 155, 90, 0.02), 0 8px 13px 0 rgba(245, 155, 90, 0.03), 0 20px 26px 0 rgba(245, 155, 90, 0.04)'
}

const Nav: FC = () => {
  const router = useRouter()

  return (
    <Box
      w='full'
      h={20}
      bg='transparent'
      px={{ base: 6, md: 12, lg: 4, xl: 16 }}
      pos={'absolute'}
      top={0}
      zIndex={3}
    >
      <Flex justifyContent={'space-between'} align='center'>
        <Image
          src={'/images/logo.png'}
          alt='Family Line Logo'
          boxSize={20}
          mt={2}
        />

        <Box d={{ base: 'none', xl: 'block' }}>
          <Flex align='center' ml={{ md: 6, lg: 20 }}>
            {Links.map(item => (
              <Box
                key={item.name}
                fontWeight={'bold'}
                fontSize={{ md: 16, lg: 18 }}
                px={{ md: 5, lg: 8 }}
                py={2}
                rounded={'full'}
                cursor={'pointer'}
                {...(router.pathname === item.path ? active : '')}
              >
                {item.name}
              </Box>
            ))}
          </Flex>
          <Box onClick={() => null}>
            <Icon as={FaBars} color={'family.500'} boxSize={7} />
          </Box>
        </Box>

        <Flex
          d={{ base: 'flex', xl: 'none' }}
          align='center'
          ml={{ md: 3, lg: 0 }}
        >
          <Box fontWeight={'bold'} fontSize={{ md: 16, lg: 18 }} px={4} py={5}>
            Sign In
          </Box>
          <Box fontWeight={'bold'} fontSize={{ md: 16, lg: 18 }} px={4} py={5}>
            Get Started
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Nav
