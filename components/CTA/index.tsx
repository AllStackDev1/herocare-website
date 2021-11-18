import { FC } from 'react'
import { Box, Text, Button, Heading, Container } from '@chakra-ui/react'
import Art from './Art'

const CTA: FC = () => {
  return (
    <Box w="full" py={{ xl: 24 }} pos="relative" bgColor="brand.purple.200">
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
            fontSize={{ xl: '72px' }}
            lineHeight={{ xl: '120%' }}
            mb={{ xl: 4 }}
          >
            A final header with a strong cta
          </Heading>
          <Text>It breaks up the intimidating blocks of text.</Text>
        </Box>
        <Box mt={{ xl: 10 }}>
          <Button
            py={8}
            px={10}
            rounded="xl"
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
