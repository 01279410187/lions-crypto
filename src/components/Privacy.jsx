import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Privacy = () => {
    return (
        <section id="privacy">
            <div className={`mt-1 mb-1`}>
                <h2 className={`${styles.heading2} text-[#2a913f]`}>LIONS PRIVATE POLICY–Effective 14-Feb-2023</h2>
                <h2 className={`${styles.paragraph} text-[20px] mt-1 mb-1`}>
                    This private policy shows and explains, how we, “LIONS CRYPTO” collect, disclose and use our Client’s information obtained from our website and/or mobile app or any other Platform
                </h2>
                <h2 className={`${styles.paragraph} text-[20px] mt-1 mb-1`}>
                    Time to time, we may update, modify and change our private policy and or our Investment Plans, we recommend all our Clients to review our policy regularly.
                </h2>
                <div className={`feature-card rounded-md  flex flex-col flex-1  p-1 sm:p-6 `}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                        DATA AND INFORMATION COLLECTION

                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                        We usually collect our Client’s data and information when an account is created, the Client will provide us information while filling in the Account Opening Form or while Authorizing us through a third-party platform.
                    </p>
                    <p className="font-poppins font-normal text-black  text-[16px] mt-5 leading-[24px]">
                    While you interacting with us, we also, collect some information such as activities, transactions conducted and history, device & usage information. These information’s Are collected by cookies and tracking technologies
                    </p>
                    <p className="font-poppins font-normal text-black  text-[16px] mt-5 leading-[24px]">
                    Sometimes, we collect Client’s data from other sources like, social media, data provider and analytical services. Also, we may verify your location from your IP address As security
                    </p>
                </div>
                <div className={`feature-card rounded-md  flex flex-col flex-1 mt-1   p-1 sm:p-6 `}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                    HOW WE USE INFORMATION COLLECTED ?

                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                    We use information collected to improve our services, maintain your account with us and in our research and surveys
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    Also, we use your information to respond to:
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    To send you some receipts, updates, technical notices, security alerts, support, admin notices and messages, your comments, and to send you receipts and some related information, responding to your questions, newsletters, providing customer service.
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    We are keen to provide the maximum security for our Clients, we detect, investigate, and prevent security incidences, fraudulent, illegal activities, and protect the rights and property of Lions and Others.
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    On regular basis, we debug our system to identify and repair errors in order to make our system faster and provide better service to our Clients.
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    We comply with all legal and financial rules, policies and obligations provided by Lions Crypt and the European and American Authorities.
                    </p>
                </div>
                <div className={`feature-card rounded-md  flex flex-col flex-1 mt-1  p-1 sm:p-6`}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                    HOW WE SHARE YOUR INFORMATION ?

                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                    We try to keep our Clients information confidential, but ins some circumstances we share these information’s as described below:
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    We might share your information with consultants, vendors, IT & mobile app, website providers, web hosting & storage providers, analytic, payment processing, fraud prevention, security, customer service, communication, marketing, social media service providers and others in order to perform services for us. 
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    We may disclose personal information if we believe that disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements. If we are going to disclose your personal information in response to legal process, we will give you notice so you can challenge it (for example by seeking court intervention), unless we are prohibited by law or believe doing so may endanger others or cause illegal conduct. We will object to legal requests for information about users of our Services that we believe are improper. 
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    To protect and manage our business, we may share your personal information with our lawyers, consultants and other advisors to obtain the necessary advice. Also, we may share your personal information during negotiations, merger, acquisition, or sale of our Company to another Company.
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    We may share your personal information if we believe that there are some suspicious actions or inconsistent with our Policies or violating the law or we believe it’s necessary to protect our Company and the other Clients 
                    </p>
                    <p className="font-poppins font-normal text-black text-[16px] mt-5 leading-[24px]">
                    We may share your information with our parent Company, branches, affiliates, subsidiaries and our sister Companies
                    </p>
                </div>
                <h2 className={`${styles.heading2} text-[#2a913f]`}>GENERAL POLICIES</h2>
                <div className={`feature-card rounded-md  flex flex-col flex-1 mt-1   p-1 sm:p-6 `}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                    ACCOUNT CHANGES OR DELETING

                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                    You will be able to access your account and make changes, editing or deleting your entire account by logging in from the setting page. In the event of deleting your account, we may keep some information which required by the regulations and the Law. Also, you may opt out of some of our services like newsletters, activities and any others.
                    </p>
                   
                </div>
                <div className={`feature-card rounded-md  flex flex-col flex-1 mt-1  p-1 sm:p-6 `}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                    ACCOUNT CHANGES OR DELETING

                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                    You will be able to access your account and make changes, editing or deleting your entire account by logging in from the setting page. In the event of deleting your account, we may keep some information which required by the regulations and the Law. Also, you may opt out of some of our services like newsletters, activities and any others.
                    </p>
                   
                </div>
                <div className={`feature-card rounded-md  flex flex-col flex-1 mt-1   p-1 sm:p-6`}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                    COOKIES

                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                    Most of the web browsers will required the cookies to perform smoothly and faster, if you decided to not accept the cookies, this might affect the availability of some of our service functionality.
                    </p>
                   
                </div>
                <div className={`feature-card rounded-md  flex flex-col flex-1 mt-1   p-1 sm:p-6 `}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                    LIONS DOES NOT SALE ANY CLIENT’S INFORMATION

                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                    At Lions, we DONOT Sale any of our Client’s information to any third party.
                    </p>
                   
                </div>
                <div className={`feature-card rounded-md  flex flex-col flex-1 mt-1  p-1 sm:p-6 `}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                    INVESTMENT PROFIT PAYMENT & RISK
                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                    Based on the plan that our Client chose, we guarantee the daily payment of partial principal investment repayment and the accrued daily interest, our Client has the option of reinvest or withdrawal of the daily funds. In the Crypt Arbitrage Market Trading, the risk of loosing the investment amount is very low as our professional team is very qualified using the latest available technology to make the maximum profit, however, LIONS Crypto does not take any responsibility of securing 100% the investment amount. In the market, there is profit and loss at any time. 
                    </p>
                   
                </div>
                <div className={`feature-card rounded-md  flex flex-col flex-1 mt-1   p-1 sm:p-6 `}>
                    <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                    CONTACT US
                    </h4>
                    <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
                    We always welcome any questions from our Clients and will make sure to answer them as fast as we can, regarding our Policies, our Clients can directly send us an email with their questions on <span className="text-white">Policy@LionsCrypto.com</span>
                    </p>
                   
                </div>
            </div>
        </section>
    );
};

export default Privacy;
