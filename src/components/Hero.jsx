import { Blue, Blue3, Blue4, discount, lionLogo, robot } from "../assets";
import React, {useContext,useState} from 'react';

import GetStarted from "./GetStarted";
import { lion1, lion2, lion3 } from "../assets";
import Button from "./Button";
import styles from "../style";

import { useParams } from "react-router-dom";

import { Web3Button, Web3Modal, Web3NetworkSwitch } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { ethers } from "ethers/lib";

import { ABI,contractAddress } from '../utils/Contract';
import CountdownTimer from "./CountdownTimer";





const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, ABI, signer);

 return transactionsContract;
};

const Hero = () => {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const chains = [arbitrum, mainnet, polygon];
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "6eaa67fe3dd7ac8f57d1539c6daad2fc" }),
]);
 
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "6eaa67fe3dd7ac8f57d1539c6daad2fc",
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});
  const ethereumClient = new EthereumClient(wagmiClient, chains);

//   const [referrer, setReferal] = useState('0x628D4430eC2DD0590Bc1431f5EBF84CF67d96486')
//   // const{Invest}= useContext(LionsContext)

//   const connectWallet= async()=>{
//     try {
//         if(!ethereum) return alert('Please install metamask');
//         await ethereum.request({method: 'eth_requestAccounts'});

       
       
//     } catch (error) {
//         console.log(error)
//         throw new Error ('No etherum object')
//     }
// }
//   const Invest=async()=>{
//     try {

//       if(ethereum){
//         const InvsteFunction= createEthereumContract()
//         const parsedAmount = ethers.utils.parseEther("1");
//         await InvsteFunction.Plan1(referrer,0,{value : parsedAmount})
//       }
//     } catch (error) {
//       console.log(error);
    
//       throw new Error("No ethereum object");
//     }
    

//   }


//  const {id} =useParams()

  return (
    <div id="" className=" text-align: center  md:flex-row">
      
      <div className="flex justify-center">
      <img src={Blue4} alt="loins" className="sm:w-[400px] w-[200] h-[200px] rounded sm:h-[400px]    justify-center mb-1 sm:mt-2 mt-5 " />
        
      </div>

      <div className="flex justify-center sm:mt-4 mt-4">
        <p
          className={`font-poppins font-normal  text-[30px] sm:text-[40px] sm:justify-center leading-[30.8px] `}
        >
          WELCOME TO LIONS
        </p>
      </div>

      <div className="flex justify-center p-3 sm:mt-0 mt-4 ">
        

    <WagmiConfig client={wagmiClient}>
        <Web3Button/>
       
      </WagmiConfig>

      

      <Web3Modal
        projectId="6eaa67fe3dd7ac8f57d1539c6daad2fc"
        ethereumClient={ethereumClient}
      />
        
      </div>
      
    </div>
  );
};

export default Hero;



