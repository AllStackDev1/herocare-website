import { FC } from 'react'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import Card from './Card'

const YourProblems: FC = () => {
  const problems = [
    {
      title: '1. International Candidate Sourcing',
      text: 'HeroCare sources internationally qualified Nurses and Carers for UK Care Homes and Hospitals of any size, through our partner offices. We have both recruitment and medical experience on our team, so you can trust us to source the most suited candidates for your needs.'
    },
    {
      title: '2. International Candidate Screening',
      text: 'We pre-screen, background check and interview Nurses and train Carers before we introduce them to your organisation. Our medical team ensure candidates have the qualifications and language certifications to settle and register in the UK.'
    },
    {
      title: '3. International Candidate Placing',
      text: 'HeroCare supports international candidates with their visa applications, flight bookings and settling into UK so all you have to worry about is a warm welcome and subsequent training.'
    },
    {
      title: '4. Local Recruitment',
      text: 'We can also help you recruit UK Nurses and Carers, who are ready to work on a permanent or temporary basis.'
    }
  ]

  return (
    <Box
      w="full"
      pb={{ base: 10, xl: 28 }}
      mr={{ base: 0, xl: 20 }}
      pos="relative"
      textAlign="center"
      bgColor="brand.bgColor.100"
    >
      <Box
        w="full"
        pos={{ base: 'relative', xl: 'absolute' }}
        top={{ xl: 24 }}
        py={{ base: 5, xl: 0 }}
      >
        <Heading fontWeight={400} fontSize={{ base: '3xl', xl: '5xl' }}>
          We understand your problems
        </Heading>
      </Box>
      <Flex
        align="end"
        h={{ xl: 123 }}
        px={{ xl: 10 }}
        bgColor="brand.bgColor.200"
        w={{ base: 'full', xl: '90%' }}
        borderRadius="0px 400px 0px 0px"
      >
        <Grid
          columnGap={6}
          px={{ base: 5, xl: 0 }}
          rowGap={{ base: 6, xl: 0 }}
          templateColumns={{ xl: 'repeat(4, 1fr)' }}
          templateRows={{ base: 'repeat(4, 1fr)', xl: '100%' }}
        >
          {problems.map((e, i) => (
            <Card key={i} title={e.title} text={e.text} />
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}

export default YourProblems
