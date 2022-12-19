import { FaGithub } from "react-icons/fa";
import { Info, NavLink, Profile, Project, ProjectBox } from "./types";

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

export const projects: Record<string, Project> = {
	cipher: {
		name: "Cipher",
		title: "Full stack development in C#",
		description:
			"Build web pages in C# and publish to HTML, CSS, and Javascript.",
		source: "https://github.com/crews-development/cipher",
	},
	repoRabbit: {
		name: "Repo Rabbit",
		title: "Intelligent Repository Pattern Implementation",
		description:
			"Create a robust repository pattern implementation with any provider.",
		unreleased: true,
	},
	elaborate: {
		name: "Elaborate",
		title: "Context-aware string formatting",
		description:
			"Convert raw data into localized strings with simple functions.",
		source: "https://github.com/twcrews/elaborate",
	},
	lastPlace: {
		name: "Last Place",
		title: "Leaderboards and More",
		description:
			"Create and track leaderboards and metrics for games, competitions, races, and more.",
		unreleased: true,
	},
};

export const projectBoxes: ProjectBox[] = [
	{
		project: projects.cipher,
		textColor: "whiteAlpha.900",
		backgroundImage: "url('/images/cipher-background.svg')",
	},
	{
		project: projects.repoRabbit,
		textColor: "whiteAlpha.900",
		backgroundImage: "url('/images/repo-rabbit-background.svg')",
	},
	{
		project: projects.elaborate,
		textGradient: "linear(to-r, red.300, red.500)",
		textColor: "red.700",
		backgroundImage: "url('/images/elaborate-background.svg')",
	},
	{
		project: projects.lastPlace,
		textGradient: "linear(to-r, purple.400, pink.400)",
		textColor: "pink.200",
		backgroundImage: "url('/images/last-place-background.svg')",
	},
];

export const infoTiles: Info[] = [
	{
		id: "full-stack",
		title: "True Full Stack Development",
		content:
			"We design and build all our software from the ground up. Databases, back end, front end, even graphic design and marketing materials—we do it all.",
		link: {
			text: "View Projects",
			url: "#projects-link",
		},
	},
	{
		id: "ux",
		title: "Extreme Dedication to User Experience",
		content:
			"Our top priority is creating experiences that thrill the end user. We believe software engineering is equal parts art and science.",
	},
	{
		id: "design",
		title: "Rigorous Design Principles",
		content:
			"We pride ourselves on architectural excellence. We embrace tried-and-true design patterns to create truly robust software.",
		link: {
			text: "Design Patterns",
			url: "https://sourcemaking.com/design_patterns",
		},
	},
];

export const profiles: Profile[] = [
	{
		name: "Tommy Crews",
		imageUrl: "/images/tommy.webp",
		content:
			"Tommy started Crews Development and is its primary contributor. With over ten years of software development experience, he specializes in .NET web and desktop development.",
		link: {
			text: "View More",
			url: "https://tommy.crews.dev",
		},
	},
];
