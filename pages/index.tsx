import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Home/Hero'
import YourProblems from '@components/Home/YourProblems'
import AnswerYes from '@components/Home/AnswerYes'
import Hire from '@components/Home/Hire'
import CTA from '@components/CTA'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero ctaLink="https://ps7w173z49l.typeform.com/to/G541nECs" />
      <YourProblems />
      <AnswerYes />
      <Hire />
      <CTA ctaLink="https://ps7w173z49l.typeform.com/to/G541nECs" />
    </Layout>
  )
}

export default Home
