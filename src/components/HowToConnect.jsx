import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { Picture1, Picture2, Picture3, Picture4, Picture5 } from '../assets';

const HowToConnect = () => {
  return (
    <section id="connect">
    <div className={``}>
      <h2 className={`${styles.heading2} text-[#2a913f]`}>
      How to Connect Wallet To Loins Platform ?
      </h2>
      <h2 className={`${styles.paragraph} text-[20px] mt-1 mb-1`}>
      We can connect with Lions Platform in 5 easy steps, example we need to connect through Trust Wallet
      </h2>
      <div className="flex flex-col justify-between md:flex-row">
        <div className=" p-6 rounded-[20px]  feature-card ">
          <h2 className={`${styles.heading2}  text-[#2a913f]`}>Step 1</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
          Open Trust Wallet<br/>
           And sign in  By Inserting<br/>
            Your 6 digits code					
          </p>
          <img src={Picture1} alt="loins" className="w-[200px] h-[600px] rounded sm:h-[400px]  sm:justify-center mb-3 mt-2 " />
        </div>

        <div className=" p-8 rounded-[20px]  feature-card ">
          <h2 className={`${styles.heading2}  text-[#2a913f]`}>Step 2</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
          Go to browser below					
          </p>
          <img src={Picture2} alt="loins" className="w-[200px] h-[400px] rounded sm:h-[400px]  mb-3 mt-14 " />
        </div>
      
        <div className=" p-6 rounded-[20px]  feature-card ">
          <h2 className={`${styles.heading2}  text-[#2a913f]`}>Step 3</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
          In the Search bar<br/> Type: <span className='text-black bold'>www.LionsCrypto.com</span>
                    </p>
          <img src={Picture3} alt="loins" className="w-[200px] h-[400px] rounded sm:h-[400px]  mb-3 mt-9 " />
        </div>
        <div className=" p-6 rounded-[20px]  feature-card ">
        <h2 className={`${styles.heading2} text-[#2a913f] `}>Step 4</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
          Connect Wallet				
          </p>
          <img src={Picture4} alt="loins" className="w-[200px] h-[400px] rounded sm:h-[400px] mb-3  mt-24 " />
        </div>
        <div className=" p-6 rounded-[20px]  feature-card ">
        <h2 className={`${styles.heading2}  text-[#2a913f]`}>Step 5</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
          Press Trust Wallet <br/>Desktop / Dapp mapp				
          </p>
          <img src={Picture5} alt="loins" className="w-[200px] h-[400px] rounded sm:h-[400px]  mb-3 mt-9 " />
        </div>
      
        
        
       

        
      
      </div>
      <h2 className={`${styles.paragraph} text-[20px] mt-5 mb-4`}>
     
      Now You Are Connected with Lions App And Can Start investing or withdrawing Your Rewords
      </h2>
     
     
    </div>
  </section>
  )
}

export default HowToConnect