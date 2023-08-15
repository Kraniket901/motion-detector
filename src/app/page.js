import Image from "next/image";
import Top from "./Top";
import Medium from "./Medium";
import Bottom from "./Bottom";

export default function Home() {
  return (
    <>
    <div className="bg-[#313638] h-screen">
    <Top/>
    <Medium/>
    <Bottom/>
    </div>
    </>
  );
}
