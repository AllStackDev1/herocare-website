import { FC } from 'react'
import { Box, Link, Flex, Text, Image, Button, Heading } from '@chakra-ui/react'

const Hero: FC<{ ctaLink: string }> = ({ ctaLink }) => {
  return (
    <Flex
      w="full"
      pl={{ base: 5, xl: 24 }}
      pr={{ base: 5, xl: 0 }}
      pb={{ base: 10, xl: 36 }}
      flexDir={{ base: 'column', xl: 'row' }}
      justifyContent="space-between"
    >
      <Box d={{ base: 'block', xl: 'none' }} mt={{ base: 20 }}>
        <Image
          src="./images/boy-drawing-on-tablet.png"
          alt="mother and daughter"
        />
      </Box>
      <Flex mt={{ base: 5, xl: 28 }} flexDir="column" justify="center">
        <Box w={{ '2xl': 123 }}>
          <Heading
            fontWeight={400}
            mb={{ base: 3, xl: 6 }}
            fontSize={{ base: '4xl', xl: '70px' }}
            lineHeight={{ base: '40px', xl: '120%' }}
          >
            Become a Nurse or Carer in the UK
          </Heading>

          <Text
            fontSize={{ base: 'sm', xl: 'xl' }}
            lineHeight={{ base: '24px', xl: '160%' }}
          >
            Are you a qualified Nurse, Carer or someone passionate about the
            care industry? We can help you secure a job and relocate to the UK.
          </Text>
        </Box>

        <Box mt={{ base: 3, xl: 10 }}>
          <Link
            href={ctaLink}
            _focus={{ outline: 'none' }}
            _hover={{ outline: 'none' }}
          >
            <Button
              w="30%"
              variant="solid"
              fontWeight={600}
              py={{ base: 6, xl: 8 }}
              colorScheme="brandPurple"
              _focus={{ outline: 'none' }}
              rounded={{ base: 'md', xl: 'xl' }}
              fontSize={{ base: 'sm', xl: 'xl' }}
            >
              Recruit Now
            </Button>
          </Link>
        </Box>
      </Flex>
      <Box
        pos="relative"
        w={{ '2xl': 125 }}
        h={{ '2xl': 126 }}
        d={{ base: 'none', xl: 'block' }}
      >
        <Box pos="absolute" right={0}>
          <Image src="./images/hero-decor-2.svg" alt="illustration" />
        </Box>
        <Box
          pos="absolute"
          w={{ '2xl': 116 }}
          right={{ '2xl': 20 }}
          bottom={{ '2xl': 0 }}
        >
          <Image
            src="./images/boy-drawing-on-tablet.png"
            alt="decor illustration"
          />
        </Box>
      </Box>
    </Flex>
  )
}

export default Hero
