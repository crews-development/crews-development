import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import * as Data from "./lib/data";
import Theme from "./lib/theme";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { InfoSection } from "./sections/info/InfoSection";
import { Nav } from "./sections/nav/Nav";
import { ProjectsSection } from "./sections/projects/ProjectsSection";

export const App = () => (
	<ChakraProvider theme={Theme}>
		<Flex direction="column" minHeight="100vh">
			<Nav links={Data.navLinks} />
			<Box flex={1}>
				<Hero projects={Data.projectBoxes} />
				<InfoSection />
				<ProjectsSection />
				<About />
			</Box>
			<Footer />
		</Flex>
	</ChakraProvider>
);
