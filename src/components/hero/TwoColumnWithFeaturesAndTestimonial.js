import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg"

const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-primary-1000 leading-snug xl:text-6xl`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-700 max-w-lg text-secondary-100`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5  bg-gradient-to-r from-primary-1000 to-secondary-1000`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center `;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-secondary-1000`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700 text-secondary-100`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-1000 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`
const QuotesLeftIcon = tw(QuotesLeftIconBase)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
const Quote = tw.blockquote``
const CustomerName = tw.p`mt-4 font-bold`
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`


export default ({

  heading = "Unlocking Student Potential with TPO.AI",
  description = "At TPO.AI, we believe that colleges are key stakeholders in the career development of their students. By collaborating with colleges, we aim to create a seamless and effective pathway for recent graduates to secure their first job and embark on a successful career journey.",
  imageSrc = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  imageDecoratorBlob = true,

  primaryButtonUrl = "https://google.com/",
  primaryButtonText = "Get Started",
  buttonRounded = true,
  features = ["Accurate Skill Assessment", "Personalized Learning Pathways", "Automated Resume Building", "Industry Connections"],
  testimonial = {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    customerName: "Charlotte Hale",
    customerCompany: "Delos Inc."

  }
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink className="smoothscroll" href="/#features" style={{color:"#150e45"}}>Features</NavLink>
      <NavLink className="smoothscroll" href="#pricing" style={{color:"#150e45"}}>Pricing</NavLink>
      <NavLink className="smoothscroll" href="/#contactsales" style={{color:"#150e45"}}>Contact Sales</NavLink>
      <NavLink className="smoothscroll" href="https://app.tpo.ai/user/login" target="_blank" style={{color:"#150e45"}}>Job Postings</NavLink>

      {/*   <NavLink href="/#">Testimonials</NavLink> */}
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink href="https://app.tpo.ai/user/login" tw="lg:ml-12!" style={{color:"#150e45"}} target="_blank">
        Login
      </NavLink>
      <PrimaryLink css={buttonRoundedCss} href="https://app.tpo.ai/user/sign-up" target="_blank">
        Sign Up
      </PrimaryLink>
    </NavLinks>
  ];
  return (
    <>
      <div className="navbar">
        <Header links={navLinks} />
      </div>
      <Container> 
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading style={{
                background: '-webkit-linear-gradient(left,#02c197, #006a9a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>{heading}</Heading>
              <Description>{description}</Description>
              <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss}>
                {primaryButtonText}
              </PrimaryButton>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            {/*  <ImageColumn>
              <ImageContainer>
                <Image src={imageSrc} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial>
                  <QuotesLeftIcon/>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerCompany>{testimonial.customerCompany}</CustomerCompany>
                </Testimonial>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn> */}
            <video controls style={{ width: "650px" }}>
              <source src="/Product Overview.mp4" type="video/mp4" />
            </video>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};
