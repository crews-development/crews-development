import { Box, Button } from "@chakra-ui/react";
import { NavLink } from "../Data";
import { CrewsLogoIcon } from "../icons/CrewsLogoIcon";
import Theme from "../Theme";

export type NavProps = {
	links: NavLink[];
};

export const Nav = ({ links }: NavProps) => {
	return (
		<Box color="brand.500" p="4">
			<CrewsLogoIcon boxSize={16} fillColor={Theme.colors.brand[500]} />
			{links.map((l) => (
				<Button key={l.href} onClick={() => window.open(l.href)}>
					{l.title}
				</Button>
			))}
		</Box>
	);
};
