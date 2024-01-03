import Image from "next/image";
import { Navbar } from "@/components/Navbar/index";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import About from "@/components/About";
export default function Home() {
  return (
    <main className="w-full h-full flex flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 ">
      <div className=" w-full h-[60px] px-4 flex justify-between items-center z-24">
        <Navbar />
        <Button variant="outline">Buy Now</Button>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
    </main>
  );
}


