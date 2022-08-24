import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';  
import { Products } from '../Products/Products';

export const Chakra = () => {
  return (
    <ChakraProvider>
      <Products />
    </ChakraProvider>
  )
}
