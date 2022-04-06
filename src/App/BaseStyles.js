import { createGlobalStyle } from "styled-components";
import { COLORS, WEIGHTS, FAMILIES } from "../shared/constants";

export default createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}
	* {
		margin: 0;
		line-height: calc(1em + 0.5rem);
	}
	html, body {
		height: 100%;
	}
	body {
		-webkit-font-smoothing: antialiased;
	}
	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}
	input, button, textarea, select {
		font: inherit;
	}
	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
	}
	button {
		display: block;
		margin: 0;
		padding: 0;
		border: none;
		background: transparent;
		cursor: pointer;
		text-align: left;
		font: inherit;
		color: inherit;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	#root, #__next {
		isolation: isolate;
	}

	/* DESIGN TOKENS */
  html {
    --color-white: ${COLORS.white};
    --color-black: ${COLORS.black};
    --fw-normal: ${WEIGHTS.normal};
    --fw-medium: ${WEIGHTS.medium};
    --fw-bold: ${WEIGHTS.bold};
    --family-serif: ${FAMILIES.serif};
    --family-sans: ${FAMILIES.sansSerif};
    font-family: 'Inter', var(--family-sans);
    font-weight: var(--fw-normal);
  }
`;
