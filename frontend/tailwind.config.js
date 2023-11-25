/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	corePlugins: {
		preflight: true,
	},
	theme: {
		extend: {
			fontFamily: {
				round: ["Varela Round", "sans-serif"],
				lora: ["Lora", "serif"],
				josefin: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	round: [require("@tailwindcss/forms")],
};
