import { theme } from "@chakra-ui/react";

export const ituLuminosity = (color: string) => {
	let r = 0,
		g = 0,
		b = 0;
	color = color.replace(" ", "");

	if (color.startsWith("#")) {
		color = color.substring(1);
		const rgb = parseInt(color, 16); // convert rrggbb to decimal

		r = (rgb >> 16) & 0xff; // extract red
		g = (rgb >> 8) & 0xff; // extract green
		b = (rgb >> 0) & 0xff; // extract blue
	}

	if (color.startsWith("rgb")) {
		const values = color.split("(")[1].split(")")[0].split(",");
		r = parseInt(values[0]);
		g = parseInt(values[1]);
		b = parseInt(values[2]);
	}

	return 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
};

export const contrastText = (
	color: string,
	weight: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = 900,
	threshold = 150
) => {
	if (ituLuminosity(color) < threshold) {
		return theme.colors.whiteAlpha[weight];
	}
	return theme.colors.blackAlpha[weight];
};
