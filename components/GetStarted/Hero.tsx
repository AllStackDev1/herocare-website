import { FC } from 'react'
import { Box, Flex, Text, Image, Button, Heading } from '@chakra-ui/react'

const Hero: FC = () => {
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
      <Flex mt={{ base: 5, xl: 28 }} flexDir="column" justify="end">
        <Box w={{ '2xl': 123 }}>
          <Heading
            fontWeight={400}
            mb={{ base: 3, xl: 6 }}
            fontSize={{ base: '4xl', xl: '70px' }}
            lineHeight={{ base: '40px', xl: '120%' }}
          >
            Find your new role at a click of a button
          </Heading>

          <Text
            fontSize={{ base: 'sm', xl: 'xl' }}
            lineHeight={{ base: '24px', xl: '160%' }}
          >
            HeroCare takes the stress out of finding your new permanent or
            temporary role. Our platform gathers your criteria and availability
            and matches you with the most suitable healthcare providers - Care
            Homes, Hospitals and Clinics. We make the recruitment journey
            transparent so you know where you are each step of the way. We also
            take care of your contract, and billing needs so you get paid
            faster.
          </Text>
        </Box>

        <Box mt={{ base: 3, xl: 10 }}>
          <Button
            py={{ base: 6, xl: 8 }}
            px={{ base: 4, xl: 10 }}
            rounded={{ base: 'md', xl: 'xl' }}
            variant="solid"
            fontWeight={600}
            _focus={{ outline: 'none' }}
            colorScheme="brandPurple"
            fontSize={{ base: 'sm', xl: 'xl' }}
          >
            Join our waiting list
          </Button>
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
