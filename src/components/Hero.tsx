import { Heading, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Project } from "../Data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type HeroProps = {
	projects: Project[];
};

export const Hero = ({ projects }: HeroProps) => {
	const headingSize = useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl" });

	return (
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			navigation
			pagination={{ clickable: true }}
		>
			{projects.map((p) => (
				<SwiperSlide key={p.name}>
					<Box paddingY="32" bg="brand.500">
						<Heading mb="16px" color="whiteAlpha.900" size={headingSize}>
							{p.name}
						</Heading>
						<Text color="whiteAlpha.700">{p.description}</Text>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
