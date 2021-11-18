import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/GetStarted/Hero'
import CTA from '@components/CTA'
import Options from '@components/GetStarted/Options'
import LookingFor from '@components/GetStarted/LookingFor'
import HowItWorks from '@components/GetStarted/HowItWorks'

const GetStarted: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Options />
      <LookingFor />
      <HowItWorks />
      <CTA />
    </Layout>
  )
}

export default GetStarted
