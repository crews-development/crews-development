import { ChakraProvider } from "@chakra-ui/react";
import * as Data from "./Data";
import Theme from "./Theme";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
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
	getAnalytics(app);

	return (
		<ChakraProvider theme={Theme}>
			<Nav links={Data.navLinks} />
			<Hero projects={Data.projectCarousel} />
		</ChakraProvider>
	);
};
