import { FC } from 'react'
import { Box, Flex, Text, Image, Button, Heading } from '@chakra-ui/react'

const Hero: FC = () => {
  return (
    <Flex
      w="full"
      pl={{ '2xl': 24 }}
      pb={{ '2xl': 24 }}
      justifyContent="space-between"
    >
      <Flex mt={28} flexDir="column" justify="end">
        <Box w={{ '2xl': 122 }}>
          <Heading
            fontWeight={400}
            fontSize={{ '2xl': '70px' }}
            lineHeight={{ '2xl': '120%' }}
            mb={{ '2xl': 6 }}
          >
            Fill your healthcare vacancies at a click of a button
          </Heading>

          <Text fontSize={{ '2xl': 'xl' }} lineHeight={{ '2xl': '160%' }}>
            UK's first live database of Carers and Nurses. Recruit your
            permanent and temporary staff from our easy to use platform.
          </Text>
        </Box>

        <Box mt={{ '2xl': 10 }}>
          <Button
            py={8}
            px={10}
            rounded="xl"
            variant="solid"
            fontWeight={600}
            _focus={{ outline: 'none' }}
            colorScheme="brandPurple"
            fontSize={{ base: 'sm', '2xl': 'xl' }}
          >
            Join our waiting list
          </Button>
        </Box>
      </Flex>
      <Box pos="relative" w={{ '2xl': 120 }} h={{ '2xl': 125 }}>
        <Box pos="absolute" right={0}>
          <Image src="./images/hero-decor-1.svg" alt="mother and daughter" />
        </Box>
        <Box
          bottom={{ '2xl': 12 }}
          pos="absolute"
          w={{ '2xl': 116 }}
          right={{ '2xl': 20 }}
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
