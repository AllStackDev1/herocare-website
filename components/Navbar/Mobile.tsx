import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Text, Icon, Flex, Image, Divider } from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Profile', path: '/profile' },
  { name: 'Blog', path: '/blog' },
  { name: 'Privacy', path: 'privacy' },
  { name: 'Contact', path: '/contact' }
]

const active = {
  color: 'family.500',
  textDecoration: 'underline'
}

const MobileNav: FC = () => {
  const router = useRouter()
  return (
    <Box w='100vw' h='100vh' bg='white' zIndex={5} pos={'relative'} p={8}>
      <Flex align='center'>
        <Box>
          <Image
            src={'/images/logo.png'}
            alt='Family Line Logo'
            boxSize={20}
            mt={2}
          />
        </Box>
        <Icon
          as={FaTimes}
          pos={'absolute'}
          boxSize={8}
          color={'family.500'}
          right={8}
          onClick={() => null}
        />
      </Flex>
      <Box mt={12} textAlign={'center'}>
        {Links.map(item => (
          <Text
            key={item.name}
            mb={6}
            fontWeight='bold'
            fontSize={20}
            {...(router.pathname === item.path ? active : '')}
          >
            {item.name}
          </Text>
        ))}
      </Box>
      <Divider borderColor='gray.400' />
      <Box mt={6} textAlign={'center'}>
        <Text
          mb={6}
          fontWeight='bold'
          fontSize={20}
          {...(router.pathname === '/login' ? active : '')}
        >
          Login
        </Text>
        <Text
          mb={6}
          fontWeight='bold'
          fontSize={20}
          {...(router.pathname === '/signup' ? active : '')}
        >
          Sign Up
        </Text>
      </Box>
    </Box>
  )
}

export default MobileNav
