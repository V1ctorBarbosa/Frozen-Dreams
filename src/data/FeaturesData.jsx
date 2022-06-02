import React from 'react';
import { IoMdIceCream } from "react-icons/io";
import { MdWash, MdDeliveryDining } from "react-icons/md";
import { BiSupport, BiDollar, BiCool } from 'react-icons/bi';

const iconStyle = (Icon) => <Icon size="3rem" color="#E91601" />;

export const featuresData = [
	{
		name: 'Variety of Flavors',
		description: 'We have a huge variety of flavors and ingredient combinations.',
		icon: iconStyle(IoMdIceCream),
		imgClass: 'one',
	},
	{
		name: 'Clean Environment',
		description: 'Kitchen and lounge cleaned daily',
		icon: iconStyle(MdWash),
		imgClass: 'two',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'three',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'four',
	},
	{
		name: 'Delivery',
		description: 'The fastest delivery in town',
		icon: iconStyle(MdDeliveryDining),
		imgClass: 'five',
	},
	{
		name: 'Family Friendly',
		description: 'Just a nice place to hangout with friends and family',
		icon: iconStyle(BiCool),
		imgClass: 'six',
	}
];