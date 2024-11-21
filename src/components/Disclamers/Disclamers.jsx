import React from "react";

const Disclamers = () => {
  return (
    <section id="tnc" className="pt-70 pb-110 contact-bg">
      <div className="container">
        {/* section title */}
        <div className="row  justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
           
              <h2 className="title">
                <span> Disclaimers</span>
              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className=" col-lg-12 ">
          <strong>- No Guarantees: </strong>
            Participation in the ICO does not guarantee financial returns, project success, or token value appreciation.
            <br />
            <br />
            <strong>-  Forward-Looking Statements: </strong>
            Any statements about future project developments or token value are speculative and subject to change.
            <br />
            <br />
            <strong>-  Jurisdictional Restrictions: </strong>
            The token pre-sale is not available in jurisdictions where ICOs are prohibited or restricted.
            <br />
            <br />
            <strong>-   No Investment Advice: </strong>
            The information provided in connection with the token sale is for informational purposes only and does not constitute financial or investment advice.
            <br />
            <br />
        </div>
        </div>

        {/* section form */}
        {/* <ContactOneForm /> */}
      </div>
    </section>
  );
};

export default Disclamers;
