import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, FormControl, FormLabel, HStack, Select, Spacer } from '@chakra-ui/react'
import React from 'react'



const Filter = () => {
  return (
    <>
    <Flex>
            <FormControl w={"20em"}>
        <FormLabel>Filter Products</FormLabel>
        <HStack>
        <Select placeholder='Select Color' icon={<ChevronDownIcon />}>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
        </Select>
        <Select placeholder='Select Size' icon={<ChevronDownIcon />}>
            <option>Xs</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>Xl</option>
        </Select>
            </HStack>
        </FormControl>
<Spacer />

 <FormControl w={"20em"}>
        <FormLabel>Sort Products</FormLabel>
        <Select placeholder='Newest' icon={<ChevronDownIcon />}>
            <option>Price(Asc)</option>
            <option>Price(Desc)</option>
        </Select>
        </FormControl>
        </Flex>
        <br /><br />
        
    </>
  )
}

export default Filter