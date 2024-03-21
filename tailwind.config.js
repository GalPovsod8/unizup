/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class'],
	theme: {
		fontSize: {
			14: '0.9rem',
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			32: '2rem',
			40: '2.5rem',
			64: '4rem',
			96: '6rem'
		},
		colors: {
			transparent: '#ffffff00',
			black: '#1a1a1a',
			white: '#FFFFFF',
			yellow: '#FDD708',
			blue: '#51B3C9',
			red: '#FF7D7D',
			redTag: '#942B2B',
			tagBlue: '#1E8096',
			novicaTagYellow: '#75770E',
			moreRed: '#FF3F3F'
		},
		gap: {
			0: '0rem',
			5: '0.313rem',
			10: '0.625rem',
			15: '0.938rem',
			20: '1.25rem',
			30: '1.875rem',
			50: '3.125rem',
			60: '3.75rem',
			90: '5.625rem',
			120: '7.5rem'
		},
		dropShadow: {
			shadow: '5px 5px 0px #1a1a1a',
			shadowHover: '0px 0px 0px',
			shadowSm: '2px 2px 0px #1a1a1a'
		},
		extend: {
			padding: {
				0: '0rem',
				5: '0.313rem',
				10: '0.625rem',
				15: '0.938rem',
				30: '1.875rem',
				40: '2.5rem',
				50: '3.125rem',
				60: '3.75rem',
				90: '5.625rem',
				120: '7.5rem'
			},
			animation: {
				oznanilaNoviceLoader: 'onl 1s infinite ease-in-out alternate',
				fontAnim: 'fontAnim .5s forwards ease-in-out',
				show: 'show .5s forwards ease-in-out',
				showUp: 'showUp 1s forwards ease-in-out',
				cBounce: 'cBounce 2s infinite ease-in-out'
			},
			keyframes: {
				onl: {
					'0%': { backgroundColor: 'hsl(200, 20%, 80%)' },
					'100%': { backgroundColor: 'hsl(200, 20%, 95%)' }
				},
				fontAnim: {
					'0%': { fontWeight: 'normal' },
					'100%': { fontWeight: 'bold' }
				},
				show: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				showUp: {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				cBounce: {
					'0%, 100%': { transform: 'translateY(-10%)' },
					'50%': { transform: 'translateY(0)' }
				}
			},
			fontFamily: {
				kufam: ['Kufam', 'sans-serif']
			}
		}
	},
	plugins: []
};
