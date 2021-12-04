/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Box } from '@chakra-ui/react'

interface IStyle {
  w: any
  h: any
  pos: 'absolute'
  bgColor: string
  left: any
  right: any
}

const Art: FC<{ pos: 'left' | 'right' }> = ({ pos }) => {
  const styles: IStyle = {
    w: { xl: 8 },
    h: { xl: 44 },
    pos: 'absolute',
    bgColor: 'brand.purple.700',
    left: pos == 'left' ? { xl: -5 } : 'unset',
    right: pos == 'right' ? { xl: -5 } : 'unset'
  }

  return (
    <>
      <Box
        top={0}
        {...styles}
        transform={{ xl: `rotate(${pos == 'left' ? '-' : ''}11.13deg)` }}
      />
      <Box
        bottom={0}
        {...styles}
        transform={{ xl: `rotate(${pos == 'left' ? '' : '-'}11.13deg)` }}
      />
    </>
  )
}

export default Art
