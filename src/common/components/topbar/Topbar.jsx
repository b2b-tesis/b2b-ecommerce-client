import Link from "next/link";

import { CallOutlined, MailOutline } from "@mui/icons-material";
import { Box, Container, styled } from "@mui/material";
import Image from "../BazaarImage";
import  FlexBox  from "../flexbox/FlexBox";
import { Span } from "../Typography";
import { layoutConstant } from "../../constants/sizeConstants";


const TopbarWrapper = styled(Box)(({ theme, bgcolor }) => ({
  fontSize: 12,
  height: layoutConstant.topbarHeight,
  background: bgcolor || theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  "& .topbarLeft": {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      marginLeft: "10px",
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block",
      },
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  "& .topbarRight": {
    "& .link": {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        display: "none",
      },
    },
  },
}));

const Topbar = ({ bgcolor }) => {
  return (
    <TopbarWrapper bgcolor={bgcolor}>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox className="topbarLeft" alignItems="center">
        <div className="logo">
            <Link href="/" passHref>
              <Image
                display="block"
                height="28px"
                src="/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>

          <FlexBox alignItems="center">
            <CallOutlined fontSize="small" />
            <Span className="title">+51 952289457</Span>
          </FlexBox>
          
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <FlexBox alignItems="center" >
              <MailOutline fontSize="small" sx={{marginRight:1}}/>
              <Span className="title">soporteb2b@gmail.com</Span>
          </FlexBox>

        </FlexBox>

      </Container>
    </TopbarWrapper>
  );
};

export default Topbar;
