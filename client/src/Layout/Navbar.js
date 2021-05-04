import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { EditIcon } from '@chakra-ui/icons'
import logo from '../resources/logo.svg';
import './styles.css';

function Navbar(props) {
    const loc = useLocation();

    return (
        <>
        {loc.pathname == "/" && (
            <Flex bg="gray.800" h="80px" zIndex="popover" boxShadow="dark-lg">
            <Box w="45%" h="30" color="green.400" alignItems="flex-end" justify="flex-end" className="navText">
                <Center h="75px" fontWeight="600">
                <Spacer/>
                <NavLink to="/documents" style={{margin: '0px 15px 0px 15px', display: 'inline-flex', alignItems: 'center'}}>
                    <EditIcon m="0px 5px 0px 0px"/>
                        <Text fontSize="xl">
                            Documents
                        </Text>
                    </NavLink>
                </Center>
            </Box>
            <Spacer />
            <Box w="125px">
                <Center bg="green.500" position="absolute" zIndex="popover" h="125px" borderRadius="full"  boxShadow="dark-lg">
                    <Image
                    objectFit='cover'
                    boxSize="125px"
                    alt="logo"
                    src={logo} />
                </Center>
                
            </Box>
            <Spacer />
            <Box w="45%" h="30" color="green.400" alignItems="flex-start" justify="flex-start">
                <Center h="75px" fontWeight="600">
                    <NavLink to="/" style={{margin: '0px 15px 0px 15px'}}><Text fontSize="xl">Login</Text></NavLink>
                    <NavLink to="/" style={{margin: '0px 15px 0px 15px'}}><Text fontSize="xl">Sign Up</Text></NavLink>
                <Spacer/>
                </Center>
            </Box>
        </Flex>
        )}
        
        </>
    );
}

export default Navbar;