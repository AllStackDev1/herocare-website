import { FC } from 'react'
import { Box, Link, Button, Heading, Container } from '@chakra-ui/react'
import Art from './Art'

const CTA: FC<{ ctaLink: string }> = ({ ctaLink }) => {
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
            Apply Now
          </Heading>
        </Box>
        <Box mt={{ base: 5, xl: 10 }}>
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
              colorScheme="brandOrange"
              _focus={{ outline: 'none' }}
              rounded={{ base: 'md', xl: 'xl' }}
              fontSize={{ base: 'sm', xl: 'xl' }}
            >
              Recruit Now
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default CTA
