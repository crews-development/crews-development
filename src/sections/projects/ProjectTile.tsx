import {
	Card,
	CardBody,
	Heading,
	CardFooter,
	Wrap,
	WrapItem,
	Button,
	Text,
	Badge,
} from "@chakra-ui/react";
import { ProjectBox } from "../../lib/types";

type ProjectTileProps = {
	box: ProjectBox;
};

export const ProjectTile = ({ box }: ProjectTileProps) => {
	return (
		<Card
			key={box.project.name}
			background={
				box.backgroundImage ?? box.backgroundGradient ?? box.backgroundColor
			}
			backgroundSize="cover"
			backgroundPosition="center"
		>
			<CardBody>
				<Wrap align="center" spacing={4} justify="space-between">
					<WrapItem>
						<Heading
							color={box.textColor}
							bgGradient={box.textGradient}
							bgClip={box.textGradient ? "text" : undefined}
							size="lg"
						>
							{box.project.name}
						</Heading>
					</WrapItem>
					{box.project.unreleased ? (
						<WrapItem>
							<Badge color={box.textColor} variant="outline">
								Coming Soon
							</Badge>
						</WrapItem>
					) : null}
				</Wrap>
				<Text paddingTop={4} color={box.textColor}>
					{box.project.description}
				</Text>
			</CardBody>
			{box.project.homepage || box.project.source ? (
				<CardFooter>
					<Wrap>
						{box.project.homepage ? (
							<WrapItem>
								<Button
									variant="outline"
									borderColor={box.textColor}
									color={box.textColor}
									onClick={() => window.open(box.project.homepage)}
								>
									Learn More
								</Button>
							</WrapItem>
						) : null}
						{box.project.source ? (
							<WrapItem>
								<Button
									variant="outline"
									borderColor={box.textColor}
									color={box.textColor}
									onClick={() => window.open(box.project.source)}
								>
									View Source
								</Button>
							</WrapItem>
						) : null}
					</Wrap>
				</CardFooter>
			) : null}
		</Card>
	);
};
