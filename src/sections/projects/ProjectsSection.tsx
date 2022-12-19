import {
	Box,
	Button,
	Center,
	SimpleGrid,
	useColorMode,
} from "@chakra-ui/react";
import { projectBoxes } from "../../lib/data";
import { ProjectTile } from "./ProjectTile";

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
						<ProjectTile key={p.project.name} box={p} />
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
