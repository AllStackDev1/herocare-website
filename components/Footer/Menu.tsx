import { FC } from 'react'
import NextLink from 'next/link'
import { Flex, Link, Heading, GridItem } from '@chakra-ui/react'

interface IProps {
  title: string
  links: { title: string; link: string }[]
}

const Menu: FC<IProps> = ({ title, links }) => {
  return (
    <GridItem textAlign="left">
      <Heading
        fontSize="md"
        color="white"
        fontFamily="MartelSans"
        fontWeight={600}
      >
        {title}
      </Heading>
      <Flex mt={2} direction="column" color="rgba(255, 255, 255, 0.8)">
        {links.map(e => (
          <NextLink href={e.link} passHref>
            <Link
              py={2}
              fontSize="md"
              lineHeight="24px"
              _focus={{ outline: 'none' }}
              _hover={{ outline: 'none' }}
            >
              {e.title}
            </Link>
          </NextLink>
        ))}
      </Flex>
    </GridItem>
  )
}

export default Menu
