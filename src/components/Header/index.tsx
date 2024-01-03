import React from "react";
import Image from "next/image";
import CASPER from "@/components/assets/casper.png";
import UNI from "@/components/assets/uni.png";
import PANCAKE from "@/components/assets/pancake.png";
import BI from "@/components/assets/biswap.png";

const Header = () => {
  return (
    <div className=" w-full h-[500px] flex justify-around">
      <div className="w-1/2 px-30  flex flex-col gap-3 justify-center items-center text-xl font-semibold z-24 text-[#fdf0fc] tracking-wide leading-10">
        Step into a world full of smiles! <br/>Giggly Token is the perfect combination of fun and humor. <br/>It aims to create joy not only in the<br/> crypto world but also in daily life.
        <div className="flex gap-10 justify-start p-2">
          <div className="bg-[#dccff9]/90 rounded-full">
            <Image
             className="object-fill  "
              src={UNI}
              width={45}
              height={45}
              alt="uniswap"
            />
          </div>
          <div >
            <Image
              src={BI}
              width={45}
              height={45}
              alt="biswap"
            />
          </div>
          <div >
            <Image
              src={PANCAKE}
              width={45}
              height={45}
              alt="pancake"
            />
          </div>
          <div >
            <Image
              src={UNI}
              width={45}
              height={45}
              alt="honorswap"
            />
          </div>
        
         
        </div>
      </div>

      <div className="w-1/2  px-15 flex justify-center items-center">
        <Image
          src={CASPER}
          width={500}
          height={500}
          alt="Honor"
        />
      </div>
    </div>
  );
};

export default Header;
