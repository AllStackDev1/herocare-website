import '../styles/globals.css'
import '../public/fonts/fonts.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import Footer from '@components/Footer'
import DesktopNavbar from '@components/Navbar/Desktop'
import MobileNavbar from '@components/Navbar/Mobile'

import { theme } from 'theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const noNavPages: string[] = []
  const noFooterPages: string[] = ['/404']

  const showNav = !noNavPages.includes(router.pathname)
  const showFooter = !noFooterPages.includes(router.pathname)

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.pathname}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1,
              transition: { duration: 0.5 }
            }
          }}
        >
          <Box bgColor="white" pos="relative" overflow="hidden">
            {showNav && (
              <>
                <DesktopNavbar />
                {/* <MobileNavbar /> */}
              </>
            )}

            <Component {...pageProps} />

            {showFooter && <Footer />}
          </Box>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
