import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";
import ScrollAnimation from "react-animate-on-scroll";

const ContactOne = () => {
  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>
          marketing@creationnetwork.ai
        </>
      ),
    },
    {
      icon: "fa-phone",
      content: (
        <>
           +44 757 6131 708
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
         71-75 SHELTON STREET <br/>
         COVENT GARDEN LONDON WC2H 9JQ
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110 contact-bg">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="container">
          {/* section title */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-70">
                <span className="sub-title">Contact</span>
                <h2 className="title">
                  <span>Get in touch</span>
                </h2>
              </div>
            </div>
          </div>

          {/* secction info */}
          <div className="contact-info-wrap">
            <div className="row justify-content-center">
              {info_items.map((x, index) => (
                <div key={index} className="col-lg-4 col-sm-6">
                  <ContactOneInfoItem item={x} />
                </div>
              ))}
            </div>
          </div>

          {/* section form */}
          <ContactOneForm />
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ContactOne;
