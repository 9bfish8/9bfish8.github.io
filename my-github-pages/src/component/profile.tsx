import React from 'react';
import { Box, Flex, Text, Link, Image, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import profileImage from '../images/1bfish106.png';

const UserProfile = () => {
    return (
        <Box
            width="100%"
            py={{ base: 6, md: 8, lg: 10 }}
            px={{ base: 4, md: 6, lg: 8 }}
            mr={{ base: 0, xl: "1250px" }}  // xl 브레이크포인트에서 1200px 마진 적용
            transition="margin-right 0.3s ease-in-out"  // 부드러운 전환 효과
        >
            <Flex
                direction={{ base: "column", md: "row" }}
                alignItems={{ base: "center", md: "flex-start" }}
                justifyContent="flex-start"
                maxWidth={{ base: "100%", xl: "calc(100% - 400px)" }}  // xl에서 최대 너비 조정
                mx="auto"
            >
                <Box
                    width={{ base: "180px", md: "220px", lg: "250px" }}
                    height={{ base: "180px", md: "220px", lg: "250px" }}
                    borderRadius="xl"
                    overflow="hidden"
                    mb={{ base: 6, md: 0 }}
                    mr={{ base: 0, md: 8, lg: 10 }}
                    boxShadow="lg"
                    flexShrink={0}
                >
                    <Image
                        src={profileImage}
                        alt="1bfish106"
                        objectFit="cover"
                        w="100%"
                        h="100%"
                    />
                </Box>
                <VStack
                    align={{ base: "center", md: "start" }}
                    spacing={{ base: 3, md: 4 }}
                    width="100%"
                >
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        color="gray.800"
                        textAlign={{ base: "center", md: "left" }}
                    >
                        1bfish106
                    </Text>
                    <Text
                        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                        color="gray.600"
                        fontStyle="italic"
                        textAlign={{ base: "center", md: "left" }}
                    >
                        어쩌다보니 모두에게 (고)등어라고 불리는 나
                    </Text>
                    <Text
                        fontSize={{ base: "md", md: "lg", lg: "xl" }}
                        color="gray.700"
                        textAlign={{ base: "center", md: "left" }}
                    >
                        이젠 본명 보다 등어야가 익숙한 사람
                    </Text>
                    <HStack spacing={3} mt={{ base: 3, md: 4 }}>
                        <Icon as={FaGithub} boxSize={{ base: 5, md: 6 }} color="gray.700" />
                        <Link
                            href="https://github.com/9bfish8"
                            isExternal
                            color="blue.500"
                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            fontWeight="medium"
                        >
                            github.com/9bfish8
                        </Link>
                    </HStack>
                </VStack>
            </Flex>
        </Box>
    );
};

export default UserProfile;