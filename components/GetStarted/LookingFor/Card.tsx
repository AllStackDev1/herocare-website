import { FC } from 'react'
import { Box, GridItem, Image, Text, Heading } from '@chakra-ui/react'

interface IProps {
  title: string
  text: string
}

const Card: FC<IProps> = ({ title, text }) => {
  return (
    <GridItem
      px={6}
      rounded="xl"
      pos="relative"
      w={{ xl: 80 }}
      textAlign="left"
      py={{ base: 8, xl: 20 }}
      boxShadow="0px 2px 134px 4px rgba(0, 0, 0, 0.06)"
    >
      <Box>
        <Image src="./images/file.png" />
      </Box>
      <Box mt={6}>
        <Heading
          fontSize={{ base: 'xl', xl: '2xl' }}
          fontWeight={400}
          lineHeight="36px"
        >
          {title}
        </Heading>
      </Box>
      <Box mt={{ base: 2, xl: 4 }}>
        <Text
          color="gray.600"
          fontSize={{ base: 'md', xl: 'lg' }}
          lineHeight={{ xl: '28px' }}
        >
          {text}
        </Text>
      </Box>
    </GridItem>
  )
}

export default Card
