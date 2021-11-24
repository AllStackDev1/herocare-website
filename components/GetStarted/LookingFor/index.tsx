import { FC } from 'react'
import { Box, Grid, Container, Heading, Flex } from '@chakra-ui/react'
import Card from './Card'

const LookingFor: FC = () => {
  const data = [
    {
      title: 'A simpler way to get hired',
      text: 'Companies can reach out to you directly, but we also recommend the best opportunities.'
    },
    {
      title: 'Set your own salary expectations',
      text: 'Employers will see what you expect upfront to avoid those.'
    },
    {
      title: 'Exciting work opportunities',
      text: 'Find highly rated care homes and hospitals in one platform.'
    },
    {
      title: 'Freedom',
      text: 'Choose your own shifts and client.'
    },
    {
      title: 'Pick up additional shift',
      text: 'Supplement your current income with extra work if and when you want.'
    },
    {
      title: 'Less hustle',
      text: 'Automated interviewing, shift management and payments.'
    }
  ]

  return (
    <Container py={{ base: 10, xl: 24 }} minW={{ lg: '7xl', '4xl': '8xl' }}>
      <Box mb={{ base: 5, xl: 10 }}>
        <Heading fontSize={{ base: '2xl', xl: '5xl' }} fontWeight={400}>
          Are you looking for:
        </Heading>
      </Box>
      <Flex w="full" justify="center">
        <Grid
          gap={{ base: 10, xl: 20 }}
          templateColumns={{ xl: 'repeat(3, 1fr)' }}
        >
          {data.map((e, i) => (
            <Card key={i} title={e.title} text={e.text} />
          ))}
        </Grid>
      </Flex>
    </Container>
  )
}

export default LookingFor
