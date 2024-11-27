import React, { useEffect, useState } from "react";
import decrypt from "../../assets/iconImages/decrypt.PNG";
import Invezz from "../../assets/iconImages/Invezz.PNG";
import ForexLive from "../../assets/iconImages/ForexLive.PNG"
import Coinspeaker from "../../assets/iconImages/Coinspeaker.PNG"
import bitcoinworld from "../../assets/iconImages/bitcoinworld.PNG"
import blocktelegraph from "../../assets/iconImages/blocktelegraph.PNG"
import coinjornal from "../../assets/iconImages/coinjornal.PNG"
import cryptopotato from "../../assets/iconImages/cryptopotato.PNG"
import cryptoslate from "../../assets/iconImages/cryptoslate.PNG"
import blockchanreporter from "../../assets/iconImages/blockchainreporter.PNG"
import finbod from "../../assets/iconImages/finbold.PNG"
import bravenewcoin from "../../assets/iconImages/bravenewcoin.PNG"
import ethnews from "../../assets/iconImages/ethnews.PNG"
import thirty6crypto from "../../assets/iconImages/thirtysixcrypto.PNG"
import cryptodaily from "../../assets/iconImages/cryptodaily.PNG"
import cryptoglobe from "../../assets/iconImages/cryptoglobe.PNG"
import coinpaper from "../../assets/iconImages/coinpaper.PNG"
import coincodex from "../../assets/iconImages/coincodex.PNG"
import crptoplolitin from  "../../assets/iconImages/cryptoplolitan.PNG"
import utoday from "../../assets/iconImages/utoday.PNG"
import blockchaincom from "../../assets/iconImages/blockchaincom.PNG"
import cryptomist from "../../assets/iconImages/cryptomist.PNG"
import blockonomi from "../../assets/iconImages/blockonomi.PNG"
import cryptonews from "../../assets/iconImages/cryptonews.PNG"
import captainaltcoin from "../../assets/iconImages/captanaltcoin.PNG"
import coindo from "../../assets/iconImages/coindo.PNG"
import cryptoeconomy from "../../assets/iconImages/cryptoeconomy.PNG"
import cryptonew from "../../assets/iconImages/cryptonew.PNG"
import bitcoininside from "../../assets/iconImages/bitcoininside.PNG"
import cryptoboom from "../../assets/iconImages/cryptoboom.PNG"
import saycrypto from "../../assets/iconImages/saycrypto.PNG"
import coinreport from "../../assets/iconImages/coinreport.PNG"
const Icons = () => {
  const iconsDetails = [
    {
      src: decrypt,
      href: "https://decrypt.co/289510/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement",
    },
   
    //   {
    //     src: blockchanreporter,
    //     href: "https://blockchainreporter.net/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
    //   },
    //   {
    //     src: finbod,
    //     href: "https://finbold.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
    //   },
    //   {
    //     src: bravenewcoin,
    //     href: "https://bravenewcoin.com/insights/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement",
    //   },
     
      {
        src: crptoplolitin,
        href: "https://www.cryptopolitan.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: utoday,
        href: "https://u.today/press-releases/creationnetworkai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for",
      },
      {
        src: blockchaincom,
        href: "https://www.the-blockchain.com/2024/11/01/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: cryptomist,
        href: "https://en.cryptonomist.ch/2024/11/01/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: blockonomi,
        href: "https://blockonomi.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: cryptonews,
        href: "https://www.crypto-news-flash.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: captainaltcoin,
        href: "https://captainaltcoin.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: coindo,
        href: "https://coindoo.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: cryptoeconomy,
        href: "https://crypto-economy.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: cryptonew,
        href: "https://www.crypto-news.net/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: bitcoininside,
        href: "https://www.bitcoininsider.org/article/262764/creationnetworkai-emerges-leading-ai-powered-platform-integrating-22-tools-enhanced",
      },
      {
        src: cryptoboom,
        href: "https://www.cryptoboom.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: saycrypto,
        href: "https://saykrypto.com/press-release/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: coinreport,
        href: "https://koinreport.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
        src: Invezz,
        href: "https://invezz.com/news/2024/11/01/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
      },
      {
          src: Coinspeaker,
          href: "https://www.coinspeaker.com/creationnetwork-ai-22-tools-enhanced-digital-engagement/",
        },
        {
          src: bitcoinworld,
          href: "https://bitcoinworld.co.in/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
        },
        {
          src: blocktelegraph,
          href: "https://blocktelegraph.io/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/s",
        },
        {
          src: coinjornal,
          href: "https://coinjournal.net/news/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrates-22-tools-for-digital-engagement/",
        },
        {
          src: cryptopotato,
          href: "https://cryptopotato.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
        },
        {
          src: cryptoslate,
          href: "https://cryptoslate.com/press-releases/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
        },
        {
            src: ethnews,
            href: "https://www.ethnews.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
          },
          {
            src: thirty6crypto,
            href: "https://36crypto.com/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
          },
          {
            src: cryptodaily,
            href: "https://cryptodaily.co.uk/2024/11/creationnetworkai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement",
          },
          {
            src: cryptoglobe,
            href: "https://www.cryptoglobe.com/latest/2024/11/creationnetwork-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
          },
          {
            src: coinpaper,
            href: "https://coinpaper.com/5913/creation-network-ai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement",
          },
          {
            src: coincodex,
            href: "https://coincodex.com/article/51828/creationnetworkai-emerges-as-a-leading-ai-powered-platform-integrating-22-tools-for-enhanced-digital-engagement/",
          },
  ];

  return (
    <div className="mt-5">
        <div>
        <h3 className="text-black text-center mb-5">We Are Published Osn..</h3>
        </div>
        {/* style={{marginRight:'-30px'}} */}
      <div className="row  flex-nowrap  px-6 scroll-x">
        {iconsDetails.map((x, index) => (
          <div key={index} className="col-1 custom-col "style={{marginRight:'-10px'}} >
            <a
              href={x.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={x.src}
                alt="Decrypt Icon"
                style={{ width: "60px", height: "60px" }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
