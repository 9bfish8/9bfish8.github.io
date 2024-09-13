import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import CustomTab from '../src/component/tab';
import PostList from '../src/postitem';  // 게시글 목록 컴포넌트

const MainPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('홈');

    return (
        <Box>
            <Box mt={6} ml="230px">
                {(activeTab === '홈' || activeTab === '게시글') && <PostList />}
            </Box>
        </Box>
    );
};

export default MainPage;