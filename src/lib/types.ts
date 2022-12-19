import { ReactNode } from "react";

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

export type Info = {
	id: string;
	title?: string;
	content?: ReactNode;
	link?: Link;
};

export type Link = {
	url: string;
	text?: string;
};

export type Profile = {
	name: string;
	imageUrl?: string;
	content?: ReactNode;
	link?: Link;
};
