import { Box, Container, styled } from "@mui/material";
import BazaarButton from "../BazaarButton";
import NavLink from "../nav-link/NavLink";
import BazaarCard from "../BazaarCard";

// const common css style
const navLinkStyle = {
  cursor: "pointer",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
  "&:last-child": {
    marginRight: 0,
  },
}; // style components

const StyledNavLink = styled(NavLink)(() => ({ ...navLinkStyle }));
const ParentNav = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    "& > .parent-nav-item": {
      display: "block",
    },
  },
}));
const ParentNavItem = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 5,
  left: "100%",
  paddingLeft: 8,
  display: "none",
  position: "absolute",
  [theme.breakpoints.down(1640)]: {
    right: "100%",
    left: "auto",
    paddingRight: 8,
  },
}));
const NavBarWrapper = styled(BazaarCard)(({ theme, border }) => ({
  height: "60px",
  display: "block",
  borderRadius: "0px",
  position: "relative",
  ...(border && {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  }),
  [theme.breakpoints.down(1150)]: {
    display: "none",
  },
}));
const InnerContainer = styled(Container)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const CategoryMenuButton = styled(BazaarButton)(({ theme }) => ({
  width: "278px",
  height: "40px",
  backgroundColor: theme.palette.grey[100],
}));
const ChildNavsWrapper = styled(Box)(() => ({
  zIndex: 5,
  left: "50%",
  top: "100%",
  display: "none",
  position: "absolute",
  transform: "translate(-50%, 0%)",
})); // ==========================================================

export {
  navLinkStyle,
  StyledNavLink,
  ParentNav,
  ParentNavItem,
  NavBarWrapper,
  InnerContainer,
  CategoryMenuButton,
  ChildNavsWrapper
}