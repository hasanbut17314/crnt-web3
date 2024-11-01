import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const SalesTabContent = (props) => {
  return (
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        <h2 className="sub-title pb-3 fs-3">{props.subtitle}</h2>
        <p><span className="text-white">Tokens: </span>{props.tokens}</p>
        <p><span className="text-white">Duration: </span>{props.duration}</p>
        <p>{props.description}</p>
        {/* <Link to={props.link} className="btn">
          Buy Now
        </Link> */}
      </div>
    </div>
  );
};

export default SalesTabContent;
