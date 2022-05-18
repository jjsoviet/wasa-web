module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		fontFamily: {
			header: 'Marcellus',
			content: 'Roboto Flex',
			branding: 'Italianno',
			controls: 'Noto Sans'
		},
		extend: {
			colors: {
				card: 'rgb(241, 238, 235)',
				navbar: 'rgba(255, 255, 255, 0.8)',
				border: 'rgb(0 0 0 / 35%)',
				button: 'rgb(155, 106, 69)'
			},
			height: {
				header: '800px',
				section: '400px',
				spacer: '200px',
				navbar: '80px',
				card: '420px',
				'card-title': '60px'
			},
			minWidth: {
				'1/10': '10%',
				'1/5': '20%',
				'1/3': '33.33%',
				navbar: '800px',
				card: '200px'
			},
			maxWidth: {
				'1/10': '10%',
				'1/5': '20%',
				'1/3': '33.33%',
				navbar: '1440px'
			},
			minHeight: {
				'1/10': '10%',
				'1/5': '20%',
				'1/3': '33.33%'
			},
			maxHeight: {
				'1/10': '10%',
				'1/5': '20%',
				'1/3': '33.33%'
			},
			transitionTimingFunction: {
				'ease-custom': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
			}
		}
	}
};
