import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	useColorMode,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type InfoTileProps = {
	title?: string;
	content?: ReactNode;
	footer?: ReactNode;
};

export const InfoTile = ({ title, content, footer }: InfoTileProps) => {
	const { colorMode } = useColorMode();

	return (
		<Card backgroundColor={colorMode === "light" ? "white" : undefined}>
			<CardHeader>
				<Heading size="lg">{title}</Heading>
			</CardHeader>
			<CardBody>{content}</CardBody>
			{footer ? <CardFooter>{footer}</CardFooter> : null}
		</Card>
	);
};
