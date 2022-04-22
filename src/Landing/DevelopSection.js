import React from "react";
import styled from "styled-components";

const DevelopSection = () => {
  return (
    <Wrapper>
      <Tip />
      <Ball>1</Ball>
      <MicroHeading>Develop</MicroHeading>
      <MiniHeading>Start with the developer</MiniHeading>
      <CopyRow>
        <CopyText>
          Developers love{" "}
          <a href="https://vercel.com/solutions/nextjs">Next.js</a>, the open
          source React framework Vercel built together with Google and Facebook.
          Next.js powers the biggest websites like{" "}
          <a href="https://www.patreon.com/">Patreon</a>, for use cases in{" "}
          <a href="/">e-commerce</a>, <a href="/">travel</a>,{" "}
          <a href="/">news</a>, and <a href="/">marketing</a>.
        </CopyText>
        <CopyText>
          Vercel is the best place to deploy any frontend app. Start by
          deploying with zero configuration to our{" "}
          <a href="/">global edge network</a>. <a href="/">Scale dynamically</a>{" "}
          to millions of pages without breaking a sweat.
        </CopyText>
      </CopyRow>
      <Features>
        <FeatureWrapper>
          <FeatureImagesColumn>
            <LeftImage>
              <ImageHeader>
                <CircleRow>
                  <CircleIcon bg="#ff5f56" />
                  <CircleIcon bg="#ffbd2e" />
                  <CircleIcon bg="#27c93f" />
                </CircleRow>
                <Tab>
                  <h6>index.js</h6>
                </Tab>
              </ImageHeader>
              <ImageBody></ImageBody>
            </LeftImage>
            <RightImage>
              <ImageHeader>
                <CircleRow>
                  <CircleIcon bg="#ff5f56" />
                  <CircleIcon bg="#ffbd2e" />
                  <CircleIcon bg="#27c93f" />
                </CircleRow>
              </ImageHeader>
              <ImageBody></ImageBody>
            </RightImage>
          </FeatureImagesColumn>
        </FeatureWrapper>
        <FeatureWrapper>
          <FeatureTextColumn>
            <FeatureTextItem>
              <h5>Fast Refresh</h5>
              <p>Reliable live-editing experience for your UI components.</p>
            </FeatureTextItem>
            <FeatureTextItem>
              <h5>Flexible Data Fetching</h5>
              <p>
                Connect your pages to any data source, headless CMS, or API and
                make it work in everyone’s dev environment.
              </p>
            </FeatureTextItem>
            <FeatureTextItem>
              <h5>Edge on Localhost</h5>
              <p>
                From caching to Serverless Functions, all our cloud primitives
                work perfectly on localhost.
              </p>
            </FeatureTextItem>
          </FeatureTextColumn>
        </FeatureWrapper>
      </Features>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tip = styled.span`
  --start-color: var(--color-black);
  --end-color: var(--accent-blue-100);

  width: 0.8px;
  height: 100px;
  background-image: linear-gradient(var(--start-color), var(--end-color));
`;

const Ball = styled.span`
  --start-color: var(--accent-blue-200);
  --end-color: var(--accent-green);

  width: 40px;
  height: 40px;
  border-radius: 100%;
  color: var(--color-black);
  font-weight: var(--fw-bold);
  display: grid;
  place-content: center;
  margin-bottom: 24px;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
`;

const MicroHeading = styled.h3`
  --start-color: var(--accent-blue-200);
  --end-color: var(--accent-green);

  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  font-weight: var(--fw-bold);
  font-size: 2rem;
  letter-spacing: -0.05em;
  margin-bottom: 16px;
`;

const MiniHeading = styled.h4`
  text-align: center;
  margin-bottom: 36px;
  font-weight: var(--fw-bold);
  letter-spacing: -0.05em;
  font-size: 3.75rem;
`;

const CopyRow = styled.article`
  display: flex;
  margin-bottom: 64px;
  padding-block: 12px;
`;

const CopyText = styled.p`
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: var(--color-gray-500);
  flex: 1;

  &:not(:first-of-type) {
    margin-left: var(--page-gap);
  }

  & > a {
    color: var(--accent-blue-300);

    &:hover {
      color: var(--color-white);
    }
  }
`;

const Features = styled.article`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const FeatureWrapper = styled.article`
  flex: 1;
  max-width: 100%;

  &:nth-of-type(1) {
    margin-left: -100px;
  }

  &:nth-of-type(2) {
    max-width: min(100%, 500px);
  }
`;

const FeatureTextColumn = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 64px;
`;

const FeatureTextItem = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 64px;
  }

  & > h5 {
    font-size: 1.5rem;
    letter-spacing: -0.05em;
    font-weight: var(--fw-bold);
    margin-bottom: calc(var(--page-gap) / 2);
  }

  & > p {
    letter-spacing: -0.02em;
    color: var(--color-gray-500);
  }
`;

const FeatureImagesColumn = styled.div`
  margin-left: auto;
  max-width: 540px;
`;

const BaseImage = styled.div`
  max-width: 90%;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 0 0 1px var(--color-gray-700);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: var(--color-black);
`;

const LeftImage = styled(BaseImage)``;

const RightImage = styled(BaseImage)`
  left: 10%;
  top: -100px;
`;

const ImageHeader = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border-bottom: 1px solid var(--color-gray-700);
`;

const ImageBody = styled.div``;

const CircleRow = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  left: calc(var(--page-gap) / 2);
`;

const CircleIcon = styled.div`
  border-radius: 100%;
  width: calc(var(--page-gap) / 2);
  height: calc(var(--page-gap) / 2);
  background-color: ${(p) => p.bg};
`;

const Tab = styled.div`
  position: absolute;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid var(--color-gray-700);
  border-bottom-color: var(--color-black);
  left: 80px;
  bottom: -1.3px;
  padding: 10px 20px;
  background-color: var(--color-black);

  & > h6 {
    font-size: calc(12 / 16 * 1rem);
    font-weight: var(--fw-normal);
    color: var(--color-gray-500);
  }
`;

export default DevelopSection;
