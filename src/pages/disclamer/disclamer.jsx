import React from "react";

import ContactOne from "../../components/Contact/ContactOne.jsx";
import Newsletter from "../../components/Newsletter/Newsletter.jsx";
import TncLayout from "../../layouts/tncLayout.jsx";


import Disclamers from "../../components/Disclamers/Disclamers.jsx"

// import LayoutBlog from "../../layouts/LayoutBlog";

const Disclamer = () => {
  return (
    <TncLayout>
      <main>
        <Disclamers/>
        {/* <Newsletter /> */}
      </main>
    </TncLayout>
  );
};

export default Disclamer;