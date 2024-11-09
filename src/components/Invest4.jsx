import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Invest4 = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo} p-3  rounded-[20px] `}>
        <h2
          className={`${styles.heading2} text-white text-[25px] sm:text-[40px] mt-5 bg-[#836826] rounded-lg  text-center`}
        >
          Investment
        </h2>
        <div className="flex justify-between sm:mt-40 gap-1 sm:justify-around sm:gap-5 ">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5 `}>
            Wallet Balance:
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0   "
            placeholder="Reinvest Amount"
            value="1000 BNB"
            disabled
          />
        </div>
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-0">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Your Investment :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="200 BNB"
            disabled
          />
        </div>

        <div className="flex justify-between gap-1 sm:justify-around sm:gap-5">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Daily Rewards :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="5 BNB"
            disabled
          />
        </div>
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-0 ">
          <p className={`${styles.paragraph} text-[13px] sm:text-[16px] mt-5`}>
            Rewards Percentage :
          </p>
          <input
            type="text"
            class=" w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="5%"
            disabled
          />
        </div>

        <h2
          className={`${styles.heading2} text-white text-[25px] sm:text-[40px] mt-5 bg-[#836826] rounded-lg  text-center`}
        >
          Start Investment
        </h2>
        {/* <div className="flex justify-between gap-5">
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
          Daily Profit Through :
          </p>
          <p className={`${styles.paragraph}  bg-[#b3774a] rounded p-1 mt-5`}>11:45:23 PM</p>
        </div> */}
        <div className="flex justify-between gap-10 sm:justify-around sm:gap-20">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Amount :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="1000 BNB"
            disabled
          />
        </div>
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-6">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Your Rewards :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="2.45623 BNB"
            disabled
          />
        </div>
      </div>

      <div className={`${layout.sectionInfo} p-3 rounded-[20px] `}>
        <h2 className={`${styles.heading2}  text-white text-[30px] sm:text-[40px] mt-5 bg-[#836826] rounded-lg  text-center`}>Rewards</h2>

        {/* <div className="flex justify-between gap-7">
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
            Daily Rewards :
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>5 BNB</p>
        </div> */}
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-6">
          <p className={`${styles.paragraph} text-[13px] sm:text-[20px] mt-5`}>
            Daily Profit Through:
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0   "
            placeholder="Reinvest Amount"
            value="11:23:24 PM"
            disabled
          />
        </div>
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-20">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Your Rewards :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0   "
            placeholder="Reinvest Amount"
            value="15 BNB"
            disabled
          />
        </div>

        <p className={`${styles.paragraph}    mt-5`}>
          To reinvest or withdraw Your profit, please specify The amount and
          press Reinvest or withdraw button Below
        </p>
        <p className={`${styles.paragraph}    mt-5`}>
          The minimum amount for Reinvest or withdraw is 0.1 BNB
        </p>
        <p className={`${styles.paragraph}    mt-5`}>
          {" "}
          The maximum amount for Reinvest or withdraw is Unlimited
        </p>

        <div className="flex justify-between gap-5 mt-4">
          <Button
            styles={` w-[40%] text-[14px] sm:text-[18px] bg-[#836826]`}
            title={"Reinvest"}
          />
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  "
            placeholder="Reinvest Amount"
          />
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The minimum withdraw Amount is 0.10 BNB And Maximum amount is
          Unlimited
        </p>

        <div className="flex justify-between gap-5 mt-4">
          <Button
            styles={` w-[40%] text-[14px] sm:text-[18px] bg-[#836826]`}
            title={"Withdraw"}
          />
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  "
            placeholder="Withdraw
            Amount"
          />
        </div>

        <Button
          styles={`mt-5  sm:w-[40%] text-[15px] bg-[#836826]`}
          title={"Cancel Account"}
        />
      </div>
    </section>
  );
};

export default Invest4;





// import { useEffect, useState } from 'react';


// import { ethers } from 'ethers';
// import Web3Modal from 'web3modal'
// import WalletConnectProvider from '@walletconnect/web3-provider'


// import ErrorMessage from './components/ErrorMessage';
// import axios from "axios"
// import TxList from './components/TxList';


// const networks = {
//   bsc: {
//     chainId: `0x${Number(56).toString(16)}`,
//     chainName: "Binance Smart Chain Mainnet",
//     nativeCurrency: {
//       name: "Binance Chain Native Token",
//       symbol: "BNB",
//       decimals: 18
//     },
//     rpcUrls: [
//       "https://bsc-dataseed1.binance.org",
//       "https://bsc-dataseed2.binance.org",
//       "https://bsc-dataseed3.binance.org",
//       "https://bsc-dataseed4.binance.org",
//       "https://bsc-dataseed1.defibit.io",
//       "https://bsc-dataseed2.defibit.io",
//       "https://bsc-dataseed3.defibit.io",
//       "https://bsc-dataseed4.defibit.io",
//       "https://bsc-dataseed1.ninicoin.io",
//       "https://bsc-dataseed2.ninicoin.io",
//       "https://bsc-dataseed3.ninicoin.io",
//       "https://bsc-dataseed4.ninicoin.io",
//       "wss://bsc-ws-node.nariox.org"
//     ],
//     blockExplorerUrls: ["https://bscscan.com"]
//   }
// };

// const changeNetwork = async ({ networkName, setError }) => {
//   try {
//     if (!window.ethereum) throw new Error("No crypto wallet found");
//     await window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [
//         {
//           ...networks[networkName]
//         }
//       ]
//     });
//   } catch (err) {
//     setError(err.message);
//   }
// };







// function App() {
//   const [error, setError] = useState();
//   const [txs, setTxs] = useState([]);
//   const [currentAccount,setCurrentaccount]=useState('')

//   const [web3Modal, setWeb3Modal] = useState(null)
//   const [address, setAddress] = useState("")


//   useEffect(() => {
//     const providerOptions = {
//       walletconnect: {
//         package: WalletConnectProvider,
//         options: {
//           infuraId: "fbd89131daa4416281910d52bdd4f297",
//         }
//       },
      
//     };

//     const newWeb3Modal = new Web3Modal({
//       cacheProvider: true, // very important
//       network: "mainnet",
//       providerOptions,
//     });

//     setWeb3Modal(newWeb3Modal)
//   }, [])
//   useEffect(() => {
//     // connect automatically and without a popup if user is already connected
//     if(web3Modal && web3Modal.cachedProvider){
//       connectWallet()
//     }
//   }, [web3Modal])

//   async function connectWallet() {
//     const provider = await web3Modal.connect();
    
//     addListeners(provider);

//     const ethersProvider = new ethers.providers.Web3Provider(provider)
//     const userAddress = await ethersProvider.getSigner().getAddress()
//     setAddress(userAddress)
//   }

//   async function addListeners(web3ModalProvider) {

//     web3ModalProvider.on("accountsChanged", (accounts) => {
//       window.location.reload()
//     });
    
//     // Subscribe to chainId change
//     web3ModalProvider.on("chainChanged", (chainId) => {
//       window.location.reload()
//     });
//   }
//   const [transactionData,setTransactionData]=useState()
//   const [data, setData] = useState({
//     TransactionHash:"",
    
//     // from:"",
//     // to:"",
//     //  value:"",
//     //  planType:""
     
//    });

//   // const connectWallet= async()=>{
//   //   try {
//   //       if(!window.ethereum) return alert('Please install metamask');
//   //       const accounts=await window.ethereum.request({method: 'eth_requestAccounts'});
//   //       setCurrentaccount(accounts[0]);
//   //   } catch (error) {
//   //       console.log(error)
//   //       throw new Error ('No etherum object')
//   //   }
//   // }
  
//   // const startPayment = async ({ setError, setTxs,setTransactionData}) => {
//   //   try {
//   //     if (!window.ethereum)
//   //       throw new Error("No crypto wallet found. Please install it.");
  
//   //     await window.ethereum.request({method:"eth_requestAccounts"});
//   //     const provider = new ethers.providers.Web3Provider(window.ethereum);
//   //     const signer = provider.getSigner();
//   //     ethers.utils.getAddress("0x52Fab195795D2273EDaa2A2c262f39Cd7aCa5756");
//   //     const tx = await signer.sendTransaction({
//   //       to: "0x52Fab195795D2273EDaa2A2c262f39Cd7aCa5756",
//   //       value: ethers.utils.parseEther("0.0002"),
//   //     });
//   //     // const paramsValue= ethers.utils.parseEther("0.0002")
//   //     // const tx= await  window.ethereum.request({
//   //     //   method: "eth_sendTransaction",
//   //     //   params: [{
//   //     //     from: currentAccount,
//   //     //     to: "0x52Fab195795D2273EDaa2A2c262f39Cd7aCa5756",
//   //     //     // gas: "0x5208",
//   //     //     value:paramsValue._hex,
//   //     //   }],
//   //     // });
//   //     // console.log({ ether, addr});
      
      
//   //     setTxs([tx]);
//   //     setTxs([tx]);
//   //     console.log("tx", txs);
//   //   //   txs=data.TransactionHash
//   //   //   // tx.blockNumber=blockNumber
//   //   //   tx.from=data.from
//   //   //   tx.to="0x52Fab195795D2273EDaa2A2c262f39Cd7aCa5756"
//   //   //   tx.value=data.value
//   //   //  data.planType="Test"

    
      
    
//   //     // data.from=tx.from
//   //     // data.to=tx.to
//   //     // data.value=tx.value
//   //     // data.planType="lvel1"
//   //     // data.TransactionHash=txs

//   //     setTransactionData(tx.hash)
//   //     try {
//   //       const url = "http://localhost:5000/api/users/transaction";
//   //       const { data: res } = await axios.post(url, {
//   //         TransactionHash:tx.hash
//   //       });
       
//   //       console.log(res.message);
//   //     } catch (error) {
//   //       if (
//   //         error.response &&
//   //         error.response.status >= 400 &&
//   //         error.response.status <= 500
//   //       ) {
//   //         setError(error.response.data.message);
//   //       }
//   //     }

    
     
//   //     console.log(txs)

//   //   } catch (err) {
//   //     setError(err.message);
//   //   }
//   // };
   
 
  
//   const handleSubmit = async () => {
  
//     // setData()
//     setError();
    
//     // await startPayment({
//     //   setError,
//     //   setTxs,
//     //   // setTransactionData
//     //   // setData
//     //   // ether: data.get("ether"),
//     //   // addr: data.get("addr")
//     // });

//     // await setData({TransactionHash:transactionData})
//     // setData({TransactionHash:txs.hash,blockNumber:txs.blockNumber,from:txs.from,to:currentAccount,value:txs.value,planType:"level1"})
//     // await sendTransaction()
   
//   };

//   const handleNetworkSwitch = async (networkName) => {
//     setError();
//     await changeNetwork({ networkName, setError });
//   };

//   const networkChanged = (chainId) => {
//     console.log({ chainId });
//   };

//   const sendTransaction=async()=>{
   
//   }

//   return (
   
//       <div className="w-full mx-auto bg-white shadow-lg credit-card lg:w-1/2 sm:w-auto rounded-xl">
//         <main className="p-4 mt-4">
//           <h1 className="text-xl font-semibold text-center text-gray-700">
//           VIP 1
//           </h1>
//           <div className="">
//             <div className="my-3">
//               <input
//                 name="ether"
//                 type="text"
//                 value="0.0002"
//                 className="block w-full input input-bordered focus:ring focus:outline-none"
//                 placeholder="Amount in ETH"
//               />
//             </div>
//           </div>
//         </main>
//         <footer className="p-4">

//         <button
//           onClick={()=> connectWallet()}
           
//             className="w-full btn btn-primary submit-button focus:ring focus:outline-none"
//           >
//            connectWallet
//           </button>

//           <p>{currentAccount}</p>

//         <button
//             onClick={() => handleNetworkSwitch("bsc")}
//             className="w-full mt-2 mb-2 bg-warning border-warning btn submit-button focus:ring focus:outline-none"
//           >
//             Switch to BNB
//           </button>
//           <button
//           onClick={()=> handleSubmit()}
           
//             className="w-full btn btn-primary submit-button focus:ring focus:outline-none"
//           >
//            Invest Now
//           </button>
          
//           <ErrorMessage message={error} />
//           <TxList txs={txs} />
//           <p>{data.TransactionHash}</p>
//         </footer>
//       </div>
    
   
//   );
// }

// export default App;
