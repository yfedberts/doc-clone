import { Box, Flex, Grid, Spacer } from '@chakra-ui/layout';
import React from 'react';

function Home(props) {
    return (
        <>
        <Flex>
            <Box p="4" h="100vh" w="100vw" bg="gray.700"/>
            <Spacer/>
        </Flex>
        <Flex>
            
            <Box p="4" h="100vh" w="100%" bg="gray.700">
                Box 1
            </Box>
            <Spacer />
            <Box p="4" h="100vh" w="60%" bg="gray.900">
                Box 2
            </Box>
        </Flex>
        </>
    );
}

export default Home;