import { useState } from 'react'

import { Box, Button, Stack } from '@chakra-ui/react'
import { useMutation, useQuery } from '@apollo/client';
import { MutationRoot, MutationRootInitNewBlockchainArgs, useGetHumanQuery } from '../../apollo/__generated__/graphql';
import { graphql } from 'graphql';

function Blockchain() {


const {data, loading, error} = useGetHumanQuery()

if(loading) return <>Loading</>

if(data) {

  console.log(data.human.name)
}

  return (
    <Stack>
      <Box >
        <Button
          aria-label="Decrement value"
          // onClick={() => initB}
        >
        </Button>

      </Box>
    </Stack>
  )
}

export default Blockchain
