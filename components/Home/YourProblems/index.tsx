import { FC } from 'react'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import Card from './Card'

const YourProblems: FC = () => {
  const problems = [
    {
      title: 'Lack of Staff',
      text: 'Are you facing staff shortages due to Covid-19, Brexit and changing regulations?'
    },
    {
      title: 'Lengthy time-to-hire',
      text: 'Are your job boards and agencies taking too long to find suitable candidates?'
    },
    {
      title: 'High recruitment fees',
      text: 'Are you over-spending on recruitment fees? No one should be forced to pay huge fees such as 30% per hire.'
    },
    {
      title: 'Lack of transparency & excessive administration',
      text: 'We know that back and forth communication with recruiters can be unclear and overwhelming.'
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
        h={{ xl: 120 }}
        pl={{ xl: 24 }}
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
