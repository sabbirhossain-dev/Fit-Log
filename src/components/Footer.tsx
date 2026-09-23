import React from "react";
import footerLogo from "@/assets/footer-logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <section className="border-t border-gray-700">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 py-5 md:py-8 lg:py-10 ">
          <div className="flex justify-center items-center gap-1">
            <Image
              src={footerLogo}
              alt="footer logo"
              width={100}
              height={100}
              className="h-6 w-6"
            ></Image>
            <p className="font-bold text-[14px] text-[#ffffff]">FITLOG</p>
          </div>
          <p className="font-normal text-[12px] text-[#6B7280]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
