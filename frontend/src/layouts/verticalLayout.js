import React from "react";
import FooterMaster from "./footer";
import HeaderMaster from "./header";

const verticalLayout = ({ children }) => {
  return (
    <div className="verticalLayout">
      <HeaderMaster />
      {children}
      <FooterMaster />
    </div>
  );
};

export default verticalLayout;
