import { FC } from 'react'
import { Box, Grid, Heading, Flex, Container } from '@chakra-ui/react'
import Card from './Card'

const AnswerYes: FC = () => {
  const answers = [
    {
      title: 'Get instant access to our staff database',
      text: 'We provide you access to a database of pre-vetted Carers. We have an in-house Carer, Nurse and Doctor team that selects the best candidates for our database.',
      color: '#E8B4A9'
    },
    {
      title: 'Automated matching',
      text: 'Our platform automatically selects the most suited candidates based on your unique requirements. Say goodbye to spending hours sifting through candidate cvs.',
      color: '#A1A6DB'
    },
    {
      title: 'Simpler & cheaper fees',
      text: 'Our fees are up to 60% cheaper than mainstream recruitment companies.',
      color: '#88BAAE'
    },
    {
      title: 'Hiring tools',
      text: 'We provide you with a live candidate database, a candidate tracking system, virtual interviews, contract management, time-sheet management capabilities and payment solutions.',
      color: '#DCAC64'
    }
  ]
  return (
    <Flex
      w="full"
      align="center"
      flexDir="column"
      pos="relative"
      pt={{ xl: 16 }}
      pb={{ xl: 28 }}
    >
      <Box
        py={{ base: 10, xl: 0 }}
        w={{ base: '95%', xl: '50%' }}
        textAlign="center"
      >
        <Heading
          fontWeight={400}
          fontSize={{ base: '3xl', xl: '4xl' }}
          lineHeight={{ base: '32px', xl: '60px' }}
        >
          If the answer to any of the above is yes, our recruitment platform is
          your solution
        </Heading>
      </Box>
      <Box
        bgImage="url('./images/curved-arrow.png')"
        d={{ base: 'none', xl: 'block' }}
        bgRepeat="no-repeat"
        bgSize="contain"
        pos="absolute"
        ml={-52}
        mt={12}
        w={130}
        h={52}
      />
      <Container mt={{ lg: 16 }} minW={{ lg: '3xl' }}>
        <Grid gap={10} templateColumns={{ xl: 'repeat(2, 1fr)' }}>
          {answers.map((e, i) => (
            <Card key={i} title={e.title} text={e.text} color={e.color} />
          ))}
        </Grid>
      </Container>
    </Flex>
  )
}

export default AnswerYes
