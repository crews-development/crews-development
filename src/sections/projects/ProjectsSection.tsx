import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Center,
	Heading,
	SimpleGrid,
	Text,
	useColorMode,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { projectBoxes } from "../../lib/data";

const previewLength = 4;

export const ProjectsSection = () => {
	const { colorMode } = useColorMode();

	return (
		<Box
			backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
			id="projects-link"
		>
			<Box maxWidth="1600px" margin="0 auto">
				<SimpleGrid
					columns={{ sm: 1, md: projectBoxes.length > 1 ? 2 : 1 }}
					spacing={4}
					padding={4}
				>
					{projectBoxes.slice(0, previewLength).map((p) => (
						<Card
							key={p.project.name}
							background={
								p.backgroundImage ?? p.backgroundGradient ?? p.backgroundColor
							}
							backgroundSize="cover"
							backgroundPosition="center"
						>
							<CardBody>
								<Heading
									color={p.textColor}
									bgGradient={p.textGradient}
									bgClip={p.textGradient ? "text" : undefined}
									size="lg"
								>
									{p.project.name}
								</Heading>
								<Text color={p.textColor}>{p.project.description}</Text>
							</CardBody>
							{p.project.homepage || p.project.source ? (
								<CardFooter>
									<Wrap>
										{p.project.homepage ? (
											<WrapItem>
												<Button
													variant="outline"
													borderColor={p.textColor}
													color={p.textColor}
													onClick={() => window.open(p.project.homepage)}
												>
													Learn More
												</Button>
											</WrapItem>
										) : null}
										{p.project.source ? (
											<WrapItem>
												<Button
													variant="outline"
													borderColor={p.textColor}
													color={p.textColor}
													onClick={() => window.open(p.project.source)}
												>
													View Source
												</Button>
											</WrapItem>
										) : null}
									</Wrap>
								</CardFooter>
							) : null}
						</Card>
					))}
				</SimpleGrid>
				{projectBoxes.length > previewLength ? (
					<Center>
						<Button variant="ghost">Show All</Button>
					</Center>
				) : null}
			</Box>
		</Box>
	);
};
