import { FC } from 'react'
import { Box, GridItem, Icon, Text, Heading } from '@chakra-ui/react'
import { FolderIcon } from 'theme/Icons'

interface IProps {
  title: string
  text: string
}

const Card: FC<IProps> = ({ title, text }) => {
  return (
    <GridItem
      px={5}
      pt={6}
      pb={14}
      shadow="xl"
      rounded="xl"
      pos="relative"
      bgColor="white"
      textAlign="left"
      w={{ xl: 72 }}
    >
      <Box>
        <Icon as={FolderIcon} boxSize={20} />
      </Box>
      <Box mt={6}>
        <Heading fontSize="xl" fontWeight={400} lineHeight="32px">
          {title}
        </Heading>
      </Box>
      <Box mt={4}>
        <Text fontSize={{ base: 'sm', xl: 'md' }} lineHeight="28px">
          {text}
        </Text>
      </Box>
      <Box
        h={6}
        w={12}
        right={0}
        bottom={0}
        pos="absolute"
        bg="brand.bgColor.300"
        borderTopLeftRadius="xl"
        borderBottomRightRadius="xl"
      />
    </GridItem>
  )
}

export default Card
