/** @type {import('tailwindcss').Config} */
export default {
	content: [ './index.html', './src/**/*.{js,ts,jsx,tsx}' ],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#6C63FF',
				secondary:'#534CC2',
				'base-black': '#252525',
				'base-white': '#F7F7F7'
			}
		}
	},
	
	plugins: []
}
