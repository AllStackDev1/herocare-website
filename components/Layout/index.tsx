import { FC } from 'react'
import { NextSeo } from 'next-seo'
import { Box } from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import * as _ from 'lodash'

const MotionBox = motion(Box)
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

interface ILayout {
  link?: string
  description?: string
  image_url?: string
}

const Layout: FC<ILayout> = ({
  children,
  image_url = '',
  link = '',
  description = ''
}) => {
  const router = useRouter()

  const main_site_url = 'https://www.herocare.com'
  const main_site_title = 'Hero Care'

  let name: string | undefined = router.pathname
    .split('-')
    .map(e => _.upperFirst(e))
    .join()

  if (router.pathname === '/') {
    name = 'Home'
  }

  return (
    <>
      <NextSeo
        title={`${name} | ${main_site_title}`}
        description={description || name}
        canonical={main_site_url}
        openGraph={{
          url: `${main_site_url}/${link || name?.toLowerCase()}`,
          title: `${name} | ${main_site_title}`,
          description: description || name,
          images: [
            {
              url: image_url,
              width: 800,
              height: 600,
              alt: main_site_title
            }
          ],
          site_name: main_site_title
        }}
        twitter={{
          handle: '@herocare',
          site: `${main_site_url}/${name?.toLowerCase()}`,
          cardType: 'summary_large_image'
        }}
      />
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ...transition } }}
        exit={{ opacity: 0, transition: { ...transition } }}
        as="main"
        role="main"
        aria-labelledby="main"
        h="100%"
        fontFamily="body"
        pos="relative"
      >
        {children}
      </MotionBox>
    </>
  )
}

export default Layout
