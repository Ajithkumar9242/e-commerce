import { Button, Icon,  ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text, Tooltip } from '@chakra-ui/react'
import WithSubnavigation from '../Navbar'

import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import Filter from '../Filter'


const MensClothing = () => {
    const [MensClothing, setMensClothing] = useState([])



        useEffect(() => {
           fetch(`https://fakestoreapi.com/products/category/men's clothing`)
            .then((response) =>
            response.json()
            )
            .then((data) =>{
            setMensClothing(data)
            console.log(data);
            })
        
            
        }, [])


  return (
    <div>
       <WithSubnavigation />

       <Filter />

        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
    { MensClothing.map((val , key) =>{
        return  <Card maxW='lg' key={key} boxShadow='dark-lg'>
  <CardBody>
    <Image
      src={val.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{val.title}</Heading>
      <Text>
        {val.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${val.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
           <Tooltip label='Add to cart'>
      <Button variant='ghost' colorScheme='blue'>
   
        <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
      </Button>
        </Tooltip>
    </ButtonGroup>
  </CardFooter>
</Card>
    })}
    </SimpleGrid>
    </div>
  )
}

export default MensClothing