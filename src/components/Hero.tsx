import { Heading, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectBox } from "../Data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";

export type HeroProps = {
	projects: ProjectBox[];
};

export const Hero = ({ projects }: HeroProps) => {
	const navigationVisible = useBreakpointValue({ base: false, md: true });
	const headingSize = useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" });
	const padding = useBreakpointValue({ base: 8, sm: 16, md: 32 });
	const navSpacing = useBreakpointValue({ base: 10, sm: 14, md: 20 });

	const navPrevRef = useRef<HTMLDivElement>(null);
	const navNextRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const prevButton = document.getElementsByClassName("swiper-button-prev")[0];
		const nextButton = document.getElementsByClassName("swiper-button-next")[0];
		const pagination = document.getElementsByClassName("swiper-pagination")[0];

		const navStyle =
			"background-color: rgba(0, 0, 0, 0.2);" +
			"border-radius: 2px;" +
			"color: white;" +
			"padding: 30px 20px;";

		const paginationStyle = "display: inline-block;" + "";
		"background-color: rgba(0, 0, 0, 0.2);" +
			"border-radius: 2px;" +
			"color: white;" +
			"padding: 4px;";

		if (prevButton && nextButton && pagination) {
			prevButton.setAttribute("style", navStyle);
			nextButton.setAttribute("style", navStyle);
			pagination.setAttribute("style", paginationStyle);
		}
	});

	return (
		<Box mt={navSpacing}>
			<Swiper
				modules={[Navigation, Pagination, A11y, Autoplay]}
				navigation={navigationVisible}
				pagination={{ clickable: true }}
				loop
				autoplay={{
					delay: 6000,
					disableOnInteraction: true,
				}}
			>
				{projects.map((p) => (
					<SwiperSlide key={p.project.name}>
						<Box
							padding={padding}
							paddingY={padding ? padding + 4 : undefined}
							overflow="visible"
							bg={
								p.backgroundImage ?? p.backgroundGradient ?? p.backgroundColor
							}
							textAlign="center"
						>
							<Heading
								color={p.textColor}
								bgGradient={p.textGradient}
								bgClip={p.textGradient ? "text" : undefined}
								size={headingSize}
								lineHeight="normal"
								display="inline-block"
							>
								{p.project.name}
							</Heading>
							<Text
								color={p.textColor}
								textShadow="0 1px 1px rgba(0, 0, 0, 0.5)"
								fontSize="lg"
							>
								{p.project.description}
							</Text>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};
