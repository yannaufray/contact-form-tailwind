/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'green-200': 'hsl(148, 38%, 91%)',
				'green-600': 'hsl(169, 82%, 27%)',
				red: 'hsl(0, 66%, 54%)',
				white: 'hsl(0, 0%, 100%)',
				'medium-grey': 'hsl(186, 15%, 59%)',
				'darker-grey': 'hsl(187, 24%, 22%)'
			},
			fontFamily: {
				karla: ['Karla']
			}
		}
	},
	plugins: []
};
