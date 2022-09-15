import Car from "../components/icons/Car";
import Dress from "../components/icons/Dress";
import Food from "../components/icons/Food";
import Gift from "../components/icons/Gift";
import Laptop from "../components/icons/Laptop";
import MakeUp from "../components/icons/MakeUp";
import MotorBike from "../components/icons/MotorBike";

const navigations = [
  {
    icon: Laptop,
    title: "Tecnología",
    href: "/product/search/music",
    menuComponent: "MegaMenu1",
  },
  {
    icon: Food,
    title: "Agricultura y Comida",
    href: "/product/search/health&beauty",
    menuComponent: "MegaMenu1",
  },
  {
    icon: Dress,
    title: "Textil",
    href: "/product/search/pets",
    menuComponent: "MegaMenu1",
  },
  {
    icon: MakeUp,
    title: "Salud y Belleza",
    href: "/product/search/baby-toys",
    menuComponent: "MegaMenu1",
  },
  {
    icon: Food,
    title: "Casa y Decoración",
    href: "/product/search/groceries",
    menuComponent: "MegaMenu1",
  },
  {
    icon: MotorBike,
    title: "Repuestos Industriales",
    href: "/product/search/automotive",
    menuComponent: "MegaMenu1",
  },
  {
    icon: Car,
    title: "Electrónica",
    href: "/product/search/automotive",
    menuComponent: "MegaMenu1",
  },
  {
    icon: Gift,
    title: "Otros",
    href: "/product/search/automotive",
    menuComponent: "MegaMenu1",
  },

];
export default navigations;
