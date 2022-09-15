import { Badge } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import CategoryOutlined from "../icons/CategoryOutline";
import Home from "../icons/Home";
import ShoppingBagOutlined from "../icons/ShoppingBagOutlined";
import User2 from "../icons/User2";
import { iconStyle, StyledNavLink, Wrapper } from "./styles";

import { useAppContext } from "../../contexts/AppContext";
import useWindowSize from "../../hooks/useWindowSize";

const MobileNavigationBar = () => {
  const width = useWindowSize();
  const { state } = useAppContext();
  return width <= 900 ? (
    <Wrapper>
      {list.map((item) => (
        <StyledNavLink href={item.href} key={item.title}>
          {item.title === "Carrito de compras" ? (
            <Badge badgeContent={state.cart.length} color="primary">
              <item.icon fontSize="small" sx={iconStyle} />
            </Badge>
          ) : (
            <item.icon sx={iconStyle} fontSize="small" />
          )}

          {item.title}
        </StyledNavLink>
      ))}
    </Wrapper>
  ) : null;
};

const list = [
  {
    title: "Página principal",
    icon: Home,
    href: "/",
  },
  {
    title: "Categorías",
    icon: CategoryOutlined,
    href: "/mobile-category-nav",
  },
  {
    title: "Carrito de compras",
    icon: ShoppingCartOutlinedIcon,
    href: "/cart",
  },
  {
    title: "Notificaciones",
    icon: NotificationsNoneOutlinedIcon,
    href: "/profile",
  },
];
export default MobileNavigationBar;
