import React from "react";
import Image from "next/image";
import KYC from "@/components/assets/kyc.jpeg";
const Header = () => {
  return (
    <div className=" w-full h-[500px] flex justify-around">
      <div className="flex justify-center items-center text-lg">
        The most memeable memecoin in existence. <br /> The dogs have had their
        day, <br />
        it’s time for Pepe to take reign.
      </div>
      <div className="flex justify-center items-center">
        <Image src={KYC} width={500} height={500} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default Header;
