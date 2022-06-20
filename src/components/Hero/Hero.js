import React from 'react';
import { Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection} from './HeroStyles';
import video from "../../assets/hero.mp4"

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src={video} autoPlay muted loop />
			<Container>
				<MainHeading>Your new experience with flavor is here</MainHeading>
			</Container>
		</HeroSection>
	);
};

export default Hero;