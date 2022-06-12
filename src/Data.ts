import React from "react";
import { FaGithub } from "react-icons/fa";

export type Project = {
	name: string;
	title?: string;
	description: string;
	homepage?: string;
	source?: string;
	icon?: React.ElementType;
};

export type ProjectBox = {
	project: Project;
	backgroundColor?: string;
	backgroundGradient?: string;
	backgroundImage?: string;
	textColor?: string;
	textGradient?: string;
};

export type NavLink = {
	id: string;
	title?: string;
	icon?: React.ElementType;
	href?: string;
};

export const navLinks: NavLink[] = [
	{
		id: "projects-link",
		title: "Projects",
	},
	{
		id: "about-link",
		title: "About",
	},
	{
		id: "github-link",
		icon: FaGithub,
		href: "https://github.com/crews-development",
	},
];

export const projects = {
	cingle: {
		name: "Cipher",
		title: "Full stack development in C#",
		description:
			"Build web pages in C# and publish to HTML, CSS, and Javascript.",
	},
	elaborate: {
		name: "Elaborate",
		title: "Context-aware string formatting",
		description:
			"Convert raw data into localized strings with simple functions.",
	},
};

export const projectCarousel: ProjectBox[] = [
	{
		project: projects.cingle,
		textColor: "whiteAlpha.900",
		backgroundImage: "url('/images/cingle-background.svg')",
	},
	{
		project: projects.elaborate,
		textGradient: "linear(to-r, red.300, red.500)",
		textColor: "red.700",
		backgroundImage: "url('/images/elaborate-background.svg')",
	},
];
