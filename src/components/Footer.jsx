import styles from "../style";
import { lionLogo, logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="support" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <h2 className={`${styles.heading2} text-[#2a913f]`}>Support</h2>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-col mr-10 ">
        
        <p className={`${styles.paragraph} mt-1 `}>
        We have high volume of Clients and we provide the best service, any inquiry will be answered in between 24 to 48 hours (working days), there are 2 ways to send your inquiries
        </p>
        <p className={`${styles.paragraph} mt-1 whitespace-nowrap`}>
        Telegram : <a href="https://t.me/@Lionscryptoltd" className="text-[#2a913f]">Telegram Chat</a><br/>	

         Email : <span className="text-[#2a913f]">Support@LionsCrypto.com	</span>	
        

        </p>
      </div>
      

      {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="mt-4 list-none">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
        Copyright Ⓒ 2023 Lions. All Rights Reserved.
      </p>

      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
