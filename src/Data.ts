import React from "react";

export type Project = {
	name: string;
	title?: string;
	description: string;
	homepage?: string;
	source?: string;
	icon?: React.ElementType;
	gradientStart?: string;
	gradientEnd?: string;
};

export type NavLink = {
	title?: string;
	icon?: React.ElementType;
	href?: string;
};

export const navLinks: NavLink[] = [
	{
		title: "Projects",
		href: "#",
	},
];

export const projects: Project[] = [
	{
		name: "Cingle",
		title: "Full stack development in C#",
		description:
			"Build web pages in C# and publish to HTML, CSS, and Javascript.",
	},
	{
		name: "Elaborate",
		title: "Context-aware string formatting",
		description:
			"Convert raw data into localized strings with simple functions.",
	},
];
