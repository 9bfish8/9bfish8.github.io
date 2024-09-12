import React from 'react';
import { Box, Heading, Image, Button, HStack } from '@chakra-ui/react';

import headerImage from '../images/headerIMG.png';

const Header = () => {
    return (
        <Box width="100%" overflow="hidden" position="relative" mt="35px">
            <HStack
                position="absolute"
                top={4}
                right={{ base: 4, md: 54 }}
                zIndex={1}
                spacing={4}
            >
            </HStack>

            <Box
                position="relative"
                height="400px"
                width={{ base: "100%", md: "calc(100% - 100px)" }}
                maxWidth="1800px"
                margin="0 auto"
                overflow="hidden"
            >
                <Image
                    src={headerImage}
                    alt="Beach background"
                    objectFit="cover"
                    objectPosition="center"
                    w="100%"
                    h="100%"
                />
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading
                        color="white"
                        fontSize={["4xl", "5xl", "6xl"]}
                        fontWeight="normal"
                        textAlign="center"
                        textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                        fontFamily="'Black Han Sans', sans-serif"
                        letterSpacing="wide"
                    >
                        고등어의<br />팔딱팔딱
                    </Heading>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;