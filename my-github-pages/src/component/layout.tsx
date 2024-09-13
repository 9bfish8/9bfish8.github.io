import React, { ReactNode, useState } from 'react';
import { Box } from "@chakra-ui/react";
import Header from "./header";
import UserProfileCard from "./profile";
import CustomTab from "./tab";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState('홈');

    return (
        <Box width="100%">
            <Header />
            <Box
                width="100%"
                maxWidth="1200px"
                ml={{ base: 4, md: '150px' }}
                mr={{ base: 4, md: 'auto' }}
                mt={6}
            >
                <UserProfileCard />
                <Box mt={6}>
                    <CustomTab activeTab={activeTab} setActiveTab={setActiveTab} />
                </Box>
                <Box mt={6}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default PageLayout;