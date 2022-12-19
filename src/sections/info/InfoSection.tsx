import {
	Button,
	Center,
	Container,
	SimpleGrid,
	useColorMode,
} from "@chakra-ui/react";
import { InfoTile } from "./InfoTile";
import { infoTiles } from "../../lib/data";

export const InfoSection = () => {
	const { colorMode } = useColorMode();

	return (
		<Center backgroundColor={colorMode === "dark" ? undefined : "gray.50"}>
			<Container maxWidth="1200px" padding={4}>
				<SimpleGrid minChildWidth="240px" spacing={4}>
					{infoTiles.map((t) => (
						<InfoTile
							key={t.id}
							title={t.title}
							content={t.content}
							footer={
								t.link ? (
									<Button onClick={() => window.open(t.link?.url)}>
										{t.link.text ?? "Details"}
									</Button>
								) : undefined
							}
						/>
					))}
				</SimpleGrid>
			</Container>
		</Center>
	);
};
