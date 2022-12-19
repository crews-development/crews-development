import { Button, Center, Stack, Text, useColorMode } from "@chakra-ui/react";

export const Footer = () => {
	const { colorMode } = useColorMode();
	return (
		<Center
			padding="32px 16px"
			backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
		>
			<Stack spacing={4} alignItems="center">
				<Text align="center">{`Copyright © ${new Date().getFullYear()} Crews Development`}</Text>
				<Button
					colorScheme="blue"
					onClick={() =>
						window.open(
							"https://github.com/crews-development/crews-development"
						)
					}
				>
					View Page Source
				</Button>
			</Stack>
		</Center>
	);
};
