import { Box, Center, ChakraProvider, Heading } from "@chakra-ui/react";
import Theme from "./lib/theme";

export const App = () => (
	<ChakraProvider theme={Theme}>
		<Center height="100vh" background="radial-gradient(circle, rgba(30, 40, 60, 1) 0%, rgba(0,212,255,0) 50%);">
			<Box display="flex" flexDirection="column" alignItems="center" gap="24px">
				<Heading fontSize="80px">🚧</Heading>
				<Heading>Under Construction</Heading>
			</Box>
		</Center>
	</ChakraProvider>
);
