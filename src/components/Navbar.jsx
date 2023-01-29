import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react';

const Navbar = () => {
	return (
		<Flex as="nav" p="10px" alignItems="center" mb='40px' >
			<Heading as="h1">E-commerce</Heading>
			<Spacer />

			<HStack>
				<Box bg="gray.200" p="10px" rounded='50px' >
					M
				</Box>
				<Text>hienex@hiena.com</Text>
				<Button colorScheme='purple' >Logout</Button>
			</HStack>
		</Flex>
		// <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
		// 	<Box w="150px" h="50px" bg="red">
		// 		1
		// 	</Box>
		// 	<Box w="150px" h="50px" bg="blue">
		// 		2
		// 	</Box>
		// 	<Box w="150px" h="50px" flexGrow='1' bg="green">
		// 		3
		// 	</Box>
		// 	<Box w="150px" h="50px" flexGrow='2' bg="yellow">
		// 		4
		// 	</Box>
		// </Flex>
	);
};

export default Navbar;
