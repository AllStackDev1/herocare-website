import { FC } from 'react'
import { Box, GridItem, Text, Heading } from '@chakra-ui/react'

interface IProps {
  title: string
  text: string
  color: string
}

const Card: FC<IProps> = ({ title, text, color }) => {
  return (
    <GridItem
      px={5}
      pt={6}
      pb={14}
      rounded="xl"
      pos="relative"
      bgColor="white"
      textAlign="left"
      border={`1px solid ${color}`}
    >
      <Box
        h={6}
        w={12}
        top={0}
        left={0}
        pos="absolute"
        bgColor={color}
        borderTopLeftRadius="xl"
        borderBottomRightRadius="xl"
      />
      <Box mt={6}>
        <Heading fontSize="34px" fontWeight={400} lineHeight="36px">
          {title}
        </Heading>
      </Box>
      <Box mt={4}>
        <Text fontSize="lg" lineHeight="32px">
          {text}
        </Text>
      </Box>
      <Box
        h={6}
        w={12}
        right={0}
        bottom={0}
        pos="absolute"
        bgColor={color}
        borderTopLeftRadius="xl"
        borderBottomRightRadius="xl"
      />
    </GridItem>
  )
}

export default Card
