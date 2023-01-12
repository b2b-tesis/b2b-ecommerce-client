import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

import { KeyboardArrowDown } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Badge, Box, Dialog, styled } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import BazaarButton from "../buttons/Button";
import Image from "../BazaarImage";
import CategoryMenu from "../categories/CategoryMenu";
import FlexBox  from "../flexbox/FlexBox";
import Category from "../icons/Category";
import MobileMenu from "../navbar/MobileMenu";
import SearchBox from "../search-box/SearchBox"; // styled component
import { layoutConstant } from "../../constants/sizeConstants";
import { useRouter } from "next/router";
import { useCart } from "../../hooks/useCart";
import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
})); // ==============================================================

// ==============================================================
const Header = ({ isFixed, className }) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));

  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const {isLoggedIn} = useSelector((state) => (state.auth))

  const router = useRouter();
  const {cart} = useCart();
  
  const {logoutUser} = useLogout();
  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          gap: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox
          mr={2}
          minWidth="170px"
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Link href="/">
            <a>
              <Image height={44} src="/assets/images/logo2.svg" alt="logo" />
            </a>
          </Link>

          {isFixed && (
            <CategoryMenu>
              <FlexBox color="grey.600" alignItems="center" ml={2}>
                <BazaarButton color="inherit">
                  <Category fontSize="small" color="inherit" />
                  <KeyboardArrowDown fontSize="small" color="inherit" />
                </BazaarButton>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <SearchBox />
        </FlexBox>

        <FlexBox
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >

          <Badge badgeContent={cart.length} color="primary" onClick={() => router.push('/carrito')}>
            <Box
              ml={2.5}
              p={1.25}
              bgcolor="grey.200"
              component={IconButton}
            >
              <ShoppingCartOutlinedIcon />
            </Box>
          </Badge>
          {
            isLoggedIn && (
                <Box
                  ml={2.5}
                  p={1.25}
                  bgcolor="grey.200"
                  component={IconButton}
                  onClick={logoutUser}
                >
                  <LogoutOutlinedIcon />
                  
                </Box>
            )
          }
             {
            !isLoggedIn && (
                <Box
                  ml={2.5}
                  p={1.25}
                  bgcolor="grey.200"
                  component={IconButton}
                  onClick={() => router.push('/login')}
                >
                  <LoginOutlinedIcon />
                </Box>
            )
          }

        </FlexBox>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll="body"
          onClose={toggleDialog}
        >

        </Dialog>


        {downMd && <MobileMenu />}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
