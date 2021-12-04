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
      flexDir={{ base: 'column', xl: pos ? 'row-reverse' : 'row' }}
    >
      <Box
        pos="absolute"
        w={{ xl: 110 }}
        h={{ xl: 110 }}
        top={{ xl: -5 }}
        bgSize="contain"
        bgRepeat="no-repeat"
        d={{ base: 'none', xl: 'block' }}
        left={pos ? { xl: -20 } : 'unset'}
        right={pos ? 'unset' : { xl: -20 }}
        bgImage="url('./images/blue-circle-shade.png')"
      />
      <Box
        ml={pos ? 0 : { xl: 20 }}
        mr={pos ? { xl: 20 } : 0}
        w={{ base: '80%', xl: 'full' }}
        transform={`scaleX(${pos ? '-' : '+'}1)`}
      >
        <Image src="./images/man.png" alt="Man illustration with phone" />
      </Box>
      <Box
        mt={{ xl: 6 }}
        w={{ xl: 126, '4xl': 130 }}
        pl={{ base: 5, xl: pos ? 28 : 0 }}
        pr={{ base: 5, xl: pos ? 0 : 28 }}
      >
        <Heading
          fontWeight={400}
          fontSize={{ base: '2xl', xl: '34px' }}
          lineHeight={{ base: '32px', xl: '48px' }}
        >
          {title}
        </Heading>
        <Box mt={{ base: 2, xl: 4 }}>
          <Text
            fontSize={{ base: 'md', xl: 'lg' }}
            lineHeight={{ base: '24px', xl: '32px' }}
          >
            {text}
          </Text>
        </Box>
      </Box>
    </GridItem>
  )
}

export default Step
