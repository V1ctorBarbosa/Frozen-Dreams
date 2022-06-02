export const data = [
	{
		title: 'What our clients say',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: './assets/guy.jpg',
	},
	{
		title: 'Our Kitchen',
		description: 'Learn more about our kitchen and all the policies we have to offer the best service.',
		image: './assets/clean.jpg',
	},
	{
		title: 'Our Team',
		description: 'Our team consists of the best experts in the industry, learn about them.',
		image: './assets/team.jpg',
	},
	{
		title: 'Our Stabelichment',
		description: 'Learn more about our establishment and how we are prepared to serve you.',
		image: './assets/Stabelichment.jpg',
	},
	{
		title: 'Flavors',
		description: 'We offer the best flavors. Learn more about them.',
		image: './assets/flavors.jpg',
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