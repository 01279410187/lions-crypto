import { close, logo, menu, lionLogo, Blue3, Blue4 } from "../assets";
import Button from "./Button";
import { data, navLinks } from "../constants";
import { lion } from "../assets";
import { useState } from "react";

const lan = [
  {
    id: "En",
    name: "En",
  },
  {
    id: "AR",
    name: "AR",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <nav id="home" className="flex items-center justify-between w-full ">
      <div className="flex items-center gap-4 ">
        <img
          src={toggle1 ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]  hidden list-none sm:flex object-contain"
          onClick={() => setToggle1(!toggle1)}
        />

        <div
          className={`${
            !toggle1 ? "hidden" : "flex"
          } p-6 bg-[#2a913f] absolute mt-60 left-0 mx-4 -my-80 min-w-[150px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col items-start justify-start flex-1 list-none">
            {data.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[12px] ${
                  active === nav.title ? "text-white" : "text-white"
                } ${index === data.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {/* <Button styles={`mt-10`} title={"Connect Wallet"} />
             <Button styles={`ml-10 mt-5  `} title={"Register"}/>
             <Button styles={`ml-10 mt-5  `} title={"Referrals"}/> */}
          </ul>
        </div>
        {/* <Button styles={`ml-10  hidden list-none sm:flex bg-[#2a913f] text-[16px]`} title={"Language"}  /> */}
        <select
          id="lan"
          className="ml-10 text-center hidden list-none sm:flex bg-[#2a913f]  text-[16px] py-2.5 px-2.5  mb-2  font-poppins font-medium  text-white rounded-lg  outline-none  "
        >
          <option selected>Language</option>
          <option>English</option>
          <option value="AR">Arabic "Soon"</option>
          <option value="RN">Russian "Soon"</option>
          <option value="SP">Spanish "Soon"</option>
          <option value="FR">French "Soon"</option>
          <option value="PR">Portuguese "Soon"</option>
          <option value="HI">Hindi "Soon"</option>
          <option value="PR">Persian "Soon"</option>
          <option value="PR">Chinese "Soon"</option>
          <option value="PR">Bangali "Soon"</option>
        </select>
      </div>

      {/* <img
        src={Blue4}
        alt="loins"
        className="w-[130px] h-[100px] rounded sm:h-[200px] invisible sm:visible sm:justify-center "
      /> */}
      <div className="flex flex-col justify-center ">
        <Button
          styles={`ml-10 mt-2  bg-[#2a913f] hidden list-none sm:flex`}
          title={"Connect Wallet"}
        />
        <Button
          styles={`ml-10 mt-2 bg-[#2a913f] hidden list-none sm:flex`}
          title={`Register "Optional"`}
        />
        <Button
          styles={`ml-10 mt-2 bg-[#2a913f] hidden list-none sm:flex`}
          title={"Referrals Friends"}
        />
      </div>

      {/* <Button styles={`ml-10`} title={"ConnectWallet"}/> */}

      <div className="flex items-center justify-end flex-1 mt-4 sm:hidden">
        <select
          id="lan"
          className=" ml-10 mr-4 text-center bg-[#2a913f] text-[14px] py-2.5 px-2.5  mb-2  font-poppins font-medium  text-white rounded-lg  outline-none "
        >
          <option selected>Language</option>
          <option>English</option>
          <option value="AR">Arabic "Soon"</option>
          <option value="RN">Russian "Soon"</option>
          <option value="SP">Spanish "Soon"</option>
          <option value="FR">French "Soon"</option>
          <option value="PR">Portuguese "Soon"</option>
          <option value="HI">Hindi "Soon"</option>
          <option value="PR">Persian "Soon"</option>
          <option value="PR">Chinese "Soon"</option>
          <option value="PR">Bangali "Soon"</option>
        </select>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#2a913f] text-black absolute top-20 right-0 mx-4 my-6 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col items-start justify-end flex-1 list-none">
            {data.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-white"
                } ${index === data.length - 1 ? "mb-0" : "mb-4"} `}
                onClick={() => setActive(nav.info)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {/* <Button styles={`mt-10`} title={"Connect Wallet"} />
            <Button styles={`ml-10 mt-5  `} title={"Register"} />
            <Button styles={`ml-10 mt-5  `} title={"Referrals"} /> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
