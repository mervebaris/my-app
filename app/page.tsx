import Image from "next/image";
import { Navbar } from "@/components/Navbar/index";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="h-screen flex flex-col  ">
      <div className=" w-full h-[60px] px-4 flex justify-between items-center z-24">
        <Navbar />
        <Button variant="outline">Buy Now</Button>
      </div>
      <div>
        <Header />
      </div>
      <div className="colored1 "></div>
      <div className="colored2 "></div>
    </main>
  );
}
