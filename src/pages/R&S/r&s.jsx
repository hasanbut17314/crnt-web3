import React from "react";

import ContactOne from "../../components/Contact/ContactOne.jsx";
import Newsletter from "../../components/Newsletter/Newsletter.jsx";
import TncLayout from "../../layouts/tncLayout.jsx";
import TncData from "../../components/tnc/TncData.jsx";
import RegulatoryStatement from "../../components/RegulatoryStatements/RegulatoryStatements.jsx"

// import LayoutBlog from "../../layouts/LayoutBlog";

const Regulatory = () => {
  return (
    <TncLayout>
      <main>
        <RegulatoryStatement />
        {/* <Newsletter /> */}
      </main>
    </TncLayout>
  );
};

export default Regulatory;