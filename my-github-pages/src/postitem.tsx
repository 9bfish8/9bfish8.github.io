import React from 'react';
import { Box, Image, Text, VStack, HStack, Link, Heading } from '@chakra-ui/react';
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
        p={{ base: 3, md: 4 }}
        mb={4}
        boxShadow="md"
        transition="all 0.3s"
        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
    >
        <HStack spacing={{ base: 3, md: 4 }} align="start">
            <Image
                src={imageUrl}
                alt={title}
                boxSize={{ base: "80px", md: "100px", lg: "120px" }}
                objectFit="cover"
                borderRadius="md"
            />
            <VStack align="start" spacing={2} flex={1}>
                <Link
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    href="#"
                    color="blue.600"
                    _hover={{ color: "blue.800", textDecoration: "underline" }}
                >
                    {title}
                </Link>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                    {date}
                </Text>
            </VStack>
        </HStack>
    </Box>
);

interface Post extends PostItemProps {
    id: number;
}

const PostList: React.FC = () => {
    const posts: Post[] = [
        { id: 1, title: '첫번째 Next.js 도전기', date: '2024.09.13', imageUrl: firstImage },
    ];

    return (
        <Box>
            <Heading as="h2" size="xl" mb={{ base: 4, md: 6 }} color="gray.700">
                게시글
            </Heading>
            <VStack spacing={{ base: 4, md: 6 }} align="stretch">
                {posts.map((post) => (
                    <PostItem key={post.id} {...post} />
                ))}
            </VStack>
        </Box>
    );
};

export default PostList;