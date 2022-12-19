import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	Heading,
	SimpleGrid,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { profiles } from "../lib/data";

export const About = () => {
	const { colorMode } = useColorMode();

	return (
		<Box
			id="about-link"
			padding={4}
			backgroundColor={colorMode === "dark" ? undefined : "gray.50"}
		>
			<Heading textAlign="center" size="xl" paddingTop={8}>
				Contributors
			</Heading>
			<Stack
				paddingTop={8}
				spacing={4}
				maxWidth="800px"
				margin="0 auto"
				alignItems="center"
			>
				{profiles.map((p) => (
					<Card
						key={p.name}
						backgroundColor={colorMode === "light" ? "white" : undefined}
					>
						<CardBody>
							<SimpleGrid
								spacing={8}
								templateColumns={{ sm: "1fr", md: "128px 1fr" }}
							>
								<Avatar name={p.name} src={p.imageUrl} size="2xl" />
								<Box>
									<Heading size="lg">{p.name}</Heading>
									<Text>{p.content}</Text>
									{p.link ? (
										<Button
											onClick={() => window.open(p.link?.url)}
											marginTop={4}
										>
											{p.link.text ?? "View More"}
										</Button>
									) : null}
								</Box>
							</SimpleGrid>
						</CardBody>
					</Card>
				))}
			</Stack>
		</Box>
	);
};
