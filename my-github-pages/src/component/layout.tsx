import React, { ReactNode } from 'react';
import { Box, Container } from "@chakra-ui/react";
import Header from "./header";
import UserProfileCard from "./profile";
import CustomTab from "./tab";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
    <Box width="100%">
        <Header />
        <Box width="100%" ml={{ base: 0, md: '150px' }}>
            <UserProfileCard />
        </Box>
        <Container maxWidth="900px" px={4}>
            <CustomTab />
            <Box mt={4}>
                {children}
            </Box>
        </Container>
    </Box>
);

export default PageLayout;