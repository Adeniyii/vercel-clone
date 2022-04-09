import React from "react";

import styled, { keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <Wrapper>
      <IntroTextColumn>
        <TextWrapperUno data-text="Develop.">
          <IntroTextUno>Develop.</IntroTextUno>
        </TextWrapperUno>
        <TextWrapperDeux data-text="Preview.">
          <IntroTextDeux>Preview.</IntroTextDeux>
        </TextWrapperDeux>
        <TextWrapperTrois data-text="Ship.">
          <IntroTextTrois>Ship.</IntroTextTrois>
        </TextWrapperTrois>
      </IntroTextColumn>
      <CtaButtonRow>
        <Button to="/">Start Deploying</Button>
        <OutlineButton to="/">Get a Demo</OutlineButton>
      </CtaButtonRow>
      <IntroParagraph>
        Vercel combines the best developer experience with an obsessive focus on
        end-user performance.
        <br />
        Our platform enables frontend teams to do their best work.
      </IntroParagraph>
    </Wrapper>
  );
};

const FgUno = keyframes`
  0%, 16.667%, to {
      opacity: 1
  }

  33.333%, 83.333% {
      opacity: 0
  }
`;

const BgUno = keyframes`
  0%, 16.667%, to {
      opacity: 0
  }

  25%, 91.667% {
      opacity: 1
  }
`;

const FgDeux = keyframes`
  0%, to {
      opacity: 0
  }

  33.333%, 50% {
      opacity: 1
  }

  16.667%, 66.667% {
      opacity: 0
  }
`;

const BgDeux = keyframes`
  0%, to {
      opacity: 1
  }

  33.333%, 50% {
      opacity: 0
  }

  25%, 58.333% {
      opacity: 1
  }
`;

const FgTrois = keyframes`
  0%, 50%, to {
        opacity: 0
    }

    66.667%, 83.333% {
        opacity: 1
    }
`;

const BgTrois = keyframes`
  0%, 58.333%, 91.667%, to {
        opacity: 1
    }

    66.667%, 83.333% {
        opacity: 0
    }
`;

const Wrapper = styled.section`
  display: flex;
  padding: 3.5rem 0;
  flex-direction: column;
`;

const IntroTextColumn = styled.h1`
  margin-bottom: 64px;
`;

const TextWrapperUno = styled.span`
  position: relative;
  display: block;
  font-size: 10rem;
  text-align: center;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.06em;

  &:before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: block;
    color: var(--color-white);
    animation: ${BgUno} 8s ease infinite;
  }
`;

const TextWrapperDeux = styled(TextWrapperUno)`
  &:before {
    animation: ${BgDeux} 8s ease infinite;
  }
`;

const TextWrapperTrois = styled(TextWrapperUno)`
  &:before {
    animation: ${BgTrois} 8s ease infinite;
  }
`;

const IntroTextUno = styled.span`
  position: relative;
  line-height: 1;
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${FgUno} 8s ease infinite;
`;

const IntroTextDeux = styled(IntroTextUno)`
  background: linear-gradient(90deg, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${FgDeux} 8s ease infinite;
`;

const IntroTextTrois = styled(IntroTextUno)`
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${FgTrois} 8s ease infinite;
`;

const CtaButtonRow = styled.div`
  display: flex;
  gap: var(--page-gap);
  margin: 0 auto 64px;
`;

const IntroParagraph = styled.h2`
  line-height: 1.6em;
  color: var(--color-gray-500);
  font-weight: var(--fw-normal);
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 64px;
`;

const Button = styled(Link)`
  height: 50px;
  min-width: 200px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: var(--color-white);
  color: var(--color-black);
  display: grid;
  place-content: center;
  border: 1px solid var(--color-white);
  padding: 0px 25px;
  font-weight: var(--fw-medium);
  white-space: nowrap;
  will-change: transform;
  transition-property: background-color, color;
  transition-duration: 150ms;
  cursor: pointer;

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

const OutlineButton = styled(Button)`
  background-color: transparent;
  color: var(--color-gray-500);
  border: 1px solid var(--color-gray-700);

  &:hover {
    color: var(--color-white);
    border: 1px solid var(--color-white);
  }
`;

export default IntroSection;
