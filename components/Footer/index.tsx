import { FC } from 'react'
import {
  Box,
  Icon,
  Text,
  Flex,
  Grid,
  Image,
  Divider,
  Heading,
  GridItem
} from '@chakra-ui/react'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Footer: FC = () => {
  return (
    <Box
      px={6}
      py={8}
      bg={
        'linear-gradient(to top, rgba(0, 191, 77, 1) 0%, rgba(2, 153, 62, 1) 100%)'
      }
    >
      <Box w={'85%'} mx={'auto'}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={6}
          mt={12}
          mb={12}
        >
          <Box
            as={GridItem}
            colSpan={2}
            textAlign={{ base: 'center', lg: 'left' }}
            mb={12}
          >
            <Heading as='h5' fontSize={18} color='black'>
              FamilyLine
            </Heading>
            <Text
              fontSize={36}
              lineHeight={1.2}
              mt={4}
              fontWeight={'bold'}
              color='black'
            >
              The Evolution of Lineage Tracking
            </Text>
          </Box>
          <Box as={GridItem} colSpan={3}>
            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            >
              <Box as={GridItem} colSpan={1} mb={12}>
                <Heading as='h5' fontSize={16} color='black'>
                  Discover the Network
                </Heading>
                <Box>
                  <Text mt={4}>Where to shop</Text>
                  <Text mt={4}>Tour Guided</Text>
                  <Text mt={4}>Our tours</Text>
                  <Text mt={4}>About Us</Text>
                </Box>
              </Box>
              <Box as={GridItem} colSpan={1} mb={12}>
                <Heading as='h5' fontSize={16} color='black'>
                  Become a member
                </Heading>
                <Box>
                  <Text mt={4}>Join your Pairing</Text>
                  <Text mt={4}>Offer your service</Text>
                  <Text mt={4}>Are you a guide ?</Text>
                </Box>
              </Box>
              <Box as={GridItem} colSpan={1} mb={12}>
                <Heading as='h5' fontSize={16} color='black'>
                  Assistance
                </Heading>
                <Box>
                  <Text mt={4}>Support center</Text>
                  <Text mt={4}>FAQs</Text>
                  <Text mt={4}>Cancellation Options</Text>
                  <Text mt={4}>Reliability and security</Text>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Flex
          mt={4}
          mb={4}
          direction={'column'}
          align={{ base: 'center', lg: 'flex-end' }}
        >
          <Flex>
            <Flex
              w={10}
              h={10}
              rounded={'full'}
              bg={'white'}
              align='center'
              justify='center'
              mr={4}
            >
              <Icon as={FaFacebookF} boxSize={5} color=' rgba(0, 191, 77, 1)' />
            </Flex>
            <Flex
              w={10}
              h={10}
              rounded={'full'}
              bg={'white'}
              align='center'
              justify='center'
              mr={4}
            >
              <Icon as={FaTwitter} boxSize={5} color=' rgba(0, 191, 77, 1)' />
            </Flex>
            <Flex
              w={10}
              h={10}
              rounded={'full'}
              bg={'white'}
              align='center'
              justify='center'
              mr={4}
            >
              <Icon
                as={AiFillInstagram}
                boxSize={5}
                color=' rgba(0, 191, 77, 1)'
              />
            </Flex>
            <Flex
              w={10}
              h={10}
              rounded={'full'}
              bg={'white'}
              align='center'
              justify='center'
              mr={4}
            >
              <Icon
                as={FaPinterestP}
                boxSize={5}
                color=' rgba(0, 191, 77, 1)'
              />
            </Flex>
          </Flex>
        </Flex>
        <Divider borderColor='black' />
        <Flex
          justifyContent='space-between'
          align={'center'}
          mt={4}
          direction={{ base: 'column-reverse', lg: 'row' }}
        >
          <Flex align='center' mb={4}>
            <Image src='/images/logo-white.png' alt='logo-white' boxSize={14} />
            <Text fontSize={16} fontWeight={'bold'}>
              FamilyTree. All rights reserved.{' '}
            </Text>
          </Flex>
          <Flex mb={4}>
            <Text fontWeight='bold' ml={4}>
              About
            </Text>
            <Text fontWeight='bold' ml={4}>
              Site Map
            </Text>
            <Text fontWeight='bold' ml={4}>
              Terms
            </Text>
            <Text fontWeight='bold' ml={4}>
              Cookie Policy
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer
