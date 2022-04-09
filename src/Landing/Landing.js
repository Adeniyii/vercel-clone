import React from "react";
import styled from "styled-components/macro";

import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import IntroSection from "./IntroSection";
import DevelopSection from "./DevelopSection";

const Landing = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <IntroSection />
        <MiniHeading>
          <small>Explore the vercel way</small>
        </MiniHeading>
        <DevelopSection />
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  isolation: isolate;
`;

const MiniHeading = styled.div`
  margin-bottom: 48px;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: var(--fw-bold);
  letter-spacing: 0.2rem;
  color: var(--color-white);
`;

export default Landing;
