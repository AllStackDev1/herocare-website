import { FC } from 'react'
import { Box, Flex, Text, Image, Button, Heading } from '@chakra-ui/react'

const Hero: FC = () => {
  return (
    <Flex
      w="full"
      pl={{ '2xl': 24 }}
      pb={{ '2xl': 36 }}
      justifyContent="space-between"
    >
      <Flex mt={28} flexDir="column" justify="end">
        <Box w={{ '2xl': 123 }}>
          <Heading
            fontWeight={400}
            fontSize={{ '2xl': '72px' }}
            lineHeight={{ '2xl': '120%' }}
            mb={{ '2xl': 6 }}
          >
            Find your new role at a click of a button
          </Heading>

          <Text fontSize={{ '2xl': 'xl' }} lineHeight={{ '2xl': '160%' }}>
            HeroCare takes the stress out of finding your new permanent or
            temporary role. Our platform gathers your criteria and availability
            and matches you with the most suitable healthcare providers - Care
            Homes, Hospitals and Clinics. We make the recruitment journey
            transparent so you know where you are each step of the way. We also
            take care of your contract, and billing needs so you get paid
            faster.
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
      <Box pos="relative" w={{ '2xl': 125 }} h={{ '2xl': 126 }}>
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
