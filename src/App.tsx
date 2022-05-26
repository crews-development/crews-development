import * as React from "react";
import {
	ChakraProvider,
	Box,
	Text,
	Link,
	VStack,
	Code,
	Grid,
	theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const App = () => {
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: "AIzaSyDcfoB8b5HGt2RX88u3YZMh4ZZGnF6f6p8",
		authDomain: "crews-development-7f821.firebaseapp.com",
		databaseURL: "https://crews-development-7f821-default-rtdb.firebaseio.com",
		projectId: "crews-development-7f821",
		storageBucket: "crews-development-7f821.appspot.com",
		messagingSenderId: "76028669632",
		appId: "1:76028669632:web:8c06e83eae1ebc5f414725",
		measurementId: "G-ZGXKDYEEHE",
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid minH="100vh" p={3}>
					<ColorModeSwitcher justifySelf="flex-end" />
					<VStack spacing={8}>
						<Logo h="40vmin" pointerEvents="none" />
						<Text>
							Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
						</Text>
						<Link
							color="teal.500"
							href="https://chakra-ui.com"
							fontSize="2xl"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn Chakra
						</Link>
					</VStack>
				</Grid>
			</Box>
		</ChakraProvider>
	);
};
