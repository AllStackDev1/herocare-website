import { FC } from 'react'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import Step from './Step'

const HowItWorks: FC = () => {
  const steps = [
    {
      title: '1. Apply using the form below',
      text: `We will screen your application form and determine if you are a suitable candidate for our UK Care Homes. We don't charge you fees for the recruitment process, however, you are responsible to pay for your IELTs and visa processing cost - we will work with your future employer to get this reimbursed when you arrive in the UK.`
    },
    {
      title: '2. IELTS',
      text: 'We will require you to take the IELTS exam before we perform your background screening and introduce you to employers for an interview.'
    },
    {
      title: '3. Interview',
      text: 'Once you pass the IELTS exam and our background screening check, we will arrange interviews with employers in the UK. Once successful, we will support you with your visa application. Once your visa is granted, we will help you arrange flights and settle into life in the UK.'
    }
  ]

  return (
    <Flex
      w="full"
      align="center"
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
          Application Process
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
