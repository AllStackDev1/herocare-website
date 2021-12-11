import { FC } from 'react'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import Step from './Step'

const HowItWorks: FC = () => {
  const steps = [
    {
      title: 'Register your requirements & get vetted by our team',
      text: 'Fill out our quick online application form, upload your documentation for background screening and complete a virtual interview with our in- house team. Once you pass, your online profile will go live.'
    },
    {
      title: 'Receive the best suited recommendations',
      text: 'Once your profile is live, we can show you clients who are looking for candidates like you. Our software will automatically match you with relevant jobs. You can reach out or be contacted - the choice is yours.'
    },
    {
      title: 'Get interviewed and hired at the click of a button',
      text: "Once you've been matched with your dream job, you will be invited to a virtual or in-person interview. Once successful, you will be made an offer all within our platform and receive your contract. Through your dashboard you can manage time-sheets and your billing for temporary hours. If you are applying for permanent roles, we will say goodbye once you have been hired, but we look forward to welcoming you again when you are looking for your next assignment."
    }
  ]

  return (
    <Flex
      w="full"
      align="center"
      id="how-it-works"
      flexDir="column"
      pos="relative"
      pt={{ xl: 16 }}
      style={{ scrollMarginTop: '50px' }}
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
          How HeroCare works
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

export default HowItWorks
