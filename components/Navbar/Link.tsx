import NextLink, { LinkProps } from 'next/link'
import { FC } from 'react'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

const Link: FC<LinkProps & ChakraLinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  ...anchorProps
}) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <ChakraLink tabIndex={0} target={target} role="link" {...anchorProps}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default Link
