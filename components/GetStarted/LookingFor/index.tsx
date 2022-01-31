import { FC } from 'react'
import { Box, Grid, Container, Heading, Flex } from '@chakra-ui/react'
import Card from './Card'

const LookingFor: FC = () => {
  const data = [
    {
      title: '1. You are a Nurse',
      text: `
        -You trained outside the UK, but you want to work in the UK. <br />                                                                                                                                                                  -You are eligible to register with the UK Nursing and Midwifery Council                                                                                                   
        -You trained in the UK, but you need a sponsor licence <br />                                                     
        -You are willing to work in a Care Home
      `
    },
    {
      title: '2. You are a Nurse',
      text: `-You must pass the IELTS speaking, listening, reading and writing exam with a score of 7.0 or above. The CBT and OSCE Nurse related exams will be taken in the UK.`
    },
    {
      title: '3. You are a Nurse',
      text: `Pass the employer interview and complete the Health and Care Worker Visa application with a clean criminal background check and health assessment.`
    },
    {
      title: '1. You are a Carer',
      text: `
        -You have care experience and you want to start your career with a UK Care Home. <br />                                                                                                                                                      
        If you have no previous care experience you are welcome to apply. We will train you.
      `
    },
    {
      title: '2. You are a Carer',
      text: '-You must pass the IELTS speaking, reading, writing and writing exam with a score of 4.0 or above.'
    },
    {
      title: '3. You are a Carer',
      text: `From 15 February 2022, Care workers will be able to work in the UK via the Health and Care Worker Visa once they have obtained a certificate of sponsorship from an employer.`
    }
  ]

  return (
    <Container
      // py={{ base: 10, xl: 24 }}
      minW={{ lg: '7xl', '4xl': '8xl' }}
    >
      <Box mb={{ base: 5, xl: 10 }}>
        <Heading fontSize={{ base: '2xl', xl: '5xl' }} fontWeight={400}>
          Requirements:
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
