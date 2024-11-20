import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import moment from "moment/moment";
import ScrollAnimation from "react-animate-on-scroll";

const CountDownTwo = () => {
  const { currentStage, preSaleStartTime, publicSaleStartTime } =
    useContext(IcoContext);

    console.log(publicSaleStartTime,'puvlicSaleStart')

    // console.log(currentStage,'currentStage')

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <>
          <div className="time-count day">
            <span>{"00"}</span>Days
          </div>
          <div className="time-count hour">
            <span>{"00"}</span>hour
          </div>
          <div className="time-count min">
            <span>{"00"}</span>minute
          </div>
          <div className="time-count sec">
            <span>{"00"}</span>second
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="time-count day">
            <span>{days < 10 ? "0" + days : days}</span>Days
          </div>
          <div className="time-count hour">
            <span>{hours < 10 ? "0" + hours : hours}</span>hour
          </div>
          <div className="time-count min">
            <span>{minutes < 10 ? "0" + minutes : minutes}</span>minute
          </div>
          <div className="time-count sec">
            <span>{seconds < 10 ? "0" + seconds : seconds}</span>second
          </div>
        </>
      );
    }
  };
  const stages = {

  }

  return (
    <ScrollAnimation animateIn="fadeInUp">
    <section id="countdown" style={{ marginBottom: '90px' }}>
      <div className="container custom-container-four">
        <div className="row">
          <div className="col-lg-12">
            <div className="countdown-wrap">
              <h2 className="title">Stage {currentStage} will End In..</h2>
              <div id="countdown-gampang"></div>

              <div className="custom-countdown-two">
                {currentStage == 1
                  ? preSaleStartTime && (
                      <Countdown
                        date={moment.unix(preSaleStartTime)}
                        renderer={renderer}
                      />
                    )
                  : currentStage == 2
                  ? publicSaleStartTime && (
                      <Countdown
                        date={moment.unix(publicSaleStartTime)}
                        renderer={renderer}
                      />
                    )
                  : true
                  ? publicSaleStartTime && (
                    <> 
                    <div style={{ backgroundColor: '#041235', padding: '30px 50px', borderRadius:'20px', textAlign:'center' }}>
                       <h5 className="title" style={{ marginBottom: '8px', color:'white'}}>token raised </h5>
                       <p style={{color:'wheat'}} >44280000 </p>

                     </div>
                      <Countdown
                        date={Date.now() + 10000 }
                        renderer={renderer}
                      />
                      </>
                    )
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollAnimation>
  );
};

export default CountDownTwo;
