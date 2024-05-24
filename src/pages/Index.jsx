import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Recent Posts</Heading>
          <Box mb={8}>
            <Heading as="h3" size="lg">Post Title 1</Heading>
            <Text mt={2}>This is a short excerpt from the blog post...</Text>
            <Link color="teal.500" mt={2} display="block">Read more</Link>
          </Box>
          <Box mb={8}>
            <Heading as="h3" size="lg">Post Title 2</Heading>
            <Text mt={2}>This is a short excerpt from the blog post...</Text>
            <Link color="teal.500" mt={2} display="block">Read more</Link>
          </Box>
        </Box>

        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Follow Me</Heading>
          <Stack direction="row" spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram size="24px" />
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;