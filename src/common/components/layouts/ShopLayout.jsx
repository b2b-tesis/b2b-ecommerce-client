import React, { useCallback, useState } from "react";

import Header from "../header/Header";
import Footer from "../layoutComponents/Footer";
import Navbar from "../navbar/Navbar";
import Sticky from "../sticky/Sticky";
import Topbar from "../topbar/Topbar";
import MobileNavigationBar from "../mobile-navigation/MobileNavigationBar";
import Toast from "../toast/Toast";

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
       {showTopbar && <Topbar bgcolor={topbarBgColor} />}

       <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Header isFixed={isFixed} />
      </Sticky>
      <div className="section-after-sticky">
        {/* NAVIGATION BAR */}
        {showNavbar && <Navbar elevation={0} border={1} />}

        {/* BODY CONTENT */}
        <Toast bottom/>
        {children}
      </div>
      <MobileNavigationBar/>
      <Footer />
      {/* <Footer /> */}
    </>
  );
};

export default ShopLayout;
