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
		text-rendering: optimizeLegibility;
		background-color: var(--color-black);
		color: var(--color-white);
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
	::-webkit-scrollbar {
    width: 10px;
    background-color: var(--color-black);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1000px;
    background-color: var(--color-gray-500);
    border: 2px solid var(--color-black);
  }
	::selection {
		color: var(--color-white);
		background: var(--selection-bg);
	}

	/* DESIGN TOKENS */
  html {
    --color-white: ${COLORS.white};
    --color-black: ${COLORS.black};
    --accent-pink: ${COLORS.accent.pink};
    --accent-green: ${COLORS.accent.green};
    --accent-blue-100: ${COLORS.accent.blue[100]};
    --accent-blue-200: ${COLORS.accent.blue[200]};
    --color-gray-50: ${COLORS.gray[50]};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-200: ${COLORS.gray[200]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-400: ${COLORS.gray[400]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-600: ${COLORS.gray[600]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-800: ${COLORS.gray[800]};
    --color-gray-900: ${COLORS.gray[900]};
    --fw-normal: ${WEIGHTS.normal};
    --fw-medium: ${WEIGHTS.medium};
    --fw-bold: ${WEIGHTS.bold};
    --family-serif: ${FAMILIES.serif};
    --family-sans: ${FAMILIES.sansSerif};
		--page-gap: 24px;
		--page-width: 1000px;
		--page-width-with-gap: 1048px;
		--header-background: rgba(0, 0, 0, .5);
		--selection-bg: var(--accent-pink);
    font-family: 'Inter', var(--family-sans);
    font-weight: var(--fw-normal);
		scrollbar-width: thin;
    scrollbar-color: var(--color-gray-500) var(--color-black);
  }
`;
