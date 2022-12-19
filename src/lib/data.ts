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
	cingle: {
		name: "Cipher",
		title: "Full stack development in C#",
		description:
			"Build web pages in C# and publish to HTML, CSS, and Javascript.",
		source: "https://github.com/crews-development/cipher",
	},
	elaborate: {
		name: "Elaborate",
		title: "Context-aware string formatting",
		description:
			"Convert raw data into localized strings with simple functions.",
		source: "https://github.com/twcrews/elaborate",
	},
};

export const projectBoxes: ProjectBox[] = [
	{
		project: projects.cingle,
		textColor: "whiteAlpha.900",
		backgroundImage: "url('/images/cipher-background.svg')",
	},
	{
		project: projects.elaborate,
		textGradient: "linear(to-r, red.300, red.500)",
		textColor: "red.700",
		backgroundImage: "url('/images/elaborate-background.svg')",
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
			url: "#projects",
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
		imageUrl: "/images/tommy.png",
		content:
			"Tommy started Crews Development and is its primary contributor. With over ten years of software development experience, he specializes in web development.",
	},
];
