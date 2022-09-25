import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Carausal from './Carausal'
import Description from './Description'
import Menu from './Menu'
import Security from './Security'

// Add classes so that your compenent can become more verbose
const HealthCare = () => {
    return (
        <Box>
            <Box w="1024px" margin="auto">
                <Center my="30px">
                    <Carausal />
                </Center>
                <Menu />
                <Description/>
            </Box>
            <Security/>
        </Box>
    )
}

export default HealthCare