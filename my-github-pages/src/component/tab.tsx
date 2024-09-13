import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface CustomTabProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const CustomTab: React.FC<CustomTabProps> = ({ activeTab, setActiveTab }) => {
    const tabs = ['홈', '게시글', '프로젝트'];

    return (
        <Box
            width="100%"
            borderBottomWidth="2px"
            borderColor="gray.200"
            ml={{ base: 4, md: "230px" }}
        >
            <Flex maxWidth="100%" overflowX="auto">
                {tabs.map((tab) => (
                    <Box
                        key={tab}
                        px={{ base: 4, md: 6 }}
                        py={{ base: 3, md: 4 }}
                        cursor="pointer"
                        borderBottomWidth={activeTab === tab ? '4px' : '0'}
                        borderBottomColor={activeTab === tab ? 'blue.500' : 'transparent'}
                        onClick={() => setActiveTab(tab)}
                        flexShrink={0}
                    >
                        <Text
                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            fontWeight={activeTab === tab ? 'bold' : 'normal'}
                            color={activeTab === tab ? 'blue.500' : 'gray.600'}
                        >
                            {tab}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default CustomTab;