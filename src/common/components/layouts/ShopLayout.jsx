import React, { useCallback, useState } from "react";
import Footer from "../layoutComponents/Footer";
import Topbar from "../topbar/Topbar";

const ShopLayout = ({
  children,
  showTopbar = true,
  topbarBgColor,
  showNavbar = true,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  return (
    <>
       {showTopbar && <Topbar bgColor={topbarBgColor} />}

      <Footer />
    </>
  );
};

export default ShopLayout;
