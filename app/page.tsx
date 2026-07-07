import Image from "next/image";
import { NavBar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-950 font-sans dark:bg-zinc-950">
      <NavBar/>
    </div>
  );
}
