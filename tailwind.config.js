/** @type {import('tailwindcss').Config} */
export default {
	content: [ './index.html', './src/**/*.{js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			colors: {
				primary: '#6C63FF',
				'base-black': '#252525',
				'base-white': '#F7F7F7',
			}
		},
	},
	plugins: []
}
