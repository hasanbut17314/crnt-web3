import React from "react";

import ContactOne from "../../components/Contact/ContactOne.jsx";
import Newsletter from "../../components/Newsletter/Newsletter.jsx";
import TncLayout from "../../layouts/tncLayout.jsx";

import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy.jsx"

// import LayoutBlog from "../../layouts/LayoutBlog";

const Privacy = () => {
  return (
    <TncLayout>
      <main>
        <PrivacyPolicy />
        {/* <Newsletter /> */}
      </main>
    </TncLayout>
  );
};

export default Privacy;