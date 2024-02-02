/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class'],
	theme: {
		fontSize: {
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			32: '2rem',
			40: '2.5rem',
			64: '4rem',
			96: '6rem'
		},
		colors: {
			black: '#1a1a1a',
			white: '#FFFFFF',
			yellow: '#FDD708',
			novicaTagYellow: '#92942B',
			blue: '#51B3C9',
			red: '#FF7D7D',
			redTag: '#942B2B',
			moreRed: '#FF3F3F'
		},
		gap: {
			5: '0.313rem',
			15: '0.938rem',
			30: '1.875rem',
			50: '3.125rem',
			60: '3.75rem',
			90: '5.625rem',
			120: '7.5rem'
		},
		dropShadow: {
			shadow: '5px 5px 0px #1a1a1a',
			shadowHover: '0px 0px 0px',
			shadowSm: '0 2px 2px #1a1a1a'
		},
		extend: {
			padding: {
				90: '5.625rem'
			}
		}
	},
	plugins: []
};
