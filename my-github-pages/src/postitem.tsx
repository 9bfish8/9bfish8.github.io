import React from 'react';
import { Box, Image, Text, VStack, HStack, Link, Heading, Icon } from '@chakra-ui/react';
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import firstImage from '../src/images/first.png';

interface PostItemProps {
    title: string;
    date: string;
    imageUrl: string;

}

const PostItem: React.FC<PostItemProps> = ({ title, date, imageUrl }) => (
    <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        transition="all 0.3s"
        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
        maxWidth="300px"

    >
        <Image
            src={imageUrl}
            alt={title}
            width="100%"
            height="200px"
            objectFit="cover"
        />
        <VStack align="stretch" p={4} spacing={2}>
            <Link
                fontSize="lg"
                fontWeight="bold"
                href="#"
                color="gray.800"
                noOfLines={2}
                height="50px"
            >
                {title}
            </Link>
            <HStack justifyContent="space-between" fontSize="sm" color="gray.500">
                <Text>{date}</Text>
                <HStack spacing={4}>
                    <HStack>
                        <Icon as={FaEye} />

                    </HStack>
                    <HStack>
                        <Icon as={FaHeart} />

                    </HStack>
                    <HStack>
                        <Icon as={FaComment} />

                    </HStack>
                </HStack>
            </HStack>
        </VStack>
    </Box>
);

interface Post extends PostItemProps {
    id: number;
}

const PostList: React.FC = () => {
    const posts: Post[] = [
        {
            id: 1,
            title: '고등어의 Next.js 도전기',
            date: '24.09.14',
            imageUrl: firstImage
        },
        // 추가 게시글...
    ];

    return (
        <Box>
            <Heading as="h2" size="xl" mb={6} color="gray.700">
                게시글
            </Heading>
            <HStack spacing={6} flexWrap="wrap" justifyContent="flex-start">
                {posts.map((post) => (
                    <PostItem key={post.id} {...post} />
                ))}
            </HStack>
        </Box>
    );
};

export default PostList;