import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const CarausalCard = ({ elem }) => {
    return (
        <Box display="flex" justify="center" align="center" height={"328px"} position="relative" marginTop="20px">
            <Box
                margin="0 10px"
                w="100%"
                height={"85%"}
                position="relative"
                overflow="hidden"
                borderRadius="14"
            >
                <Image height="278px" src={elem.image} />
            </Box>
        </Box>
    )
}

export default CarausalCard