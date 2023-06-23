import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center text-primary-1000`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
  subheading = "FAQS",
  heading = "You have Questions ?",
  description = "And we have got answers to all of them.",
  faqs = [
    {
      question: "What is a TPO.AI?",
      answer:
        "TPO.AI is an online platform specifically designed to assist college students and graduates in finding job placements. These websites utilize artificial intelligence (AI) technology to automate and optimize the job placement process for students by matching them with relevant job opportunities based on their skills, qualifications, and career preferences. The TPO.AI acts as a virtual assistant, helping college students navigate the transition from academia to the professional world."
    },
    {
      question: "How does a TPO.AI work?",
      answer:
        `The functioning of a TPO.AI typically involves the following steps: 1 Student Profiles: College students create profiles on the website, providing information about their educational background, areas of study, skills, and career preferences., 2 Data Analysis: AI algorithms analyze student profiles and process relevant data to understand their qualifications, interests, and job requirements.
        3.Job Matching: Based on the data analysis, the AI algorithms match students with job opportunities that align with their profiles. Factors such as industry, location, skills, and job requirements are taken into consideration.4.Job Recommendations: The TPO.AI presents students with recommended job opportunities, allowing them to review and apply for positions that match their interests and qualifications.
        5.Career Guidance: Some TPO.AI provide additional resources and guidance to help students improve their employability. This may include resume-building tools, interview preparation materials, and career development resources.
        `
        
    },
    {
      question: "What are the benefits of using a TPO.AI?",
      answer:
      `Utilizing a TPO.AI offers several benefits:
       1.Efficient Job Matching: AI algorithms can efficiently match college students with relevant job opportunities, saving time and effort compared to manual job searches.
      2.Personalized Recommendations: The AI algorithms take into account the student's profile, qualifications, and career preferences, providing personalized job recommendations tailored to their specific needs.
      3. Industry Connections: It helps to often have partnerships with companies and organizations, allowing students to access a wide range of job openings and internship opportunities.
      4.Skill Enhancement: TPO.AI offers resources to help students develop and enhance the skills required for their desired career paths, increasing their employability.
      5.Networking Opportunities: This platform facilitates connections between students and industry professionals, providing networking opportunities that can be valuable for future career prospects.`
    },
    {
      question: " Can a TPO.AI guarantee job placement for college students?",
      answer:
      ` While a TPO.AI can significantly assist college students in their job search, it cannot guarantee job placement. The AI algorithms and matching processes can identify suitable job opportunities based on the student's profile and preferences. However, the final decision lies with the employers who evaluate candidates based on various factors.
      Job placement also depends on external factors such as market conditions, competition, and the student's efforts. Students should actively engage in the job search process, refine their skills, and leverage their college's career services in addition to using the TPO.AI to increase their chances of securing a job.`
    },
    {
      question: "Is TPO.AI for colleges free to use?",
      answer:
      `  The availability and cost structure of TPO.AI may vary. Some platforms offer free access to their basic features, allowing students to create profiles and browse job listings. However, they may charge for additional premium services, such as advanced job matching, personalized career coaching, or exclusive internship opportunities.
      Other platforms may operate on a subscription or partnership model with colleges, where the institution provides access to the platform as part of their career services for students. It's advisable to review the pricing details and terms of service of each platform to understand the costs and access options available.`
    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
          {subheading && <Subheading style={{
                background: '-webkit-linear-gradient(left,#02c197, #006a9a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
    </Container>
  );
};
