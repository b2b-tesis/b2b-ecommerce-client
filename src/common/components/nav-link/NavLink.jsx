import React from "react"; 
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

import { styled } from "@mui/material";

// styled component
const StyledLink = styled("a")(({ theme, active_route }) => ({
  position: "relative",
  transition: "color 150ms ease-in-out",
  color: active_route === "active" ? theme.palette.primary.main : "inherit",
  "&:hover": {
    color: `${theme.palette.primary.main} !important`,
  },
}));

const NavLink = ({ href, children, style, className, ...props }) => {
  const { pathname } = useRouter();

  const checkRouteMatch = () => {
    if (href === "/") return pathname === href;
    return pathname.includes(href);
  }; // active route

  const currentRoute = checkRouteMatch();
  return (
    <Link href={href} passHref>
      <StyledLink
        href={href}
        style={style}
        className={clsx(className)}
        active_route={currentRoute ? "active" : ""}
        {...props}
      >
        {children}
      </StyledLink>
    </Link>
  );
};

export default NavLink;
