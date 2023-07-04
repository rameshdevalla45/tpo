import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import defaultCardImage from "images/shield-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";


const Container = tw.div`relative`;

const TwoColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-primary-1000`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer { 
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none whitespace-nowrap`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose `}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Auto Skill Gap ",
      description: "Identify skill gaps and tailor personalized learning pathways to bridge them effectively."
    },
    {
      imageSrc: SupportIconImage,
      title: "Career Ladder",
      description: "Suggests courses based on skill reports and helps individuals bridge their skill gaps within a career ladder."
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Performance Analytics",
      description: "Generate comprehensive reports and analytics to track students' progress and make data-driven decisions."
    },
    {
      imageSrc: ReliableIconImage,
      title: "AI Resume Builder",
      description: "Create a professional, well structured resume with personalized guidance, showcasing your skills, and achievements."
    },
    {
      imageSrc: FastIconImage,
      title: "Job Match Evaluator",
      description: "Evaluate candidates' qualifications, skills, experience, and personal attributes in relation to the requirements of the job."
    },
    {
      imageSrc: SimpleIconImage,
      title: "Auto Job Hunt",
      description: "Building strong industry connections and providing placement opportunities for students.."
    },
  ];

  if (!cards) cards = defaultCards;
  debugger;
  return (
    <>
      <Container id="features">
        <TwoColumnContainer>
          {subheading && <Subheading style={{
                background: '-webkit-linear-gradient(left,#02c197, #006a9a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>{subheading}</Subheading>}
          <Heading >{heading}</Heading>
          {/* {description && <Description>{description}</Description>} */}
          <VerticalSpacer />
          {cards.map((card, i) => (
            <Column key={i}>
              <Card>
                <span className="imageContainer">
                  <img src={card.imageSrc || defaultCardImage} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card.title || "Fully Secure"}</span>
                  <p className="description">
                    {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                  </p>
                </span>
              </Card>
            </Column>
          ))}
          <video controls style={{ width: "650px" }}>
            <source src="/videos/video_Aitpo.mp4" type="video/mp4" />
          </video>
        </TwoColumnContainer>
        <DecoratorBlob />
      </Container>
    </>
  );
};
