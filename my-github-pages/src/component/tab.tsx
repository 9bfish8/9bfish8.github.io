import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const CustomTab = () => {
    const [activeTab, setActiveTab] = useState('홈');

    const tabs = ['홈', '게시글', '프로젝트'];

    return (
        <Box borderBottomWidth="1px" borderColor="gray.200">
            <Flex>
                {tabs.map((tab) => (
                    <Box
                        key={tab}
                        px={4}
                        py={2}
                        cursor="pointer"
                        borderBottomWidth={activeTab === tab ? '2px' : '0'}
                        borderBottomColor={activeTab === tab ? 'blue.500' : 'transparent'}
                        onClick={() => setActiveTab(tab)}
                    >
                        <Text
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