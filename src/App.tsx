import { ChakraProvider } from "@chakra-ui/react";
import * as Data from "./data";
import Theme from "./theme";
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
