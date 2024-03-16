/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				purple: "#0B073C",
				yellow : "#FEC72E"
			},
		},
	},
	plugins: [],
};
