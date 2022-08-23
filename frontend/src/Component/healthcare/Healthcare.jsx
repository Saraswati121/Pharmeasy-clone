import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Carausal from './Carausal'


const HealthCare = () => {
    return (
        <Box>
            <Box w="1024px" margin="auto">
                <Center my="30px">
                    <Carausal />
                </Center>
            </Box>
        </Box>
    )
}

export default HealthCare