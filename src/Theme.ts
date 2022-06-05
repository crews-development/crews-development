import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			500: "#3f8aff",
		},
	},
	fonts: {
		body: "Noto Sans, system-ui, sans-serif",
		heading: "Lexend, system-ui, sans-serif",
		mono: "Noto Sans Mono, monospace",
	},
});

export default theme;
