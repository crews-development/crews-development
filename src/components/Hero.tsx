import {
	Box,
	Center,
	Heading,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectBox } from "../Data";

export type HeroProps = {
	projects: ProjectBox[];
};

export const Hero = ({ projects }: HeroProps) => {
	const navigationVisible = useBreakpointValue({ base: false, md: true });
	const headingSize = useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" });
	const height = useBreakpointValue({ base: 64, sm: 96, md: "600px" });
	const navSpacing = useBreakpointValue({ base: 10, sm: 14, md: 20 });

	useEffect(() => {
		const prevButton = document.getElementsByClassName("swiper-button-prev")[0];
		const nextButton = document.getElementsByClassName("swiper-button-next")[0];
		const pagination = document.getElementsByClassName("swiper-pagination")[0];
		const bullets = document.getElementsByClassName("swiper-pagination-bullet");

		const navStyle =
			"background-color: rgba(0, 0, 0, 0.2);" +
			"border-radius: 4px;" +
			"color: white;" +
			"padding: 30px 20px;" +
			"backdrop-filter: blur(12px);";

		const paginationStyle =
			"display: inline-block;" +
			"background-color: rgba(0, 0, 0, 0.2);" +
			"border-radius: 4px;" +
			"width: auto;" +
			"left: 50%;" +
			"transform: translateX(-50%);" +
			"padding: 2px;" +
			"backdrop-filter: blur(12px);";

		const bulletStyle = "background-color: #fff";

		if (prevButton && nextButton && pagination) {
			prevButton.setAttribute("style", navStyle);
			nextButton.setAttribute("style", navStyle);
			pagination.setAttribute("style", paginationStyle);

			for (let i = 0; i < bullets.length; i++) {
				bullets[i].setAttribute("style", bulletStyle);
			}
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
					delay: 5000,
					disableOnInteraction: true,
				}}
			>
				{projects.map((p) => (
					<SwiperSlide key={p.project.name}>
						<Center
							padding={8}
							overflow="visible"
							bg={
								p.backgroundImage ?? p.backgroundGradient ?? p.backgroundColor
							}
							bgSize="cover"
							bgPos="center"
							textAlign="center"
							h={height}
						>
							<Box>
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
								<Text color={p.textColor} fontSize="lg">
									{p.project.description}
								</Text>
							</Box>
						</Center>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};
