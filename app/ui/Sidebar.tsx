"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex gap-0">
      <button
        className=" 2xl:leading-[48px] text-xs lg:text-md xl:text-lg 2xl:text-xl opacity-50 hover:underline"
        onClick={toggleSidebar}
      >
        more information
      </button>
      <motion.div
        initial={{ x: isOpen ? "100%" : "0%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="  h-screen fixed z-20 p-4  bg-opacity-90 bg-black text-white w-full  md:w-[50%]   right-0 top-0"
      >
        <div className=" relative font space-y-[10px] md:space-y-[15px] lg:space-y-[20px] 2xl:space-y-[30px] ">
          <div className="flex justify-between items-center">
            <div className="space-y-[10px] md:space-y-[14px] lg:space-y-[14px] xl:space-y-[20px] 2xl:space-y-[48px]">
              <button
                className=" 2xl:leading-[48px]  text-xs lg:text-md xl:text-lg 2xl:text-xl hover:underline"
                onClick={toggleSidebar}
              >
                Close
              </button>
              <div className=" max-h-min flex items-center gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-[100px]">
                <p className="leading-[18px]  text-xs lg:text-md xl:text-lg 2xl:text-xl opacity-50">
                  more information
                </p>
              </div>
            </div>
            <Image
              width={46}
              height={65}
              alt=""
              className="invert h-[50px] w-auto "
              src={"/zima.svg"}
            />
          </div>
          <div className="space-y-[10px] md:space-y-[15px] lg:space-y-[20px] 2xl:space-y-[30px] h-[75vh] overflow-scroll  ">
            <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
              When an IP address is banned, it means that ZIMO SECURITY has
              restricted access from that particular IP address. This could
              happen for several reasons:
            </p>
            <div className="space-y-[8px] md:space-y-[10px] lg:space-y-[15px]">
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                Violation of Terms of Service:
              </p>
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                The user associated with the IP address may have violated the
                terms of service of our platform, website, application, or
                online service(s). This violation could range from spamming,
                abusive behaviour, hacking attempts, or any other activity
                deemed unacceptable by ZIMO GROUP.
              </p>
            </div>
            <div className="space-y-[8px] md:space-y-[10px] lg:space-y-[15px]">
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                Security Concerns:
              </p>
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                The IP address might have been identified as a source of
                malicious activity, such as attempting to breach security
                measures, conducting a denial-of-service (DoS) attack, or
                participating in other forms of cybercrime.
              </p>
            </div>
            <div className="space-y-[8px] md:space-y-[10px] lg:space-y-[15px]">
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                Protection against Abuse:
              </p>
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                ZIMO SECURITY might ban IP addresses to protect our systems from
                abuse. For example, if we notice unusual traffic patterns or
                suspicious behaviour originating from a particular IP address,
                we may block it to prevent further harm.
              </p>
            </div>
            <div className="space-y-[8px] md:space-y-[10px] lg:space-y-[15px]">
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                Compliance Reasons:
              </p>
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                In some cases, IP addresses may be banned due to legal or
                regulatory requirements. This could involve compliance with
                government regulations or international laws.
              </p>
            </div>
            <div className="space-y-[8px] md:space-y-[10px] lg:space-y-[15px]">
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                Content Restrictions:
              </p>
              <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
                Our platforms, websites, applications or online services may
                restrict access based on geographical location or other factors.
                This could result in specific IP addresses being banned from
                accessing content.
              </p>
            </div>
            <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
              When an IP address is banned, the user associated with that IP
              address will typically find that they are unable to access the
              affected platforms, websites, applications or services. Depending
              on the severity of the situation, the ban could be temporary or
              permanent. Users who believe their IP address has been banned
              unfairly can contact ZIMO SECURITY to appeal the ban or take steps
              to resolve the issue that led to the ban in the first place
            </p>
            <p className="leading-[18px]  text-[8px] 2xl:text-[10px] ">
              YOUR IP: 12.123.456.789
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;