import { FC } from 'react'
import { Box, GridItem, Text, Image, Heading } from '@chakra-ui/react'

interface IProps {
  title: string
  text: string
  pos: number
}

const Step: FC<IProps> = ({ title, text, pos }) => {
  return (
    <GridItem
      d="flex"
      pos="relative"
      alignItems="center"
      justifyContent="space-around"
      flexDir={pos ? 'row-reverse' : 'row'}
    >
      <Box
        pos="absolute"
        w={{ xl: 110 }}
        h={{ xl: 110 }}
        top={{ xl: -5 }}
        bgSize="contain"
        bgRepeat="no-repeat"
        left={pos ? { xl: -20 } : 'unset'}
        right={pos ? 'unset' : { xl: -20 }}
        bgImage="url('./images/blue-circle-shade.png')"
      />
      <Box
        ml={pos ? 0 : { xl: 20 }}
        mr={pos ? { xl: 20 } : 0}
        transform={`scaleX(${pos ? '-' : '+'}1)`}
      >
        <Image src="./images/man.png" alt="Man illustration with phone" />
      </Box>
      <Box
        mt={{ xl: 6 }}
        pl={pos ? { xl: 28 } : 0}
        pr={pos ? 0 : { xl: 28 }}
        w={{ xl: 126 }}
      >
        <Heading fontSize="34px" fontWeight={400} lineHeight="48px">
          {title}
        </Heading>
        <Box mt={4}>
          <Text fontSize="lg" lineHeight="32px">
            {text}
          </Text>
        </Box>
      </Box>
    </GridItem>
  )
}

export default Step
