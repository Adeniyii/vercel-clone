// import React from "react";
// import styled from "styled-components";

// import { COLORS } from "../constants";

// const SIZES = {
//   small: {
//     "--borderRadius": 2 + "px",
//     "--fontSize": 14 / 16 + "rem",
//   },
//   medium: {
//     "--borderRadius": 2 + "px",
//     "--fontSize": 1 + "rem",
//   },
//   large: {
//     "--borderRadius": 4 + "px",
//     "--fontSize": 1 + "rem",
//   },
// };

// const VARIANTS = {
//   fill: {

//   },
//   outline: {}
// }

// const Button = ({ variant, size, children, color, ...delegated }) => {
//   const styles = {...SIZES[size], ...VARIANTS[variant]};

//   let Component;
//   if (variant === "fill") {
//     Component = FillButton;
//   } else if (variant === "outline") {
//     Component = OutlineButton;
//   } else if (variant === "ghost") {
//     Component = GhostButton;
//   } else {
//     throw new Error(`Unrecognized Button variant: ${variant}`);
//   }

//   return <Component style={styles} {...delegated}>{children}</Component>;
// };

// const ButtonBase = styled.button`
//   font-size: var(--fontSize);
//   padding: var(--padding);
//   border-radius: var(--borderRadius);
//   border: 2px solid transparent;

//   &:focus {
//     outline-color: ${COLORS.primary};
//     outline-offset: 4px;
//   }
// `;

// const FillButton = styled(ButtonBase)`
//   background-color: ${COLORS.primary};
//   color: ${COLORS.white};

//   &:hover {
//     background-color: ${COLORS.primaryLight};
//   }
// `;
// const OutlineButton = styled(ButtonBase)`
//   background-color: transparent;
//   color: ${COLORS.primary};
//   border: 2px solid currentColor;

//   &:hover {
//     background-color: ${COLORS.offwhite};
//   }
// `;
// export default Button;
