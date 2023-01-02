import { useRouter } from "next/router";
import { Fragment } from "react";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { Card, styled, Typography } from "@mui/material";

import FlexBox from "../../flexbox/FlexBox";
import NavLink from "../../nav-link/NavLink";

const MainContainer = styled(Card)(({ theme }) => ({
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    overflowY: "auto",
    height: "calc(100vh - 64px)",
  },
}));
const StyledNavLink = styled(({ children, isCurrentPath, ...rest }) => (
  <NavLink {...rest}>{children}</NavLink>
))(({ theme, isCurrentPath }) => ({
  display: "flex",
  alignItems: "center",
  borderLeft: "4px solid",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: "1.25rem",
  justifyContent: "space-between",
  borderColor: isCurrentPath ? theme.palette.primary.main : "transparent",
  "& .nav-icon": {
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
    "& .nav-icon": {
      color: theme.palette.primary.main,
    },
  },
}));

const NavigationsSales = () => {
  const { pathname } = useRouter();
  return (
    <MainContainer>
      {linkList.map((item) => (
        <Fragment key={item.title}>
          <Typography p="26px 30px 1rem" color="grey.600" fontSize="12px">
            {item.title}
          </Typography>

          {item.list.map((item) => (
            <StyledNavLink
              href={item.href}
              key={item.title}
              isCurrentPath={pathname.includes(item.href)}
            >
              <FlexBox alignItems="center" gap={1}>
                <item.icon
                  color="inherit"
                  fontSize="small"
                  className="nav-icon"
                />
                <span>{item.title}</span>
              </FlexBox>

              <span>{item.count}</span>
            </StyledNavLink>
          ))}
        </Fragment>
      ))}
    </MainContainer>
  );
};

const linkList = [
  {
    title: "DASHBOARD",
    list: [
      {
        href: "/usuario/ordenes-venta",
        title: "Órdenes de Venta",
        icon: ListAltOutlinedIcon
      }
    ],
  },
  {
    title: "ACCOUNT SETTINGS",
    list: [
      {
        href: "/usuario/productos",
        title: "Productos",
        icon: InventoryOutlinedIcon
      },
      {
        href: "/usuario/categorias-productos",
        title: "Categoría de Productos",
        icon: PostAddOutlinedIcon
      },
      {
        href: "/usuario/recibir-pagos",
        title: "Recibir Pagos",
        icon: PointOfSaleOutlinedIcon
      }
    ],
  },
];
export default NavigationsSales;
