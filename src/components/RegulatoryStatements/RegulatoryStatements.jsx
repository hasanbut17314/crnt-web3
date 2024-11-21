import React from "react";

const RegulatoryStatement = () => {
  return (
    <section id="tnc" className="pt-70 pb-110 contact-bg">
      <div className="container">
        {/* section title */}
        <div className="row  justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
           
              <h2 className="title">
                <span> Regulatory Statements</span>
              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className=" col-lg-12 ">
            <strong>- Compliance with Laws: </strong>
            The ICO token pre-sale complies with applicable international laws and regulations. Participants are responsible for understanding and adhering to the laws of their jurisdictions.
            <br />
            <br />
            <strong>- Tax Obligations: </strong>
            It is the responsibility of participants to understand and fulfill any tax obligations arising from the purchase, holding, or use of tokens.
            <br />
            <br />
            <strong>- Regulatory Risk: </strong>
            The regulatory environment for ICOs and cryptocurrencies is evolving. We are committed to complying with applicable regulations and will update participants in case of legal or regulatory changes.

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

export default RegulatoryStatement;
