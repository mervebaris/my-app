import React from "react";
import Image from "next/image";
import KYC from "@/components/assets/kyc.jpeg";
import UNI from "@/components/assets/uni.png";

const Header = () => {
  return (
    <div className=" w-full h-[500px] flex justify-around">
      <div className="flex flex-col gap-4 justify-center items-center text-lg">
        The most memeable memecoin in existence. <br /> The dogs have had their
        day, <br />
        it’s time for Pepe to take reign.
        <div className="flex gap-5">
          <div className="bg-gray-300/60 rounded-full">
            <Image
              src={UNI}
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div className="bg-gray-300/60 rounded-full">
            <Image
              src={UNI}
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div className="bg-gray-300/60 rounded-full">
            <Image
              src={UNI}
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div className="bg-gray-300/60 rounded-full">
            <Image
              src={UNI}
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div className="bg-gray-300/60 rounded-full">
            <Image
              src={UNI}
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image src={KYC} width={500} height={500} alt="Picture of the author" />
        d
      </div>
    </div>
  );
};

export default Header;
