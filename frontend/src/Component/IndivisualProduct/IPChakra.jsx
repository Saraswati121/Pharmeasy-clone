

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import IndividualProduct from './IndivisualProduct'

const IPChakra = () => {
    return (
        <ChakraProvider>
            <IndividualProduct/>
        </ChakraProvider>
    )
}

export default IPChakra