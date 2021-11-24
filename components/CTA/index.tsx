import { FC } from 'react'
import { Box, Text, Button, Heading, Container } from '@chakra-ui/react'
import Art from './Art'

const CTA: FC = () => {
  return (
    <Box
      w="full"
      pos="relative"
      py={{ base: 10, xl: 24 }}
      bgColor="brand.purple.200"
    >
      <Art pos="left" />
      <Art pos="right" />
      <Container
        w="full"
        color="white"
        textAlign="center"
        minW={{ lg: '7xl', '4xl': '8xl' }}
      >
        <Box>
          <Heading
            fontWeight={400}
            fontSize={{ base: '2xl', xl: '72px' }}
            lineHeight={{ base: '20px', xl: '120%' }}
            mb={{ base: 2, xl: 4 }}
          >
            A final header with a strong cta
          </Heading>
          <Text fontWeight={600} fontSize={{ base: 'sm', xl: '2xl' }}>
            It breaks up the intimidating blocks of text.
          </Text>
        </Box>
        <Box mt={{ base: 5, xl: 10 }}>
          <Button
            py={{ base: 6, xl: 8 }}
            px={{ base: 4, xl: 10 }}
            rounded={{ base: 'md', xl: 'xl' }}
            variant="solid"
            fontWeight={600}
            _focus={{ outline: 'none' }}
            colorScheme="brandOrange"
            fontSize={{ base: 'sm', xl: 'xl' }}
          >
            Join our waiting list
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default CTA
