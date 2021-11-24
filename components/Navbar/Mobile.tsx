import { FC } from 'react'
import NextLink from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  Box,
  Text,
  Flex,
  Link,
  Fade,
  Divider,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'

interface IProps {
  bgColor?: string
  links: { name: string; path: string }[]
}

const MobileNavbar: FC<IProps> = ({ links, bgColor }) => {
  const { isOpen, onToggle } = useDisclosure()

  const menus = [
    ...links,
    {
      name: 'Login',
      path: `${process.env.NEXT_APP_APP_URL || ''}/login`
    },
    {
      name: 'Sign Up',
      path: `${process.env.NEXT_APP_APP_URL || ''}/register`
    }
  ]

  return (
    <Flex
      h={24}
      as="nav"
      w="full"
      pos="fixed"
      zIndex={100}
      align="center"
      bgColor={bgColor}
      px={{ base: 2 }}
      justify="space-between"
      d={{ base: 'flex', xl: 'none' }}
    >
      <Flex w="full" justify="center">
        <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
          <Box
            bgImage="url('./images/logo.png')"
            bgRepeat="no-repeat"
            bgSize="contain"
            w={32}
            h={6}
          />
        </Link>
      </Flex>

      <Box>
        <IconButton
          aria-label="toggle menu"
          onClick={() => onToggle()}
          color="family.500"
          icon={isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          bg="transparent"
          role="button"
        />
        <Box pos="relative">
          <Fade in={isOpen}>
            {isOpen && (
              <Box
                w={40}
                right={4}
                shadow="lg"
                zIndex={10}
                rounded="md"
                pos="absolute"
                bgColor="white"
              >
                <Box py={2}>
                  {menus.map((m, idx) => (
                    <Box>
                      <Flex justify="end" pr={5} py={3} key={idx}>
                        <NextLink href={m.path} passHref>
                          <Link>
                            <Text fontWeight={700}>{m.name}</Text>
                          </Link>
                        </NextLink>
                      </Flex>
                      {menus.length !== idx + 1 && <Divider />}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Fade>
        </Box>
      </Box>
    </Flex>
  )
}

export default MobileNavbar
