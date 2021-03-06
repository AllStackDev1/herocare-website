import { FC } from 'react'
import { Box, Flex, Link, Text, Image, Button, Heading } from '@chakra-ui/react'

const Hero: FC<{ ctaLink: string }> = ({ ctaLink }) => {
  return (
    <Flex
      w="full"
      pl={{ base: 5, xl: 24 }}
      pr={{ base: 5, xl: 0 }}
      pb={{ base: 10, xl: 24 }}
      flexDir={{ base: 'column', xl: 'row' }}
      justifyContent="space-between"
    >
      <Box d={{ base: 'block', xl: 'none' }} mt={{ base: 20 }}>
        <Image src="./images/overlay-home-hero.png" alt="mother and daughter" />
      </Box>
      <Flex mt={{ base: 5, xl: 28 }} flexDir="column" justify="end">
        <Box w={{ xl: 122 }}>
          <Heading
            fontWeight={400}
            mb={{ base: 3, xl: 6 }}
            fontSize={{ base: '4xl', xl: '70px' }}
            lineHeight={{ base: '40px', xl: '120%' }}
          >
            Fill your Carer vacancies at a click of a button
          </Heading>

          <Text
            fontSize={{ base: 'sm', xl: 'xl' }}
            lineHeight={{ base: '24px', xl: '160%' }}
          >
            We help you recruit international visa-ready Nurses and Carers for
            your Care Home, Hospital or Home Care needs.
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
        w={{ xl: 120 }}
        h={{ xl: 125 }}
        d={{ base: 'none', xl: 'block' }}
      >
        <Box pos="absolute" right={0}>
          <Image src="./images/hero-decor-1.svg" alt="mother and daughter" />
        </Box>
        <Box
          bottom={{ xl: 12 }}
          pos="absolute"
          w={{ xl: 116 }}
          right={{ xl: 20 }}
        >
          <Image
            src="./images/overlay-home-hero.png"
            alt="mother and daughter"
          />
        </Box>
      </Box>
    </Flex>
  )
}

export default Hero
