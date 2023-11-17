import React from "react";
import Particles from "./components/particles";
import HomeTitle from "@/app/components/home-title";
import CursorLink from "@/app/components/cursor-link";

const navigation = [
  { name: "Projects", href: "/projects" },
  // { name: "Photography", href: "https://photography.ohevan.com" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-8 sm:my-16 animate-fade-in">
        <div className="flex flex-row items-center justify-center gap-5">
          {navigation.map((item) => (
            <CursorLink
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </CursorLink>
          ))}
        </div>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <HomeTitle className="select-none text-center z-10 text-5xl text-transparent duration-700 bg-white cursor-default animate-title text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        evannotfound
      </HomeTitle>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="hidden sm:block my-16 text-center animate-fade-in">
        <h2 className="px-8 text-sm text-zinc-500 select-none">
          Hi, my name is <span className={"font-bold"}>Evan Luo</span>. I'm a
          frontend developer and I love web dev and design.
          <div className={"mt-1"}>
            I'm a student currently studying in{" "}
            <span className={"underline underline-offset-1"}>Montreal</span>.
          </div>
        </h2>
      </div>
      <div
        id={"mobile desc"}
        className="block sm:hidden my-8 text-center animate-fade-in"
      >
        <h2 className="px-8 text-sm text-zinc-500 ">
          Hi, my name is <span className={"font-bold"}>Jiashao Luo</span>. I'm a
          frontend developer.
          <div className={"mt-2"}>
            A 16y/o high school student in{" "}
            <span className={"underline underline-offset-1"}>Montreal</span>.
          </div>
        </h2>
      </div>
    </div>
  );
}
