import { Icon, IconProps } from "@chakra-ui/react";
import { contrastText } from "../lib/ColorFunctions";

export interface CrewsLogoIconProps extends IconProps {
	fillColor?: string;
}

export const CrewsLogoIcon = ({ fillColor, ...props }: CrewsLogoIconProps) => {
	const foreColor = contrastText(fillColor ?? "#000000");

	const strokeIcon = (
		<>
			<path
				fill="currentColor"
				d="M496.4 0C482-.1 463.8.8 446 3A494.5 494.5 0 0 0 166.1 128 493.7 493.7 0 0 0 4.5 433.6 568.8 568.8 0 0 0 0 498.1c-.1 10.5.3 21 1 31.5a465.9 465.9 0 0 0 6.5 56.2 498.9 498.9 0 0 0 127.3 255.5 496.5 496.5 0 0 0 292.8 153.3 544.7 544.7 0 0 0 70 5.4 576 576 0 0 0 55.3-2.9A503.6 503.6 0 0 0 691.2 962a499.5 499.5 0 0 0 218.2-175.2 85 85 0 1 0-139.1-98.4 328.3 328.3 0 0 1-211.6 135.9 328.7 328.7 0 0 1-286-85.8A327.5 327.5 0 0 1 174 548a329.2 329.2 0 0 1-1.7-82.8 326.6 326.6 0 0 1 85.8-189 326.7 326.7 0 0 1 195.6-102.5 323.2 323.2 0 0 1 146.8 12.5 329.5 329.5 0 0 1 169.7 125.3 83 83 0 0 0 57.2 35.6c45 6.8 86-22.6 95.7-65.2a84 84 0 0 0-10.1-63c-3.6-6.2-8-11.9-12.2-17.6a497.5 497.5 0 0 0-182.6-151A494.8 494.8 0 0 0 496.4 0"
			/>
			<path
				fill="currentColor"
				d="M627.8 500.1a128.5 128.5 0 1 0-257 0 128.5 128.5 0 0 0 257 0"
			/>
		</>
	);

	const filledIcon = (
		<>
			<defs>
				<clipPath id="a" clipPathUnits="userSpaceOnUse">
					<path d="M0 1000h1000V0H0Z" />
				</clipPath>
			</defs>
			<g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 1333.3)">
				<path
					fill={fillColor}
					d="M999.1 499.7a499.2 499.2 0 1 0-998.4 0 499.2 499.2 0 0 0 998.4 0"
				/>
				<path
					fill={foreColor}
					d="M497.3 42.4a452.3 452.3 0 0 0-302.2 117.2A451.7 451.7 0 0 0 47.3 439.3a520.4 520.4 0 0 0-4.1 59c-.1 9.6.2 19.2.9 28.8a426.2 426.2 0 0 0 6 51.4 456.4 456.4 0 0 0 116.4 233.7 454.2 454.2 0 0 0 304.6 144.1 381.4 381.4 0 0 0 56.8.1 460.7 460.7 0 0 0 147.7-34 456.9 456.9 0 0 0 199.6-160.2 77.8 77.8 0 1 0-127.3-90 300.3 300.3 0 0 1-193.6 124.3A300.7 300.7 0 0 1 292.7 718a299.6 299.6 0 0 1-90.3-174.2 301.1 301.1 0 0 1 9-129.1c13.5-45.1 36-85 68-119.5a298.9 298.9 0 0 1 179-93.8 295.6 295.6 0 0 1 134.2 11.4 301.4 301.4 0 0 1 155.2 114.6 76 76 0 0 0 52.4 32.6 77.6 77.6 0 0 0 87.5-59.6 76.9 76.9 0 0 0-9.2-57.8c-3.3-5.6-7.3-10.8-11.1-16A455.1 455.1 0 0 0 590.6 51.4a442.8 442.8 0 0 0-93.3-9"
				/>
				<path
					fill={foreColor}
					d="M617.5 500a117.5 117.5 0 1 0-235.1 0 117.5 117.5 0 0 0 235 0"
				/>
			</g>
		</>
	);

	return (
		<Icon viewBox="0 0 1333.3 1333.3" {...props}>
			{fillColor ? filledIcon : strokeIcon}
		</Icon>
	);
};
