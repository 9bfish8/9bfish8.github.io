import React from 'react';
import { Box, Image, Text, Flex, VStack, HStack, Tag } from '@chakra-ui/react';

interface ProjectItemProps {
    icon: string;
    title: string;
    description: string;
    tags: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ icon, title, description, tags }) => (
    <Flex
        direction="column"
        alignItems="flex-start"
        maxWidth="300px"
        p={4}
    >
        <Image
            src={icon}
            alt={title}
            boxSize="60px"
            mb={3}
        />
        <Text fontWeight="bold" fontSize="lg" mb={1}>
            {title}
        </Text>
        <Text fontSize="sm" color="gray.600" mb={2}>
            {description}
        </Text>
        <HStack spacing={2}>
            {tags.map((tag, index) => (
                <Tag key={index} size="sm" colorScheme="blue" variant="outline">
                    {tag}
                </Tag>
            ))}
        </HStack>
    </Flex>
);

const ProjectList: React.FC = () => {
    const projects = [
        {
            icon: '/path-to-pen-icon.png',
            title: '자바스트립트 너 욕심으로 따라와',
            description: '#첨삭해줘 #js기초라며 #타입추론?',
            tags: ['첨삭해줘', 'js기초라며', '타입추론?']
        },
        {
            icon: '/path-to-flame-icon.png',
            title: 'React, I LOVE YOU 3000',
            description: '#투민혁 #오직 #리액트로',
            tags: ['투민혁', '오직', '리액트로']
        },
        {
            icon: '/path-to-spiral-icon.png',
            title: '지휘 엔도 할까요? / 너무좋쥬',
            description: '#백엔드 #데브옵스 #이러다 #수출하겠어요',
            tags: ['백엔드', '데브옵스', '이러다', '수출하겠어요']
        },
    ];

    return (
        <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
                프로젝트
            </Text>
            <Flex flexWrap="wrap" justifyContent="flex-start" gap={6}>
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </Flex>
        </Box>
    );
};

export default ProjectList;