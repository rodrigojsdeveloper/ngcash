import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		border: 0;
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
	}

	:root {
		// Color white
		--color-white: #FFFFFF;
		--color-white-2: #F8F8FF;
		--color-white-3: #F0F0F1;

		// Color black
		--color-black: #000000;

		// Color gray
		--color-gray: #808080;
		
		// Color shadow
		--shadow: rgba(0, 0, 0, 0.06);
		--shadow-2: rgba(0, 0, 0, 0.1);
		--shadow-3: rgba(0, 0, 0, 0.15);
		--shadow-4: rgba(0, 0, 0, 0.65);
		
		--shadow-blue: rgba(136, 165, 191, 0.48);
	}

	body {
		background: var(--color-white);
		color: var(--color-black);
	}

	button, a {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	
	input[type=number] {
		-moz-appearance:textfield;
	}
`;
