import { FC } from 'react'
import { Box, GridItem, Text, Heading } from '@chakra-ui/react'

interface IProps {
  title: string
  text: string
  color: string
}

interface IStyle {
  h: number
  w: number
  pos: 'absolute'
  bgColor: string
  borderTopLeftRadius: string
  borderBottomRightRadius: string
}

const Card: FC<IProps> = ({ title, text, color }) => {
  const styles: IStyle = {
    h: 6,
    w: 12,
    pos: 'absolute',
    bgColor: color,
    borderTopLeftRadius: 'xl',
    borderBottomRightRadius: 'xl'
  }
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
      <Box top={0} left={0} {...styles} />
      <Box mt={6}>
        <Heading
          fontWeight={400}
          fontSize={{ base: '2xl', xl: '34px' }}
          lineHeight={{ base: '32px', xl: '36px' }}
        >
          {title}
        </Heading>
      </Box>
      <Box mt={4}>
        <Text
          fontSize={{ base: 'md', xl: 'lg' }}
          lineHeight={{ base: '30px', xl: '32px' }}
        >
          {text}
        </Text>
      </Box>
      <Box right={0} bottom={0} {...styles} />
    </GridItem>
  )
}

export default Card
