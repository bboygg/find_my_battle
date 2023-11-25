import {
	FaDribbble,
	FaFacebook,
	FaLinkedin,
	FaMailBulk,
	// FaMapMarked,
	// FaMobileAlt,
	FaTwitter,
} from "react-icons/fa";

export const Navigations = [
	{
		id: 0,
		name: "Home",
		url: "/",
	},
	{
		id: 1,
		name: "Battles",
		url: "battles",
	},
	{
		id: 2,
		name: "Add Battle",
		url: "https://docs.google.com/forms/d/e/1FAIpQLSfY_zPo-FXo3ZEyoFf_TXkb1pWcNkEwR8bMcJJ-hlZHovKPuw/viewform",
	},
	{
		id: 3,
		name: "About",
		url: "about",
	},
	{
		id: 4,
		name: "Contact",
		url: "contact",
	},
];

export const socialIcons = [
	{
		id: 0,
		icon: FaDribbble,
		link: "https://twitter.com/SamsonChiemezie",
	},
	{
		id: 1,
		icon: FaFacebook,
		link: "https://twitter.com/SamsonChiemezie",
	},
	{
		id: 2,
		icon: FaLinkedin,
		link: "https://twitter.com/SamsonChiemezie",
	},
	{
		id: 3,
		icon: FaTwitter,
		link: "https://twitter.com/SamsonChiemezie",
	},
];

export const contactObj = [
	// {
	// 	id: 1,
	// 	icon: FaMobileAlt,
	// 	title: "Call Us On",
	// 	text: "+86-123453435346",
	// },
	{
		id: 1,
		icon: FaMailBulk,
		title: "Email Us At",
		text: "findmybattle@gmail.com",
	},
	// {
	// 	id: 3,
	// 	icon: FaMapMarked,
	// 	title: "Visit Office",
	// 	text: "No.adrress",
	// },
];
