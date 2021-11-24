import { FC } from 'react'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import Step from './Step'

const Hire: FC = () => {
  const steps = [
    {
      title: 'Enter your requirements',
      text: 'Enter your job requirements and create a company profile. You can choose to post a live job ad that will appear to the relevant candidates or search the live database. You can be sure that we do preliminary vetting on all our candidates to ensure you are getting the highest calibre candidates.'
    },
    {
      title: 'Get matched',
      text: 'Our software matches you to candidates based on the experience, availability and other preferences your company requires. You can view the candidate profiles, shortlist them and invite them for a virtual or in- person interview straight from our platform.'
    },
    {
      title: 'Interview and hire',
      text: 'We provide you with the interviewing, messaging and contracting tools to enable end- to-end recruitment under one platform. No need to waste time switching between different hiring softwares.'
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
          Hire Permanent and Temporary candidates with these easy steps
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
