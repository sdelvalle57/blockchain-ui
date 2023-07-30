
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, Input, InputGroup, InputRightElement, StackDivider, Tag, TagLabel, TagRightIcon, VStack } from '@chakra-ui/react'
import { useInitBlockchainMutation } from '../../apollo/__generated__/graphql';
import { useAccount, useNetwork, useSigner } from 'wagmi';
import { useState } from 'react';
import { ethers } from 'ethers';
import { DeleteIcon } from '@chakra-ui/icons';

function Blockchain() {

  const { address } = useAccount();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();

  const [inputValue, setInputValue] = useState("");
  const [fundingAddresses, setFundingAddresses] = useState<Array<string>>([])
  const [disabled, setDisabled] = useState<boolean>(true)
  const [formError, setFormError] = useState<string | null>(null)

  const [initBlockchainMutation, { data, loading, error }] = useInitBlockchainMutation();

  const onInitBlockchain = async () => {
    if (signer) {

      try {
        const chainId = chain?.id as number;
        // const message = JSON.stringify({ data: fundingAddresses, chainId })

        const message = "heelo";

        console.log(message)

        const signature = (await signer.signMessage(message));
        console.log(signature)

        console.log(ethers.utils.verifyMessage(message, signature))



        initBlockchainMutation({
          variables: {
            sender: address as string,
            message,
            signature: signature.substring(2),
            chainId
          }
        })
      } catch (e: any) {
        console.log(e)
        setFormError(e.message)
      }
    }
  }

  const checkAddress = (value: string) => {
    setInputValue(value);
    if (fundingAddresses.findIndex(a => a.toLowerCase() === value.toLowerCase()) >= 0) {
      return setDisabled(true)
    }
    try {
      ethers.utils.getAddress(value)
      setDisabled(false)
    } catch (e) {
      setDisabled(true)
    }
  }

  const onAdd = () => {
    const address = ethers.utils.getAddress(inputValue)
    setFundingAddresses(arr => [...arr, address]);
    setInputValue("")
    setDisabled(true)
  };

  const onRemove = (address: string) => {
    setFundingAddresses(arr => arr.filter(a => a.toLowerCase() !== address.toLowerCase()));

  }

  if (loading) return <div>Loading...</div>
  if (data) console.log(data.initNewBlockchain)
  

  if (formError) return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>{formError}</AlertDescription>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={() => setFormError(null)}
      />
    </Alert>
  )

  return (
    <Box maxW='lg' margin={'auto'} >

      <InputGroup >
        <Input
          pr='4.5rem'
          placeholder='Enter Funding Address'
          value={inputValue}
          onChange={(e) => checkAddress(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' isDisabled={disabled} onClick={onAdd}>
            Add
          </Button>
        </InputRightElement>
      </InputGroup>

      <VStack
        margin={"15px auto"}
        divider={<StackDivider borderColor='gray.200' />}
        spacing={2}
        align='center'>
        {
          fundingAddresses.map(a => {
            return (
              <Tag size={"lg"} key={a} variant='outline' colorScheme='blue'>
                <TagLabel>{a}</TagLabel>
                <TagRightIcon onClick={() => onRemove(a)} as={DeleteIcon} cursor={"pointer"} />
              </Tag>
            )
          })

        }
      </VStack>

      <Button
        margin={'10px'}
        aria-label="Decrement value"
        isDisabled={fundingAddresses.length === 0}
        onClick={onInitBlockchain}
        isLoading={false}
        loadingText='Submitting'
      >
        Init Blockchain
      </Button>

      {
        error ?
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
          :
          null
      }

    </Box>
  )
}

export default Blockchain


//0x23C6599aAdF44Be7cbaD6D9051bb4C2255b2f713
//0x05db46B2588ebB55B4525b5d6103F41a776f9ec2