import { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { Box, Button, Stack } from '@chakra-ui/react'

function Blockchain() {
  
  return (
    <Stack>
      <Box >
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        
      </Box>
    </Stack>
  )
}

export default Blockchain
