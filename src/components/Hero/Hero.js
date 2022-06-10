import React from 'react';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, ButtonWrapper, HeroButton } from './HeroStyles';
import video from "../../assets/hero.mp4"

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src={video} autoPlay muted loop />
			<Container>
				<MainHeading>Your new experience with flavor is here</MainHeading>
				<ButtonWrapper>
						<Button>Get Started</Button>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;