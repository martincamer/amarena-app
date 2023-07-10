/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#EFEAE4',
				secondary: '#ECE7E1',
				terciary: '#CFCECA',
				fourty: '#4F2D17',
				five: '#A69E95',
			},
		},
	},
	plugins: [],
};
