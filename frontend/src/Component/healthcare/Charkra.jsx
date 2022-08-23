import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import HealthCare from './Healthcare'

const Charkra = () => {
    return (
        <ChakraProvider>
            <HealthCare />
        </ChakraProvider>
    )
}

export default Charkra