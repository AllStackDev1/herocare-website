import { FC } from 'react'
import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  Container,
  Heading
} from '@chakra-ui/react'

const Options: FC = () => {
  const data = [
    {
      title: 'Career',
      src: 'man-sitting-on-sofa.png'
    },
    {
      title: 'Nurse',
      src: 'man-listening-music.png'
    }
  ]
  return (
    <Box bgColor="#F9FAFC">
      <Container py={{ xl: 24 }} minW={{ lg: '7xl', '4xl': '8xl' }}>
        <Box mb={{ xl: 10 }}>
          <Heading fontSize="5xl" fontWeight={400}>
            Are you a:
          </Heading>
        </Box>
        <HStack spacing={20}>
          {data.map((e, i) => (
            <Flex
              w={80}
              h={80}
              key={i}
              rounded="xl"
              bgColor="#FFECD7"
              align="center"
              flexDir="column"
              justify="center"
            >
              <Image src={'./images/' + e.src} h={40} />
              <Box mt={2}>
                <Text>{e.title}</Text>
              </Box>
            </Flex>
          ))}
        </HStack>
      </Container>
    </Box>
  )
}

export default Options
