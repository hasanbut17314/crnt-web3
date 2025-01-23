import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import WOW from "wow.js";
import HomeTwo from "./pages/Home/HomeTwo";
import Blog from "./pages/Blog/Blog";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import LoadingOverlay from "react-loading-overlay";
// import { IcoContext } from "./contexts/context";
import { useContext } from "react";

import { ProjectId } from "./utils/constants";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc,mainnet,sepolia } from "wagmi/chains";
import Terms from "./pages/t&c/t&c";
import Privacy from './pages/p&p/p&p';
import Disclamer from './pages/disclamer/disclamer'
import Regulatory from './pages/R&S/r&s'

const chains = [bsc];
const projectId = ProjectId;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);


const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  publicClient,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  // const { isLoading } = useContext(IcoContext);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [pathname]);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Routes>
          {/* <Route path="/home-two" element={<Home />} /> */}
          <Route path="/" element={<HomeTwo />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="privacy-and-policies" element={<Privacy />} />
          <Route path="disclamers" element={<Disclamer />} />
          <Route path="regulatory-and-statements" element={<Regulatory/>} />
          {/* <Route path="blog-details" element={<BlogDetailsPage />} /> */}
        </Routes>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
