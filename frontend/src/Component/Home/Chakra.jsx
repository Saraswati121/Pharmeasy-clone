import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './Home';
import { Footer } from './Footer';

const Charkra = () => {
    return (
        <ChakraProvider>
            <Home />
            <Footer/>
        </ChakraProvider>
    )
}

export default Charkra