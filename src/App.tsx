import { ChakraProvider } from "@chakra-ui/react";
import * as Data from "./Data";
import Theme from "./Theme";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

export const App = () => {
	return (
		<ChakraProvider theme={Theme}>
			<Nav links={Data.navLinks} />
			<Hero projects={Data.projectCarousel} />
		</ChakraProvider>
	);
};
