import IceCream from "../assets/svg/IceCream.svg"
import Team from "../assets/svg/Supermarket.svg"
import Bussines from "../assets/svg/Businesswoman.svg"

export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Founded in 2012',
	},
	headline: "We've been in business for 10 years",
	description: 'We have the best reputation and best flavors.',
	buttonLabel: 'Find More',
	imgStart: 'start',
	img: IceCream,
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Discipline and Care',
	},
	headline: 'The best practices',
	description: "Our ingredients are fresh and selected. We take care to guarantee the best flavor from the raw material to the customer's hand.",
	buttonLabel: 'See Reviews',

	linkTo: '/more',
	imgStart: 'start',
	img: Team,
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Highly reputed brand',
	},
	headline: 'Why us? ',
	description:
		'Our 10 years of experience have made us learn the best practices in the industry. Best materials. Best professionals. Clear policies on customer service. We always stand out in the market with such practices.',
	buttonLabel: 'View Numbers',

	linkTo: '/download',
	imgStart: '',
	img: Bussines,
	start: 'true',
};