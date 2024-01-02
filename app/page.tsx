import Image from "next/image";
import { Navbar } from "@/components/Navbar/index";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className=" bg-pink-500 h-screen flex flex-col  ">
      <div className=" w-full h-[50px] px-4 flex justify-between items-center border-b border-pink-600">
        <Navbar />
        <Button variant="outline">Buy Now</Button>
      </div>
      <div>
        <Header />
      </div>
    </main>
  );
}
