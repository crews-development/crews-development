import {
	Box,
	Button,
	IconButton,
	useBreakpointValue,
	useColorMode,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React from "react";
import { useState } from "react";
import { NavLink } from "../data";
import { CrewsLogoIcon } from "../icons/CrewsLogoIcon";
import Theme from "../theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export type NavProps = {
	links: NavLink[];
};

export const Nav = ({ links }: NavProps) => {
	const logoSize = useBreakpointValue({ base: "6", sm: "10", md: "12" });
	const buttonSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" });
	const fontSize = useBreakpointValue({ base: "sm", sm: "lg", md: "xl" });
	const spacing = useBreakpointValue({ base: 1, sm: 2, md: 4 });

	const [scrolled, setScrolled] = useState<boolean>();

	const { colorMode } = useColorMode();
	const handleLink = (id: string) => {
		document.getElementById(id)?.scrollIntoView();
	};

	useScrollPosition(
		({ currPos }) => {
			const isScrolled = currPos.y < 0;
			if (isScrolled !== scrolled) setScrolled(isScrolled);
		},
		[scrolled]
	);

	return (
		<Box
			top={0}
			position="fixed"
			width="100%"
			zIndex="docked"
			color={colorMode === "dark" ? undefined : "brand.500"}
			px={spacing}
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			backdropFilter="blur(12px)"
			backgroundColor={
				colorMode === "dark" ? "rgba(26, 32, 44, 0.4)" : "whiteAlpha.700"
			}
			boxShadow={scrolled ? "base" : undefined}
			transition="box-shadow 0.2s"
		>
			<Box display="flex" gap={spacing} alignItems="center">
				<CrewsLogoIcon
					my={spacing}
					boxSize={logoSize}
					fillColor={Theme.colors.brand[500]}
				/>
				{links.map((l) =>
					l.title ? (
						<Button
							size={buttonSize}
							fontSize={fontSize}
							variant="ghost"
							key={l.id}
							onClick={() => handleLink(l.id)}
							leftIcon={l.icon ? React.createElement(l.icon) : undefined}
						>
							{l.title}
						</Button>
					) : (
						<IconButton
							size={buttonSize}
							fontSize={fontSize}
							variant="ghost"
							key={l.id}
							aria-label={l.id}
							onClick={
								l.href ? () => window.open(l.href) : () => handleLink(l.id)
							}
							icon={l.icon ? React.createElement(l.icon) : <LinkIcon />}
						/>
					)
				)}
			</Box>
			<ColorModeSwitcher fontSize={fontSize} />
		</Box>
	);
};
