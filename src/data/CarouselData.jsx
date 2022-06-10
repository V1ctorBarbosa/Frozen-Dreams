import guy from "../assets/guy.jpg"
import clean from "../assets/clean.jpg"
import flavors from "../assets/flavors.jpg"
import place from "../assets/Stabelichment.jpg"
import team from "../assets/team.jpg"

export const data = [
	{
		title: 'What our clients say',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: guy,
	},
	{
		title: 'Our Kitchen',
		description: 'Learn more about our kitchen and all the policies we have to offer the best service.',
		image: clean,
	},
	{
		title: 'Our Team',
		description: 'Our team consists of the best experts in the industry, learn about them.',
		image: team,
	},
	{
		title: 'Our Stabelichment',
		description: 'Learn more about our establishment and how we are prepared to serve you.',
		image: place,
	},
	{
		title: 'Flavors',
		description: 'We offer the best flavors. Learn more about them.',
		image: flavors,
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};