import React ,{useState}from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "images/apple-touch-icon.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
  },
  '& .MuiDialogActions-root': {
  },
}));

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
  
// if we want hover in footer 

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3 bg-gradient-to-r from-primary-1000 to-secondary-1000`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex `;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0 bg-gradient-to-r from-primary-1000 to-secondary-1000`}
  svg {
    ${tw`w-4 h-4 `}
  }
`;

export default () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Support</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Product</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Log In</Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link href="#">Personal</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Business</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Team</Link>
              </LinkListItem> */}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Press</ColumnHeading>
            <LinkList>
              {/* <LinkListItem>
                <Link href="#">Logos</Link>
              </LinkListItem> */}
              <LinkListItem>
                <Link href="#">Events</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Stories</Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link href="#">Office</Link>
              </LinkListItem> */}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              {/* <LinkListItem>
                <Link href="#">GDPR</Link>
              </LinkListItem> */}
              <LinkListItem>
                <Link href="#">Privacy Policy</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#" onClick={handleClickOpen} >Terms of Service</Link>
                <div>
       
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Terms And Services       </BootstrapDialogTitle>
        
        <DialogContent dividers style={{color:"#7c8ba1"}}>
          <Typography gutterBottom>
          By clicking on the 'SIGNUP' option, the participant ("You" or "You're") agrees to the Terms and Conditions, obligations, representations, warranties, and agreements contained herein (the "Agreement"). In the event, You are not willing to accept the Agreement, You shall not be authorized or allowed to proceed further to view or use in any manner any content, information, courseware, products, and services ("Services") published, available or provided on www.tpo.ai (the "Website"), which is owned, maintained and monitored by Prahansoft Private Limited ("Us", "We" or "Our")..
          </Typography>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          User ID and Password        </BootstrapDialogTitle>
        
          <Typography gutterBottom>
          By entering into this Agreement, You acknowledge and agree that Your user ID and password ("Participant Account") are for Your exclusive use only. Use or sharing of Your Participant Account with another user is not permitted and is cause for the immediate blocking of Your access to the Website, the Services and the Content, the Courseware, and termination of this Agreement.
          You agree that You are solely responsible for maintaining the confidentiality of Your Participant Account and for all activities that occur under it. You agree to immediately notify our Grievance Officer if You become aware of or have reason to believe that there is any unauthorized use of Your Participant Account. You also agree to take all reasonable steps to stop such unauthorized use and to cooperate with Us in any investigation of such unauthorized uses. We shall not under any circumstances be held liable for any claims related to the use or misuse of Your Participant Account due to the activities of any third party outside of our control or due to Your failure to maintain the confidentiality and security of Your Participant Account.

          </Typography>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Content and Courseware        </BootstrapDialogTitle>
        
          <Typography gutterBottom>
          As a part of our Services offered through our Website, We shall grant you access to our content, courseware, practice tests, and other information, documents, and data which may be in audio, video, written, graphic, recorded, photographic, or any machine-readable format about the specific certification training course You have registered for ("Content and Courseware").
           We reserve the right to amend, revise or update the Content and Courseware offered to You. In the event such an amendment, revision, or updation occurs, We may require you to pay an additional fee to access such amended, revised, or updated Content and Courseware.    
          </Typography>

          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Usage of the Website and Services      </BootstrapDialogTitle>
        
          <Typography gutterBottom>
          We grant you a personal, restricted, non-transferable, non-exclusive, and revocable license to use the Website, the Services, and the Content and Courseware offered through the Website till the time of the completion of the certification training course that You have enrolled for or the termination of this Agreement according to the Terms and Conditions set forth herein, whichever is earlier. The Services and the Content and Courseware are provided solely for Your personal and non-commercial use to assist you in completing the certification training course You have registered for ("Restricted Purpose").
          You are permitted online access to the Website, the Services, and the Content and Courseware and may download, save, or print the Content and Courseware solely for the Restricted Purpose.
          You are not permitted to reproduce, transmit, distribute, sub-license, broadcast, disseminate, or prepare derivative works of the Content and Courseware, or any part thereof, in any manner or through any communication channels or means, for any purpose other than the Restricted Purpose, without Our prior written consent.

          </Typography>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </BootstrapDialog>
    </div>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Disclaimer</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
              <SubscribeText>
                We deliver high quality blog posts written by professionals weekly. And we promise no spam.
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Tpo.AI</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2023 TPO.AI  All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
