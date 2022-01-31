import { FC } from 'react'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import Step from './Step'

const Hire: FC = () => {
  const steps = [
    {
      title: '1. Submit your job requirements',
      text: "Fill in the 'Hire Now' form with all your requirements and we will get in touch to discuss your job vacancies. To recruit staff internationally you will need a sponsor licence."
    },
    {
      title: '2. Interview',
      text: 'HeroCare works with international partners to vet, screen and interview international candidates. We ensure candidates are adequately trained and qualified before we introduce them to you.'
    },
    {
      title: '3. Job Offer',
      text: 'Once you provide a job offer and certificate of sponsorship to a candidate, we support them with visa processing - visa decisions take as little as 3 weeks.'
    }
  ]

  return (
    <Flex
      w="full"
      align="center"
      flexDir="column"
      pos="relative"
      pt={{ xl: 16 }}
    >
      <Box
        py={{ base: 10, xl: 0 }}
        w={{ base: '95%', xl: '40%' }}
        textAlign="center"
      >
        <Heading
          fontWeight={400}
          fontSize={{ base: '3xl', xl: '4xl' }}
          lineHeight={{ base: '32px', xl: '60px' }}
        >
          The Recruitment Process
        </Heading>
      </Box>
      <Grid gap={10} templateColumns={{ xl: 'repeat(1, 1fr)' }}>
        {steps.map((e, i) => (
          <Step key={i} title={e.title} text={e.text} pos={i % 2} />
        ))}
      </Grid>
    </Flex>
  )
}

export default Hire
